import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing icons from react-icons

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-black flex items-center justify-center p-2 rounded"
      style={{ width: "40px", height: "40px" }} // Set fixed size for the button
    >
      {darkMode ? (
        <FaSun size={24} color="orange" /> // Sun icon for light mode
      ) : (
        <FaMoon size={24} color="gray" /> // Moon icon for dark mode
      )}
    </button>
  );
};

export default ThemeToggle;
