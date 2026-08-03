import React from "react";
import { Link } from "react-router-dom";

export default function TrainingHero() {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh] bg-cover bg-top lg:bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.securityms.in/images/s1.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#08172F]/90 via-[#08172F]/65 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-10 lg:pt-28">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
              Security{" "}
              <span className="text-yellow-400">
                Training
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
              We provide professional security training programs that prepare
              our personnel to handle real-world security challenges with
              confidence, discipline, and professionalism. Our training follows
              PSARA guidelines and industry best practices to ensure the highest
              standards of safety and service.
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
                Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}