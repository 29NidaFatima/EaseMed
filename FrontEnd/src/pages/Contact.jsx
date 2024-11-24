import React from 'react';
import { assets } from '../assets/assets'; // Ensure the path to `assets` is correct and valid.

const Contact = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-10 space-y-10">
      {/* Contact Us Header */}
      <div className="text-center">
        <h1 className="text-2xl text-gray-500 font-medium">
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </h1>
        <p className="text-gray-400 mt-2">
          We are here to assist you with your inquiries.
        </p>
      </div>

      {/* Contact Image */}
      <div className="w-full flex justify-center">
        {assets?.contact_image ? (
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-md shadow-lg"
            src={assets.contact_image}
            alt="Contact EaseMed"
          />
        ) : (
          <p className="text-gray-500 italic">Image not available</p>
        )}
      </div>

      <div className="w-full flex flex-col items-start gap-8 md:max-w-3xl">
    
        <div>
          <h2 className="font-semibold text-lg text-gray-600">OUR OFFICE</h2>
          <address className="text-gray-500 not-italic mt-2">
            00000 Willms Station
            <br />
            Suite 000, Washington, USA
          </address>
          <p className="text-gray-500 mt-2">
            Tel: <a href="tel:+0000000000" className="text-blue-500">(000) 000-0000</a>
            <br />
            Email: <a href="mailto:2529nida17@gmail.com" className="text-blue-500">2529nida17@gmail.com</a>
          </p>
        </div>

        {/* Careers Section */}
        <div>
          <h2 className="font-semibold text-lg text-gray-600">CAREERS AT EASEMED</h2>
          <p className="text-gray-500 mt-2">
            Interested in joining our team? Explore our job openings and learn more about how you can make an impact.
          </p>
          <button
            className="mt-4 px-6 py-2 border border-black text-black rounded-lg hover:bg-black hover:text-white transition duration-300"
            aria-label="Explore job opportunities at EaseMed"
          >
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
