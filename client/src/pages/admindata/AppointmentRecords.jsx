import React from "react";
import { FaCalendarAlt, FaUserMd, FaUser, FaClock } from "react-icons/fa";

const AppointmentRecords = () => {
  // Static sample data (baad me backend se aayega)
  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Zohaib Akhter",
      patientName: "Ali Raza",
      problem: "Fever and headache",
      date: "2025-11-04",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: 2,
      doctorName: "Dr. Sarah Khan",
      patientName: "Hassan Ahmed",
      problem: "Chest pain",
      date: "2025-11-04",
      time: "11:15 AM",
      status: "Completed",
    },
    {
      id: 3,
      doctorName: "Dr. Zohaib Akhter",
      patientName: "Fatima Noor",
      problem: "Migraine",
      date: "2025-11-04",
      time: "12:00 PM",
      status: "Pending",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8 flex items-center justify-center gap-2">
        <FaCalendarAlt className="text-blue-700" /> Today's Appointments
      </h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No appointments scheduled today.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {appointments.map((a) => (
            <div
              key={a.id}
              className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-blue-700">
                  Appointment #{a.id}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    a.status
                  )}`}
                >
                  {a.status}
                </span>
              </div>

              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <FaUserMd className="text-blue-600" />
                  <span>
                    <strong>Doctor:</strong> {a.doctorName}
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <FaUser className="text-green-600" />
                  <span>
                    <strong>Patient:</strong> {a.patientName}
                  </span>
                </p>

                <p>
                  <strong>Problem:</strong> {a.problem}
                </p>

                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-purple-600" />
                  <span>
                    <strong>Date:</strong> {a.date}
                  </span>
                </p>

                <p className="flex items-center gap-2">
                  <FaClock className="text-pink-600" />
                  <span>
                    <strong>Time:</strong> {a.time}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppointmentRecords;
