import React, { useState } from "react";
import { FaDoorOpen, FaEdit, FaTrashAlt, FaClock, FaBed } from "react-icons/fa";

const RoomManagement = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);

  const [formData, setFormData] = useState({
    roomNumber: "",
    roomType: "Consultation",
    status: "Available",
    timePerPatient: "15 minutes",
  });

  const [rooms, setRooms] = useState([]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add / Edit Room
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setRooms((prev) =>
        prev.map((room) =>
          room.id === editingRoomId ? { ...formData, id: editingRoomId } : room
        )
      );
      setIsEditing(false);
      setEditingRoomId(null);
    } else {
      setRooms([...rooms, { ...formData, id: Date.now() }]);
    }

    // Reset Form
    setFormData({
      roomNumber: "",
      roomType: "Consultation",
      status: "Available",
      timePerPatient: "15 minutes",
    });
  };

  // Delete Room
  const handleDelete = (id) => {
    setRooms(rooms.filter((room) => room.id !== id));
  };

  // Edit Room
  const handleEdit = (room) => {
    setFormData(room);
    setIsEditing(true);
    setEditingRoomId(room.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-8 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8 flex items-center justify-center gap-2">
        <FaBed className="text-blue-700" /> Room Management
      </h2>

      {/* Room Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 border border-gray-100 space-y-6 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Room Number
            </label>
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
            <label className="block text-gray-700 mb-1 font-medium">
              Room Type
            </label>
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
            <label className="block text-gray-700 mb-1 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Maintenance">Under Maintenance</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Time Per Patient
            </label>
            <input
              type="text"
              name="timePerPatient"
              value={formData.timePerPatient}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">
              (Each patient consultation is 15 minutes)
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-all"
          >
            {isEditing ? "Update Room" : "Add Room"}
          </button>
        </div>
      </form>

      {/* Room List */}
      <div className="mt-12 mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100 max-w-5xl">
        <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-2">
          <FaDoorOpen className="text-blue-700" /> Existing Rooms
        </h3>

        {rooms.length === 0 ? (
          <p className="text-gray-500 text-center py-10">No rooms created yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50 text-blue-700 text-left">
                <th className="p-3">Room No</th>
                <th className="p-3">Type</th>
                <th className="p-3">Status</th>
                <th className="p-3">Time per Patient</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="p-3 font-semibold text-gray-800">
                    {room.roomNumber}
                  </td>
                  <td className="p-3 text-gray-600">{room.roomType}</td>
                  <td
                    className={`p-3 font-medium ${room.status === "Available"
                        ? "text-green-600"
                        : room.status === "Occupied"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                  >
                    {room.status}
                  </td>
                  <td className="p-3 text-gray-600">{room.timePerPatient}</td>
                  <td className="px-3 py-6 text-right flex justify-end gap-3">
                    <button
                      onClick={() => handleEdit(room)}
                      className="text-blue-600 hover:text-blue-800 text-xl transition"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(room.id)}
                      className="text-red-600 hover:text-red-800 text-xl transition"
                      title="Delete"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RoomManagement;
