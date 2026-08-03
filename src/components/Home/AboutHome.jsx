import React from "react";
import { ShieldCheck, Users, Building2, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-24 lg:pt-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Image */}
          <div data-aos="fade-right" className="relative w-full">
            {/* Top Border */}
            <div className="absolute -top-3 sm:-top-5 -left-3 sm:-left-5 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 border-t-4 border-l-4 border-[#D4A017] rounded-tl-3xl z-10"></div>

            {/* Bottom Border */}
            <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 border-b-4 border-r-4 border-[#D4A017] rounded-br-3xl z-10"></div>

            <img
              src="/about1.png"
              alt="Security Team"
              className="relative z-20 w-full h-64 sm:h-80 md:h-[400px] lg:h-[450px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="text-left lg:text-left">
            <span className="inline-block text-[#D4A017] font-bold tracking-[2px] sm:tracking-[3px] uppercase mb-3 text-sm sm:text-base">
              About BK Star Guard
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#08172F] leading-tight">
              Trusted Security & Manpower Solutions
            </h2>

            <p className="text-gray-600 mt-5 leading-7 text-sm sm:text-base">
              BK Star Guard Security & Manpower Services provides reliable,
              professional and highly trained security personnel for industries,
              commercial establishments, residential societies, government
              organizations and corporate offices.
            </p>

            <p className="text-gray-600 mt-5 leading-7 text-sm sm:text-base">
              Our mission is to safeguard people, property and businesses
              through disciplined operations, modern security practices and
              round-the-clock protection with complete client satisfaction.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex justify-left lg:justify-start">
              <Link
                to="/about"
                className="bg-yellow-400 hover:bg-[#08172F] hover:text-white text-black px-6 sm:px-8 py-3 rounded-md font-semibold transition duration-300 text-sm sm:text-base"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
