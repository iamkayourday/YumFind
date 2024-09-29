# YumFind

## Overview
YumFind is a frontend project designed to help users search for recipes based on dish names. The app allows users to explore various recipes and view detailed information, including ingredients, measures, preparation instructions, an embedded youtube video so users can learn how to cook the recipe and a link to the full detail of the recipe.

## Features
- **Recipe Search**: Users can search for recipes by dish name.
- **Home**: Display a list of recipes with images, titles, categories, and regions.
- **Recipe Details View**: Clicking on a recipe reveals detailed information, including:
  - Full ingredient list
  - Step-by-step preparation instructions
  - An embedded YouTube video (if available)
  - A link to the full recipe on TheMealDB website
- **Responsive Design**: The app is fully responsive and provides a great user experience on both desktop and mobile devices.
- **Error Handling**: User-friendly messages are displayed for network issues and empty search results.

## Technologies Used

- **Frontend:**
  
- Formik
- React
- React Hooks
- React Icons
- React Router
- React Spinners
- React Toastify
- Tailwind CSS
- TheMealDB API
- Yup

  ## API

The application utilizes [TheMealDB API](https://www.themealdb.com/api.php) to fetch meal data. The primary endpoints used include:
- **Recipe List:** `https://www.themealdb.com/api/json/v1/1/search.php?s=`
- **Recipe Details:** `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Installation

To run the YumFind application locally, follow these steps:

1. **Clone the repository:**
   bash

   git clone (https://github.com/iamkayourday/YumFind.git)
   cd YumFind
   npm install
   `npm start or npm run dev`

**Usage**
Upon loading the application, you will see a search bar where you can enter the name of a recipe or an ingredient.
As you type, the application will display relevant recipes.
Click on a recipe to view detailed information, including ingredients and cooking instructions.
You can navigate back to the home page to search for more recipes.

**Contributors**
Abdulbasit kayode Imam