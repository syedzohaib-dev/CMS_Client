import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import PatientDashboard from './pages/dashboard/PatientDashboard.jsx'
import DoctorDashboard from './pages/dashboard/DoctorDashboard.jsx'
import AdminDashboard from './pages/dashboard/AdminDashboard.jsx'
import Home from './pages/Home.jsx'
import BookAppointmentForm from './pages/patientdata/BookAppointmentForm.jsx'
import MedicalRecord from './pages/patientdata/MedicalRecord.jsx'
import UserProfile from './pages/patientdata/UserProfile.jsx'
import View from './pages/patientdata/View.jsx'
import DoctorAppointments from './pages/dashboard/doctordata/DoctorAppointments.jsx'
import AddNotes from './pages/dashboard/doctordata/AddNotes.jsx'
import DoctorProfile from './pages/dashboard/doctordata/DoctorProfile.jsx'
import DashboardOverview from './pages/dashboard/doctordata/DashboardOverview.jsx'
import NotFound from './pages/NotFound.jsx'
import TodayPatients from './pages/dashboard/doctordata/TodayPatients.jsx'
import AdminOverview from './pages/admindata/AdminOverview.jsx'
import ManageDoctors from './pages/admindata/ManageDoctors.jsx'
import ManagePatients from './pages/admindata/ManagePatients.jsx'
import RoomManagement from './pages/admindata/RoomManagement.jsx'
import AppointmentRecords from './pages/admindata/AppointmentRecords.jsx'
import AdminProfile from './pages/admindata/AdminProfile.jsx'
import ReportsAnalytics from './pages/admindata/ReportsAnalytics.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const userRole = localStorage.getItem('role') // "doctor" | "admin" | "patient"

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Router>
        <Routes>

          {/* Auth Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Patient Dashboard */}
          {userRole === "patient" && (
            <Route path="/dashboard/patient" element={<PatientDashboard role={userRole} />}>
              <Route index element={<View />} />
              <Route path="view" element={<View />} />
              <Route path="bookappointment" element={<BookAppointmentForm />} />
              <Route path="records" element={<MedicalRecord />} />
              <Route path="profile" element={<UserProfile />} />
            </Route>
          )}

          {/* Doctor Dashboard */}
          {userRole === "doctor" && (
            <Route path="/dashboard/doctor" element={<DoctorDashboard role={userRole} />}>
              <Route index element={<DashboardOverview />} />
              <Route path="overview" element={<DashboardOverview />} />
              <Route path="appointments" element={<DoctorAppointments />} />
              <Route path="patient-records" element={<TodayPatients />} />
              <Route path="add-notes" element={<AddNotes />} />
              <Route path="profile" element={<DoctorProfile />} />
            </Route>
          )}

          {/* Admin Dashboard */}
          {userRole === "admin" && (
            <Route path="/dashboard/admin" element={<AdminDashboard role={userRole} />}>
              <Route index element={<AdminOverview />} />
              <Route path="overview" element={<AdminOverview />} />
              <Route path="manage-doctors" element={<ManageDoctors />} />
              <Route path="manage-patients" element={<ManagePatients />} />
              <Route path="room-management" element={<RoomManagement />} />
              <Route path="appointments" element={<AppointmentRecords />} />
              <Route path="reports" element={<ReportsAnalytics />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
          )}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
