import { useState } from "react";
import BookAppointmentForm from "../patientdata/BookAppointmentForm.jsx";
import Sidebar from "../../components/layout/Sidebar";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";
import View from "../patientdata/View.jsx";
import MedicalRecord from "../patientdata/MedicalRecord.jsx";
import UserProfile from "../patientdata/UserProfile.jsx";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_PATHS, BASE_URL } from "../../utils/apiPath.js";
import axios from "axios";
import toast from "react-hot-toast";



const PatientDashboard = ({ role }) => {

  const [patientData, setPatientData] = useState([])

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("book");

  const fetchPatientData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized! Please login again.");
        return null;
      }

      const res = await axios.get(`${BASE_URL}${API_PATHS.PATIENT.GET_DATA}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setPatientData(res.data.patient)
      console.log(res?.data?.patient)

    } catch (error) {
      console.error("Fetch Patient Data Error:", error);
      toast.error(error.response?.data?.message || "Failed to fetch patient data");
      return null;
    }
  };

  useEffect(() => {
    fetchPatientData()
  }, [])



  const renderContent = () => {
    switch (activeSection) {
      case '/dashboard/patient':
        return <View />
      case "/dashboard/patient/bookappointment":
        return <BookAppointmentForm />;
      case "/dashboard/patient/records":
        return (
          <MedicalRecord />
        );
      case "/dashboard/patient/profile":
        return (
          <UserProfile patientData={patientData} />
        );
      default:
        return null;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  }

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
                {patientData.name}
              </span>
              <span className="text-gray-500 text-xs sm:text-sm">{role}</span>
            </div>

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiibOngFYog5Ri5UoFKH3CsHMOvomBLf4JAw&s"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <button type="button" className="bg-blue-700 py-2 px-3 rounded-md text-white font-bold" onClick={handleLogout}> Logout</button>
          </div>

        </header>

        <main className="bg-gray-50 min-h-screen overflow-y-scroll">
          {/* {renderContent()} */}
          <Outlet context={{ patientData }} />
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;