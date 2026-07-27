import React from "react";
import { PhoneCall, Mail } from "lucide-react";

const ContactHero = () => {
  return (
    <section
      className="relative h-[65vh] md:h-[75vh] flex items-center bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('https://www.securityms.in/images/s1.jpg')",
        backgroundPosition: "95% center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 pt-20">
        <div
          className="max-w-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
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