import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      className="relative py-12 md:py-16"
      style={{
        backgroundImage: "url('https://img.magnific.com/premium-photo/abstract-blue-geometric-background-high-quality-high-resolution_947073-31563.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08172F]/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div data-aos="fade-right">
            <span className="text-yellow-400 uppercase tracking-[3px] font-semibold text-sm">
              Need Security Services?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Let's Secure Your Business
            </h2>
          </div>

          {/* Right */}
          <div data-aos="fade-left">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-white text-[#08172F] px-8 py-4 rounded-full font-semibold transition duration-300"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}