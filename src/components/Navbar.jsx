import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaSearch,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth < 1024) {
      setHideTopBar(true);
      return;
    }

    setHideTopBar(window.scrollY > 80);
  };

  handleScroll(); // Initial call
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[60] bg-[#08172F] text-white overflow-hidden transition-all duration-500 ${
          hideTopBar
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          <div className="flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>24×7 Emergency Support</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" />
              <span>+91 86683 17591</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>info@bkstarguard.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold text-yellow-400">Follow Us</span>

            <FaFacebookF className="hover:text-yellow-400 cursor-pointer duration-300" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer duration-300" />
            <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer duration-300" />
            <FaWhatsapp className="hover:text-yellow-400 cursor-pointer duration-300" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}

      <nav
        className={`fixed left-0 right-0 z-50 bg-white shadow-md transition-all duration-500
  top-0
  ${hideTopBar ? "lg:top-0" : "lg:top-[48px]"}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="w-16 md:w-16 lg:w-20" />

            <div>
              <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-[#08172F]">
                BK STAR GUARD
              </h2>

              <p className="text-[10px] md:text-xs lg:text-sm text-gray-500">
                Security & Manpower Services
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-10 text-[16px] font-semibold text-[#08172F]">
            <Link to="/" className="hover:text-[#D4A017] transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-[#D4A017] transition">
              About
            </Link>

            <Link to="/services" className="hover:text-[#D4A017] transition">
              Services
            </Link>

            <Link to="/industries" className="hover:text-[#D4A017] transition">
              Industries
            </Link>

            <Link to="/clients" className="hover:text-[#D4A017] transition">
              Clients
            </Link>

            <Link to="/career" className="hover:text-[#D4A017] transition">
              Careers
            </Link>

            <Link to="/contact" className="hover:text-[#D4A017] transition">
              Contact
            </Link>
          </ul>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-5">
            <button className="bg-yellow-400 hover:bg-[#08172F] hover:text-white px-6 py-3 rounded-full font-semibold duration-300">
              Get Free Quote
            </button>
          </div>

          {/* Mobile */}

          <button onClick={() => setMenu(!menu)} className="lg:hidden text-3xl">
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menu && (
          <div className="lg:hidden bg-white shadow-md">
            {/* Top Contact Info */}
            <div className="bg-[#08172F] text-white px-6 py-5">
              <h3 className="text-yellow-400 font-semibold mb-4">
                Contact Information
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span>24×7 Emergency Support</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-yellow-400" />
                  <span>info@bkstarguard.com</span>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5 text-lg">
                <FaFacebookF className="hover:text-yellow-400 cursor-pointer duration-300" />
                <FaInstagram className="hover:text-yellow-400 cursor-pointer duration-300" />
                <FaLinkedinIn className="hover:text-yellow-400 cursor-pointer duration-300" />
                <FaWhatsapp className="hover:text-yellow-400 cursor-pointer duration-300" />
              </div>
            </div>

            {/* Navigation Pages */}

            <Link
              to="/"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Services
            </Link>

            <Link
              to="/industries"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Industries
            </Link>

            <Link
              to="/clients"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Clients
            </Link>

            <Link
              to="/career"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Careers
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenu(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100"
            >
              Contact
            </Link>

            {/* Button */}

            <div className="p-5">
              <button className="w-full bg-[#D4A017] hover:bg-[#08172F] hover:text-white py-3 rounded-full font-semibold transition-all duration-300">
                Get Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
