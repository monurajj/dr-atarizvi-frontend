import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold font-montserrat mb-4">
            Dr. Atarizvi Clinic
          </h3>
          <p className="text-emerald-200 mb-6">
            Providing exceptional healthcare with compassion and expertise.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              <FaFacebook size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              <FaInstagram size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </motion.a>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-emerald-200 hover:text-emerald-400 transition duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Copyright */}
          <p className="text-emerald-300 text-sm">
            &copy; {new Date().getFullYear()} Dr. Atarizvi Clinic. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
