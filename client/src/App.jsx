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
import PatientRecords from './pages/dashboard/doctordata/PatientRecords.jsx'
import AddNotes from './pages/dashboard/doctordata/AddNotes.jsx'
import DoctorProfile from './pages/dashboard/doctordata/DoctorProfile.jsx'
import DashboardOverview from './pages/dashboard/doctordata/DashboardOverview.jsx'

const App = () => {

  const userRole = "patient"; // "doctor" | "admin" | "patient"

  return (
    <>
      {/* <UserProvider > */}
      <Router>
        <Routes>

          {/* Auth Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* Dashboard Routes */}
          {userRole === "patient" && (
            <Route path="/dashboard/patient" element={<PatientDashboard />} >
              <Route path="/dashboard/patient/view" element={<View />} />
              <Route path="/dashboard/patient/bookappointment" element={<BookAppointmentForm />} />
              <Route path="/dashboard/patient/records" element={<MedicalRecord />} />
              <Route path="/dashboard/patient/profile" element={<UserProfile />} />
            </Route>
          )}

          {/* Doctor Dashboard Routes */}
          {userRole === "doctor" && (
            <Route
              path="/dashboard/doctor"
              element={<DoctorDashboard />}>
              <Route path="/dashboard/doctor" element={<DashboardOverview />} />
              <Route path="/dashboard/doctor/appointments" element={<DoctorAppointments />} />
              <Route path="/dashboard/doctor/patient-records" element={<PatientRecords />} />
              <Route path="/dashboard/doctor/add-notes" element={<AddNotes />} />
              <Route path="/dashboard/doctor/profile" element={<DoctorProfile />} />
            </Route>
          )}

          {userRole === "admin" && (
            <Route path="/dashboard" element={<AdminDashboard />} />
          )}


          {/* common Routes */}
          {/* <Route path="/dashboard/patient/bookappointment" element={<BookAppointmentForm />} />
          <Route path="/dashboard/patient/records" element={<MedicalRecord />} />
          <Route path="/dashboard/patient/profile" element={<UserProfile />} /> */}


        </Routes>
      </Router>

      {/* </UserProvider> */}
    </>
  )
}

export default App