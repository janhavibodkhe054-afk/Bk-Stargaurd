import React from "react";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const AboutTraining = () => {
  return (
    <section className="relative bg-[#F8FAFC] pt-16 pb-0 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Background Text */}
        <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-[45px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-extrabold uppercase text-[#08172F]/5 select-none whitespace-nowrap">
          TRAINING
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Left Content */}
          <div data-aos="fade-right">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#08172F]"
            >
              Security Training
              <br />
              <span className="text-[#F4B400]">Excellence</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 text-gray-600 text-base md:text-lg leading-8"
            >
              At <b>BK STARGUARD SECURITY & MANPOWER SERVICES</b>, every
              security guard undergoes structured professional training before
              deployment. Our training programs are designed to prepare
              personnel for real-life situations, emergency response, customer
              interaction, and protection of people and property.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-5 text-gray-600 text-base md:text-lg leading-8"
            >
              Our guards are trained by experienced professionals following
              industry standards, ensuring confidence, discipline, and
              professionalism at every client location. Through continuous
              classroom learning and practical field exercises, we maintain the
              highest standards of security services for every client.
            </p>

            {/* Signature */}
            <div data-aos="fade-up" data-aos-delay="400" className="mt-8">
              <h3 className="text-2xl md:text-3xl italic text-[#08172F]">
                BK STARGUARD SECURITY
              </h3>

              <p className="font-bold mt-2 text-base md:text-lg text-[#F4B400]">
                Professional • Disciplined • Reliable
              </p>
            </div>

            {/* Bottom */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-8 pt-6 border-t border-gray-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8"
            >
              <Link
                to="/contact"
                className="bg-[#F4B400] text-[#08172F] px-8 py-4 rounded-lg font-semibold hover:bg-[#08172F] hover:text-white duration-300 w-fit"
              >
                Contact Us
              </Link>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#08172F] text-[#F4B400] flex items-center justify-center">
                  <PhoneCall size={24} />
                </div>

                <div>
                  <p className="font-semibold text-lg text-[#08172F]">
                    Need More Information?
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#08172F]">
                    +91 86683 17591
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            className="relative flex justify-center items-center mt-10 lg:mt-0"
          >
            {/* Background Box */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="hidden lg:block absolute top-0 right-0 w-[82%] h-[88%] bg-[#08172F] rounded-lg"
            ></div>

            {/* Main Image */}
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="https://njksecurityservices.com/wp-content/uploads/2026/06/NJK-Security-Services.png"
              alt="Security Training"
              className="relative z-10 w-full sm:w-[90%] lg:w-[88%] h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] object-cover object-right rounded-lg shadow-2xl lg:mt-12"
            />

            {/* Quote Box */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="hidden lg:block absolute -bottom-16 left-0 z-20 w-[80%] bg-[#08172F] text-white p-8 rounded-lg shadow-2xl"
            >
              <div className="border-l-4 border-[#F4B400] pl-5">
                <p className="text-lg leading-8 text-gray-300">
                  Our mission is to develop disciplined, highly trained, and
                  dependable security professionals capable of protecting
                  people, property, and valuable assets with confidence,
                  integrity, and professionalism.
                </p>

                <h4 className="mt-5 text-xl font-bold text-[#F4B400]">
                  — BK STARGUARD SECURITY
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;