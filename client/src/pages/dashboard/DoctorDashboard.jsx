import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";



const DoctorDashboard = ({ role }) => { 
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }



  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        role="doctor"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className={`bg-white shadow-md flex items-center justify-between md:justify-end px-6 py-4`}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-600 md:hidden focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
              <span className="text-gray-800 font-semibold text-sm sm:text-base">
                Zohaib Akhter
              </span>
              <span className="text-gray-500 text-xs sm:text-sm">{role}</span>
            </div>

            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <button type="button" onClick={handleLogout} className="bg-blue-700 py-2 px-3 rounded-md text-white font-bold">Logout</button>
          </div>
        </header>

        <main className="bg-gray-50 h-screen overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div >
  );
};

export default DoctorDashboard;