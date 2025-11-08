import React, { useState, useEffect } from "react";
import { FaDoorOpen, FaEdit, FaTrashAlt, FaBed } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL, API_PATHS } from "../../utils/apiPath.js";

const RoomManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "Consultation",
    availableFrom: "10:00",
    availableTo: "20:00",
  });

  const [rooms, setRooms] = useState([]);

  // Input handle
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Add / Edit Room
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized! Please login again.");
      return;
    }

    // Validation before API call
    if (!formData.roomNumber || !formData.roomType || !formData.availableFrom || !formData.availableTo) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}${API_PATHS.ADMIN.ADD_ROOM}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } });
      toast.success("Room added successfully!");
      console.log(res?.data)
      // Update UI instantly
      setRooms((prev) => [...prev, res.data.room]);

      // Reset fields
      setFormData({
        roomNumber: "",
        roomType: "Consultation",
        availableFrom: "10:00",
        availableTo: "20:00",
      });
    } catch (err) {
      console.error("Add Room Error:", err);
      toast.error(err.response?.data?.message || "Failed to add room");
    } finally {
      setIsLoading(false);
    }
  };


  const fetchRooms = async () => {
    const token = localStorage.getItem("token"); // <-- define token

    if (!token) {
      toast.error("Unauthorized! Please login again.");
      return;
    }

    try {
      const res = await axios.get(`${BASE_URL}${API_PATHS.ADMIN.GET_ROOMS}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRooms(res.data.rooms || []);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      toast.error("Failed to load rooms");
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8 flex items-center justify-center gap-2">
        <FaBed className="text-blue-700" /> Room Management
      </h2>


      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 border border-gray-100 space-y-6 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Room Number</label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              placeholder="Enter room number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            >
              <option value="Consultation">Consultation</option>
              <option value="Ward">Ward</option>
              <option value="ICU">ICU</option>
              <option value="Operation Theatre">Operation Theatre</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Available From</label>
            <input
              type="time"
              name="availableFrom"
              value={formData.availableFrom}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Available To</label>
            <input
              type="time"
              name="availableTo"
              value={formData.availableTo}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-lg text-white font-semibold transition-all ${isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {isLoading ? "Adding..." : isEditing ? "Update Room" : "Add Room"}
          </button>
        </div>
      </form>

      {/* Room List */}
      <div className="mt-12 mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 max-w-6xl">
        <h3 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
          <FaDoorOpen className="text-blue-700" /> Existing Rooms
        </h3>

        {rooms.length === 0 ? (
          <p className="text-gray-500 text-center py-10">No rooms created yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div
                key={room._id}
                className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-all p-5"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-blue-700">
                    Room # {room.roomNumber}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${room.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {room.status}
                  </span>
                </div>

                <div className="space-y-2 text-gray-700">
                  <p>
                    <b>Type:</b> {room.roomType}
                  </p>
                  <p>
                    <b>Time per Patient:</b> {room.timePerPatient}
                  </p>
                  <p>
                    <b>Availability:</b> {room.availableFrom} – {room.availableTo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomManagement;
