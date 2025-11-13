import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

;

const ImageSlider = ({ user }) => {

    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage: `url("/images/slider1.jpg")`,
                }}
            >

                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                        Your Health, Our Priority -{" "}
                        <span className="text-blue-400">Book An Appointment Today!</span>
                    </h1>

                    {user?.role === "patient" ? (
                        <Link
                            to="/dashboard/patient/bookappointment"
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
                        >
                            Book Appointment
                        </Link>
                    ) : user?.role === "doctor" ? (
                        <Link
                            to="/dashboard/doctor/overview"
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
                        >
                            View Schedule
                        </Link>
                    ) : user?.role === "admin" ? (
                        <Link
                            to="/dashboard/admin"
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
                        >
                            Go to Admin Panel
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all"
                        >
                            Login Required
                        </Link>
                    )}
                </div>
            </div>


        </section>
    );
};

export default ImageSlider;
