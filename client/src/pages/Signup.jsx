import React, { useState } from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        age: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        alert("Signup Successful!");
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-6 py-6">
                <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 md:p-12 h-[640px] flex flex-col justify-center">
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
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your age"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-600 transition-all"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Already have an account */}
                    <p className="text-center text-gray-600 mt-5">
                        Already have an account?{" "}
                        <a href="/login" className="text-blue-500 hover:underline font-medium">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
            <div
                className="hidden md:block w-1/2 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('/images/authbg.jfif')",
                }}
            ></div>

        </div>
    );
};

export default Signup;
