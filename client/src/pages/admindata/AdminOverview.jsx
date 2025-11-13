import React, { useEffect, useState } from "react";
import {
  FaUserMd,
  FaUsers,
  FaDoorOpen,
  FaCalendarAlt,
  FaChartPie,
  FaUser,
} from "react-icons/fa";
import axios from "axios";
import { BASE_URL, API_PATHS } from "../../utils/apiPath.js";


const AdminOverview = () => {
  const [stats, setStats] = useState([])
  useEffect(() => {
    const fetchOverview = async () => {
      try {

        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}${API_PATHS.ADMIN.OVERVIEW}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res?.data?.data)
      } catch (err) {
        console.error("Error loading dashboard:", err);
      }
    };
    fetchOverview();
  }, []);


  return (
    <div className="p-8 bg-gray-50 min-h-[600px]">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, Admin 👋
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Here's an overview of your hospital's current activity and statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {
          <div
            className={`rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition bg-blue-200`}
          >
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                Today Appointment
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {stats.todayAppointments}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              <FaCalendarAlt />
            </div>
          </div>
        }



        {
          <div
            className={`rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition bg-green-200`}
          >
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                Total Doctor
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {stats.totalDoctors}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              <FaChartPie />
            </div>
          </div>
        }




        {
          <div
            className={`rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition bg-red-200`}
          >
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                Total Patients
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {stats.totalPatients}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              <FaUser />
            </div>
          </div>
        }




        {
          <div
            className={`rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition bg-yellow-200`}
          >
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                Total Rooms
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {stats.totalRooms}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">
              <FaDoorOpen />
            </div>
          </div>
        }


      </div>
    </div>
  );
};

export default AdminOverview;
