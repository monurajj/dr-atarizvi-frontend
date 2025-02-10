import React, { useState } from "react";
import { motion } from "framer-motion";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    purpose: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      purpose: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-emerald-900 text-center mb-8">
            Book an Appointment
          </h2>
          <p className="text-emerald-700 text-center text-lg mb-12">
            Schedule your visit with Dr. Atarizvi for personalized care.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 max-w-md mx-auto"
          >
            <div className="mb-6">
              <label
                className="block text-emerald-900 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-emerald-900 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-emerald-900 text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-emerald-900 text-sm font-bold mb-2"
                htmlFor="time"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-emerald-900 text-sm font-bold mb-2"
                htmlFor="purpose"
              >
                Purpose of Visit
              </label>
              <textarea
                id="purpose"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                rows="3"
                placeholder="Briefly describe the purpose of your visit"
                value={formData.purpose}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition duration-300 font-semibold"
            >
              Book Appointment
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Appointments;
