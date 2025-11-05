import React, { useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "Zohaib Akhter",
        email: "zohaib@example.com",
        role: "Patient",
        age: 22,
        gender: "Male",
        profileImg:
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        coverImg:
            "https://images.unsplash.com/photo-1606813902794-7f1e0cc5b76e?auto=format&fit=crop&w=1200&q=60",
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Cover Image */}
            <div
                className="w-full h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url('/images/profile-cover.jpg')` }}
            >
                <div className="absolute inset-0"></div>

                {/* Profile Image */}
                <div className="absolute left-1/2 -bottom-16 transform -translate-x-1/2">
                    <img
                        src={user.profileImg}
                        alt="User"
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                </div>
            </div>

            {/* User Info Section */}
            <div className="pt-24 pb-10 px-6 text-center">
                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                <p className="text-gray-500 text-lg">{user.email}</p>

                {/* Edit Button */}
                <button
                    onClick={() => {
                        setFormData(user);
                        setIsEditing(true);
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
                >
                    Edit Profile
                </button>

                {/* Info Cards */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto">
                    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-1/3">
                        <p className="text-gray-500 text-sm">Role</p>
                        <p className="text-lg font-semibold text-blue-700">{user.role}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-1/3">
                        <p className="text-gray-500 text-sm">Age</p>
                        <p className="text-lg font-semibold text-green-600">{user.age}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-1/3">
                        <p className="text-gray-500 text-sm">Gender</p>
                        <p className="text-lg font-semibold text-pink-600">{user.gender}</p>
                    </div>
                </div>

                <div className="mt-10 text-gray-600 max-w-2xl mx-auto">
                    <p>
                        Welcome to your profile! You can view and manage your account
                        details here. Keep your information updated to get the best
                        experience.
                    </p>
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-lg relative">
                        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
                            Edit Profile
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1">Role</label>
                                    <select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                    >
                                        <option>Patient</option>
                                        <option>Doctor</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-gray-700 mb-1">Age</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Profile Image URL
                                </label>
                                <input
                                    type="text"
                                    name="profileImg"
                                    value={formData.profileImg}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-1">
                                    Cover Image URL
                                </label>
                                <input
                                    type="text"
                                    name="coverImg"
                                    value={formData.coverImg}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-5 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-medium"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
