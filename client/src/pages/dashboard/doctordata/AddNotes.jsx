import React, { useState } from "react";
import { FaBible } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const AddNotes = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    problem: "",
    diagnosis: "",
    prescription: [{ medicine: "", dosage: "", duration: "" }],
    followUpDate: "",
    notes: "",
  });

  const patients = [
    { id: 1, name: "Ali Raza", age: 29, gender: "Male" },
    { id: 2, name: "Sara Malik", age: 25, gender: "Female" },
    { id: 3, name: "Bilal Ahmed", age: 40, gender: "Male" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrescriptionChange = (index, field, value) => {
    const updated = [...formData.prescription];
    updated[index][field] = value;
    setFormData({ ...formData, prescription: updated });
  };

  const addMedicine = () => {
    setFormData({
      ...formData,
      prescription: [
        ...formData.prescription,
        { medicine: "", dosage: "", duration: "" },
      ],
    });
  };

  const handleDeletePrescription = (index) => {
    setFormData((prev) => ({
      ...prev,
      prescription: prev.prescription.filter((_, i) => i !== index),
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", formData);
    alert("Patient notes saved successfully!");
  };

  // Get selected patient info
  const selectedPatient = patients.find(
    (p) => p.id === Number(formData.patientId)
  );

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Check Patient, Add Patient Notes & Prescription
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md space-y-6"
      >
        {/* Select Patient */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Patient
          </label>
          <select
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
          >
            <option value="">-- Choose Patient --</option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Auto-filled Details */}
        {selectedPatient ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-semibold text-blue-700">{selectedPatient.name}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Age</p>
              <p className="font-semibold text-green-700">{selectedPatient.age}</p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600">Gender</p>
              <p className="font-semibold text-pink-700">{selectedPatient.gender}</p>
            </div>
          </div>
        ) :
          ((
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold text-blue-700">-</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Age</p>
                <p className="font-semibold text-green-700">-</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Gender</p>
                <p className="font-semibold text-pink-700">-</p>
              </div>
            </div>
          ))
        }

        {/* Problem / Complaint */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Patient Problem / Symptoms
          </label>
          <textarea
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            rows="3"
            placeholder="Describe the patient's problem or symptoms..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
          ></textarea>
        </div>

        {/* Diagnosis */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Diagnosis
          </label>
          <textarea
            name="diagnosis"
            value={formData.diagnosis}
            onChange={handleChange}
            rows="2"
            placeholder="e.g., High Blood Pressure, Migraine..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
          ></textarea>
        </div>

        {/* Prescription */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Prescription
          </label>

          {formData.prescription.map((med, index) => (
            <div
              key={index}
              className="flex justify-evenly flex-wrap gap-3 mb-3 bg-gray-50 p-3 rounded-lg"
            >
              <input
                type="text"
                placeholder="Medicine name"
                value={med.medicine}
                onChange={(e) =>
                  handlePrescriptionChange(index, "medicine", e.target.value)
                }
                className="border rounded-lg px-3 py-2 focus:outline-blue-500 md:w-[220px]"
              />
              <input
                type="text"
                placeholder="Dosage (e.g. 1 tablet)"
                value={med.dosage}
                onChange={(e) =>
                  handlePrescriptionChange(index, "dosage", e.target.value)
                }
                className="border rounded-lg px-3 py-2 focus:outline-blue-500 md:w-[220px]"
              />
              <input
                type="text"
                placeholder="Duration (e.g. 5 days)"
                value={med.duration}
                onChange={(e) =>
                  handlePrescriptionChange(index, "duration", e.target.value)
                }
                className="border rounded-lg px-3 py-2 focus:outline-blue-500 md:w-[220px]"
              />
              <button type="button" onClick={() => handleDeletePrescription(index)} className="text-2xl text-red-700 transition-all duration-300 transform hover:scale-110 hover:text-red-700"><MdDelete /> </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addMedicine}
            className="mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            + Add Another Medicine
          </button>
        </div>

        {/* Follow-up Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Follow-up Date
          </label>
          <input
            type="date"
            name="followUpDate"
            value={formData.followUpDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Additional Doctor Notes
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            placeholder="Any additional comments or instructions for the patient..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md"
          >
            Save Notes
          </button>
        </div>
      </form >
    </div >
  );
};

export default AddNotes;
