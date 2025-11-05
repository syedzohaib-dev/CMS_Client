import React from 'react'
import Navbar from '../components/Navbar.jsx'
import ImageSlider from '../components/ImageSlider.jsx'
import DoctorCategory from '../components/DoctorCategory.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar />
      <ImageSlider />
      <DoctorCategory />
      <ServicesSection />
      <Footer />

    </div>
  )
}

export default Home