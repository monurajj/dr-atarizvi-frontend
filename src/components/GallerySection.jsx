import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

const GallerySection = ({ galleryImages }) => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.05 },
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
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <motion.img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <ImageIcon className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />
        </motion.div>
      )}
    </motion.section>
  );
};

export default GallerySection;
