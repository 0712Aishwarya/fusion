import React from "react";
import HomeImage from "../assets/home.png";
import { Element } from 'react-scroll';


const Home = () => {
  return (
    <>
    <Element name="home">
      {/* Top Feature Boxes */}
      <section className="flex justify-center items-center gap-4 px-4 bg-[#f3ede3] py-12 font-serif">
  {/* Left - Podcast */}
  <div
  className="bg-[#d1d3c8] w-64 h-32 flex flex-col items-center justify-center text-center shadow-md px-4"
  style={{
    borderTopLeftRadius: "150px",
    borderBottomLeftRadius: "0",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  }}
>
  <p className="text-sm"></p>
  <h3 className="text-xl font-semibold tracking-wide">Planning</h3>
</div>

  {/* Middle - Services */}
  <div className="bg-[#c6b7a8] w-64 h-32 flex flex-col items-center justify-center text-center shadow-md px-4">
    <p className="text-sm"></p>
    <h3 className="text-xl font-semibold tracking-wide">Executing</h3>
  </div>

  {/* Right - Journal */}
  <div
  className="bg-[#e7d0be] w-64 h-32 flex flex-col items-center justify-center text-center shadow-md px-4"
  style={{
    borderTopRightRadius: "0",
    borderBottomRightRadius: "150px",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  }}
>
    <p className="text-sm"></p>
    <h3 className="text-xl font-semibold tracking-wide">Celebrating</h3>
  </div>
</section>

      {/* Main Hero Section */}
      <section className="relative h-[800px] w-full flex items-center justify-center bg-[#d7d5c8] px-4 overflow-hidden">
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
      </Element>
    </>
  );
};

export default Home;
