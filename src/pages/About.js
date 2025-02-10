import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        About Dr. Atarizvi
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://via.placeholder.com/500x300"
            alt="Dr. Atarizvi"
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="text-gray-700 mb-4">
            Dr. Atarizvi is a highly experienced medical professional with over
            15 years of practice in general medicine and diagnostics. He is
            dedicated to providing personalized care to his patients.
          </p>
          <p className="text-gray-700">
            His clinic is equipped with state-of-the-art facilities to ensure
            accurate diagnoses and effective treatments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
