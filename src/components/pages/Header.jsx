import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu toggle
import Mode from "../Utils/Mode";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up when component unmounts
    };
  }, [menuOpen]);

  return (
    <div className="dark:bg-[#1e1e1f] dark:border-b dark:border-gray-200 w-full h-14 bg-[#e5e7eb] border-b-2 border-[#1e1e1f] sticky top-0 z-20 flex items-center justify-between px-4">
      
      {/* Hamburger Menu Icon (visible on all devices) */}
      <div>
        <button onClick={toggleMenu} className="text-[#1e1e1f] dark:text-[#e5e7eb] text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Logo in the center */}
      <div className="flex-grow flex justify-center">
        <Link className="text-[#1e1e1f] dark:text-[#e5e7eb] text-2xl font-bold" to='/home'>
          YumFind
        </Link>
      </div>

      {/* Dark Mode Toggle on the right */}
      <div className="flex">
        <Mode />
      </div>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#e5e7eb] dark:bg-[#1e1e1f] z-30 transform ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out w-2/3 sm:w-1/2 md:w-1/4`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl text-[#1e1e1f] dark:text-[#e5e7eb]"
        >
          <FaTimes />
        </button>
        
        {/* Menu Links */}
        <ul className="flex flex-col items-center mt-10 ">
        <li className="p-2">
            <Link
              className="text-[#1e1e1f] dark:text-[#e5e7eb] font-bold text-lg hover:text-[#343a40] dark:hover:text-[#6c757d]"
              to="/home"
              onClick={toggleMenu} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="text-[#1e1e1f] dark:text-[#e5e7eb] font-bold text-lg hover:text-[#343a40] dark:hover:text-[#6c757d]"
              to="/aboutUs"
              onClick={toggleMenu} // Close menu on click
            >
              About Us
            </Link>
          </li>
          <li className="p-2">
            <Link
              className="text-[#1e1e1f] dark:text-[#e5e7eb] font-bold text-lg hover:text-[#343a40] dark:hover:text-[#6c757d]"
              to="/favorites"
              onClick={toggleMenu} // Close menu on click
            >
              Favorites
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
