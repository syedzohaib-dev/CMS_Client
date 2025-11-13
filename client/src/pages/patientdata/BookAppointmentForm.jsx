import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, API_PATHS } from "../../utils/apiPath";
import toast from "react-hot-toast";

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctorId: "",
    day: "",
    date: "",
    time: "",
  });
  const [doctors, setDoctors] = useState([]);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        const res = await axios.get(`${BASE_URL}${API_PATHS.PATIENT.GET_TODAY_DOCTORS}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(res?.data?.doctors)
        setDoctors(res.data.doctors || []);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        toast.error("Failed to load doctors");
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const generateTimeSlots = (startTime, endTime) => {
    const slots = [];
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    let start = new Date();
    start.setHours(startHour, startMin, 0, 0);
    let end = new Date();
    end.setHours(endHour, endMin, 0, 0);

    while (start < end) {
      const next = new Date(start.getTime() + 15 * 60000);
      const slotLabel = `${formatTime(start)} - ${formatTime(next)}`;
      slots.push(slotLabel);
      start = next;
    }
    return slots;
  };

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const mins = minutes.toString().padStart(2, "0");
    return `${hours}:${mins} ${ampm}`;
  };

  const selectedDoctor = doctors.find((doc) => doc._id === formData.doctorId);
  const availableDays = Array.isArray(selectedDoctor?.availableDays)
    ? selectedDoctor.availableDays
    : [];

  useEffect(() => {
    const fetchAvailableSlots = async () => {
      if (!formData.doctorId || !formData.date) return;
      try {
        const res = await axios.get(
          `${BASE_URL}${API_PATHS.PATIENT.GET_SLOTS(formData.doctorId)}?date=${formData.date}`
        );
        console.log(`${BASE_URL}${API_PATHS.PATIENT.GET_SLOTS(formData.doctorId)}?date=${formData.date}`);

        console.log("Slots fetched:", res.data.slots);
        setSlots(res.data.slots?.filter((s) => s.trim()) || []);
      } catch (err) {
        console.error("Error fetching slots:", err);
        toast.error("Failed to load available slots");
      }
    };
    fetchAvailableSlots();
  }, [formData.doctorId, formData.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return toast.error("Please login first");

    if (!formData.doctorId || !formData.date || !formData.time) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        `${BASE_URL}${API_PATHS.PATIENT.BOOK_APPOINTMENT}`,
        {
          doctorId: formData.doctorId,
          date: formData.date,
          time: formData.time,
          currentDate: Date.now()
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Appointment booked successfully!");
      console.log("Appointment:", res.data);
      setFormData({ doctorId: "", day: "", date: "", time: "" });
      setSlots([]);
    } catch (err) {
      console.error("Booking error:", err);
      toast.error(err.response?.data?.message || "Failed to book appointment");
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 py-5 mt-2">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Book New Appointment
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading doctors...</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="font-medium text-gray-700 mb-2 block">Select Doctor</label>
              <select
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Choose Today Doctor</option>
                {doctors.map((doc) => (
                  <option key={doc._id} value={doc._id}>
                    {doc.name} ({doc.specialization})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-2 block">Available Days</label>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                disabled={!formData.doctorId}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
              >
                <option value="">Select Day</option>
                {availableDays.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-2 block">Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                disabled={!formData.day}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-2 block">Available Time Slots</label>
              <select
                name="time" 
                value={formData.time}
                onChange={handleChange}
                disabled={!formData.date}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
                required
              >
                <option value="">Choose Time</option>
                {slots.map((slot, i) => (
                  <option key={i} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2 mt-6">
              <button
                type="submit"
                className={`w-full py-4 rounded-lg text-lg font-semibold transition-all ${formData.time
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
