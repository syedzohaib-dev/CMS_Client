import React, { useState } from "react";

const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    doctor: "",
    day: "",
    date: "",
    time: "",
  });

  const doctors = [
    {
      name: "Dr. Ayesha Khan",
      specialization: "Cardiologist",
      days: ["Mon", "Wed", "Fri"],
      startHour: 13,
      endHour: 20,
      startTime: "1:00 PM",
      endTime: "8:00 PM",
    },
    {
      name: "Dr. Bilal Ahmed",
      specialization: "Dermatologist",
      days: ["Tue", "Thu", "Sat"],
      startHour: 14,
      endHour: 20,
      startTime: "2:00 PM",
      endTime: "8:00 PM",
    },
    {
      name: "Dr. Sara Malik",
      specialization: "Pediatrician",
      days: ["Mon", "Tue", "Thu"],
      startHour: 12,
      endHour: 19,
      startTime: "12:00 PM",
      endTime: "7:00 PM",
    },
  ];

  const generateTimeSlots = (start, end) => {
    const slots = [];
    for (let hour = start; hour < end; hour++) {
      for (let min = 0; min < 60; min += 15) {
        const startLabel = formatTime(hour, min);
        const endLabel =
          min === 45 ? formatTime(hour + 1, 0) : formatTime(hour, min + 15);
        slots.push(`${startLabel} - ${endLabel}`);
      }
    }
    return slots;
  };

  const formatTime = (hour, minute) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const adjHour = ((hour + 11) % 12) + 1;
    const minStr = minute.toString().padStart(2, "0");
    return `${adjHour}:${minStr} ${suffix}`;
  };

  const selectedDoctor = doctors.find((d) => d.name === formData.doctor);
  const availableDays = selectedDoctor ? selectedDoctor.days : [];
  const availableSlots =
    selectedDoctor && formData.day
      ? generateTimeSlots(selectedDoctor.startHour, selectedDoctor.endHour)
      : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    console.log(formData);
  };

  return (
    <div className="w-full h-[600px] flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-15">
          Book a New Appointment
        </h2>

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
              {doctors.map((doc, i) => (
                <option key={i} value={doc.name}>
                  {doc.name} ({doc.specialization}) — {doc.startTime} to{" "}
                  {doc.endTime}
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
      </div>
    </div>
  );
};

export default BookAppointmentForm;
