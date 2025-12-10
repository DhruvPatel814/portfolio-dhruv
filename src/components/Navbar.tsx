import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/50 backdrop-blur-md shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-600">Dhruv Patel</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-indigo-600">About</a></li>
        <li><a href="#projects" className="hover:text-indigo-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 bg-white shadow-md border rounded-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><a onClick={() => setOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setOpen(false)} href="#projects">Projects</a></li>
            <li><a onClick={() => setOpen(false)} href="#skills">Skills</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
