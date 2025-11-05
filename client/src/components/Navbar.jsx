import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4 relative">
      {/* Clinic Name */}
      <p className="text-2xl font-bold text-blue-600">MediConnect</p>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6">
        <Link
          to="/"
          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/about"
          className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
        >
          About
        </Link>
      </nav>

      {/* Right Side - Profile & Menu Button */}
      <div className="flex items-center gap-3">
        <span className="text-gray-700 font-medium hidden sm:block">
          Zohaib Akhter
        </span>
        <FaUserCircle className="text-3xl text-blue-600" />

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-blue-600 md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col items-center py-4 gap-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
