import React from "react";

const teamMembers = [
  // --- 1. MANAGING DIRECTOR ---
  {
    name: "Mr. Balkrishna Koli",
    role: "Managing Director (Ex-Army)",
    image: "/balkrishna-koli.jpeg",
    description:
      "Provides strategic leadership and oversees all operations to deliver reliable and professional security services. Leads the management team, supervises operations, ensures high service standards, strengthens client relationships, and drives business growth.",
  },

  // --- 2. HR MANAGER ---
  {
    name: "Mr. Vikas Shirsat",
    role: "HR Manager",
    image: "/vikas.jpeg",
    description:
      "Heads nocturnal quick-response patrolling units across industrial corridors, conducting random spot-checks and maintaining 24/7 central control connectivity.",
  },

  // --- 3. SENIOR SUPERVISOR ---
  {
    name: "Mr. Sharad Satpute",
    role: "Senior Supervisor",
    image: "/sharad.jpeg",
    description:
      "Experienced Supervisor with 4 years of field expertise. Responsible for managing security personnel, monitoring safety procedures, and ensuring the protection of people, property, and client assets.",
  },

  // --- 4. SUPERVISORS ---
  {
    name: "Mr. Santosh Gaikwad",
    role: "Supervisor",
    image: "/santosh.jpeg",
    description:
      "Experienced security professional with over 3 years as a Supervisor. Conducts site inspections, manages guard deployment, maintains discipline, and ensures the safety and security of client premises.",
  },
  {
    name: "Mr. Shahaji Lokhande",
    role: "Supervisor",
    image: "/shahaji.jpeg",
    description:
      "Experienced Supervisor with over 5 years of expertise. Oversees guard attendance, shift scheduling, uniforms, and performance while ensuring disciplined security operations and complete protection of client premises.",
  },
  {
    name: "Mr. Mahesh Shirsat",
    role: "Supervisor",
    image: "/mahesh.jpeg",
    description:
      "Manages recruitment, employee relations, training, and workforce development to maintain a professional security team. Ensures smooth execution through a structured operational process with clear coordination and accountability.",
  },
  {
    name: "Mr. Anand More",
    role: "Supervisor",
    image: "/anand.jpeg",
    description:
      "Conducts rigorous physical drill sessions, perimeter protocol coaching, emergency fire-safety simulations, and gate turnstile discipline for deployed security guards.",
  },

  // --- 5. SENIOR CLERK ---
  {
    name: "Mr. Sandip Kedar",
    role: "Senior Clerk",
    image: "/sandeep-kedar.jpeg",
    description:
      "Coordinates daily security operations, site readiness, documentation, and staff deployment. Maintains effective communication between clients and the security team to ensure uninterrupted and efficient operations.",
  },

  // --- 6. JUNIOR CLERK ---
  {
    name: "Mr. Sopan Gangthade",
    role: "Junior Clerk",
    image: "/sopan.jpeg",
    description:
      "Supervises the Central Monitoring Unit and controls communication between security guards, supervisors, and management. Maintains operational records, incident reports, and daily security documentation.",
  },
];

const Team = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-12 lg:mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08172F] mt-3">
            Meet Our Experts
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto mt-5 leading-7 text-sm sm:text-base">
            Our experienced professionals are dedicated to delivering reliable,
            disciplined and professional security solutions with commitment,
            integrity and excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={(index % 3) * 100}
              className="
                group
                relative
                rounded-2xl
                overflow-hidden
                bg-white
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-3
              "
            >

              {/* Image Section */}
              <div className="relative overflow-hidden bg-gray-100">

                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    block
                    w-full
                    h-auto
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[#08172F]/95
                    opacity-0
                    translate-y-full
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all
                    duration-700
                    flex
                    flex-col
                    justify-center
                    items-center
                    px-5
                    sm:px-6
                    text-center
                  "
                >

                  <h3 className="text-xl lg:text-2xl font-bold text-white">
                    {member.name}
                  </h3>

                  <span
                    className="
                      mt-3
                      bg-yellow-400
                      text-[#08172F]
                      px-4
                      py-1.5
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    {member.role}
                  </span>

                  <p
                    className="
                      text-gray-200
                      mt-5
                      text-xs
                      sm:text-sm
                      leading-6
                      max-h-56
                      overflow-y-auto
                      pr-1
                    "
                  >
                    {member.description}
                  </p>

                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative bg-white px-5 py-6 text-center">

                {/* Top Yellow Line */}
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    h-1
                    bg-yellow-400
                    w-0
                    group-hover:w-full
                    transition-all
                    duration-500
                  "
                ></div>

                <h3 className="text-lg sm:text-xl font-bold text-[#08172F]">
                  {member.name}
                </h3>

                <p className="text-[#D4A017] text-sm sm:text-base mt-2 font-semibold">
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