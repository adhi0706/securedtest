import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center h-8 w-8 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#12D576] ${
        darkMode 
          ? "bg-white dark:bg-[#1e3255] hover:bg-[#2c4a7d] text-[#12D576] focus:ring-offset-secondary" 
          : "bg-gray-100 hover:bg-gray-200 text-[#001938] focus:ring-offset-primary"
      }`}
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <FiMoon className="h-4 w-4" />
      ) : (
        <FiSun className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
