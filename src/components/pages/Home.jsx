import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import Footer from "./Footer";

const Home = () => {
  // State variables
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");

  // Fetch recipes and retrieve stored username when page loads
  useEffect(() => {
    fetchRecipes(); // Fetch recipes from the API
    const storedUsername = localStorage.getItem("username"); 
    if (storedUsername) {
      setUsername(storedUsername); 
    }
  }, []);

  // Fetch recipes from the API
  const fetchRecipes = async () => {
    setLoading(true); // Set loading to true while fetching
    setError(null); // Reset error state
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      if (!response.ok) {
        throw new Error("Failed to fetch recipes. Please try again later."); 
      }
      const data = await response.json(); 
      if (!data.meals) {
        throw new Error("No recipes found"); 
      }
      setRecipes(data.meals); 
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false); 
    }
  };

  // Function to handle search term input
  const handleSearch = (term) => {
    setSearchTerm(term); 
  };

  // Filter recipes based on the search term
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      // // Remove this line of codes later
      // recipe.strCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      // recipe.strArea.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to greet users 
  const getGreeting = () => {
    const currentHour = new Date().getHours(); 
    if (currentHour < 12) {
      return "Good Morning"; 
    } else if (currentHour < 18) {
      return "Good Afternoon"; 
    } else {
      return "Good Evening"; 
    }
  };

  return (
    <div className="container mx-auto py-8 text-black">
      <h1 className="text-center text-[#21412F] text-4xl font-bold mb-6">
        Finding time to cook can be hard. Finding a recipe shouldn’t be.
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      </div>

      {/* Welcome message */}
      <h1 className="text-2xl px-4">
        Welcome, <span className="text-[#21412F] font-bold">{username}</span>
      </h1>

      {/* Greeting message */}
      <h2 className="mb-2 text-lg px-4">{getGreeting()}!</h2>

      {/* Loading and Error Handling */}
      {loading ? (
        <div className="text-center text-xl h-screen">
          <PropagateLoader
            color="#21412F"
            loading={loading}
            size="20px"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : error ? (
        <p className="text-center text-xl text-red-600 h-screen">{error}</p>
      ) : (
        <>
          {/* Recipe List */}
          {!filteredRecipes.length ? (
            <p className="text-center text-xl h-screen">
              No matches for "{searchTerm}". Check spelling or try a different
              search!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.idMeal} className="rounded-lg shadow-md">
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-48 object-cover mt-4"
                  />
                  <div className="p-4 bg-[#D9D9D9]">
                    <Link to={`/recipe/${recipe.idMeal}`}>
                      <h2 className="text-xl text-[#21412F] font-semibold mb-2">
                        {recipe.strMeal}
                      </h2>
                    </Link>
                    <p className="text-gray-700">
                      Category: {recipe.strCategory}
                    </p>
                    <p className="text-gray-700">Region: {recipe.strArea}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Home;