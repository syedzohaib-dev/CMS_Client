import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import toast from 'react-hot-toast'
import { API_PATHS, BASE_URL } from "../../utils/apiPath";


const DoctorDashboard = ({ role }) => {
  // const [doctorData, setDoctorData] = useState(null);
  const [singleDoctor, setSingleDoctor] = useState(null);
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }


  const fetchDoctor = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const res = await axios.get(`${BASE_URL}${API_PATHS.DOCTOR.PROFILE}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSingleDoctor(res.data.doctor);
      console.log(res?.data?.doctor)
    } catch (err) {
      console.error("Error fetching doctor:", err);
      toast.error("Failed to fetch doctor profile");
    }
  };
  useEffect(() => {
    fetchDoctor();
  }, []);

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
                {singleDoctor?.name}
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
          <Outlet context={{ singleDoctor }} />
        </main>
      </div>
    </div >
  );
};

export default DoctorDashboard;