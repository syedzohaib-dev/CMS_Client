import React from "react";
import { FaUserInjured, FaCalendarCheck, FaNotesMedical, FaClock } from "react-icons/fa";
import { BASE_URL, API_PATHS } from "../../../utils/apiPath.js"
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import { useOutletContext } from "react-router-dom";

const DashboardOverview = () => {
    const { singleDoctor } = useOutletContext()


    const [stats, setStats] = useState({});

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${BASE_URL}${API_PATHS.DOCTOR.OVERVIEW}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setStats(res?.data?.data);

            } catch (err) {
                console.error("Error loading overview:", err);
            }
        };
        fetchOverview();
    }, []);

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-700">Hello, Dr. {singleDoctor?.name} 👋</h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Here's a quick overview of your clinic activity today.
                </p>
            </div>

            {/* Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Total Patients */}
                <div className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Total Patients</h3>
                            <p className="text-3xl font-bold text-blue-700 mt-2">{stats?.totalPatients}</p>
                        </div>
                        <FaUserInjured className="text-5xl text-blue-500 opacity-80" />
                    </div>
                </div>

                {/* Today's Appointments */}
                <div className="bg-green-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Today's Appointments</h3>
                            <p className="text-3xl font-bold text-green-700 mt-2">{stats?.todayAppointments}</p>
                        </div>
                        <FaCalendarCheck className="text-5xl text-green-500 opacity-80" />
                    </div>
                </div>

                {/* Pending Notes */}
                <div className="bg-yellow-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Pending Notes</h3>
                            <p className="text-3xl font-bold text-yellow-700 mt-2">{stats?.pendingNotes}</p>
                        </div>
                        <FaNotesMedical className="text-5xl text-yellow-500 opacity-80" />
                    </div>
                </div>

                {/* Available Hours */}
                <div className="bg-red-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-700">Available Hours</h3>
                            <p className="text-3xl font-bold text-red-700 mt-2">{stats?.availableHours}</p>
                        </div>
                        <FaClock className="text-5xl text-red-500 opacity-80" />
                    </div>
                </div>
            </div>

            {/* Summary / Note */}
            <div className="max-w-4xl mx-auto mt-12 bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-600">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">Daily Summary</h2>
                <p className="text-gray-600 leading-relaxed">
                    You have a busy day ahead! Make sure to check your appointment list and update your
                    consultation notes after each visit. Stay organized and keep providing excellent care
                    to your patients.
                </p>
            </div>
        </div>
    );
};

export default DashboardOverview;
