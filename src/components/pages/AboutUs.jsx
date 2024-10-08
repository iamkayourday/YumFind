import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <div className="container mx-auto py-12 px-4 md:px-8 text-center">
          
          {/* Main Heading */}
          <h1 className="text-4xl font-bold text-[#1e1e1f] mb-8 dark:text-white">
            About YumFind
          </h1>

          {/* Intro Section */}
          <p className="text-left dark:text-white text-lg leading-relaxed text-gray-700 mb-8 max-w-3xl mx-auto">
            YumFind is a revolutionary recipe discovery platform designed to
            simplify cooking and inspire culinary exploration. Our mission is to
            provide users with an intuitive and personalized cooking experience,
            making meal planning and preparation effortless.
          </p>

          {/* Mission Section */}
          <h2 className="text-3xl font-bold text-[#1e1e1f] dark:text-[#e5e7eb] mb-4">
            Our Mission
          </h2>
          <p className="text-left dark:text-[#e5e7eb] text-lg text-[#1e1e1f] mb-6 max-w-2xl mx-auto">
            We aim to make cooking more enjoyable and accessible through
            easy-to-follow recipes, user-friendly search, and a curated
            selection of meals.
          </p>

          {/* Steps Section */}
          <h3 className="text-2xl font-semibold text-[#1e1e1f] mb-4 dark:text-[#e5e7eb]">
            How It Works
          </h3>
          <ol className="text-left list-decimal list-inside space-y-3 text-[#1e1e1f] dark:text-[#e5e7eb] max-w-3xl mx-auto">
            <li>
              <span className="font-bold text-[#1e1e1f] dark:text-[#e5e7eb]">
                Sign In:
              </span>
              Access our vast recipe library by signing in with your
              credentials.
            </li>
            <li>
              <span className="font-bold text-[#1e1e1f] dark:text-[#e5e7eb]">
                Explore Recipes:
              </span>
              Discover 25 curated default recipes, carefully selected for your
              culinary delight.
            </li>
            <li>
              <span className="font-bold text-[#1e1e1f] dark:text-[#e5e7eb]">
                Search:
              </span>
              Type your desired recipe name, ingredient, or cuisine in the
              search bar to find what you need.
            </li>
            <li>
              <span className="font-bold text-[#1e1e1f] dark:text-[#e5e7eb]">
                Browse:
              </span>
              Explore relevant recipe matches from our extensive API-powered
              database.
            </li>
            <li>
              <span className="font-bold text-[#1e1e1f] dark:text-[#e5e7eb]">
                Details:
              </span>
              View ingredients, instructions, cooking time, and nutritional
              information for each recipe.
            </li>
          </ol>

          {/* Getting Started Section */}
          <h3 className="text-2xl font-semibold text-[#1e1e1f] dark:text-[#e5e7eb] mb-4 mt-8">
            Getting Started
          </h3>
          <ul className="text-left  list-disc list-inside space-y-2 text-[#1e1e1f] dark:text-[#e5e7eb] max-w-3xl mx-auto">
            <li>Browse the default recipes on the home page.</li>
            <li>Use the search bar to find specific recipes by name.</li>
            <li>
              Click on a recipe to view the details, including ingredients and
              cooking instructions.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;