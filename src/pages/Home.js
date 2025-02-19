import React, { useState } from "react";
import { motion } from "framer-motion";
import doctorImage from "../assets/firsthomepageimage.png";
import { MessageCircle, X, ChevronUp } from "lucide-react";
import GallerySection from "../components/GallerySection";
import ConditionsSection from "../components/ConditionsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ChatSupport from "../components/ChatSupport";

import {
  // MessageCircle,
  // X,
  Brain,
  Heart,
  Stethoscope,
  Bone,
  Shield,
  Trophy,
  Users,
  Clock,
  // ChevronUp,
  Image as ImageIcon,
} from "lucide-react";
const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const conditions = [
    {
      icon: Brain,
      title: "Chronic Neurological Disorders",
      description:
        "Comprehensive care for conditions like Parkinson's, Alzheimer's, and multiple sclerosis.",
    },
    {
      icon: Heart,
      title: "Chronic Cardiovascular Conditions",
      description:
        "Management of hypertension, heart failure, and coronary artery disease.",
    },
    {
      icon: Stethoscope,
      title: "Chronic Respiratory Diseases",
      description:
        "Treatment for COPD, asthma, and other long-term respiratory conditions.",
    },
    {
      icon: Bone,
      title: "Chronic Musculoskeletal Disorders",
      description: "Care for arthritis, osteoporosis, and chronic joint pain.",
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Expert Chronic Care",
      description:
        "Specialized in managing long-term health conditions with evidence-based treatments.",
    },
    {
      icon: Trophy,
      title: "Advanced Diagnostics",
      description:
        "Utilizing cutting-edge technology for accurate diagnosis and monitoring.",
    },
    {
      icon: Users,
      title: "Patient-Centered Approach",
      description:
        "Personalized care plans tailored to your unique health needs.",
    },
    {
      icon: Clock,
      title: "Continuous Support",
      description:
        "Ongoing care and 24/7 support for managing chronic conditions.",
    },
  ];

  const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
    "/images/gallery6.jpg",
  ];

  return (
    <div className="min-h-screen bg-green-100 font-sans">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16"
          >
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">
              Welcome to
              <span className="block text-emerald-700 mt-2 font-sans">
                Dr. Atarizvi's Chronic Care Clinic
              </span>
            </h1>

            <p className="text-lg text-emerald-800 mb-8 leading-relaxed font-light">
              With over 15 years of experience in managing chronic diseases, we
              are dedicated to providing comprehensive, long-term care. Our
              approach focuses on improving your quality of life through
              personalized treatment plans and continuous support.
            </p>

            <div className="space-y-6 mb-8">
              {[
                "Personalized Chronic Disease Management",
                "Flexible Appointment Scheduling",
                "State-of-the-art Diagnostic Tools",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="ml-4 text-emerald-800 font-medium">{text}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300 w-fit tracking-wide"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>

          {/* Right Content - Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="h-min w-full mt-16">
              <img
                src={doctorImage}
                alt="Dr. Atarizvi"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/90 to-transparent p-8">
                <h2 className="text-white text-3xl font-serif font-bold tracking-tight">
                  Dr. Sarah Atarizvi
                </h2>
                <p className="text-emerald-50 mt-2 font-medium tracking-wide">
                  Chronic Disease Specialist
                </p>
                <p className="text-emerald-100 mt-1 font-light">
                  MD, FACP - Internal Medicine
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Conditions We Manage Section */}
      <ConditionsSection conditions={conditions} />

      {/* Gallery Section */}
      <GallerySection galleryImages={galleryImages} />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection whyChooseUs={whyChooseUs} />

      {/* Chat Support Button */}
      {/* <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </motion.div> */}

      {/* Chat Support Window */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isChatOpen ? 1 : 0, y: isChatOpen ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-40 ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4 border-b border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-900">
            Chat Support
          </h3>
          <p className="text-sm text-emerald-600">How can we help you today?</p>
        </div>
        <div className="h-96 p-4 bg-emerald-50">
          <p className="text-center text-emerald-700">
            Chat support coming soon!
          </p>
          <p className="text-center text-sm text-emerald-600 mt-2">
            We'll be integrating with Gemini API shortly.
          </p>
        </div>
      </motion.div> */}

        <ChatSupport/>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-6 left-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default Home;
