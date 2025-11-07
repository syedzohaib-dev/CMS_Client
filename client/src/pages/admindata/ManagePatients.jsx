import React, { useState } from "react";
import { FaUserInjured, FaEdit, FaTrashAlt, FaCalendarAlt } from "react-icons/fa";

const ManagePatients = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Ali Khan",
      age: 29,
      gender: "Male",
      disease: "Fever",
      doctor: "Dr. Ahsan Khan",
      time: "10:00 AM",
      date: "2025-11-07",
      status: "Checked",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 25,
      gender: "Female",
      disease: "Allergy",
      doctor: "Dr. Mehwish Ali",
      time: "11:30 AM",
      date: "2025-11-07",
      status: "Pending",
    },
    {
      id: 3,
      name: "Bilal Raza",
      age: 40,
      gender: "Male",
      disease: "Migraine",
      doctor: "Dr. Bilal Ahmed",
      time: "1:15 PM",
      date: "2025-11-07",
      status: "Checked",
    },
  ]);

  const handleDelete = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit patient with ID: ${id}`);
  };

  const todayDate = new Date().toISOString().split("T")[0];
  const todayPatients = patients.filter((p) => p.date === todayDate);

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
        <FaUserInjured className="text-blue-700" /> Today's Patients
      </h2>

      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 overflow-x-auto">
        {todayPatients.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No patients have appointments today.
          </p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 text-blue-700 text-left">
                <th className="p-3">#</th>
                <th className="p-3">Name</th>
                <th className="p-3">Age</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Disease</th>
                <th className="p-3">Doctor</th>
                <th className="p-3">Time</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {todayPatients.map((p, index) => (
                <tr
                  key={p.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 text-gray-700">{index + 1}</td>
                  <td className="p-3 font-semibold text-gray-800">{p.name}</td>
                  <td className="p-3 text-gray-600">{p.age}</td>
                  <td className="p-3 text-gray-600">{p.gender}</td>
                  <td className="p-3 text-gray-600">{p.disease}</td>
                  <td className="p-3 text-gray-600">{p.doctor}</td>
                  <td className="p-3 text-gray-600 flex items-center gap-1">
                    <FaCalendarAlt className="text-blue-500" /> {p.time}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${p.status === "Checked"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  {/* <td className="px-3 py-6 text-right flex justify-end gap-3">
                    <button
                      onClick={() => handleEdit(p.id)}
                      className="text-blue-600 hover:text-blue-800 text-xl transition"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="text-red-600 hover:text-red-800 text-xl transition"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManagePatients;
