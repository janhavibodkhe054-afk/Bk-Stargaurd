import React from "react";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    title: "Corporate Security Services",
    image: "/24x7-security-services-pune.jpeg",
    desc: "Professional security solutions for offices, IT parks, banks and corporate premises.",
  },
  {
    title: "Industrial Security Services",
    image: "/trained-security-guards-pune.jpeg",
    desc: "Round-the-clock protection for factories, manufacturing plants and industrial units.",
  },
  {
    title: "Logistics Security Services",
    image: "/reliable-security-services-pune.jpeg",
    desc: "Secure warehouses, transport hubs and logistics operations with trained guards.",
  },
  {
    title: "Construction Site Security",
    image: "/s3.jpg",
    desc: "Protect construction sites, machinery and materials from theft and unauthorized access.",
  },
  {
    title: "Event Security Services",
    image: "/s5.jpeg",
    desc: "Crowd control and complete security management for events and public gatherings.",
  },
  {
    title: "Housekeeping Services",
    image: "/sh.jpeg",
    desc: "Reliable housekeeping staff for offices, hospitals, malls and residential complexes.",
  },
  {
    title: "Residential Security Guards",
    image: "/sr.jpeg",
    desc: "Dedicated security personnel for apartments, societies, villas and residential communities.",
  },
  {
    title: "Commercial Security Guards",
    image: "/s8.jpeg",
    desc: "Professional guarding solutions for malls, showrooms, hotels and commercial buildings.",
  },
  {
    title: "Ladies Security Guards",
    image:
      "/ladies security service.jpg",
    desc: "Experienced female security guards for hospitals, schools, offices and special events.",
  },
  {
    title: "Armed Gunman Services",
    image: "/professional-manpower-services-pune.jpeg",
    desc: "Licensed armed security personnel for banks, ATMs, cash vans and high-risk locations.",
  },
  {
    title: "VIP Bodyguard Services",
    image:
      "/vip bodyguard services.webp",
    desc: "Professional personal protection officers for VIPs, executives and dignitaries.",
  },
  {
    title: "Bouncer Security Services",
    image: "/professional-security-agency-pune.jpeg",
    desc: "Trained bouncers for clubs, hotels, weddings, concerts and private functions.",
  },
  {
    title: "Labour Supply Services",
    image: "/housekeeping-manpower-services-pune.jpeg",
    desc: "Skilled and unskilled manpower for industries, warehouses and construction projects.",
  },
  {
    title: "Facility Management Services",
    image: "/manpower-services-pune.jpeg",
    desc: "Integrated facility support including maintenance, security and housekeeping.",
  },
  {
    title: "Special Security Squad",
    image: "/s9.jpeg",
    desc: "Rapid response teams for emergency situations, VIP movements and sensitive locations.",
  },
  {
    title: "Manager Manpower Services",
    image: "/manager services.png",
    desc: "Experienced managers for supervising teams, handling daily operations and ensuring smooth business activities.",
  },
  {
    title: "Professional Driver Services",
    image: "/driver.jpg",
    desc: "Reliable and experienced drivers for corporate, personal, commercial and transportation requirements.",
  },
  {
    title: "Office Peon Services",
    image: "/peonservices.jpg",
    desc: "Dependable office support staff for document handling, office assistance, errands and daily administrative tasks.",
  },
  {
    title: "Clerical Staff Services",
    image: "/clerical staff.png",
    desc: "Trained clerical staff for documentation, data entry, record keeping and routine administrative support.",
  },
  {
    title: "Back Office Labour Services",
    image: "/back office labour services.jpg",
    desc: "Reliable back-office manpower for data processing, documentation, packing, sorting and operational support.",
  },
];
export default function ServicesSection() {
  const whatsappNumber = "918888320357"; // Your number

  const openWhatsapp = (service) => {
    const message = `Hello BK Star Guard,

I am interested in your *${service}* service.

Please share more details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-yellow-400 font-semibold tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#08172F] mt-3">
            Professional Security Solutions
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 50, 300)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden h-60"
                data-aos="zoom-in"
                
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="w-14 h-1 bg-yellow-400 rounded-full mb-5"></div>

                <h3 className="text-2xl font-bold text-[#08172F] group-hover:text-yellow-500 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4 mb-8">
                  {service.desc}
                </p>

                {/* Button */}
                <button
                  onClick={() => openWhatsapp(service.title)}
                  className="w-full bg-[#08172F] hover:bg-green-600 text-white py-3 rounded-xl font-semibold flex justify-center items-center gap-3 transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
