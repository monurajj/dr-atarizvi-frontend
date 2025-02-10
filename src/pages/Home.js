import React from "react";
import { motion } from "framer-motion";
import heropageImage from "../assets/firsthomepageimage.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-100 font-sans ">
      {/* Hero Section with Split Layout */}
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
              <div className="flex items-center">
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
                <p className="ml-4 text-emerald-800 font-medium">
                  Personalized Treatment Plans
                </p>
              </div>
              <div className="flex items-center">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-emerald-800 font-medium">
                  Flexible Scheduling
                </p>
              </div>
              <div className="flex items-center">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-emerald-800 font-medium">
                  State-of-the-art Facility
                </p>
              </div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
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
            <div className="h-full w-full">
              <img
                src={heropageImage}
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
    </div>
  );
};

export default Home;
