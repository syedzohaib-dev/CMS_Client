import React from "react";
import { FaUserMd, FaClock, FaNotesMedical, FaUser } from "react-icons/fa";

const TodayPatientsList = () => {
  const patients = [
    {
      id: 1,
      name: "Ali Khan",
      age: 28,
      gender: "Male",
      department: "Cardiology",
      doctor: "Dr. Ahsan Khan",
      time: "10:30 AM",
      status: "Checked",
    },
    {
      id: 2,
      name: "Sara Malik",
      age: 24,
      gender: "Female",
      department: "Dermatology",
      doctor: "Dr. Mehwish Ali",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      name: "Bilal Ahmed",
      age: 35,
      gender: "Male",
      department: "Neurology",
      doctor: "Dr. Bilal Ahmed",
      time: "02:15 PM",
      status: "Ongoing",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Checked":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Today's Patients
      </h2>

      {patients.length === 0 ? (
        <div className="text-center text-gray-600 bg-white rounded-xl shadow-md p-10 max-w-md mx-auto">
          <FaUserMd className="text-blue-500 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">No Patients Today</h3>
          <p>There are no scheduled patients for today.</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="w-full text-left ">
            <thead>
              <tr className="bg-blue-50 text-blue-700">
                <th className="py-3 px-4 font-semibold">#</th>
                <th className="py-3 px-4 font-semibold flex items-center justify-center gap-2">
                  Patient
                </th>
                <th className="py-3 px-4 font-semibold">Age</th>
                <th className="py-3 px-4 font-semibold">Gender</th>
                <th className="py-3 px-4 font-semibold">Department</th>
                <th className="py-3 px-4 font-semibold flex  ">
                  Doctor
                </th>
                <th className="py-3 px-4 font-semibold ">
                  Time
                </th>
                <th className="py-3 px-4 font-semibold ">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p, index) => (
                <tr
                  key={p.id}
                  className="border-b my-5 hover:bg-gray-50 transition-all"
                >
                  <td className="py-3  px-4 text-gray-700 ">{index + 1}</td>
                  <td className="py-3  px-4 text-gray-800 font-medium">
                    {p.name}
                  </td>
                  <td className="py-3 px-4 text-gray-600">{p.age}</td>
                  <td className="py-3 px-4 text-gray-600">{p.gender}</td>
                  <td className="py-3 px-4 text-gray-600">{p.department}</td>
                  <td className="py-3 px-4 text-gray-600">{p.doctor}</td>
                  <td className="py-3 px-4 text-gray-600">{p.time}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TodayPatientsList;
