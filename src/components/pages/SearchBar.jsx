import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term) {
      onSearch(term); 
      setTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a recipe..."
          className="p-2 pl-10 w-full bg-[#d7d7d7] text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e1e1f]"
        />
        <FaSearch className="absolute left-3 top-2/4 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button type="submit" className="ml-4 p-2 bg-[#1e1e1f] dark:bg-[#e5e7eb] text-white dark:text-[#1e1e1f] rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
