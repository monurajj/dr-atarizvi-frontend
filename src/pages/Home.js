import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-primary text-white py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-4"
          >
            Welcome to Dr. Atarizvi Clinic
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Your health is our priority. We provide compassionate and
            professional care.
          </motion.p>
          <motion.a
            href="/appointments"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent transition duration-300"
          >
            Book an Appointment
          </motion.a>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://via.placeholder.com/500x300"
              alt="Dr. Atarizvi"
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 mb-4">
              Dr. Atarizvi Clinic is dedicated to providing high-quality
              healthcare services. With over 15 years of experience, Dr.
              Atarizvi specializes in general consultations, diagnostics, and
              personalized treatment plans.
            </p>
            <p className="text-gray-700">
              Our mission is to ensure the well-being of our patients through
              compassionate care and advanced medical practices.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-background py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "General Consultations",
              "Diagnostics",
              "Specialized Treatments",
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-700">
                  Comprehensive health check-ups and consultations.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
