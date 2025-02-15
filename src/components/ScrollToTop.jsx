import React from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  return (
    <motion.button
      className="fixed bottom-6 left-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
};

export default ScrollToTop;
