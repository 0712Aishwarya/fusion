import React from "react";
import { Link } from "react-scroll";
import HeroImg from "../assets/heroside.png";
import HeroImgFull from "../assets/heroGen.png"

const HeroSection = () => {
  return (
    <section className="relative h-[800px] w-full flex items-center justify-center bg-[#d7d5c8] px-4 overflow-hidden">
      {/* Decorative bottom image */}
      
  <img
  src={HeroImgFull}
  alt="Decorative"
  className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-60 w-80"
/>

<img
  src={HeroImgFull}
  alt="Decorative"
  className="absolute right-0 top-3/4 transform -translate-y-1/2 opacity-60 w-80"
/>


      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src={HeroImg}
        alt="Hero"
      />

      {/* Hero Content */}
      <div className="relative z-10 p-12 flex flex-col gap-6 max-w-2xl w-full text-center items-center ">
        
        <h1 className="text-[70px] font-serif font-normal tracking-wide text-current leading-snug">
          Creating memories to last a lifetime
        </h1>
        
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="px-6 py-2 bg-gradient-to-r from-[#7B3F00] to-[#38230d] text-white rounded-md font-semibold hover:opacity-90 transition-all"
        >
          BOOK NOW
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
