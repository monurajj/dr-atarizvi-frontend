import React from "react";

const Services = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-4">General Consultations</h3>
          <p className="text-gray-700">
            Comprehensive health check-ups and consultations.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-4">Diagnostics</h3>
          <p className="text-gray-700">
            Advanced diagnostic services for accurate results.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-4">Specialized Treatments</h3>
          <p className="text-gray-700">
            Personalized treatment plans for various conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
