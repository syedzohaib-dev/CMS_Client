import React from "react";
import { FaHome, FaCalendarAlt, FaClipboardList, FaNotesMedical, FaUserMd, FaUsers, FaDoorOpen, FaChartLine } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ role, isOpen, setIsOpen }) => {

  const menus = {
    patient: [
      { name: "View Dashboard", path: "view" },
      { name: "Book Appointment", path: "bookappointment" },
      { name: "Medical Records", path: "records" },
      { name: "Profile", path: "profile" },
    ],
    doctor: [
      { name: "Dashboard Overview", icon: <FaHome />, path: "/dashboard/doctor/overview" },
      { name: "Check Patient", icon: < FaNotesMedical />, path: "/dashboard/doctor/add-notes" },
      { name: "Today's Appointments", icon: <FaCalendarAlt />, path: "/dashboard/doctor/appointments" },
      { name: "Patient List", icon: < FaClipboardList />, path: "/dashboard/doctor/patient-records" },
      { name: "Profile & Settings", icon: <CgProfile />, path: "/dashboard/doctor/profile" },
    ],
    admin: [
      { name: "Dashboard Overview", icon: <FaHome />, path: "/dashboard/admin/overview" },
      { name: "Manage Doctors", icon: <FaUserMd />, path: "/dashboard/admin/manage-doctors" },
      { name: "Manage Patients", icon: <FaUsers />, path: "/dashboard/admin/manage-patients" },
      { name: "Room Management", icon: <FaDoorOpen />, path: "/dashboard/admin/room-management" },
      { name: "Appointments", icon: <FaCalendarAlt />, path: "/dashboard/admin/appointments" },
      { name: "Reports & Analytics", icon: <FaChartLine />, path: "/dashboard/admin/reports" },
      { name: "Profile & Settings", icon: <CgProfile />, path: "/dashboard/admin/profile" },
    ],
  };

  const links = menus[role] || [];

  return (
    <div className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
      <h2 className="text-xl font-bold mb-6 text-blue-600 capitalize text-center">
        {role} Dashboard
      </h2>
      <nav className="space-y-2 px-4">
        {links.map((link, i) => (
          <NavLink
            to={link.path}
            className="">
            <span key={i} className=" flex items-center gap-3 my-3 px-4 py-3 text-[1rem] rounded-lg text-gray-700 hover:bg-blue-100 bg-blue-50  hover:text-blue-600 transition">
              {link.icon}

              {link.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </div >
  );
};

export default Sidebar;
