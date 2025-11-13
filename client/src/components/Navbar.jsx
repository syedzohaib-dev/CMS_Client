import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ user }) => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear('token');
    localStorage.clear('role')
    navigate('/login');
  }

  const token = localStorage.getItem('token')



  return (
    <header className="bg-white shadow-md flex items-center justify-between px-6 py-4 relative">
      <p className="text-2xl font-bold text-blue-600">MediConnect</p>

      <nav className="hidden md:flex gap-6">

      </nav>

      <div className="flex  items-center gap-3">
        <div className="text-center  w-[120px] h-[50px] flex flex-col">
          <span className="text-gray-700 font-medium  sm:block h-[29px]">
            {user?.name}
          </span>
          <span className="text-gray-700 text-sm w-full h-[20px]">{user?.role}</span>
        </div>
        <FaUserCircle className="text-3xl text-blue-600" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-blue-600 md:hidden focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {
          token ? (
            <button type="button" className="bg-blue-700 py-2 px-3 rounded-md text-white font-bold" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to='/login'>  <button type="button" className="bg-blue-700 py-2 px-3 rounded-md text-white font-bold">Login</button></Link>
          )
        }

      </div>

      {menuOpen && (
        <div className="absolute top-[72px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <nav className="flex flex-col items-center py-4 gap-4">

          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
