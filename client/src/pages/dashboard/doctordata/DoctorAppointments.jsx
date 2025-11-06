import React from "react";
import {
  FaUser,
  FaClock,
  FaNotesMedical,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const DoctorAppointments = () => {
  const appointments = [
    {
      id: 1,
      patient: "Ali Khan",
      department: "Cardiology",
      time: "10:30 AM",
      doctorNotes: "Follow-up on blood pressure medication.",
      status: "Completed",
    },
    {
      id: 2,
      patient: "Sara Malik",
      department: "Dermatology",
      time: "12:00 PM",
      doctorNotes: "Skin allergy check-up.",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Bilal Ahmed",
      department: "Neurology",
      time: "2:30 PM",
      doctorNotes: "Migraine evaluation and medication review.",
      status: "Ongoing",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Ongoing":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-8 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Today’s Appointments
      </h2>

      {appointments.length === 0 ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="bg-white p-10 rounded-xl shadow-md text-center max-w-md w-full">
            <FaNotesMedical className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No Appointments Today
            </h3>
            <p className="text-gray-500">
              You don’t have any scheduled appointments for today.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {appointments.map((appt) => (
            <div
              key={appt.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6 min-h-[270px] flex flex-col justify-between"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 border-b pb-3 mb-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaUser className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {appt.patient}
                    </h3>
                    <p className="text-sm text-gray-500">{appt.department}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaClock className="text-blue-600" />
                    <span className="font-medium">Time:</span> {appt.time}
                  </p>

                  <p className="flex items-center gap-2">
                    <FaNotesMedical className="text-green-600" />
                    <span className="font-medium">Notes:</span>{" "}
                    {appt.doctorNotes}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-2 border-t">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    appt.status
                  )}`}
                >
                  {appt.status}
                </span>

                <div className="flex gap-2">
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <FaNotesMedical /> View
                  </button>

                  {appt.status === "Pending" ? (
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                      <FaCheckCircle /> Done
                    </button>
                  ) : (
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                      <FaTimesCircle /> Cancel
                    </button>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorAppointments;
