import React, { useState } from "react";

const DoctorProfile = () => {
  const [user, setUser] = useState({
    name: "Dr. Zohaib Akhter",
    email: "dr.zohaib@example.com",
    role: "Doctor",
    specialization: "Cardiologist",
    experience: "5 years",
    hospital: "CityCare Medical Center",
    availability: "Mon - Fri, 10AM - 4PM",
    age: 32,
    gender: "Male",
    profileImg: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    coverImg:
      "https://images.unsplash.com/photo-1580281657521-6a56a6f5a1f0?auto=format&fit=crop&w=1200&q=60",
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
    <div className="min-h-[650px] bg-gray-100 flex flex-col items-center">
      {/* Cover Image */}
      <div
        className="w-full h-56 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url('/images/profile-cover.jpg')` }}
      >
        <div className="flex flex-col items-end absolute top-40">
          <img
            src={user.profileImg}
            alt="Doctor"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-15">
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          {user.name}
        </h1>
        <p className="text-black">{user.email}</p>
      </div>

      <div className="w-full max-w-4xl text-center mt-10 px-6">

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Specialization</p>
            <p className="text-lg font-semibold text-blue-700">
              {user.specialization}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Experience</p>
            <p className="text-lg font-semibold text-green-600">
              {user.experience}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Hospital</p>
            <p className="text-lg font-semibold text-pink-600">
              {user.hospital}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Age</p>
            <p className="text-lg font-semibold text-gray-800">{user.age}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="text-lg font-semibold text-gray-800">
              {user.gender}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Availability</p>
            <p className="text-lg font-semibold text-gray-800">
              {user.availability}
            </p>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DoctorProfile;
