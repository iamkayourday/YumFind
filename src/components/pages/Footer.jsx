import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-[#21412F] text-white py-6 mt-auto">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">
              YumFind <span className="text-sm">By Abdulbasit</span>
            </h2>
            <p className="text-sm">
              Your one-stop solution for discovering delicious recipes!
            </p>
          </div>

          <div className="flex space-x-4 cursor-pointer">
            <a target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-lg hover:text-gray-400" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-lg hover:text-gray-400" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-lg hover:text-gray-400" />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-lg hover:text-gray-400" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YumFinds.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;