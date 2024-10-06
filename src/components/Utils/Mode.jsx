import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons for the toggle

const Mode = () => {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to check local storage and apply dark mode if it's set
  useEffect(() => {
    const storedMode = localStorage.getItem('dark-mode');
    if (storedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark'); // Apply dark mode
    }
  }, []);

  // Toggle dark mode
  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
    const newMode = !isDarkMode;

    // Update local storage
    localStorage.setItem('dark-mode', newMode);
    if (newMode) {
      document.documentElement.classList.add('dark'); // Add dark class
    } else {
      document.documentElement.classList.remove('dark'); // Remove dark class
    }
  };

  return (
    <button onClick={toggleMode} className="p-2">
      {isDarkMode ? <FaSun className="text-gray-200" /> : <FaMoon className="text-gray-900" />}
    </button>
  );
};

export default Mode;
