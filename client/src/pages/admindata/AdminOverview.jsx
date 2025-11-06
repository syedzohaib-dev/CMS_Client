import React from "react";
import {
  FaUserMd,
  FaUsers,
  FaDoorOpen,
  FaCalendarAlt,
  FaChartPie,
} from "react-icons/fa";

const AdminOverview = () => {
  const stats = [
    {
      title: "Total Doctors",
      value: 18,
      icon: <FaUserMd className="text-blue-600 text-3xl" />,
      color: "bg-blue-100",
    },
    {
      title: "Total Patients",
      value: 245,
      icon: <FaUsers className="text-green-600 text-3xl" />,
      color: "bg-green-100",
    },
    {
      title: "Active Rooms",
      value: 4,
      icon: <FaDoorOpen className="text-yellow-600 text-3xl" />,
      color: "bg-yellow-100",
    },
    {
      title: "Appointments Today",
      value: 34,
      icon: <FaCalendarAlt className="text-pink-600 text-3xl" />,
      color: "bg-pink-100",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-[600px]">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-700">
          Welcome, Admin 👋
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Here's an overview of your hospital's current activity and statistics.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex items-center justify-between shadow-md hover:shadow-lg transition ${item.color}`}
          >
            <div>
              <h3 className="text-gray-700 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {item.value}
              </p>
            </div>
            <div className="p-3 bg-white rounded-full shadow-sm">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Analytics Section */}
      {/* <div className="bg-white rounded-xl shadow-md mt-10 p-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-blue-700">
            Monthly Performance Overview
          </h2>
          <FaChartPie className="text-blue-600 text-3xl" />
        </div>

        <div className="h-64 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-gray-500 text-lg">
          <p>Analytics chart will appear here (Doctors, Patients, Appointments)</p>
        </div>
      </div> */}
    </div>
  );
};

export default AdminOverview;
