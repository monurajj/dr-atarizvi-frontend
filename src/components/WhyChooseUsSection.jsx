import React from "react";
import { motion } from "framer-motion";

const WhyChooseUsSection = ({ whyChooseUs }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="py-16 bg-emerald-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-emerald-950 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-emerald-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
