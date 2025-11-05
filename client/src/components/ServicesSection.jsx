import React from "react";
import { FaHeartbeat, FaUserMd, FaFlask, FaAmbulance, FaStethoscope, FaHospital } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "General Checkup",
    description: "Comprehensive health checkups to keep you in the best shape.",
    icon: <FaStethoscope className="text-blue-500 text-4xl mb-3" />,
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert heart care from our experienced cardiologists.",
    icon: <FaHeartbeat className="text-blue-500 text-4xl mb-3" />,
  },
  {
    id: 3,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency medical services for your safety.",
    icon: <FaAmbulance className="text-blue-500 text-4xl mb-3" />,
  },
  {
    id: 4,
    title: "Laboratory Tests",
    description: "Accurate lab diagnostics with quick report delivery.",
    icon: <FaFlask className="text-blue-500 text-4xl mb-3" />,
  },
  {
    id: 5,
    title: "Specialist Consultation",
    description: "Consult with top medical specialists for all your needs.",
    icon: <FaUserMd className="text-blue-500 text-4xl mb-3" />,
  },
  {
    id: 6,
    title: "In-Patient Facility",
    description: "Comfortable rooms and professional in-patient care.",
    icon: <FaHospital className="text-blue-500 text-4xl mb-3" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Our <span className="text-blue-600">Services</span>
        </h2>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 hover:bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 text-center border border-gray-100"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
