import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/aboutpageimage.jpeg"

const About = () => {
  const achievements = [
    {
      number: "15+",
      label: "Years Experience",
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "10k+",
      label: "Patients Treated",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      number: "99%",
      label: "Patient Satisfaction",
      icon: (
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-emerald-900 text-center mb-4">
            About Dr. Atarizvi
          </h1>
          <p className="text-emerald-700 text-center text-lg mb-12">
            Dedicated to Excellence in Healthcare
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Dr. Atarizvi"
                  className="rounded-lg shadow-xl w-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-600/10 rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-montserrat text-emerald-900 mb-4">
                Exceptional Care, Outstanding Results
              </h2>
              <p className="text-emerald-800 text-lg leading-relaxed mb-4">
                Dr. Atarizvi brings over 15 years of expertise in general
                medicine and diagnostics to provide comprehensive healthcare
                solutions. His approach combines cutting-edge medical knowledge
                with compassionate patient care.
              </p>
              <p className="text-emerald-800 text-lg leading-relaxed mb-6">
                The clinic features state-of-the-art diagnostic equipment and
                treatment facilities, ensuring that patients receive the highest
                standard of medical care in a comfortable and welcoming
                environment.
              </p>

              <div className="space-y-4">
                {[
                  "Board Certified in Internal Medicine",
                  "Fellow of the American College of Physicians",
                  "Advanced Diagnostic Specialist",
                ].map((credential, index) => (
                  <div key={index} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-emerald-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-emerald-800">{credential}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gradient-to-b from-white to-emerald-50 p-6 rounded-xl shadow-lg text-center border border-emerald-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-600">{achievement.icon}</div>
                </div>
                <h3 className="text-3xl font-bold font-montserrat text-emerald-900 mb-2">
                  {achievement.number}
                </h3>
                <p className="text-emerald-700">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
