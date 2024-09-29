import React from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 pl-10 w-full bg-gray-100 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-900"
          placeholder="Search for a recipe..."
        />
        {/* Search Icon */}
        <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
