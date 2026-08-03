import React from "react";
import { Link } from "react-router-dom";

export default function GalleryHero() {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh] bg-cover bg-top lg:bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.securityms.in/images/s1.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08172F]/90 via-[#08172F]/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-10 lg:pt-28">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Our{" "}
              <span className="text-yellow-400">
                Gallery
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
              Explore our gallery showcasing our professional security guards,
              industrial security, corporate protection, event security,
              housekeeping services, manpower solutions, and our commitment to
              safety, discipline, and excellence.
            </p>

            {/* Breadcrumb */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base text-white">
              <Link
                to="/"
                className="hover:text-[#D4A017] transition duration-300"
              >
                Home
              </Link>

              <span className="text-[#D4A017]">/</span>

              <span className="font-semibold text-[#D4A017]">
                Gallery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}