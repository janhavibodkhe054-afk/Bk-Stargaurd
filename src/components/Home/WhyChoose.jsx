import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Clock3,
  Medal,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={38} />,
    title: "PASARA Licensed",
    desc: "Fully licensed and compliant with all government security regulations.",
  },
  {
    icon: <BadgeCheck size={38} />,
    title: "ISO Certified",
    desc: "Providing quality-driven security services with certified standards.",
  },
  {
    icon: <Clock3 size={38} />,
    title: "24×7 Protection",
    desc: "Round-the-clock security services for complete peace of mind.",
  },
  {
    icon: <Medal size={38} />,
    title: "Ex-Army Leadership",
    desc: "Managed by experienced professionals with defence backgrounds.",
  },
  {
    icon: <Users size={38} />,
    title: "Skilled Guards",
    desc: "Professionally trained, verified and disciplined security personnel.",
  },
  {
    icon: <Zap size={38} />,
    title: "Quick Response",
    desc: "Rapid emergency response with reliable support whenever required.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative bg-[#08172F] pt-82 pb-16">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-left md:text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Why Choose <span className="text-[#D4A017]">BK Star</span>
          </h2>

          <div className="w-24 h-1 bg-[#D4A017] rounded-full mt-4 mx-auto"></div>

          <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 max-w-7xl mx-auto">
            We deliver trusted, professional, and reliable security services
            with trained personnel, quick response teams, and complete customer
            satisfaction. Our commitment is to provide 24×7 protection for
            residential, commercial, industrial, and corporate establishments
            across Maharashtra.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-8 group hover:-translate-y-2 transition duration-500 shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] mb-2 group-hover:bg-[#D4A017] group-hover:text-white transition duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#08172F] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
