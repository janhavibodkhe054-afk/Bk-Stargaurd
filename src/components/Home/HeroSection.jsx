import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/hero.png",
    title: "PROTECTING PEOPLE",
    highlight: "& PROPERTY",
    description:
      "Professional security guards, industrial security, housekeeping and manpower solutions with 24×7 protection across Maharashtra.",
  },
  {
    image: "/slide2.png",
    title: "YOUR SAFETY",
    highlight: "OUR PRIORITY",
    description:
      "BK Star Guard Security delivers dependable protection with experienced guards, modern operations and quick response services.",
  },
  {
    image: "/slide3.png",
    title: "ADVANCED SURVEILLANCE",
    highlight: "& MANPOWER",
    description:
      "Comprehensive facility management, corporate security, and certified manpower customized to safeguard your business operations.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="hero-swiper w-full h-[92svh] min-h-[620px] sm:h-[88svh] sm:min-h-[650px] md:h-[85svh] md:min-h-[620px] lg:h-[90vh] lg:min-h-[680px] xl:h-screen xl:min-h-[700px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition:
                  "center center",
              }}
            >
              {/* Main Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Left Dark Blue + Black Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#020b14]/85
                  via-[#061827]/85
                  via-[58%]
                  to-black/10
                  sm:from-[#020b14]/70
                  sm:via-[#061827]/70
                  sm:via-[55%]
                  sm:to-transparent
                "
              ></div>

              {/* Mobile Extra Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/10
                  sm:bg-transparent
                "
              ></div>

              {/* Bottom Gradient */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  sm:h-40
                  md:h-48
                  bg-gradient-to-t
                  from-black/50
                  to-transparent
                "
              ></div>

              {/* Content Wrapper */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  h-full
                  w-full
                  md:mt-20
                "
              >
                <div
                  className="
                    w-full
                    max-w-7xl
                    mx-auto
                    px-5
                    sm:px-8
                    md:px-10
                    lg:px-12
                    xl:px-16
                    2xl:px-20
                  "
                >
                  <div
                    className="
                      w-full
                      max-w-3xl
                      mx-auto
                      lg:mx-0

                      pt-16
                      sm:pt-16
                      md:pt-20
                      lg:pt-16
                      xl:pt-10

                      text-center
                      lg:text-left
                    "
                  >
                    {/* Small Top Line */}
                    <div
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      className="
                        flex
                        items-center
                        justify-center
                        lg:justify-start
                        gap-2
                        sm:gap-3
                        mb-4
                        sm:mb-5
                      "
                    >
                      <span className="w-7 sm:w-10 h-[2px] bg-[#D4A017]"></span>

                      <span
                        className="
                          text-[#D4A017]
                          text-[10px]
                          sm:text-xs
                          md:text-sm
                          font-semibold
                          tracking-[2px]
                          sm:tracking-[3px]
                          uppercase
                        "
                      >
                        BK Star Guard Security
                      </span>
                    </div>

                    {/* Heading */}
                    <h1
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="
                        text-white
                        font-extrabold
                        uppercase
                        leading-[1.08]
                        tracking-tight

                        text-[34px]
                        xs:text-4xl
                        sm:text-5xl
                        md:text-5xl
                        lg:text-6xl
                        xl:text-6xl
                        2xl:text-6xl
                      "
                    >
                      {slide.title}
                      <br />

                      <span className="text-[#D4A017]">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Description */}
                    <p
                      data-aos="fade-right"
                      data-aos-delay="250"
                      data-aos-duration="1200"
                      className="
                        mt-5
                        sm:mt-6

                        text-gray-200

                        text-sm
                        sm:text-base
                        md:text-lg
                        lg:text-xl

                        leading-6
                        sm:leading-7
                        md:leading-8

                        max-w-xl
                        lg:max-w-2xl

                        mx-auto
                        lg:mx-0
                      "
                    >
                      {slide.description}
                    </p>

                    {/* Buttons */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-duration="1200"
                      className="
                        mt-7
                        sm:mt-8
                        md:mt-9

                        flex
                        flex-col
                        sm:flex-row

                        gap-3
                        sm:gap-4

                        items-center
                        lg:items-start

                        justify-center
                        lg:justify-start

                        w-full
                      "
                    >
                      {/* Read More */}
                      <button
                        onClick={() => navigate("/about")}
                        className="
                          w-full
                          sm:w-auto
                          min-w-[155px]
                          sm:min-w-[160px]

                          border-2
                          border-[#D4A017]

                          text-white

                          px-6
                          sm:px-7

                          py-3
                          sm:py-3.5

                          text-sm
                          sm:text-base

                          font-semibold
                          uppercase
                          tracking-wide

                          transition-all
                          duration-300

                          hover:bg-[#D4A017]
                          hover:text-black
                          hover:shadow-lg
                          hover:shadow-[#D4A017]/20

                          active:scale-95
                        "
                      >
                        Read More
                      </button>

                      {/* Contact Us */}
                      <button
                        onClick={() => navigate("/contact")}
                        className="
                          w-full
                          sm:w-auto
                          min-w-[155px]
                          sm:min-w-[160px]

                          bg-[#D4A017]
                          text-black

                          px-6
                          sm:px-7

                          py-3
                          sm:py-3.5

                          text-sm
                          sm:text-base

                          font-semibold
                          uppercase
                          tracking-wide

                          transition-all
                          duration-300

                          hover:bg-white
                          hover:text-black
                          hover:shadow-lg
                          hover:shadow-white/20

                          active:scale-95
                        "
                      >
                        Contact Us
                      </button>
                    </div>

                    {/* Trust Text */}
                    <div
                      data-aos="fade-up"
                      data-aos-delay="700"
                      data-aos-duration="1000"
                      className="
                        mt-6
                        sm:mt-8

                        flex
                        items-center
                        justify-center
                        lg:justify-start

                        gap-2
                        sm:gap-3

                        text-gray-300

                        text-[10px]
                        sm:text-xs
                        md:text-sm

                        leading-5
                      "
                    >
                      <span
                        className="
                          flex-shrink-0
                          w-1.5
                          h-1.5
                          sm:w-2
                          sm:h-2
                          rounded-full
                          bg-[#D4A017]
                        "
                      ></span>

                      <span>
                        Reliable Security • Professional Manpower • 24×7 Support
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Pagination */}
      <style jsx>{`
        .hero-swiper .swiper-pagination {
          bottom: 20px !important;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          background: #ffffff;
          opacity: 0.55;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          background: #d4a017;
          opacity: 1;
        }

        @media (min-width: 640px) {
          .hero-swiper .swiper-pagination {
            bottom: 25px !important;
          }

          .hero-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }

          .hero-swiper .swiper-pagination-bullet-active {
            width: 26px;
          }
        }

        @media (min-width: 1024px) {
          .hero-swiper .swiper-pagination {
            bottom: 30px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;