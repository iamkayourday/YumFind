import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState(""); 

  // Handle changes in the input field
  const handleChange = (e) => {
    setSearch(e.target.value); 
  };

  // Function to execute when the search button is clicked
  const handleSearch = () => {
    onSearch(search);
    setSearch(""); 
  };

  // Handle the search when "Enter" key is pressed just like clcikcing on submit button
  const handleEnter = (e) => {
    if (e.key === "Enter") {
        handleSearch(); 
    }
  };

  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={search}
          onChange={handleChange} 
          onKeyDown={handleEnter} 
          className="p-2 pl-10 w-full bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
          placeholder="Search for a recipe..."
        />
        <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button
        onClick={handleSearch} 
        className="ml-4 p-2 bg-[#21412F] text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
