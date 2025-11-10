import React, { useState } from "react";
import { FaUserInjured, FaEdit, FaTrashAlt, FaCalendarAlt } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";


const ManagePatients = () => {
  const { allUser } = useOutletContext()

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center flex items-center justify-center gap-2">
        <FaUserInjured className="text-blue-700" /> Today's Patients
      </h2>

      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 overflow-x-auto">
        {allUser?.length === 0 ? (
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
                <th className="p-3">Role</th>
                <th className="p-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {allUser?.map((p, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 text-gray-700">{index + 1}</td>
                  <td className="p-3 font-semibold text-gray-800">{p.name}</td>
                  <td className="p-3 text-gray-600">{p.age}</td>
                  <td className="p-3 text-gray-600">{p.gender}</td>
                  <td className="p-3 text-gray-600">{p.role}</td>
                  <td className="p-3 text-gray-600">{p.email}</td>F
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
