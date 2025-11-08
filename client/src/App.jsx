import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
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
      {/* <UserProvider > */}
      <Router>
        <Routes>

          {/* Auth Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Dashboard Routes */}
          {userRole === "patient" && (
            <Route path="/dashboard/patient" element={<PatientDashboard role={userRole} />} >
              <Route path="/dashboard/patient/view" element={<View />} />
              <Route path="/dashboard/patient/bookappointment" element={<BookAppointmentForm />} />
              <Route path="/dashboard/patient/records" element={<MedicalRecord />} />
              <Route path="/dashboard/patient/profile" element={<UserProfile />} />
            </Route>
          )}

          {/* Doctor Dashboard Routes */}
          {userRole === "doctor" && (
            <Route
              path="/dashboard/doctor" element={<DoctorDashboard role={userRole} />}>
              <Route index element={<DashboardOverview />} />
              <Route path='/dashboard/doctor/overview' element={<DashboardOverview />} />
              <Route path="/dashboard/doctor/appointments" element={<DoctorAppointments />} />
              <Route path="/dashboard/doctor/patient-records" element={<TodayPatients />} />
              <Route path="/dashboard/doctor/add-notes" element={<AddNotes />} />
              <Route path="/dashboard/doctor/profile" element={<DoctorProfile />} />
            </Route>
          )}

          {userRole === "admin" && (
            <Route path="/dashboard/admin" element={<AdminDashboard role="Admin" />}>
              <Route index element={<AdminOverview />} />
              <Route index path="/dashboard/admin/overview" element={<AdminOverview />} />
              <Route path="/dashboard/admin/manage-doctors" element={<ManageDoctors />} />
              <Route path="/dashboard/admin/manage-patients" element={<ManagePatients />} />
              <Route path="/dashboard/admin/room-management" element={<RoomManagement />} />
              <Route path="/dashboard/admin/appointments" element={<AppointmentRecords />} />
              <Route path="/dashboard/admin/reports" element={<ReportsAnalytics />} />
              <Route path="/dashboard/admin/profile" element={<AdminProfile />} />
            </Route>
          )}



          {/* 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/* </UserProvider> */}
    </>
  )
}

export default App