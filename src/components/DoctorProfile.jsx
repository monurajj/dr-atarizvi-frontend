const DoctorProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:w-1/2 relative"
    >
      <div className="h-full w-full">
        <img
          src="/images/doctor.jpg"
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
  );
};


export default DoctorProfile;