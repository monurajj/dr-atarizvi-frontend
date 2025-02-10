import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Dr. Atarizvi Clinic. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            Terms of Service
          </a>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-secondary transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
