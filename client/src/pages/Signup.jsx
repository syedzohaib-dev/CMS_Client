import React, { useState } from "react";
import { BASE_URL, API_PATHS } from "../utils/apiPath.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../utils/helper.js";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
  });
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // form validation
  const validateForm = () => {

    if (!formData.name.trim()) {
      toast.error("Name is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return false;
    }
    if (!formData.gender) {
      toast.error("Please select your gender");
      return false;
    }
    if (!formData.age || formData.age <= 0) {
      toast.error("Please enter a valid age");
      return false;
    }
    return true;
  };

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email address.')
      return false;
    }

    // Check empty fields
    // if (!name || !formData.email || !password || !gender || !age) {
    //   toast.error("Please fill in all fields!");
    //   return;
    // }

    if (loading) return;
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}${API_PATHS.AUTH.SIGNUP}`,
        formData
      );

      console.log("Signup Successful:", response.data);

      toast.success("Signup Successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        age: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message
          ? error.response.data.message
          : "Signup failed. Try again!",
        { duration: 4000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="minh-screen flex flex-col md:flex-row">
      {/* Right Side - Signup Form */}
      <div className="w-full h-screen md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-4">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 md:p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
              {formData.password &&
                formData.password.length < 8 && (
                  <p className="text-red-500 text-sm mt-1">
                    Password must be at least 8 characters long
                  </p>
                )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={(e) => {
                  const value = e.target.value
                  if (value === "" || Number(value) > 0) {
                    setFormData({ ...formData, age: value })
                  }
                }}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your age"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-lg font-medium transition-all 
                ${loading
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"}`}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>

          {/* Already have an account */}
          <p className="text-center text-gray-600 mt-5">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline font-medium"
            >
              Log in
            </a>
          </p>
        </div>
      </div>

      {/* Left Side - Image */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/authbg.jfif')",
        }}
      ></div>
    </div>
  );
};

export default Signup;
