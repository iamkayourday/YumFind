import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import Footer from "./Footer";
import Header from "./Header";
import { FaRegBookmark, FaBookmark } from "react-icons/fa"; // Importing React Icons
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // State variables
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [favorites, setFavorites] = useState([]); // State for favorites

  // Fetch recipes and retrieve stored username and favorites when the page loads
  useEffect(() => {
    fetchRecipes();
    const storedUsername = localStorage.getItem("username");
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ); // Load favorites from local storage
    if (storedUsername) {
      setUsername(storedUsername);
    }
    setFavorites(storedFavorites); // Initialize favorites state
  }, []);

  // Fetch recipes for search and default recipes from the API
  const fetchRecipes = async (term = "") => {
    setLoading(true);
    setError(null);
    try {
      let response;
      // Fetch recipes based on the search term
      if (term) {
        response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        );
        //  Fetch default recipe if term is not provided
      } else {
        response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
      }

      const data = await response.json();
      // Checks if meals were returned and throw an error if not
      if (!data.meals) {
        throw new Error(
          term
            ? `Oops, no recipe for "${term}" found. Check your spelling or find another recipe!`
            : "No default recipes found"
        );
      }
      setRecipes(data.meals);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle search term and fetch recipe when the search button is clicked
  const handleSearch = (term) => {
    fetchRecipes(term); // Fetch the provided search term
  };

  // Toggle favorite status
  const toggleFavorite = (recipe) => {
    const isFavorite = favorites.some((fav) => fav.idMeal === recipe.idMeal);
    const updatedFavorites = isFavorite
      ? favorites.filter((fav) => fav.idMeal !== recipe.idMeal) // Remove the recipe from favorite from favorites
      : [...favorites, recipe]; // Add the recipe to to favorites

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Sync with local storage

    // Show toast message
    const toastMessage = isFavorite
      ? `${recipe.strMeal} removed from favorites`
      : `${recipe.strMeal} added to favorites`;
    toast.success(toastMessage); // Display the toast notification
  };

  // Generate greeting message based on the current time
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-center text-[#1e1e1f] dark:text-[#e5e7eb] text-4xl font-bold mb-6">
          Finding time to cook can be hard. Finding a recipe shouldn’t be.
        </h1>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Welcome message */}
        <h1 className="text-2xl px-4 text-[#1e1e1f] dark:text-[#e5e7eb]">
          {getGreeting()}, <span className=" font-bold">{username}!</span>
        </h1>

        {/* Greeting message */}
        <h2 className="mb-2 px-4 text-xl text-[#1e1e1f] dark:text-[#e5e7eb]">
          {" "}
          What are you cooking today?
        </h2>

        {/* Loading and Error Handling */}
        {loading ? (
          <div className="text-center text-xl h-screen">
            <PropagateLoader
              color="#808080"
              loading={loading}
              size="20px"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : error ? (
          <p className="text-center text-xl text-red-600 h-screen">{error}</p>
        ) : (
          // Recipe list
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="relative rounded-lg shadow-md border-solid border-[#1e1e1f] dark:border-[#e5e7eb] border-2"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4 bg-[#eee] dark:bg-[#1e1e1f] rounded-lg">
                  <Link to={`/recipe/${recipe.idMeal}`}>
                    <h2 className="text-xl text-[#1e1e1f] dark:text-[#e5e7eb] font-semibold mb-2">
                      {recipe.strMeal}
                    </h2>
                  </Link>
                  <p className="text-[#1e1e1f] dark:text-[#e5e7eb]">
                    Category: {recipe.strCategory}
                  </p>
                  <p className="text-[#1e1e1f] dark:text-[#e5e7eb]">
                    Region: {recipe.strArea}
                  </p>
                </div>
                <span
                  onClick={() => toggleFavorite(recipe)}
                  className="absolute bottom-4 right-4 cursor-pointer text-2xl"
                >
                  {favorites.some((fav) => fav.idMeal === recipe.idMeal) ? (
                    <FaBookmark className="text-red-600" />
                  ) : (
                    <FaRegBookmark className="text-[#1e1e1f] dark:text-[#e5e7eb]" />
                  )}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;