const Features = () => {
  const features = [
    "Personalized Treatment Plans",
    "Flexible Scheduling",
    "State-of-the-art Facility",
  ];

  return (
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
  );
};


export default Features;