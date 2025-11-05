// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCalendarAlt, FaClock, FaUserMd, FaClipboardList } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { GrView } from "react-icons/gr";


// const Sidebar = ({ role, isOpen, setIsOpen, onSectionChange }) => {
//   const getSidebarItems = (role) => {
//     if (role === "doctor") {
//       return [
//         { label: "Today's Appointments", icon: <FaCalendarAlt />, path: "/dashboard/doctor/appointments" },
//         { label: "Patient Records", icon: <FaClipboardList />, path: "/dashboard/doctor/records" },
//         { label: "Profile", icon: <CgProfile />, path: "/dashboard/doctor/profile" },
//       ];
//     } else if (role === "admin") {
//       return [
//         { label: "Manage Doctors", icon: <FaUserMd />, path: "/dashboard/admin/doctors" },
//         { label: "Manage Rooms", icon: <FaClock />, path: "/dashboard/admin/rooms" },
//         { label: "Reports", icon: <FaClipboardList />, path: "/dashboard/admin/reports" },
//       ];
//     } else {
//       // Patient
//       return [
//         { label: "View Dashboard", icon: <GrView />, path: "/dashboard/patient" },
//         { label: "Book Appointment", icon: <FaCalendarAlt />, path: "/dashboard/patient/bookappointment" },
//         { label: "Medical Records", icon: <FaClock />, path: "/dashboard/patient/records" },
//         { label: "Profile & Account", icon: <CgProfile />, path: "/dashboard/patient/profile" },
//       ];
//     }
//   };

//   const sidebarItems = getSidebarItems(role);

//   return (
//     <div
//       className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 
//       ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//     >
//       <div className="p-6 border-gray-200">
//         <h2 className="text-[1.4rem] font-bold text-blue-600 text-center capitalize">
//           {role} Dashboard
//         </h2>
//       </div>

//       <nav className="mt-6">
//         <ul className="space-y-2 px-4">
//           {sidebarItems.map((item, i) => (
//             <li key={i}>
//               <button
//                 onClick={() => {
//                   onSectionChange(item.path);
//                   setIsOpen(false);
//                 }}
//                 className="flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
//               >
//                 {item.icon}
//                 <span>{item.label}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


// // <Link
// //                 to={item.path}
// //                 onClick={() => setIsOpen(false)} // mobile sidebar close
// //                 className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
// //               >
// //                 {item.icon}
// //                 <span>{item.label}</span>
// //               </Link>


import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  const baseClasses =
    "block py-2 px-4 rounded hover:bg-blue-100 transition";
  const activeClass = "bg-blue-500 text-white hover:bg-blue-600";

  const menus = {
    patient: [
      { name: "View Dashboard", path: "view" },
      { name: "Book Appointment", path: "bookappointment" },
      { name: "Medical Records", path: "records" },
      { name: "Profile", path: "profile" },
    ],
    doctor: [
      { name: "Appointments", path: "/dashboard/doctor" },
      { name: "Patients List", path: "/dashboard/doctor/patients" },
    ],
    admin: [
      { name: "User Management", path: "/dashboard/admin/users" },
      { name: "System Reports", path: "/dashboard/admin/reports" },
    ],
  };

  const links = menus[role] || [];

  return (
    <div className="w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6 text-blue-600 capitalize">
        {role} Dashboard
      </h2>
      <nav className="space-y-2 px-4">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            // className={({ isActive }) =>
            //   isActive ? `${baseClasses} ${activeClass}` : baseClasses
            // }
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
