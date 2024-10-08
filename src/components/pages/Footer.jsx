import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer className="bg-[#e5e7eb] text-[#1e1e1f] dark:bg-[#1e1e1f] dark:text-[#e5e7eb] py-6 mt-10 border-t-2 border-[#1e1e1f] dark:border-[#e5e7eb]">
      <div className="container mx-auto px-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">
              YumFind <span className="text-xl">By Abdulbasit</span>
            </h2>
            <p className="text-sm">
              Your one-stop solution for discovering delicious recipes!
            </p>
          </div>

          <div className="flex space-x-4 cursor-pointer">
            <a
              target="_blank"
              href="https://github.com/iamkayourday"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg hover:text-gray-400" />
            </a>
            <a
              target="_blank"
              href=" https://x.com/Abdulbasit54344"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-lg hover:text-gray-400" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/abdulbasitimam"
              rel="noopener noreferrer"
            >
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