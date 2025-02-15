import React from "react";
import { motion } from "framer-motion";

const ConditionsSection = ({ conditions }) => {
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
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-emerald-950 text-center mb-12">
          Conditions We Manage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {conditions.map((condition, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-emerald-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
            >
              <condition.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                {condition.title}
              </h3>
              <p className="text-emerald-700">{condition.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ConditionsSection;

