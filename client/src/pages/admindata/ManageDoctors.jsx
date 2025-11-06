import React, { useState } from "react";
import { FaUserMd, FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageDoctors = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        specialization: "",
        degree: "",
        experience: "",
        age: "",
        gender: "",
        availableDays: "",
        availableTime: "",
        profilePhoto: "",
    });

    const [doctors, setDoctors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        setDoctors([...doctors, { ...formData, id: Date.now() }]);
        setFormData({
            name: "",
            email: "",
            password: "",
            specialization: "",
            degree: "",
            experience: "",
            age: "",
            gender: "",
            availableDays: "",
            availableTime: "",
            profilePhoto: "",
        });
    };

    const handleDelete = (id) => {
        setDoctors(doctors.filter((doc) => doc.id !== id));
    };

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
                Manage Doctors
            </h2>

            {/* Add Doctor Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl p-8 space-y-6 border border-gray-100"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Doctor Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Specialization
                        </label>
                        <input
                            type="text"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Degree
                        </label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Experience
                        </label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Age</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Gender
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Available Days
                        </label>
                        <input
                            type="text"
                            name="availableDays"
                            value={formData.availableDays}
                            onChange={handleChange}
                            placeholder="e.g. Mon - Fri"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">
                            Available Time
                        </label>
                        <input
                            type="text"
                            name="availableTime"
                            value={formData.availableTime}
                            onChange={handleChange}
                            placeholder="e.g. 10 AM - 4 PM"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-1 font-medium">
                            Profile Photo URL
                        </label>
                        <input
                            type="text"
                            name="profilePhoto"
                            value={formData.profilePhoto}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 w-full py-2 rounded-lg transition-all shadow-md"
                    >
                        Add Doctor
                    </button>
                </div>
            </form>

            {/* Doctor List */}
            <div className="mt-12  mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                    Registered Doctors
                </h3>

                {doctors.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">
                        No doctors added yet.
                    </p>
                ) : (
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-blue-50 text-blue-700 text-left">
                                <th className="p-3">Photo</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Specialization</th>
                                <th className="p-3">Experience</th>
                                <th className="p-3">Available</th>
                                <th className="p-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((doc) => (
                                <tr
                                    key={doc.id}
                                    className="border-t hover:bg-gray-50 transition-all"
                                >
                                    <td className="p-3">
                                        <img
                                            src={
                                                doc.profilePhoto ||
                                                "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                                            }
                                            alt={doc.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="p-3 font-semibold text-gray-800">
                                        {doc.name}
                                    </td>
                                    <td className="p-3 text-gray-600">{doc.specialization}</td>
                                    <td className="p-3 text-gray-600">{doc.experience}</td>
                                    <td className="p-3 text-gray-600">
                                        {doc.availableDays} <br /> {doc.availableTime}
                                    </td>
                                    <td className="p-3 text-right flex justify-end gap-3">
                                        <button
                                            className="text-blue-600 hover:text-blue-800 text-xl transition"
                                            title="Edit"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(doc.id)}
                                            className="text-red-600 hover:text-red-800 text-xl transition"
                                            title="Delete"
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default ManageDoctors;
