import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mr. Balkrishna Koli",
    role: "Managing Director (Ex-Army)",
    image: "/f1.png",
    description:
      "Provides strategic leadership and oversees all operations to deliver reliable and professional security services. Leads the management team, supervises operations, ensures high service standards, strengthens client relationships, and drives business growth.",
  },
  {
    name: "Mr. Vikas Shirsat",
    role: "HR & Operation Manager",
    image: "/f2.png",
    description:
      "Manages recruitment, employee relations, training, and workforce development to maintain a professional security team. Ensures smooth execution through a structured operational process with clear coordination and accountability.",
  },
  {
    name: "Mr. Sandip Kedar",
    role: "Operation Coordinator",
    image: "",
    description:
      "Coordinates daily security operations, site readiness, documentation, and staff deployment. Maintains effective communication between clients and the security team to ensure uninterrupted and efficient operations.",
  },
  {
    name: "Mr. Sopan Gangthade",
    role: "Office Admin",
    image: "",
    description:
      "Supervises the Central Monitoring Unit and controls communication between security guards, supervisors, and management. Maintains operational records, incident reports, and daily security documentation.",
  },
  {
    name: "Mr. Santosh Gaikwad",
    role: "Field Officer",
    image: "/f5.png",
    description:
      "Experienced security professional with over 3 years as a Supervisor. Conducts site inspections, manages guard deployment, maintains discipline, and ensures the safety and security of client premises.",
  },
  {
    name: "Mr. Sharad Satpute",
    role: "Field Officer",
    image: "/f6.png",
    description:
      "Experienced Supervisor with 4 years of field expertise. Responsible for managing security personnel, monitoring safety procedures, and ensuring the protection of people, property, and client assets.",
  },
  {
    name: "Mr. Shahaji Lokhande",
    role: "Field Officer",
    image: "/f7.png",
    description:
      "Experienced Supervisor with over 5 years of expertise. Oversees guard attendance, shift scheduling, uniforms, and performance while ensuring disciplined security operations and complete protection of client premises.",
  },
];

const Team = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14 lg:mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08172F] mt-3">
            Meet Our Experts
          </h2>

          <p className="text-gray-600 max-w-7xl mx-auto mt-5 leading-7 text-sm sm:text-base">
            Our experienced professionals are dedicated to delivering reliable,
            disciplined and professional security solutions with commitment,
            integrity and excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg
hover:shadow-2xl transition-all duration-500 hover:-translate-y-3
${
  index === 4
    ? "lg:col-start-2 lg:col-span-3"
    : index === 5
      ? "lg:col-start-5 lg:col-span-3"
      : index === 6
        ? "lg:col-start-8 lg:col-span-3"
        : "lg:col-span-3"
}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[300px] sm:h-[340px] lg:h-[380px]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 bg-[#08172F]/95
opacity-0 group-hover:opacity-100
translate-y-full group-hover:translate-y-0
transition-all duration-700
flex flex-col justify-center items-center
px-5 sm:px-6 text-center"
                >
                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <span className="mt-3 bg-yellow-400 text-[#08172F] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                    {member.role}
                  </span>

                  <p className="text-gray-200 mt-5 text-xs sm:text-sm leading-6 max-h-54 overflow-y-auto pr-1">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative bg-white px-5 py-6 text-center">
                <div className="absolute top-0 left-0 h-1 bg-yellow-400 w-0 group-hover:w-full transition-all duration-500"></div>

                <h3 className="text-lg sm:text-xl font-bold text-[#08172F]">
                  {member.name}
                </h3>

                <p className="text-yellow-400 text-sm sm:text-base mt-2 font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
