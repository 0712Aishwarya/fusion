import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f3ebe0] px-4 py-2 md:py-2 border-b border-gray-300">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 md:h-16 object-contain" />
          <h1 className="text-[#7B3F00]">Fusion Planner</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 text-xl font-light tracking-wide">
          <Link to="hero" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-gray-600">
            CONTACT
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setShow(!show)}>
          <GiHamburgerMenu size={28} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col bg-[#a2783a] text-white absolute top-full left-0 w-full transition-all duration-300 z-20 rounded-t-md ${
          show ? "translate-y-0" : "-translate-y-[300px]"
        }`}
      >
        <div className="flex flex-col items-center py-4 gap-4 text-lg">
          <Link to="hero" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="cursor-pointer">
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="cursor-pointer">
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="cursor-pointer">
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="cursor-pointer">
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
