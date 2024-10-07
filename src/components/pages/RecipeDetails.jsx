import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropagateLoader from "react-spinners/PropagateLoader";
import Footer from "./Footer";
import Header from "./Header";

// State Variables
const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // Loads Recipe details when the page loads
  useEffect(() => {
    fetchRecipeDetails();
  }, []);

  // Fetch Recipe details
  const fetchRecipeDetails = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.ok) {
        throw new Error("Error fetching recipe details!");
      }
      const data = await response.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      toast.error("Error fetching recipe details!");
    } finally {
      setLoading(false);
    }
  };

  // Create ingredients array
  const ingredients = [];
  if (recipe) {
    for (let i = 1; i <= 20; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }
  }
  // Loading state
  if (loading) {
    return (
      <div className="text-center text-xl h-screen">
        <PropagateLoader color="#808080" loading={loading} size={20} />
      </div>
    );
  }

  if (!recipe) {
    return <p className="text-center text-xl h-screen">No recipe found.</p>;
  }

  return (
    <>
      <Header />
      <div className="min-h-screen text-[#1e1e1f] dark:text-[#e5e7eb] px-4 py-6">
        {/* Recipe Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          {recipe.strMeal}
        </h1>

        {/* Recipe Image */}
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 rounded-md block object-cover"
        />

        {/* Ingredients */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          {recipe.strInstructions
            .split(".")
            .filter(Boolean)
            .map((step, index) => (
              <p key={index}>
                {index + 1}. {step.trim()}
              </p>
            ))}
        </div>

        {/* YouTube Video */}
        {recipe.strYoutube && (
          <div className="mt-8">
            <h2 className="text-2xl mb-4 font-bold">Watch Video</h2>
            <iframe
              className="w-full h-[30rem]"
              src={`https://www.youtube.com/embed/${
                recipe.strYoutube.split("v=")[1]
              }`}
              title={recipe.strMeal}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Recipe Full Detail */}
        <div className="mt-8">
          <a
            href={recipe.strSource}
            className="text-[#1e1e1f] dark:text-[#e5e7eb] underline "
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Full Recipe
          </a>
        </div>

        {/* Back to Home Link */}
        <Link
          to="/home"
          className="mt-8 inline-block text-[#1e1e1f] dark:text-[#e5e7eb] underline"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetails;