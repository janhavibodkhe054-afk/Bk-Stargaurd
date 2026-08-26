import React from "react";
import { FaPhoneAlt, FaShieldAlt } from "react-icons/fa";

export default function HomeAbout() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pb-0 lg:pt-0 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-38">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="/society-security-services-pune.jpeg"
              alt="About BK Star Guard"
              className="w-full h-[300px] sm:h-[420px] lg:h-[550px] object-cover rounded-2xl shadow-2xl"
            />

            {/* Floating Card */}
            <div
              className="
                relative
                lg:absolute
                lg:-bottom-10
                lg:right-8
                mt-6
                lg:mt-0
                bg-[#08172F]
                text-white
                rounded-2xl
                shadow-2xl
                p-6
                sm:p-8
                max-w-md
                border-l-4
                border-[#D4A017]
              "
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-400 flex items-center justify-center text-[#08172F] text-2xl">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    15+
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base">
                    Years Experience
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm sm:text-base leading-7 text-gray-300">
                Delivering trusted security guards, housekeeping and manpower
                services with professionalism, discipline and complete
                reliability.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="text-left lg:text-left"
          >
            <span className="uppercase tracking-[3px] sm:tracking-[5px] text-yellow-400 font-semibold text-sm">
              Security & Manpower Services
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08172F] leading-tight">
              We Protect Your Business, Property & People
            </h2>

            <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base lg:text-lg">
              <span className="font-semibold text-[#08172F]">
                BK STARGUARD SECURITY & MANPOWER SERVICES
              </span>{" "}
              is an organization incorporated in the year{" "}
              <span className="font-semibold">_____</span>. Over the years, we
              recognized the growing need for professional corporate security
              solutions and established a dedicated organization committed to
              delivering reliable, disciplined, and customer-focused security
              and facility management services.
            </p>

            <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base lg:text-lg">
              We specialize in providing{" "}
              <span className="font-semibold">
                Security Services, Armed Guards, Bouncers, Security Training,
                Fire Fighting Training, Housekeeping, Manpower Services
              </span>
              , and a wide range of integrated security and facility solutions.
              Our experienced team is dedicated to safeguarding businesses,
              industries, commercial establishments, residential societies, and
              corporate offices with professionalism, integrity, and
              round-the-clock support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
