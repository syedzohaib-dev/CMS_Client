import React, { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        alert("Login Successful!");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Right Side - White Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-12">
                <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 md:p-12">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-center text-gray-500 mb-8">
                        Log in to your account
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all"
                        >
                            Log In
                        </button>
                    </form>

                    {/* Signup link */}
                    <p className="text-center text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-blue-500 hover:underline font-medium">
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
                    backgroundSize: 'cover'
                }}
            >
            </div>


        </div>
    );
};

export default Login;
