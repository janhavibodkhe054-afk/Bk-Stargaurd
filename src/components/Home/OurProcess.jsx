import React from "react";
import { ClipboardList, MapPinned, ShieldCheck, Eye } from "lucide-react";

const process = [
  {
    no: "01",
    icon: <ClipboardList size={34} />,
    title: "Requirement Discussion",
    desc: "We understand your security requirements, manpower needs and service expectations.",
  },
  {
    no: "02",
    icon: <MapPinned size={34} />,
    title: "Site Inspection",
    desc: "Our experts inspect your premises to identify risks and prepare a customized security plan.",
  },
  {
    no: "03",
    icon: <ShieldCheck size={34} />,
    title: "Guard Deployment",
    desc: "Trained, verified and PASARA licensed security guards are deployed at your location.",
  },
  {
    no: "04",
    icon: <Eye size={34} />,
    title: "Regular Monitoring",
    desc: "Continuous supervision, reporting and quick response ensure complete protection.",
  },
];

export default function OurProcess() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-[#D4A017] font-semibold uppercase tracking-widest">
            Our Process
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#08172F]">
            How We Operate
          </h2>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {process.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative text-center"
            >
              {/* Arrow */}
              {index !== process.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-10 text-[#D4A017] text-4xl">
                  →
                </div>
              )}

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-[#D4A017]/10 flex items-center justify-center text-[#D4A017] mx-auto mb-6 hover:bg-[#D4A017] hover:text-white transition-all duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#08172F] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
