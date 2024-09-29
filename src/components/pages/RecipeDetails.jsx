import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import PropagateLoader from "react-spinners/PropagateLoader"; // Add loading spinner

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
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setRecipe(data.meals[0]);
    } catch (error) {
      toast.error("Error fetching recipe details!");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  if (loading) {
    return (
      <div className="text-center text-xl h-screen">
        <PropagateLoader color="#21412F" loading={loading} size={20} />
      </div>
    );
  }

  if (!recipe) {
    return <p className="text-center text-xl h-screen">No recipe found.</p>;
  }

  return (
    <div className="min-h-screen text-[#21412F] px-4 py-6">
      {/* Recipe Title */}
      <h1 className="text-4xl font-bold text-center mb-6">{recipe.strMeal}</h1>

      {/* Recipe Image */}
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 rounded-md block object-cover"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ingredients List */}
        <div>
          <h2 className="text-2xl mb-4">Ingredients</h2>
          <ul className="list-disc pl-5 block">
            {Array.from({ length: 20 }, (_, index) => {
              const ingredient = recipe[`strIngredient${index + 1}`];
              const measure = recipe[`strMeasure${index + 1}`];
              return ingredient ? (
                <li key={index} className="mb-2">
                  {`${ingredient} - ${measure}`}
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>

      {/* Recipe Instructions */}
      <h2 className="text-2xl mt-8 mb-4">Instructions</h2>
      <p>{recipe.strInstructions}</p>

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
          className="text-[#21412F] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Full Recipe
        </a>
      </div>

      {/* Back to Home Link */}
      <Link to="/home" className="mt-8 inline-block text-[#21412F] underline">
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetails;