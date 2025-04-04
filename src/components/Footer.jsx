"use client";
import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Send,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#d7d5c8] text-[black] px-5 py-12 flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-12">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-4xl font-normal tracking-[3px] font-serif">EVENT</h1>
          <p className="text-[#7B3F00] text-2xl font-[Alex Brush, cursive]">Events and Weddings</p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter */}
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-wide">Stay Connected</h2>
            <p className="mb-4 text-black /80">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg px-3 py-2 bg-transparent border border-[#7B3F00] text-[#7B3F00] placeholder:text-[#7B3F00]/80 pr-12"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-8 w-8 flex items-center justify-center rounded-full bg-[#7B3F00] text-white hover:scale-105 transition-transform"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#7B3F00]">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block hover:text-[#a2783a] transition-colors">Home</a>
              <a href="#" className="block hover:text-[#a2783a] transition-colors">About Us</a>
              <a href="#" className="block hover:text-[#a2783a] transition-colors">Services</a>
              <a href="#" className="block hover:text-[#a2783a] transition-colors">Products</a>
              <a href="#" className="block hover:text-[#a2783a] transition-colors">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#7B3F00]">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-[#7B3F00]">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full p-2 border border-[#7B3F00] hover:bg-[#7B3F00] hover:text-white transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-3 border-t pt-6 flex flex-col md:flex  justify-items-center items-center gap-4 text-sm text-[black]/80">
         
       <p>Developed by Aishwarya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
