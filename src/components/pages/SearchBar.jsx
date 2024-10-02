import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  // State to hold the input value for the search
  const [search, setSearch] = useState(""); 

  // Handle changes in the input field
  const handleChange = (e) => {
    setSearch(e.target.value); 
  };

  // Function to execute when the search button is clicked
  const handleSearch = () => {
    onSearch(search); // Call the parent function with the current search term
    setSearch(""); // Clear the input field after searching
  };

  // Handle the search when "Enter" key is pressed jsut like clcikcing on submit button
  const handleEnter = (e) => {
    if (e.key === "Enter") {
        handleSearch(); // Call the handleSearch function when "Enter" is pressed
    }
  };

  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={search}
          onChange={handleChange} // Update the search state on input change
          onKeyDown={handleEnter} // Listen for "Enter" key press
          className="p-2 pl-10 w-full bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
          placeholder="Search for a recipe..."
        />
        <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button
        onClick={handleSearch} // Trigger search on button click
        className="ml-4 p-2 bg-[#21412F] text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
