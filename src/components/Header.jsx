import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#f3ebe0] border-b border-gray-300">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center px-4 py-2 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-12 md:h-16 object-contain" />
            <h1 className="text-[#2f1c08] text-2xl md:text-3xl font-semibold">
              Fusion Planner
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-xl text-[#2f1c08]">
            <Link to="home" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">HOME</Link>
            <Link to="services" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">SERVICES</Link>
            <Link to="about" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">ABOUT</Link>
            <Link to="contact" spy={true} smooth={true} duration={500} className="hover:underline cursor-pointer">CONTACT</Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-3xl text-[#2f1c08]"
            onClick={() => setShow(!show)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu (below hero) */}
      <div
        className={`md:hidden transition-all duration-300 w-full bg-[#a2783a] text-white text-lg py-4 shadow-md fixed left-0 z-40 ${
          show ? "top-[80px] opacity-100 visible" : "top-[-300px] opacity-0 invisible"
        }`}
      >
        <Link to="hero" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="block py-2 text-center">HOME</Link>
        <Link to="services" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="block py-2 text-center">SERVICES</Link>
        <Link to="about" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="block py-2 text-center">ABOUT</Link>
        <Link to="contact" spy={true} smooth={true} duration={500} onClick={() => setShow(false)} className="block py-2 text-center">CONTACT</Link>
      </div>
    </>
  );
};

export default Header;
