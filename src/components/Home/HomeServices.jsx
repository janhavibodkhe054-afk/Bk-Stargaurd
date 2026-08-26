import React from "react";
import { Link } from "react-router-dom";

const services = [
 {
    title: "Corporate Security Services",
    image: "/public/professional-security-agency-pune.jpeg",
    desc: "Professional security solutions for offices, IT parks, banks and corporate premises.",
  },
  {
    title: "Industrial Security Services",
    image: "/public/24x7-security-services-pune.jpeg",
    desc: "Round-the-clock protection for factories, manufacturing plants and industrial units.",
  },
  {
    title: "Logistics Security Services",
    image: "/s7.jpg",
    desc: "Secure warehouses, transport hubs and logistics operations with trained guards.",
  },
];

const HomeServices = () => {
  return (
    <section className="relative bg-gray-50 pt-0 md:pt-20 pb-44">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-left md:text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#08172F]">
            Our Services
          </h2>

          <p className="mt-5 text-gray-600 max-w-4xl mx-auto">
            We provide professional security and manpower services with trained
            staff, modern security solutions and 24×7 support.
          </p>
        </div>

        {/* Cards */}
        {/* Cards */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#08172F]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4">{service.desc}</p>

                
              </div>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="relative z-20 flex justify-center mt-12 -mb-104">
          <Link
            to="/services"
            className="bg-yellow-400 hover:bg-white hover:text-black text-black font-semibold px-8 py-3 rounded-md transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
