import React from 'react';
import { assets } from '../assets/assets'; // Ensure the path to `assets` is correct and the file exists.

const Contact = () => {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      {/* Contact Us Header */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      {/* Contact Image */}
      <div className="my-10 flex justify-center md:justify-between flex-wrap gap-10 text-sm">
        <img
          className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          src={assets.contact_image} // Ensure `contact_image` exists and points to a valid image file.
          alt="Contact EaseMed"
        />
      </div>

      {/* Contact Details */}
      <div className="w-full flex flex-col items-start gap-6 md:max-w-3xl">
        {/* Office Details */}
        <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
        <p className="text-gray-500">
          00000 Willms Station
          <br />
          Suite 000, Washington, USA
        </p>
        <p className="text-gray-500">
          Tel: (000) 000-0000
          <br />
          Email: 2529nida17@gmail.com
        </p>

        {/* Careers Section */}
        <p className="font-semibold text-lg text-gray-600">CAREERS AT EASEMED</p>
        <p className="text-gray-500">
          Learn more about our teams and job openings.
        </p>
        <button
          className="self-center md:self-start border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
          aria-label="Explore job opportunities at EaseMed"
        >
          Explore Jobs
        </button>
      </div>
    </div>
  );
};

export default Contact;
