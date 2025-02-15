export const ImageModal = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.img
        src={selectedImage}
        alt="Selected"
        className="max-w-full max-h-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      />
    </motion.div>
  );
};
