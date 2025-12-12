import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Sun = ({ className }: any) => <span className={className}>☀️</span>;
const Moon = ({ className }: any) => <span className={className}>🌙</span>;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/50 dark:bg-gray-900/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-300">Dhruv Patel</h1>

      <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>

      <button
        onClick={toggleTheme}
        className="hidden md:flex p-2 rounded-full border dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
      </button>

      <button className="md:hidden text-3xl dark:text-white" onClick={() => setOpen(!open)}>☰</button>

      {open && (
        <div className="absolute top-16 right-6 bg-white dark:bg-gray-800 shadow-md border dark:border-gray-700 rounded-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
            <li>
              <button
                onClick={() => { toggleTheme(); setOpen(false); }}
                className="flex items-center gap-2"
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
