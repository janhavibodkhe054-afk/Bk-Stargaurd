import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] text-[#08172F] pt-16">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-16" />

              <div>
                <h2 className="text-2xl font-bold">BK STAR GUARD</h2>

                <p className="text-gray-600 text-sm">
                  Security & Manpower Services
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-8 mt-6">
              BK Star Guard provides trusted security guards, industrial
              security, housekeeping and manpower services with trained
              professionals ensuring complete safety and reliability.
            </p>

            <div className="flex gap-3 mt-8">
              <a
                href="#"
                className="w-11 h-11 border border-[#D4A017] text-[#08172F] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 border border-[#D4A017] text-[#08172F] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 border border-[#D4A017] text-[#08172F] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 border border-[#D4A017] text-[#08172F] flex items-center justify-center hover:bg-[#D4A017] hover:text-white transition duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Services */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-3xl font-bold mb-8 text-[#08172F]">Services</h3>

            <div className="space-y-4">
              {[
                "Security Guard Services",
                "Industrial Security Services",
                "Lady Security Guard Services",
                "Executive Protection (Bodyguards)",
                "VIP Security Services",
                "Bouncer Services",
                "Gunman Security Services",
              ].map((item, index) => (
                <Link
                  key={index}
                  to="/services"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#D4A017] transition duration-300"
                >
                  <FaChevronRight size={12} className="text-[#D4A017]" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-3xl font-bold mb-8 text-[#08172F]">
              Quick Links
            </h3>

            <div className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Training", path: "/train" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex items-center gap-3 text-gray-700 hover:text-[#D4A017] transition duration-300"
                >
                  <FaChevronRight size={12} className="text-[#D4A017]" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-3xl font-bold mb-8 text-[#08172F]">
              Contact Us
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#D4A017] mt-1 text-xl flex-shrink-0" />

                <p className="text-gray-700 leading-7">Maharashtra, India</p>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <FaEnvelope className="text-[#D4A017] mt-1 text-xl shrink-0" />

                <div className="space-y-2">
                  <p className="text-gray-700">bkstarguard@gmail.com</p>
                  <p className="text-gray-700">bkstaguard1@gmail.com</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-4 items-start">
                <FaPhoneAlt className="text-[#D4A017] mt-1 text-xl shrink-0" />

                <div className="space-y-2">
                  <p className="text-gray-700">+91 92721 36995 </p>
                  <p className="text-gray-700">+91 76209 66270</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#ECECEC] border-t border-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-700 text-center md:text-left">
            © 2026{" "}
            <span className="text-[#D4A017] font-semibold">
              BK Star Guard Security & Manpower Services
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-gray-700 text-center md:text-right">
            Designed & Developed by{" "}
            <a
              href="https://hashgridtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A017] font-semibold hover:underline"
            >
              Hashgrid Technologies Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
