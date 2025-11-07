import React, { useState } from "react";
import { FaUserMd, FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageDoctors = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingDoctorId, setEditingDoctorId] = useState(null);

    // ✅ Form data ka structure fix rakha gaya hai (no undefined values)
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

    // ✅ Controlled input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // ✅ Submit button ke liye — dono case handle karta hai (Add or Edit)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            // Edit Doctor (PUT)
            setDoctors((prev) =>
                prev.map((doc) =>
                    doc.id === editingDoctorId ? { ...formData, id: editingDoctorId } : doc
                )
            );
            setIsEditing(false);
            setEditingDoctorId(null);
        } else {
            // Add Doctor (POST)
            setDoctors([...doctors, { ...formData, id: Date.now() }]);
        }

        // ✅ Reset form after submit
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

    // ✅ Delete doctor
    const handleDelete = (id) => {
        setDoctors(doctors.filter((doc) => doc.id !== id));
    };

    // ✅ Edit doctor — form prefill ho jata hai purani value se
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
            availableDays: doctor.availableDays || "",
            availableTime: doctor.availableTime || "",
            profilePhoto: doctor.profilePhoto || "",
        });
        setIsEditing(true);
        setEditingDoctorId(doctor.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
                {isEditing ? "Edit Doctor Details" : "Add New Doctor"}
            </h2>

            {/* Add / Edit Doctor Form */}
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-xl p-8 space-y-6 border border-gray-100"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Doctor Name */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Doctor Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2  focus:outline-blue-500"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password || ""}
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
                            value={formData.specialization || ""}
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
                            value={formData.degree || ""}
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
                            value={formData.experience || ""}
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
                            value={formData.age || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender || ""}
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Available Days */}
                    <div>
                        <label className="block text-gray-700 mb-1 font-medium">Available Days</label>
                        <input
                            type="text"
                            name="availableDays"
                            value={formData.availableDays || ""}
                            onChange={handleChange}
                            placeholder="e.g. Mon - Fri"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                        />
                    </div>

                    {/* Available Time */}
                    <div className="flex">
                        <div className="w-[50%] ">
                            <label className="block text-gray-700 mb-1 font-medium">Start Time</label>
                            <input
                                type="text"
                                name="availableTime"
                                value={formData.availableTime || ""}
                                onChange={handleChange}
                                placeholder="e.g. 10 AM"
                                className="w-[90%] border rounded-lg px-3 py-2 focus:outline-blue-500"
                            />
                        </div>
                        <div className="w-[50%] ">
                            <label className="block text-gray-700 mb-1 font-medium">End Time</label>
                            <input
                                type="text"
                                name="availableTime"
                                value={formData.availableTime || ""}
                                onChange={handleChange}
                                placeholder="e.g. 4 PM"
                                className="w-[90%] border rounded-lg px-3 py-2 focus:outline-blue-500"
                            />
                        </div>
                    </div>



                    {/* Profile Photo */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-1 font-medium">Profile Photo URL</label>
                        <input
                            type="text"
                            name="profilePhoto"
                            value={formData.profilePhoto || ""}
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
            <div className="mt-12 mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Registered Doctors</h3>

                {doctors.length === 0 ? (
                    <p className="text-gray-500 text-center py-10">No doctors added yet.</p>
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
                                <tr key={doc.id} className="border-b hover:bg-gray-50 transition-all">
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
                                    <td className="p-3 font-semibold text-gray-800">{doc.name}</td>
                                    <td className="p-3 text-gray-600">{doc.specialization}</td>
                                    <td className="p-3 text-gray-600">{doc.experience}</td>
                                    <td className="p-3 text-gray-600">
                                        {doc.availableDays} <br /> {doc.availableTime}
                                    </td>
                                    <td className="px-3 py-6 text-right flex justify-end gap-3">
                                        <button
                                            onClick={() => handleEdit(doc)} // ✅ fixed here
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
