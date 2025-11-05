import { useState } from "react";
import BookAppointmentForm from "../patientdata/BookAppointmentForm.jsx";
import Sidebar from "../../components/layout/Sidebar";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";
import View from "../patientdata/View.jsx";
import MedicalRecord from "../patientdata/MedicalRecord.jsx";
import UserProfile from "../patientdata/UserProfile.jsx";
import { Outlet } from "react-router-dom";



const DoctorDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        role="patient"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSectionChange={setActiveSection}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md flex items-center justify-end px-6 py-4">
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
              <span className="text-gray-500 text-xs sm:text-sm">Patient</span>
            </div>

            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </div>
        </header>

        <main className="bg-gray-50 min-h-screen overflow-y-scroll">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;