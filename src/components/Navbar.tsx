import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">
        Dhruv Patel
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>

      {/* ================= Animated Theme Toggle (Desktop) ================= */}
      <div
        onClick={toggleTheme}
        className="hidden md:flex items-center cursor-pointer"
      >
        <div
          className={`
            w-14 h-7 flex items-center rounded-full px-1
            bg-gray-300 dark:bg-gray-700 transition-colors duration-300
            ${theme === "dark" ? "justify-end" : "justify-start"}
          `}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="w-5 h-5 rounded-full bg-white dark:bg-gray-900
                       flex items-center justify-center shadow-md"
          >
            {theme === "dark" ? (
              <span className="text-yellow-400 text-sm">☀️</span>
            ) : (
              <span className="text-sm">🌙</span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl dark:text-white"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-md border dark:border-gray-700 rounded-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>

            {/* ================= Animated Theme Toggle (Mobile) ================= */}
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  setOpen(false);
                }}
                className="flex items-center gap-3"
              >
                <div
                  className={`
                    w-12 h-6 flex items-center rounded-full px-1
                    bg-gray-300 dark:bg-gray-700 transition-colors duration-300
                    ${theme === "dark" ? "justify-end" : "justify-start"}
                  `}
                >
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-4 h-4 rounded-full bg-white dark:bg-gray-900
                               flex items-center justify-center shadow"
                  >
                    {theme === "dark" ? "☀️" : "🌙"}
                  </motion.div>
                </div>
                <span>
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
