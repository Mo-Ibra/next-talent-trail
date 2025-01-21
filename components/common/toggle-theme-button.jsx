"use client";
import React from "react";

import { useTheme } from "@/context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleThemeButton = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 flex items-center justify-center z-50 w-12 h-12 rounded-full bg-orange-200 dark:bg-orange-800 shadow-lg"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-orange-400 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-800 w-6 h-6" />
      )}
    </button>
  );
};

export default ToggleThemeButton;