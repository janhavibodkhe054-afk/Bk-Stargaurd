import React from "react";
import { PhoneCall, Mail } from "lucide-react";

const ContactHero = () => {
  return (
    <section
      className="relative h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[75vh] xl:h-[70vh] bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/contacthero.png')",
        backgroundPosition: "center 25%",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 lg:pt-48 text-center lg:text-left">
        <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-5xl font-bold text-white leading-tight">
            Contact <span className="text-yellow-400">Us</span>
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg leading-8 max-w-2xl">
            We'd love to hear from you. Whether you have a question about our
            services, projects, or business opportunities, our team is ready to
            assist you.
          </p>

          {/* Buttons */}

          {/* Breadcrumb */}
          <div className="mt-12 text-gray-300 text-sm">
            Home
            <span className="mx-2 text-yellow-400">/</span>
            <span className="text-white">Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
