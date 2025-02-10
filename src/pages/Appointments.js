import React, { useState } from "react";
import { motion } from "framer-motion";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    purpose: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Book an Appointment
      </h2>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="time"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-secondary text-white px-6 py-2 rounded-lg hover:bg-accent transition duration-300"
        >
          Book Appointment
        </button>
      </motion.form>
    </div>
  );
};

export default Appointments;
