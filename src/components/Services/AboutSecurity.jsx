import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutSecurity() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative order-1 lg:order-1" data-aos="fade-left">
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/service2.jpg"
                alt="Security Services"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover rounded-2xl"
              />
            </div>

            {/* Floating Image */}
            <div
  className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-white p-2 sm:p-3 rounded-2xl shadow-2xl hidden md:block"
  data-aos="zoom-in"
  data-aos-delay="300"
>
  <img
    src="/logo.png"
    alt="Professional Security"
    className="w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-contain rounded-xl bg-white"
  />
</div>
          </div>
          {/* Left Content */}
          <div
  className="order-2 lg:order-2"
  data-aos="fade-right"
>
            {/* Tag */}
           <span className="inline-flex items-center bg-yellow-100 text-yellow-600 text-xs sm:text-sm font-semibold tracking-[2px] uppercase px-4 sm:px-5 py-2 rounded-full mb-5">
              Our Expertise
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#08172F] leading-tight mb-5">
              Trusted Security & Manpower Solutions
            </h2>

            {/* Highlight Box */}
            <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6 mb-5">
              <p className="text-base sm:text-lg text-gray-700 leading-7 sm:leading-8 font-medium">
                BK Star Guard Security and Manpower Services delivers reliable,
                professional, and customized security solutions designed to
                protect businesses, industries, commercial establishments,
                residential communities, and public events with complete
                confidence.
              </p>
            </div>

            {/* Paragraph */}
            <p className="text-sm sm:text-base text-gray-600 leading-7 sm:leading-8 mb-4">
              Our highly trained security personnel are committed to
              safeguarding people, property, and valuable assets through
              disciplined operations, proactive monitoring, and quick response.
              From corporate offices and industrial facilities to shopping
              complexes, educational institutions, warehouses, and residential
              societies, we provide dependable protection backed by
              professionalism and integrity.
            </p>

            <p className="text-sm sm:text-base text-gray-600 leading-7 sm:leading-8 mb-4">
              We specialize in security guards, industrial security, corporate
              security, housekeeping services, manpower supply, bouncers,
              bodyguards, and event security. Every service is tailored to meet
              the specific needs of our clients, ensuring maximum safety,
              operational efficiency, and complete peace of mind through 24×7
              security support.
            </p>

            {/* CTA */}
            {/* <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-[#08172F] hover:bg-yellow-400 hover:text-[#08172F] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ShieldCheck size={20} />
              Get Free Consultation
            </Link> */}
          </div>

          {/* Right Images */}
        </div>
      </div>
    </section>
  );
}
