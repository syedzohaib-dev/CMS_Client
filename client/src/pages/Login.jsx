import axios from "axios";
import React, { useState } from "react";
import { API_PATHS, BASE_URL } from "../utils/apiPath";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL}${API_PATHS.AUTH.LOGIN}`,
        formData
      );

      console.log("Login Success:", response.data);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      if (response.data.user.role) {
        localStorage.setItem('role', response.data.user.role)
      }


      toast.success("Login Successful!");

      setFormData({ email: "", password: "" });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(
        error.response?.data?.message
          ? error.response.data.message
          : "Login Failed. Try again!",
        { duration: 4000 }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-12">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 md:p-12">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Log in to your account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg text-lg font-medium transition-all 
                ${loading
                  ? "bg-blue-400 text-white cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"}`}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:underline font-medium"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/authbg.jfif')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Login;
