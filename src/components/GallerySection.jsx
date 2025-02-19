import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image01 from "../assets/GallaryImage/awart01.jpeg";
import Image02 from "../assets/GallaryImage/award02.jpeg";
import Image03 from "../assets/GallaryImage/JustSingleImage.jpeg";
import Image04 from "../assets/GallaryImage/flagTrip.jpeg";
import Image05 from "../assets/GallaryImage/gettingDegree.jpeg";
import Image06 from "../assets/GallaryImage/officeImage.jpeg";

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  // Memoize the galleryItems array to prevent unnecessary recreations
  const galleryItems = useMemo(
    () => [
      {
        image: Image01,
        title: "State-of-the-Art Facility",
        description:
          "Our modern medical facility equipped with the latest technology for optimal patient care.",
        category: "Facilities",
      },
      {
        image: Image02,
        title: "Patient Consultation Room",
        description:
          "Comfortable and private consultation spaces designed for detailed patient discussions.",
        category: "Patient Care",
      },
      {
        image: Image03,
        title: "Advanced Medical Equipment",
        description:
          "Latest medical technology ensuring precise diagnostics and treatment.",
        category: "Technology",
      },
      {
        image: Image04,
        title: "Advanced Medical Equipment",
        description:
          "Latest medical technology ensuring precise diagnostics and treatment.",
        category: "Technology",
      },
      {
        image: Image05,
        title: "Advanced Medical Equipment",
        description:
          "Latest medical technology ensuring precise diagnostics and treatment.",
        category: "Technology",
      },
      {
        image: Image06,
        title: "Advanced Medical Equipment",
        description:
          "Latest medical technology ensuring precise diagnostics and treatment.",
        category: "Technology",
      },
    ],
    [] // Empty dependency array ensures this is only created once
  );

  // Preload images for smoother transitions
  useEffect(() => {
    galleryItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
    });
  }, [galleryItems]); // Now galleryItems is stable due to useMemo

  const navigateGallery = (direction) => {
    const newIndex =
      direction === "next"
        ? (selectedIndex + 1) % galleryItems.length
        : (selectedIndex - 1 + galleryItems.length) % galleryItems.length;

    setDirection(direction === "next" ? 1 : -1);
    setSelectedItem(galleryItems[newIndex]);
    setSelectedIndex(newIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-serif text-blue-900 mb-4">
            Experience Excellence in Healthcare
          </h2>
          <p className="text-lg text-gray-600">
            Take a virtual tour of our modern medical facility
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative rounded-xl shadow-lg bg-white"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="relative h-[15rem] cursor-pointer overflow-hidden rounded-t-xl"
                onClick={() => {
                  setSelectedItem(item);
                  setSelectedIndex(index);
                }}
                whileHover="hover"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute bottom-0 p-6 w-full">
                    <span className="text-sm font-medium text-blue-200 mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 bg-white p-2 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                  >
                    <ZoomIn className="w-5 h-5 text-blue-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence custom={direction}>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Close gallery"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>

              <div className="relative h-[600px]">
                <AnimatePresence custom={direction}>
                  <motion.img
                    key={selectedIndex}
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover object-center"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={() => navigateGallery("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                  onClick={() => navigateGallery("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="p-8">
                <span className="text-sm font-medium text-blue-600 mb-2 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GallerySection;
