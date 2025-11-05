import React from 'react'

const View = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-2 text-center">Welcome, Zohaib 👋</h1>
            <p className="text-gray-600 mb-8 text-center">
                Manage your appointments, records, and profile easily from here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Appointments</h3>
                    <p className="text-blue-600 text-2xl font-bold mt-2">5</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Doctor Notes</h3>
                    <p className="text-green-600 text-2xl font-bold mt-2">3</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-xl text-center  hover:shadow-lg transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-gray-700">Visits</h3>
                    <p className="text-yellow-600 text-2xl font-bold mt-2">12</p>
                </div>
            </div>
        </div>
    )
}

export default View