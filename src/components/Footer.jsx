"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";
import logo from "../assets/logo.png"
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#d7d5c8] text-black px-5 py-12 flex justify-center">
  <div className="max-w-[1200px] w-full flex flex-col gap-12">
    {/* Logo & Title */}
    <div className="text-center flex flex-col items-center">
      <img src={logo} alt="Logo" className="h-14 md:h-20 object-contain mb-3" />
      <h1 className="text-3xl md:text-4xl font-normal tracking-wide font-serif">
        Fusion Planner
      </h1>
      <p className="text-[#7B3F00] text-xl md:text-2xl font-[Alex Brush, cursive] mt-1">
        Events and Weddings
      </p>
    </div>

    {/* Main Grid Content */}
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {/* Quick Links */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[#7B3F00]">Quick Links</h3>
        <nav className="space-y-2 text-sm">
          <Link to="home" className="block hover:text-[#a2783a] transition-colors cursor-pointer">Home</Link>
          <Link to="services" className="block hover:text-[#a2783a] transition-colors cursor-pointer">Services</Link>
          <Link to="about" className="block hover:text-[#a2783a] transition-colors cursor-pointer">About</Link>
          <Link to="contact" className="block hover:text-[#a2783a] transition-colors cursor-pointer">Contact</Link>
        </nav>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[#7B3F00]">Contact Us</h3>
        <address className="space-y-2 text-sm not-italic leading-relaxed">
          <p>CL-7 Rashmi Palace, Market Xing, Sultanganj,<br />Bypass Rd, Kamla Nagar, Agra, Uttar Pradesh 282005</p>
          <p>Phone: <a href="tel:+917455840042" className="hover:text-[#7B3F00] transition">+91 7455840042</a></p>
          <p>Email: <a href="mailto:fusionplanners08@gmail.com" className="hover:text-[#7B3F00] transition">fusionplanners08@gmail.com</a></p>
        </address>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="mb-4 text-xl font-semibold text-[#7B3F00]">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/1ZLz6TLTj3/?mibextid=wwXIfr"
            aria-label="Facebook"
            className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/fusionplanners_nishchal_jain?igsh=b21jZ25tdmZrdTNp&utm_source=qr"
            aria-label="Instagram"
            className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-8 border-t pt-6 flex flex-col items-center text-sm text-black/70">
      <p>© {new Date().getFullYear()} Fusion Planner — All rights reserved</p>
      <p>Developed by Aishwarya</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
