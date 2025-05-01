import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black/90 lg:rounded-full px-6 py-4 mx-auto max-w-7xl mt-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Left: Logo / Main Links */}
        <div className="flex items-center space-x-4">
          {/* Mobile Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-white md:hidden text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-red-400 hover:text-red-500 transition font-semibold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition font-semibold"
            >
              About
            </a>
            <a
              href="#service"
              className="text-white hover:text-gray-300 transition font-semibold"
            >
              Service
            </a>
          </div>
        </div>

        {/* Middle: Profile */}
        <div className="flex items-center space-x-2">
          <div className="bg-red-500 rounded-full p-2 text-white font-bold shadow-lg">
            <span>S</span>
          </div>
          <span className="text-white font-semibold">Sandra</span>
        </div>

        {/* Right: Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a
            href="#resume"
            className="text-white hover:text-gray-300 transition font-semibold"
          >
            Resume
          </a>
          <a
            href="#project"
            className="text-white hover:text-gray-300 transition font-semibold"
          >
            Project
          </a>
          <a
            href="#contact"
            className="text-white hover:text-gray-300 transition font-semibold"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-start gap-4 px-2 mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <a
          href="#home"
          className="text-red-400 hover:text-red-500 transition font-semibold"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-gray-300 transition font-semibold"
        >
          About
        </a>
        <a
          href="#service"
          className="text-white hover:text-gray-300 transition font-semibold"
        >
          Service
        </a>
        <a
          href="#resume"
          className="text-white hover:text-gray-300 transition font-semibold"
        >
          Resume
        </a>
        <a
          href="#project"
          className="text-white hover:text-gray-300 transition font-semibold"
        >
          Project
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-300 transition font-semibold"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
