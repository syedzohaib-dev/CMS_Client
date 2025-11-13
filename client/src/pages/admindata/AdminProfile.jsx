import React, { useState } from "react";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: "Syed Zohaib Akhter",
    email: "admin@healthportal.com",
    role: "Admin",
    department: "Hospital Management",
    experience: "3 years",
    contact: "+92 300 1234567",
    age: 28,
    gender: "Male",
    profileImg: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    coverImg:
      "https://images.unsplash.com/photo-1581093588401-22e1b0e9b896?auto=format&fit=crop&w=1200&q=60",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(admin);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAdmin(formData);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="w-full h-56 bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${admin.coverImg})` }}
      >
        <div className="bg-black/40 w-full h-full flex justify-center items-center">
          <h1 className="text-white text-3xl font-semibold">Admin Profile</h1>
        </div>
      </div>

      <div className="flex flex-col items-center -mt-16 px-6">
        <img
          src={admin.profileImg}
          alt="Admin"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
        />
        <h2 className="text-2xl font-bold mt-4 text-gray-800">
          {admin.name}
        </h2>
        <p className="text-gray-500 text-lg">{admin.email}</p>

        <button
          onClick={() => {
            setFormData(admin);
            setIsEditing(true);
          }}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
        >
          Edit Profile
        </button>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl w-full">
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Role</p>
            <p className="text-lg font-semibold text-blue-700">{admin.role}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Department</p>
            <p className="text-lg font-semibold text-green-600">{admin.department}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Experience</p>
            <p className="text-lg font-semibold text-pink-600">{admin.experience}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Contact</p>
            <p className="text-lg font-semibold text-gray-800">{admin.contact}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Age</p>
            <p className="text-lg font-semibold text-gray-800">{admin.age}</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="text-lg font-semibold text-gray-800">{admin.gender}</p>
          </div>
        </div>

       
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 max-w-lg">
            <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
              Edit Admin Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Experience</label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Contact</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
                  />
                </div>
                <div>
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
                <label className="block text-gray-700 mb-1">Cover Image URL</label>
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

export default AdminProfile;
