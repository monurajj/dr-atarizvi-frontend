import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Dr. Atarizvi Clinic
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-secondary transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-secondary transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-secondary transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-secondary transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/appointments"
            className="text-white bg-secondary px-4 py-2 rounded-lg hover:bg-accent transition duration-300"
          >
            Book Appointment
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 space-y-4"
        >
          <Link
            to="/"
            className="block text-white hover:text-secondary transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-secondary transition duration-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-secondary transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-secondary transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/appointments"
            className="block text-white bg-secondary px-4 py-2 rounded-lg hover:bg-accent transition duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
