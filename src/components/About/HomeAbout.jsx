import React from "react";
import { FaShieldAlt, FaMedal, FaAward, FaBuilding } from "react-icons/fa";

export default function HomeAbout() {
  return (
    <section className="bg-white pt-12 sm:pt-16 lg:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE & FLOATING BADGE */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="/private-security-services-pune.jpeg"
              alt="BK Star Guard Founder and Security Team"
              className="w-full h-[360px] sm:h-[480px] lg:h-[580px] object-cover rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div
              className="
                relative
                lg:absolute
                lg:-bottom-8
                lg:-right-6
                mt-6
                lg:mt-0
                bg-[#08172F]
                text-white
                rounded-3xl
                shadow-2xl
                p-6
                sm:p-7
                max-w-md
                border-l-4
                border-[#D4A017]
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#D4A017] flex items-center justify-center text-[#08172F] text-2xl sm:text-3xl shadow-lg flex-shrink-0">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#D4A017] tracking-tight">
                    45+
                  </h3>
                  <p className="text-white font-bold text-sm sm:text-base leading-tight">
                    Years of Tactical & Security Leadership
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <FaMedal className="text-[#D4A017] flex-shrink-0" />
                  <span><strong>35 Years</strong> Distinguished Indian Army Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-[#D4A017] flex-shrink-0" />
                  <span><strong>Since 2010:</strong> Corporate Security Enterprise</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-left"
          >
            <span className="uppercase tracking-[4px] text-[#D4A017] font-bold text-xs sm:text-sm">
              Leadership Driven By Military Discipline
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08172F] leading-tight">
              Defending Assets, People & Enterprises Across Maharashtra
            </h2>

            {/* Founder Highlight Box */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-[#08172F] shadow-sm">
              <div className="flex items-start gap-3">
                <FaAward className="text-[#D4A017] text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#08172F]">
                    Founded & Directed by Mr. Balkrishna Koli
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">
                    Managing Director (Ex-Army Veteran)
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                Backed by <strong>35 distinguished years in the Indian Army</strong> and a collective <strong>45+ years of operational command</strong>, the organization operates under combat-tested battle readiness, zero-compromise vigilance, and strict chain-of-command discipline.
              </p>
            </div>

            {/* Shortened Narrative Paragraphs */}
            <div className="mt-6 space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              <p>
                Established in <strong>2010</strong>, <strong>BK STAR GUARD SECURITY & MANPOWER SERVICES</strong> was built to bring defense-grade standards to commercial and corporate security, replacing conventional vigilance with structured military drills and proactive risk mitigation.
              </p>

              <p>
                Today, we safeguard key industries, IT parks, logistics hubs, and residential communities across Maharashtra with disciplined, verified, and quick-response security personnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}