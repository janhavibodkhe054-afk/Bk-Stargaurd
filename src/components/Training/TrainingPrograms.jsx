import React from "react";
import {
  ShieldCheck,
  Flame,
  Ambulance,
  DoorOpen,
  Factory,
  Building2,
  Camera,
  Users,
  CheckCircle,
  MonitorCheck,
} from "lucide-react";

const programs = [
  {
    icon: <Flame size={34} />,
    title: "Fire Fighting Training",
    description:
      "Training security personnel to identify fire hazards, operate fire extinguishers, control emergencies, and assist in evacuation procedures.",
  },
  {
    icon: <DoorOpen size={34} />,
    title: "Emergency Evacuation",
    description:
      "Teaching guards safe evacuation procedures, crowd movement, emergency exits, and disaster response planning.",
  },
  {
    icon: <Ambulance size={34} />,
    title: "First Aid Training",
    description:
      "Basic medical assistance including CPR awareness, wound management, emergency response, and helping injured persons until medical assistance arrives.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Main Gate Security",
    description:
      "Visitor management, access control, vehicle checking, entry registers, ID verification, and security screening.",
  },
  {
    icon: <MonitorCheck size={34} />,
    title: "Computer Operator Training",
    description:
      "Training for security desk handling, visitor entry software, daily report generation, email management, and digital register operations.",
  },
  {
    icon: <Factory size={34} />,
    title: "Industrial Security",
    description:
      "Specialized training for factories, warehouses, manufacturing plants, and high-risk industrial premises.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Corporate Security",
    description:
      "Professional behavior, reception security, visitor handling, communication skills, and customer service for corporate offices.",
  },
  {
    icon: <Camera size={34} />,
    title: "Surveillance & Patrolling",
    description:
      "Training in CCTV monitoring, night patrolling, suspicious activity detection, reporting procedures, and incident documentation.",
  },
  {
    icon: <Users size={34} />,
    title: "Soft Skills & Professional Conduct",
    skills: [
      "Communication Skills",
      "Professional Grooming",
      "Professional Etiquette",
      "Client Interaction",
      "Reporting",
      "Conflict Handling",
    ],
  },
];

export default function TrainingPrograms() {
  const firstRow = programs.slice(0, 5);
  const secondRow = programs.slice(5, 9);

  const renderCard = (item, index) => (
    <div
      key={index}
      className="group relative overflow-hidden rounded-2xl lg:rounded-3xl bg-white p-5 lg:p-6 border border-gray-100 transition-all duration-500 hover:-translate-y-2 hover:border-[#0EA5E9] hover:shadow-[0_20px_50px_rgba(14,165,233,0.25)] flex flex-col justify-start w-full"
    >
      {/* Top Border */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#60A5FA]"></div>

      {/* Background Glow */}
      <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#E0F2FE] scale-0 group-hover:scale-100 transition-all duration-500"></div>

      {/* Icon */}
      <div className="relative z-10 w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-[#08172F] text-white flex items-center justify-center shadow-lg mb-5 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 flex-shrink-0">
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="relative z-10 text-lg sm:text-xl font-bold text-[#08172F] mb-3 leading-snug">
        {item.title}
      </h3>

      {/* Description */}
      {item.description && (
        <p className="relative z-10 text-slate-600 text-sm leading-6">
          {item.description}
        </p>
      )}

      {/* Skills */}
      {item.skills && (
        <div className="relative z-10 mt-4 space-y-2">
          {item.skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle
                size={16}
                className="text-sky-500 flex-shrink-0"
              />
              <span className="text-slate-700 text-sm">{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="relative py-10 md:py-16 bg-gradient-to-br from-[#F8FAFC] via-[#FDFCF9] to-[#F5F7FA] overflow-hidden">
      {/* Background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#C59D5F]/10 blur-3xl"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C59D5F]/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6">
        {/* Heading */}
        <div className="text-left md:text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            Our Training Programs
          </h2>

          <p className="mt-5 text-gray-600 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-7 sm:leading-8 px-2">
            Professional security training programs designed to develop
            discipline, operational excellence, and industry-ready security
            personnel.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="space-y-6">
          {/* Row 1: 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6">
            {firstRow.map((item, index) => renderCard(item, index))}
          </div>

          {/* Row 2: 4 Cards Centered */}
          <div className="flex justify-center">
            <div className="w-full xl:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
              {secondRow.map((item, index) => renderCard(item, index + 5))}
            </div>
          </div>
        </div>

        {/* Apply Training CTA */}
        <div data-aos="fade-up" className="mt-14 lg:mt-20 text-center px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08172F] leading-tight">
            Ready to Start Your Security Career?
          </h3>

          <a
            href="https://wa.me/919272136995?text=Hello%20BK%20STARGUARD%20SECURITY%20%26%20MANPOWER%20SERVICES,%20I%20want%20to%20apply%20for%20the%20Security%20Training%20Program."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 mt-8 bg-[#08172F] hover:bg-[#0EA5E9] text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:-translate-y-1 shadow-lg w-full sm:w-auto"
          >
            Apply for Training
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}