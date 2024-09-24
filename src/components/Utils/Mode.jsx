import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Mode = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="mb-6">
      {darkMode ? (
        <FaSun className="text-white" size={24} />
      ) : (
        <FaMoon className="text-black" size={24} />
      )}
    </button>
  );
};

export default Mode;
