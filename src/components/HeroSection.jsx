import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const features = [
    "Personalized Treatment Plans",
    "Flexible Scheduling",
    "State-of-the-art Facility",
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 flex flex-col justify-center p-8 lg:p-16"
        >
          <h1 className="font-serif text-4xl lg:text-6xl font-bold text-emerald-950 mb-6 tracking-tight">
            Welcome to
            <span className="block text-emerald-700 mt-2 font-sans">
              Dr. Atarizvi Clinic
            </span>
          </h1>

          <p className="text-lg text-emerald-800 mb-8 leading-relaxed font-light">
            With over 15 years of dedicated service, we combine cutting-edge
            medical expertise with compassionate care. Our commitment to your
            health goes beyond treatment – we focus on your overall well-being
            and long-term health goals.
          </p>

          <div className="space-y-6 mb-8">
            {features.map((text, index) => (
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 relative"
        >
          <div className="h-full w-full">
            <img
              src="/images/doctor.jpg"
              alt="Dr. Atarizvi"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900/90 to-transparent p-8">
              <h2 className="text-white text-3xl font-serif font-bold tracking-tight">
                Dr. Sarah Atarizvi
              </h2>
              <p className="text-emerald-50 mt-2 font-medium tracking-wide">
                Chief Medical Director
              </p>
              <p className="text-emerald-100 mt-1 font-light">
                MD, FACP - Internal Medicine
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
