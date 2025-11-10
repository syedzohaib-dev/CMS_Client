import React, { useState, useEffect } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { API_PATHS, BASE_URL } from "../../utils/apiPath";
import axios from "axios";
import toast from "react-hot-toast";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import DoctorsList from "./DoctorsList.jsx";

const ManageDoctors = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingDoctorId, setEditingDoctorId] = useState(null);
    const [doctors, setDoctors] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        specialization: "",
        degree: "",
        experience: "",
        age: "",
        gender: "",
        availableDays: [],
        startTime: "",
        endTime: "",
        profileImgURL: "",
    });

    const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const handleCheckboxChange = (day) => {
        setFormData((prev) => {
            const updatedDays = prev.availableDays.includes(day)
                ? prev.availableDays.filter((d) => d !== day)
                : [...prev.availableDays, day];
            return { ...prev, availableDays: updatedDays };
        });
    };

    const handleTimeChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Unauthorized! Please login again.");
            return;
        }

        try {
            if (isEditing) {
                await axios.put(
                    `${BASE_URL}${API_PATHS.ADMIN.UPDATE_DOCTOR(editingDoctorId)}`,
                    formData,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                toast.success("Doctor updated successfully!");
            } else {
                await axios.post(`${BASE_URL}${API_PATHS.ADMIN.ADD_DOCTOR}`, formData, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                toast.success("Doctor added successfully!");
            }

            fetchDoctors();
            setFormData({
                name: "",
                email: "",
                password: "",
                specialization: "",
                degree: "",
                experience: "",
                age: "",
                gender: "",
                availableDays: [],
                startTime: "",
                endTime: "",
                profileImgURL: "",
            });
            setIsEditing(false);
            setEditingDoctorId(null);
        } catch (error) {
            console.error("Doctor save error:", error);
            toast.error(error.response?.data?.message || "Failed to save doctor");
        }
    };

    const fetchDoctors = async () => {
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const res = await axios.get(`${BASE_URL}${API_PATHS.ADMIN.GET_DOCTORS}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log("Doctor data ", res?.data?.doctors)
            setDoctors(res.data.doctors || []);
        } catch (err) {
            console.error("Fetch doctors error:", err);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this doctor?")) return;
        const token = localStorage.getItem("token");
        try {
            await axios.delete(`${BASE_URL}${API_PATHS.ADMIN.DELETE_DOCTOR(id)}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            toast.success("Doctor deleted successfully!");
            fetchDoctors();
        } catch (err) {
            console.error("Delete doctor error:", err);
            toast.error("Failed to delete doctor");
        }
    };

    const handleEdit = (doctor) => {
        setFormData({
            name: doctor.name || "",
            email: doctor.email || "",
            password: doctor.password || "",
            specialization: doctor.specialization || "",
            degree: doctor.degree || "",
            experience: doctor.experience || "",
            age: doctor.age || "",
            gender: doctor.gender || "",
            availableDays: doctor.availableDays || [],
            startTime: doctor.startTime || "",
            endTime: doctor.endTime || "",
            profileImgURL: doctor.profileImgURL || "",
        });
        setIsEditing(true);
        setEditingDoctorId(doctor._id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="py-8 px-2 min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
                {isEditing ? "Edit Doctor Details" : "Add New Doctor"}
            </h2>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Doctor Name */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Doctor Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Specialization */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Specialization</label>
                        <input
                            type="text"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Degree */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Experience</label>
                        <input
                            type="text"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Age */}
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

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    {/* Available Days */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2 font-medium">Available Days</label>
                        <div className="flex flex-wrap gap-3">
                            {allDays.map((day) => (
                                <label key={day} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.availableDays.includes(day)}
                                        onChange={() => handleCheckboxChange(day)}
                                        className="w-4 h-4 text-blue-600 border-gray-300"
                                    />
                                    <span className="text-gray-700">{day}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Time Pickers */}
                    <div className="md:col-span-2 flex gap-6">
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">Start Time</label>
                            <TimePicker
                                onChange={(val) => handleTimeChange("startTime", val)}
                                value={formData.startTime}
                                disableClock={true}
                                clearIcon={null}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1 font-medium">End Time</label>
                            <TimePicker
                                onChange={(val) => handleTimeChange("endTime", val)}
                                value={formData.endTime}
                                disableClock={true}
                                clearIcon={null}
                            />
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-1 font-medium">Profile Photo URL</label>
                        <input
                            type="text"
                            name="profileImgURL"
                            value={formData.profileImgURL}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
                    >
                        {isEditing ? "Update Doctor" : "Add Doctor"}
                    </button>
                </div>
            </form>

            {/* Doctor List */}
            <div className="mt-12 bg-white rounded-xl shadow-md p-6 border">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Registered Doctors</h3>
                {doctors.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">No doctors added yet.</p>
                ) : (
                    // <table className="w-full border-collapse">
                    //     <thead>
                    //         <tr className="bg-blue-50 text-blue-700 text-left">
                    //             <th className="p-3">Photo</th>
                    //             <th className="p-3">Name</th>
                    //             <th className="p-3">Specialization</th>
                    //             <th className="p-3">Experience</th>
                    //             <th className="p-3">Availability</th>
                    //             <th className="p-3 text-right">Actions</th>
                    //         </tr>
                    //     </thead>
                    //     <tbody>
                    //         {doctors.map((doc) => (
                    //             <tr key={doc._id} className="border-b hover:bg-gray-50 transition-all">
                    //                 <td className="p-3">
                    //                     <img
                    //                         src={
                    //                             doc?.profileImgURL ||
                    //                             "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
                    //                         }
                    //                         alt={doc.name}
                    //                         className="w-12 h-12 rounded-full object-cover"
                    //                     />
                    //                 </td>
                    //                 <td className="p-3 font-semibold text-gray-800">Dr. {doc.name}</td>
                    //                 <td className="p-3 text-gray-600">{doc.specialization}</td>
                    //                 <td className="p-3 text-gray-600">{doc.experience}</td>
                    //                 <td className="p-3 text-gray-600">
                    //                     {Array.isArray(doc.availableDays)
                    //                         ? doc.availableDays.join(", ")
                    //                         : doc.availableDays}{" "}
                    //                     <br />
                    //                     {doc.startTime} <b>to</b> {doc.endTime}
                    //                 </td>
                    //                 <td className="px-3 py-6 text-right flex justify-end gap-3">
                    //                     <button
                    //                         onClick={() => handleEdit(doc)}
                    //                         className="text-blue-600 hover:text-blue-800 text-xl transition"
                    //                         title="Edit"
                    //                     >
                    //                         <FaEdit />
                    //                     </button>
                    //                     <button
                    //                         onClick={() => handleDelete(doc._id)}
                    //                         className="text-red-600 hover:text-red-800 text-xl transition"
                    //                         title="Delete"
                    //                     >
                    //                         <FaTrashAlt />
                    //                     </button>
                    //                 </td>
                    //             </tr>
                    //         ))}
                    //     </tbody>
                    // </table>

                    <DoctorsList
                        doctors={doctors}
                        handleEdit={(doc) => console.log("Edit", doc)}
                        handleDelete={(id) => console.log("Delete", id)}
                    />

                )}
            </div>
        </div>
    );
};

export default ManageDoctors;
