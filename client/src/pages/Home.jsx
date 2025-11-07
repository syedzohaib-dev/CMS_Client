import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import ImageSlider from '../components/ImageSlider.jsx'
import DoctorCategory from '../components/DoctorCategory.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import Footer from '../components/Footer.jsx'
import { BASE_URL, API_PATHS } from "../utils/apiPath.js";
import axios from 'axios'

const Home = () => {

  const [user, setUser] = useState(null);


  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("No token found. User not logged in.");
        return;
      }

      const response = await axios.get(`${BASE_URL}${API_PATHS.AUTH.GET_USER_INFO}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("User fetched successfully:", response.data.user);
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error.message);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div className='w-full h-screen'>
      <Navbar user={user} />
      <ImageSlider user={user} />

      <section id="doctors">
        <DoctorCategory />
      </section>
      <ServicesSection />
      <Footer />

    </div>
  )
}

export default Home