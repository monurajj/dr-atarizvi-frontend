import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const ChatSupport = ({ isOpen, onToggle }) => {
  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <button
          onClick={onToggle}
          className="bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-40 ${
          isOpen ? "block" : "hidden"
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
      </motion.div>
    </>
  );
};

export default ChatSupport;
