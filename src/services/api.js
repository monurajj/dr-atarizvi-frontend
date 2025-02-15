import axios from "axios";

const API_URL = "http://localhost:5001/api/appointments";

// Create a new appointment
const createAppointment = async (appointmentData) => {
  const response = await axios.post(API_URL, appointmentData);
  return response.data;
};

// Get all appointments
const getAppointments = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a single appointment by ID
const getAppointmentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update an appointment
const updateAppointment = async (id, appointmentData) => {
  const response = await axios.put(`${API_URL}/${id}`, appointmentData);
  return response.data;
};

// Delete an appointment
const deleteAppointment = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const appointmentService = {
  createAppointment,
  getAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};

export default appointmentService;
