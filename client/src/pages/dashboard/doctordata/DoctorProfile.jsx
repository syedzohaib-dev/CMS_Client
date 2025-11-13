import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const DoctorProfile = () => {

  const { singleDoctor } = useOutletContext()

  return (
    <div className="min-h-[650px] bg-gray-100 flex flex-col items-center">
      <div
        className="w-full h-56 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url('/images/profile-cover.jpg')` }}
      >
        <div className="flex flex-col items-end absolute top-40">
          <img
            src={singleDoctor?.profileImgURL}
            alt="Doctor"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mb-3"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-15">
        <h1 className="text-3xl font-bold text-black drop-shadow-lg">
          {singleDoctor?.name}
        </h1>
        <p className="text-black">{singleDoctor?.email}</p>
      </div>

      <div className="w-full max-w-4xl text-center mt-10 px-6">

        <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Specialization</p>
            <p className="text-lg font-semibold text-blue-700">
              {singleDoctor?.specialization}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Experience</p>
            <p className="text-lg font-semibold text-green-600">
              {singleDoctor?.experience}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Hospital</p>
            <p className="text-lg font-semibold text-pink-600">
              MediConnect
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Age</p>
            <p className="text-lg font-semibold text-gray-800">{singleDoctor?.age}</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full sm:w-60">
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="text-lg font-semibold text-gray-800">
              {singleDoctor?.gender}
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-5 w-full  mb-3">
            <p className="text-gray-500 text-sm">Availability</p>

            {singleDoctor?.availableDays.map((p, index) => (
              < span className="text-lg font-semibold text-gray-800 mx-1">
                {p}
              </span>
            ))}
          </div>
        </div>


      </div>
    </div >
  );
};

export default DoctorProfile;
