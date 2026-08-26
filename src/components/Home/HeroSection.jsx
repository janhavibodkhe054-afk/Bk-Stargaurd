import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "hero.png",
    title: "PROTECTING PEOPLE",
    highlight: "& PROPERTY",
    description:
      "Professional security guards, industrial security, housekeeping and manpower solutions with 24×7 protection across Maharashtra.",
  },
  {
    image: "/hero2.png",
    title: "YOUR SAFETY",
    highlight: "OUR PRIORITY",
    description:
      "BK Star Guard Security delivers dependable protection with experienced guards, modern operations and quick response services.",
  },
];

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-[75vh] sm:h-[85vh] lg:h-[115vh] xl:h-screen lg:top-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[75vh] sm:h-[85vh] lg:h-[95vh] xl:h-screen bg-cover"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: "center 30%",
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center h-full pt-16 lg:pt-30">
                <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12">
                  <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
                    <h1
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="text-white font-bold uppercase leading-tight
  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl"
                    >
                      {slide.title}
                      <br />
                      <span className="text-[#D4A017]">{slide.highlight}</span>
                    </h1>

                    <p
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1200"
                      className="
    mt-5
    text-gray-200
    leading-7
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    max-w-2xl
    mx-auto
    lg:mx-0
  "
                    >
                      {slide.description}
                    </p>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1200"
                      className="mt-8 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start"
                    >
                      {/* Read More */}
                      <button
                        onClick={() => navigate("/about")}
                        className="
      w-44 sm:w-auto
      border-2 border-[#D4A017]
      text-white
      px-6 sm:px-8
      py-3
      font-semibold
      uppercase
      transition-all
      duration-300
      hover:bg-[#D4A017]
      hover:text-black
      active:scale-95
      active:bg-[#b88913]
    "
                      >
                        Read More
                      </button>

                      {/* Contact Us */}
                      <button
                        onClick={() => navigate("/contact")}
                        className="
      w-44 sm:w-auto
      bg-yellow-400
      text-black
      px-6 sm:px-8
      py-3
      font-semibold
      uppercase
      transition-all
      duration-300
      hover:bg-white
      hover:text-black
      active:scale-95
      active:bg-[#c89412]
    "
                      >
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
