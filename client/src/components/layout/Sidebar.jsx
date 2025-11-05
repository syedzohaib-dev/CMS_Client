import React from "react";
import { FaHome, FaCalendarAlt, FaClipboardList, FaNotesMedical } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ role }) => {

  const menus = {
    patient: [
      { name: "View Dashboard", path: "view" },
      { name: "Book Appointment", path: "bookappointment" },
      { name: "Medical Records", path: "records" },
      { name: "Profile", path: "profile" },
    ],
    doctor: [
      { name: "Dashboard Overview", icon: <FaHome />, path: "/dashboard/doctor" },
      { name: "Today's Appointments", icon: <FaCalendarAlt />, path: "/dashboard/doctor/appointments" },
      { name: "Patient List", icon: < FaClipboardList />, path: "/dashboard/doctor/patient-records" },
      { name: "Add Notes", icon: < FaNotesMedical />, path: "/dashboard/doctor/add-notes" },
      { name: "Profile & Settings", icon: <CgProfile />, path: "/dashboard/doctor/profile" },
    ],
    admin: [
      { name: "User Management", path: "/dashboard/admin/users" },
      { name: "System Reports", path: "/dashboard/admin/reports" },
    ],
  };

  const links = menus[role] || [];

  return (
    <div className="w-64 bg-white shadow-md py-4">
      <h2 className="text-xl font-bold mb-6 text-blue-600 capitalize text-center">
        {role} Dashboard
      </h2>
      <nav className="space-y-2 px-4">
        {links.map((link, i) => (
          <span className="flex items-center gap-3 px-4 py-3 text-[1.2rem] rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">
            {link.icon}
            <NavLink
              key={i}
              to={link.path}
              className="text-[1rem]"
            >
              {link.name}
            </NavLink>
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
