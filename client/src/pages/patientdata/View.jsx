import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { API_PATHS, BASE_URL } from '../../utils/apiPath';
import axios from 'axios';
import toast from 'react-hot-toast';

const View = () => {
    const [patientOverview, setPatientOverview] = useState()

    const fetchPatientStats = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get(`${BASE_URL}${API_PATHS.PATIENT.GET_STATS}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setPatientOverview(res.data.data);
            console.log(res?.data?.data)
        } catch (error) {
            console.error("Fetch Patient Stats Error:", error);
            toast.error(error.response?.data?.message || "Failed to fetch patient stats");
            return { totalAppointments: 0, doctorNotes: 0, completedVisits: 0 };
        }
    };

    useEffect(() => {
        fetchPatientStats()
    }, [])

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Welcome, Zohaib 👋</h1>
            <p className="text-gray-600 mb-8 text-center">
                Manage your appointments, records, and profile easily from here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Appointments</h3>
                    <p className="text-blue-600 text-2xl font-bold mt-2">{patientOverview?.totalAppointments}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Doctor Notes</h3>
                    <p className="text-green-600 text-2xl font-bold mt-2">{patientOverview?.doctorNotes}</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Visits</h3>
                    <p className="text-yellow-600 text-2xl font-bold mt-2">{patientOverview?.completedVisits}</p>
                </div>
            </div>
        </div>
    )
}

export default View