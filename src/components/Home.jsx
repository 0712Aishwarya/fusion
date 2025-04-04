import React from "react";
import HomeImage from "../assets/home.png";

const Home = () => {
  return (
    <section className="relative h-[800px] w-full flex items-center justify-center bg-[#d7d5c8] px-4 overflow-hidden mt-20">
      {/* Background Image */}
      <img
        src={HomeImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Hero Content */}
      <div className="bg-white relative z-10 p-16 w-[600px] h-[480px] flex flex-col gap-6 items-center justify-center shadow-lg rounded-lg">
        <h3 className="text-[#a2783a] text-3xl font-semibold font-[cursive] py-2">
          Crafting Moments
        </h3>
       
        <p className="text-gray-600 text-center text-base leading-relaxed px-4">
          Whether it’s a wedding, celebration, or corporate gala – we
          transform your vision into reality with grace and elegance.
        </p>
        <a
          href="#contact"
          className="mt-4 px-6 py-3 bg-gradient-to-r from-[#7B3F00] to-[#38230d] text-white rounded-md font-semibold hover:opacity-90 transition-all"
        >
          Discover Our Services
        </a>
      </div>
    </section>
  );
};

export default Home;
