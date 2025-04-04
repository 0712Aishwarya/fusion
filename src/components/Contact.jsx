import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="w-full px-4 py-10 bg-[#f3f3ed] flex justify-center">
      <form className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm space-y-4">
        
        {/* Heading */}
        <h2 className="text-xl font-semibold text-center text-[#a2783a]">Get in Touch</h2>

        {/* Name Input */}
        <div className="border border-gray-300 rounded-md flex items-center p-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full outline-none bg-transparent px-2 text-gray-700"
          />
        </div>

        {/* Phone Input with Country Code */}
        <div className="border border-gray-300 rounded-md flex items-center">
          <span className="bg-gray-100 px-4 py-2 rounded-l-md text-gray-700 border-r">+91</span>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            className="w-full outline-none bg-transparent px-2 text-gray-700 py-2"
          />
        </div>

        {/* Service Dropdown */}
        <div className="border border-gray-300 rounded-md flex items-center p-2">
          <FaMapMarkerAlt className="text-gray-500" />
          <select className="w-full outline-none bg-transparent px-2 text-gray-700">
            <option value="">Select event location</option>
            <option value="wedding">Wedding Planning</option>
            <option value="decor">Event Decoration</option>
            <option value="catering">Catering Services</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#7B3F00] to-[#38230d] text-white py-3 rounded-md font-semibold hover:opacity-90 transition-all"
        >
          Book Free Expert Call
        </button>
      </form>
    </section>
  );
}

export default Contact;
