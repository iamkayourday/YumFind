import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Fetch favorites from local storage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  return (
    <>
      <Header className="h-screen"/>
      <div className="container mx-auto py-8">
        <h1 className="text-center text-[#21412F] text-4xl font-bold mb-6">
          Your Favorite Recipes
        </h1>

        {/* Favorite Recipes List */}
        {favorites.length === 0 ? (
          <p className="text-center text-xl h-screen">You have no favorite recipes yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
            {favorites.map((recipe) => (
              <div key={recipe.idMeal} className="rounded-lg shadow-md border-solid border-[#21412F] border-2">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4 bg-[#D9D9D9] rounded-lg">
                  <Link to={`/recipe/${recipe.idMeal}`}>
                    <h2 className="text-xl text-[#21412F] font-semibold mb-2">
                      {recipe.strMeal}
                    </h2>
                  </Link>
                  <p className="text-gray-700">Category: {recipe.strCategory}</p>
                  <p className="text-gray-700">Region: {recipe.strArea}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Favorites;
