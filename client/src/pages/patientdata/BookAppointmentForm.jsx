import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_PATHS } from "../../utils/apiPath.js";
import toast from "react-hot-toast";

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    doctorId: "",
    day: "",
    date: "",
    time: "",
  });

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch doctors from API

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token"); // ✅ define it here
        const response = await axios.get(`${BASE_URL}${API_PATHS.ADMIN.GET_DOCTORS}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setDoctors(response.data?.doctors || []);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        toast.error("Failed to load doctors");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);


  // Generate 15-min time slots
  const generateTimeSlots = (start, end) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const startLabel = formatTime(hour, min);
        const endLabel = min === 45 ? formatTime(hour + 1, 0) : formatTime(hour, min + 15);
        slots.push(`${startLabel} - ${endLabel}`);
      }
    }
    return slots;
  };

  // Format time (24h → 12h)
  const formatTime = (hour, minute) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const adjHour = ((hour + 11) % 12) + 1;
    const minStr = minute.toString().padStart(2, "0");
    return `${adjHour}:${minStr} ${suffix}`;
  };

  const selectedDoctor = doctors.find((d) => d._id === formData.doctorId);
  const availableDays = selectedDoctor?.availableDays || [];
  const availableSlots =
    selectedDoctor && formData.day
      ? generateTimeSlots(selectedDoctor.startHour, selectedDoctor.endHour)
      : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "doctor"
        ? {
          doctorId: doctors.find((d) => d.name === value)?._id || "",
        }
        : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.doctorId || !formData.date || !formData.time) {
      toast.error("Please complete all fields before booking");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${BASE_URL}${API_PATHS.APPOINTMENT.BOOK}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Appointment booked successfully!");
      console.log("Appointment:", response.data);

      setFormData({
        doctor: "",
        doctorId: "",
        day: "",
        date: "",
        time: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to book appointment");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 py-10">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Book a New Appointment
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading doctors...</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Doctor Selection */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">
                Select Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              >
                <option value="">-- Choose Doctor --</option>
                {doctors.map((doc) => (
                  <option key={doc._id} value={doc.name}>
                    {doc.name} ({doc.specialization}) — {doc.startTime} to {doc.endTime}
                  </option>
                ))}
              </select>
            </div>

            {/* Day Selection */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">
                Available Days
              </label>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                disabled={!formData.doctor}
                className={`border rounded-lg px-4 py-3 outline-none ${formData.doctor
                  ? "border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                required
              >
                <option value="">-- Select Day --</option>
                {availableDays.map((day, i) => (
                  <option key={i} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">
                Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                disabled={!formData.day}
                className={`border rounded-lg px-4 py-3 outline-none ${formData.day
                  ? "border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                required
              />
            </div>

            {/* Time Slot */}
            <div className="flex flex-col">
              <label className="text-gray-700 font-semibold mb-2">
                Available Time Slots
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                disabled={!formData.date}
                className={`border rounded-lg px-4 py-3 outline-none ${formData.date
                  ? "border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-400"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                required
              >
                <option value="">-- Choose Time --</option>
                {availableSlots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-6">
              <button
                type="submit"
                className={`w-full py-4 text-lg font-semibold rounded-lg transition-all ${formData.time
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                disabled={!formData.time}
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookAppointmentForm;
