import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener to toggle navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 ${
        isScrolled
          ? "bg-emerald-900/90 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold font-montserrat transition duration-300 ${
            isScrolled ? "text-white" : "text-emerald-900"
          } hover:text-emerald-300`}
        >
          Dr. Atarizvi Clinic
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="/"
            className={`font-medium transition duration-300 ${
              isScrolled ? "text-white" : "text-emerald-900"
            } hover:text-emerald-300`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`font-medium transition duration-300 ${
              isScrolled ? "text-white" : "text-emerald-900"
            } hover:text-emerald-300`}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`font-medium transition duration-300 ${
              isScrolled ? "text-white" : "text-emerald-900"
            } hover:text-emerald-300`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`font-medium transition duration-300 ${
              isScrolled ? "text-white" : "text-emerald-900"
            } hover:text-emerald-300`}
          >
            Contact
          </Link>
          <Link
            to="/appointments"
            className={`text-white bg-emerald-600 px-6 py-2 rounded-full hover:bg-emerald-700 transition duration-300 font-semibold shadow-lg ${
              isScrolled ? "bg-emerald-600" : "bg-emerald-700"
            }`}
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden focus:outline-none transition duration-300 ${
            isScrolled ? "text-white" : "text-emerald-900"
          }`}
        >
          <svg
            className="w-8 h-8"
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 space-y-4 p-6 bg-emerald-900/95 backdrop-blur-sm"
        >
          <Link
            to="/"
            className="block text-white hover:text-emerald-300 transition duration-300 font-medium text-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white hover:text-emerald-300 transition duration-300 font-medium text-lg"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-white hover:text-emerald-300 transition duration-300 font-medium text-lg"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-white hover:text-emerald-300 transition duration-300 font-medium text-lg"
          >
            Contact
          </Link>
          <Link
            to="/appointments"
            className="block text-white bg-emerald-600 px-6 py-3 rounded-full hover:bg-emerald-700 transition duration-300 font-semibold text-center shadow-lg"
          >
            Book Appointment
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
