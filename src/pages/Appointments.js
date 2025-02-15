import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    date: "",
    time: "",
    purpose: "",
  });
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  // Fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "http://localhost:5001/api/appointments"
      );
      setAppointments(response.data);
    } catch (err) {
      setError("Failed to fetch appointments. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (editMode) {
        // Update existing appointment
        await axios.put(`http://localhost:5001/api/appointments/${editId}`, {
          patientName: formData.name,
          contactInfo: formData.contactInfo,
          date: formData.date,
          time: formData.time,
          purpose: formData.purpose,
        });
        toast.success("Appointment updated successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        // Create new appointment
        await axios.post("http://localhost:5001/api/appointments", {
          patientName: formData.name,
          contactInfo: formData.contactInfo,
          date: formData.date,
          time: formData.time,
          purpose: formData.purpose,
        });
        toast.success("Appointment booked successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      setFormData({
        name: "",
        contactInfo: "",
        date: "",
        time: "",
        purpose: "",
      });
      setEditMode(false);
      setEditId(null);
      fetchAppointments(); // Refresh the list
    } catch (err) {
      toast.error("Failed to book/update appointment. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (appointment) => {
    setFormData({
      name: appointment.patientName,
      contactInfo: appointment.contactInfo,
      date: appointment.date.split("T")[0], // Format date for input field
      time: appointment.time,
      purpose: appointment.purpose,
    });
    setEditMode(true);
    setEditId(appointment._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setLoading(true);
      setError("");
      try {
        await axios.delete(`http://localhost:5001/api/appointments/${id}`);
        toast.success("Appointment deleted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        fetchAppointments(); // Refresh the list
      } catch (err) {
        toast.error("Failed to delete appointment. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
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

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 max-w-md mx-auto mb-12"
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
                htmlFor="contactInfo"
              >
                Contact Info (Email or Phone)
              </label>
              <input
                type="text"
                id="contactInfo"
                className="w-full px-4 py-3 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Email or Phone Number"
                value={formData.contactInfo}
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
              disabled={loading}
            >
              {loading
                ? editMode
                  ? "Updating..."
                  : "Booking..."
                : editMode
                ? "Update Appointment"
                : "Book Appointment"}
            </button>
          </motion.form>

          <h3 className="text-2xl font-bold font-montserrat text-emerald-900 text-center mb-8">
            Booked Appointments
          </h3>
          {loading ? (
            <p className="text-center">Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <p className="text-center">No appointments booked yet.</p>
          ) : (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="bg-white p-6 rounded-xl shadow-lg border border-emerald-100"
                >
                  <p className="font-semibold text-emerald-900">
                    {appointment.patientName}
                  </p>
                  <p className="text-emerald-700">
                    {new Date(appointment.date).toLocaleDateString()} at{" "}
                    {appointment.time}
                  </p>
                  <p className="text-emerald-700">{appointment.purpose}</p>
                  <p className="text-emerald-700">{appointment.contactInfo}</p>
                  <div className="flex space-x-4 mt-4">
                    <button
                      onClick={() => handleEdit(appointment)}
                      className="text-sm bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(appointment._id)}
                      className="text-sm bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Appointments;