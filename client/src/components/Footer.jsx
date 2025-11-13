import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-3">MediConnect Clinic</h2>
          <p className="text-sm text-gray-100 leading-relaxed mb-4">
            Your health is our top priority. MediConnect provides trusted, professional healthcare services
            to ensure a healthy and happy life.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-gray-200 text-xl"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-200 text-xl"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200 text-xl"><FaInstagram /></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-100">
            <li><a href="/" className="hover:text-gray-200 transition">Home</a></li>
            <li><a href="/about" className="hover:text-gray-200 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-gray-200 transition">Our Services</a></li>
            <li><a href="/appointments" className="hover:text-gray-200 transition">Book Appointment</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <ul className="space-y-3 text-gray-100 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Blue Street, Karachi, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contact@mediconnect.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-5 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} MediConnect Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
