import React from "react";
import { FaPhoneAlt, FaShieldAlt } from "react-icons/fa";

export default function HomeAbout() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pb-20 lg:pt-0 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-38">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT IMAGE */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              src="https://themeearth.com/tf/html/securepress/img/about.jpg"
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
              We Protect Your Business,
             
                Property & People
              
            </h2>

            <p className="mt-6 text-gray-600 leading-7 text-sm sm:text-base lg:text-lg">
              BK Star Guard Security & Manpower Services provides professional
              security guards, industrial security, housekeeping and manpower
              solutions tailored to meet the needs of industries, corporate
              offices, commercial establishments and residential societies.
            </p>

            <p className="mt-4 text-gray-600 leading-7 text-sm sm:text-base lg:text-lg">
              Our trained personnel deliver reliable, disciplined and
              customer-focused services, ensuring complete safety with 24×7
              support and quick response.
            </p>

            {/* Call Box */}
            <div className="mt-8 sm:mt-10 bg-gray-50 rounded-2xl shadow-lg border-l-[6px] border-[#D4A017] p-5 sm:p-7 flex flex-col sm:flex-row items-center gap-5 hover:shadow-2xl transition duration-500">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-yellow-400 flex items-center justify-center text-black text-2xl sm:text-3xl flex-shrink-0">
                <FaPhoneAlt />
              </div>

              <div className="text-center sm:text-left">
                <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm">
                  Call For More Information
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold text-[#08172F] whitespace-nowrap">
                  +91 86683 17591
                </h3>

                <p className="mt-1 text-gray-500 text-sm sm:text-base">
                  Available 24×7 for Security Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}