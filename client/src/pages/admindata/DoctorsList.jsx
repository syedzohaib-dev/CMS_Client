import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const DoctorsList = ({ doctors, handleEdit, handleDelete }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 py-4 sm:p-6">
            {doctors.map((doc) => (
                <div
                    key={doc._id}
                    className="bg-white shadow-lg rounded-2xl p-5 border border-gray-100 hover:shadow-xl transition-all duration-200 overflow-hidden"
                >
                    {/* Doctor Info */}
                    <div className="flex flex-wrap items-center gap-4">
                        <img
                            src={
                                doc?.profileImgURL ||
                                "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                            }
                            alt={doc.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-blue-100 shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                            <h2 className="text-lg font-bold text-gray-800 wrap-break-word">
                                Dr. {doc.name}
                            </h2>
                            <p className="text-sm text-blue-600 wrap-break-word">
                                {doc.specialization}
                            </p>
                            <p className="text-sm text-gray-500 wrap-break-word">{doc.degree}</p>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="mt-4 text-sm text-gray-600 space-y-1">
                        <p className="wrap-break-word">
                            <span className="font-semibold text-gray-700">Experience:</span>{" "}
                            {doc.experience}
                        </p>
                        <p className="wrap-break-word">
                            <span className="font-semibold text-gray-700">Availability:</span>{" "}
                            {Array.isArray(doc.availableDays)
                                ? doc.availableDays.join(", ")
                                : doc.availableDays}
                        </p>
                        <p className="wrap-break-word">
                            <span className="font-semibold text-gray-700">Time:</span>{" "}
                            {doc.startTime} <b>to</b> {doc.endTime}
                        </p>
                        <p className="wrap-break-word">
                            <span className="font-semibold text-gray-700">Gender:</span>{" "}
                            {doc.gender}
                        </p>
                        <p className="wrap-break-word">
                            <span className="font-semibold text-gray-700">Age:</span> {doc.age}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between sm:justify-end flex-wrap gap-3 mt-5 w-full">
                        <button
                            onClick={() => handleEdit(doc)}
                            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 text-sm transition"
                        >
                            <FaEdit /> Edit
                        </button>
                        <button
                            onClick={() => handleDelete(doc._id)}
                            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-red-100 text-red-700 px-3 py-2 rounded-lg hover:bg-red-200 text-sm transition"
                        >
                            <FaTrashAlt /> Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DoctorsList;
