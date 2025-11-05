import React from "react";
import { Link } from "react-router-dom";

const doctors = [
    {
        id: 1,
        name: "Dr. Ayesha Khan",
        specialization: "Cardiologist",
        time: "09:00 AM - 1:00 PM",
        image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
    },
    {
        id: 2,
        name: "Dr. Bilal Ahmed",
        specialization: "Dermatologist",
        time: "02:00 PM - 6:00 PM",
        image:
            "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    },
    {
        id: 3,
        name: "Dr. Sara Malik",
        specialization: "Pediatrician",
        time: "10:00 AM - 4:00 PM",
        image:
            "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    },
];

const DoctorCategory = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center text-gray-800 ">
                    Our <span className="text-blue-600">Doctors</span>
                </h2>
                <p className="text-2xl text-center mb-10">Discover Our Premier Specialties</p>

                {/* Doctor Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {doctors.map((doctor) => (
                        <div
                            key={doctor.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                        >
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-56 object-cover"
                            />

                            <div className="p-5 text-center">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                                    {doctor.name}
                                </h3>
                                <p className="text-blue-500 font-medium">
                                    {doctor.specialization}
                                </p>
                                <p className="text-gray-500 mt-2 text-sm">
                                    🕒 Available: {doctor.time}
                                </p>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm transition-all">
                                    <Link to='/dashboard/patient'>Book Appointment</Link>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorCategory;
