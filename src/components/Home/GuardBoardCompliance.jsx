import React from "react";
import { 
  ShieldCheck, 
  FileCheck, 
  UserCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GuardBoardCompliance() {
  const points = [
    "Government & Security Guard Board Compliant Operations",
    "Thoroughly Police-Verified & Screened Personnel",
    "Rigorous Physical, Fire Safety & Drill Training",
    "Complete Statutory EPF, ESIC & Minimum Wage Adherence",
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#08172F] overflow-hidden text-white">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 rounded-full bg-[#D4A017]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/30">
              <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#D4A017]">
                Guard Board Registered Security Agency
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Registered. Compliant.{" "}
              <span className="text-[#D4A017] underline decoration-[#D4A017]/40 decoration-wavy">
                Trusted.
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">
                  BK Star Guard Security & Manpower Services
                </strong>{" "}
                is a professionally managed security agency committed to providing trained, 
                disciplined and reliable security personnel across Maharashtra.
              </p>
              <p>
                Our organization operates in accordance with applicable security industry 
                regulations and maintains the required registration and compliance standards 
                for professional security services.
              </p>
              <p>
                With a focus on verified manpower, trained security guards, proper documentation 
                and disciplined operations, we help businesses, industries, residential societies 
                and commercial establishments maintain a safe and secure environment.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide bg-[#D4A017] text-[#08172F] hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-[#D4A017]/20 active:scale-95"
              >
                Inquire For Security
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide border-2 border-white/20 text-white hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-300 active:scale-95"
              >
                Verification Details
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Trust Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-gradient-to-b from-[#0F294D] to-[#08172F] border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
              
              {/* Highlight Badge */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A017] text-[#08172F] flex items-center justify-center shadow-lg flex-shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Maharashtra Standard</h3>
                  <p className="text-xs text-[#D4A017] font-semibold tracking-wider uppercase">
                    100% Legal & Board Compliant
                  </p>
                </div>
              </div>

              {/* Feature Checklist */}
              <ul className="py-6 space-y-3.5">
                {points.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A017] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-200">{text}</span>
                  </li>
                ))}
              </ul>

              {/* Bottom Quick Stats */}
              <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/10 text-center">
                <div className="p-2 rounded-xl bg-white/5">
                  <FileCheck className="w-5 h-5 text-[#D4A017] mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">Verified</span>
                  <span className="text-[10px] text-gray-400">Documents</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <UserCheck className="w-5 h-5 text-[#D4A017] mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">Trained</span>
                  <span className="text-[10px] text-gray-400">Guards</span>
                </div>
                <div className="p-2 rounded-xl bg-white/5">
                  <Clock className="w-5 h-5 text-[#D4A017] mx-auto mb-1" />
                  <span className="block text-xs font-bold text-white">24/7</span>
                  <span className="text-[10px] text-gray-400">Monitoring</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}