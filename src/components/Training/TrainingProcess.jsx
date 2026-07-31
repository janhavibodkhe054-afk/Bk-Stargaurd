import React from "react";
import {
  UserCheck,
  Dumbbell,
  BookOpen,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

const steps = [
  {
    icon: <UserCheck size={24} />,
    title: "Recruitment & Background Verification",
    desc: "Comprehensive screening, identity verification, document validation, and background checks before enrollment.",
  },
  {
    icon: <Dumbbell size={24} />,
    title: "Physical Fitness Assessment",
    desc: "Fitness evaluation to ensure candidates meet the required physical standards for security operations.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Professional Classroom Training",
    desc: "Theory sessions covering security procedures, safety protocols, communication, and legal awareness.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Practical Field Training",
    desc: "Hands-on training including patrolling, emergency response, surveillance, and real-world security practices.",
  },
  {
    icon: <ClipboardCheck size={24} />,
    title: "Deployment & Performance Evaluation",
    desc: "Personnel deployment followed by regular assessments to maintain high service standards.",
  },
];

export default function TrainingProcess() {
  return (
    <section
      className="relative bg-cover bg-center md:bg-fixed py-16 sm:py-20 lg:py-28 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#08172F]/85"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left md:text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Training Journey
          </h2>

          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-7">
            Every security professional follows a structured process to ensure
            discipline, competence, and operational excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-sky-500 to-sky-300"></div>

          <div className="space-y-8 lg:space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-4 sm:gap-6 lg:gap-8"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-xl">
                    {step.icon}
                  </div>

                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#08172F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-7">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}