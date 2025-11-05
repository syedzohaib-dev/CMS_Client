import React from "react";
import { FaUserMd, FaCalendarAlt, FaClock, FaDoorOpen } from "react-icons/fa";

const MedicalRecord = () => {
    const records = [
        {
            id: 1,
            doctor: "Dr. Ahsan Khan",
            specialization: "Cardiology",
            date: "02 Nov 2025",
            time: "3:00 PM - 3:15 PM",
            room: "Room 1",
            status: "Completed",
        },
        {
            id: 2,
            doctor: "Dr. Sara Malik",
            specialization: "Dermatology",
            date: "29 Oct 2025",
            time: "1:30 PM - 1:45 PM",
            room: "Room 2",
            status: "Cancelled",
        },
        {
            id: 3,
            doctor: "Dr. Bilal Ahmed",
            specialization: "Neurology",
            date: "25 Oct 2025",
            time: "5:00 PM - 5:15 PM",
            room: "Room 3",
            status: "Completed",
        },
        {
            id: 4,
            doctor: "Dr. Mehwish Ali",
            specialization: "ENT Specialist",
            date: "18 Oct 2025",
            time: "7:15 PM - 7:30 PM",
            room: "Room 4",
            status: "Pending",
        },
    ];

    const bgColors = [
        "bg-blue-100",
        "bg-green-100",
        "bg-yellow-100",
        "bg-pink-100",
    ];

    return (
        <div className="p-8 min-h-screen bg-gray-50">
            <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
                Your Medical Records
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {records.map((record, index) => (
                    <div
                        key={record.id}
                        className={`${bgColors[index % bgColors.length]} rounded-2xl  shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-6`}
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="bg-white p-3 rounded-full shadow-sm">
                                <FaUserMd className="text-blue-600 text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {record.doctor}
                                </h3>
                                <p className="text-sm text-gray-600">{record.specialization}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-gray-700 mt-4">
                            <p className="flex items-center gap-2">
                                <FaCalendarAlt className="text-blue-600" />{" "}
                                <span className="font-medium">Date:</span> {record.date}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaClock className="text-green-600" />{" "}
                                <span className="font-medium">Time:</span> {record.time}
                            </p>

                            <p className="flex items-center gap-2">
                                <FaDoorOpen className="text-yellow-600" />{" "}
                                <span className="font-medium">Room:</span> {record.room}
                            </p>
                        </div>

                        <div className="mt-4">
                            <span
                                className={`px-4 py-1 rounded-full text-sm font-medium ${record.status === "Completed"
                                    ? "bg-green-500 text-white"
                                    : record.status === "Pending"
                                        ? "bg-yellow-400 text-gray-800"
                                        : "bg-red-400 text-white"
                                    }`}
                            >
                                {record.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicalRecord;
