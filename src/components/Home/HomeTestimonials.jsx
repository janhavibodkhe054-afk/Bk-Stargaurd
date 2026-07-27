import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import "swiper/css";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Factory Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "BK Star Guard has provided exceptional security services for our manufacturing unit. Their guards are professional, punctual, and highly trained.",
  },
  {
    name: "Priya Mehta",
    role: "Corporate HR",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "We have been using BK Star Guard manpower services for years. Their team is reliable, disciplined, and always exceeds our expectations.",
  },
  {
    name: "Amit Patil",
    role: "Warehouse Supervisor",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    review:
      "The security personnel are well-trained, alert and always maintain discipline. Their professionalism has greatly improved our workplace security.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Society Chairman",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Our residential society has been using BK Star Guard services for over two years. The guards are courteous, responsible and available whenever needed.",
  },
  {
    name: "Vikram Deshmukh",
    role: "Operations Manager",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Their housekeeping and manpower services have exceeded our expectations. The staff is punctual, efficient and highly dependable.",
  },
  {
    name: "Neha Joshi",
    role: "Office Administrator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Excellent service with quick response and professional staff. BK Star Guard has become a trusted security partner for our organization.",
  },
  {
    name: "Rohan Verma",
    role: "Hotel Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    review:
      "Their security team is always vigilant and maintains a professional attitude. We highly recommend BK Star Guard for hospitality businesses.",
  },
  {
    name: "Pooja Singh",
    role: "Hospital Administrator",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    review:
      "The guards are well-groomed, disciplined and understand the importance of patient safety. We are extremely satisfied with their services.",
  },
];

export default function HomeTestimonials() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div
            data-aos="fade-right"
            className="text-left lg:text-left w-full"
          >
            <span className="uppercase tracking-[4px] text-[#D4A017] font-semibold text-sm">
              Testimonials
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08172F] leading-tight">
              What Our
              Clients Say
            </h2>

            <p className="mt-6 text-gray-600 text-base leading-7">
              We are proud to provide trusted security and manpower solutions
              to industries, corporate offices, residential societies and
              commercial establishments across Maharashtra.
            </p>

            <p className="mt-4 text-gray-600 text-base leading-7">
              Client satisfaction and professional service remain the
              foundation of everything we do.
            </p>
          </div>

          {/* Right */}
          <div
            data-aos="fade-left"
            className="w-full overflow-hidden"
          >
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full bg-[#08172F] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-center">
                    <FaQuoteLeft className="text-[#D4A017] text-4xl mx-auto mb-5" />

                    <p className="text-white italic text-sm sm:text-base leading-8 break-words">
                      "{item.review}"
                    </p>

                    <div className="flex justify-center gap-1 mt-6 text-[#D4A017]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar key={star} />
                      ))}
                    </div>

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#D4A017] mx-auto mt-6"
                    />

                    <h3 className="text-white text-xl font-bold mt-4">
                      {item.name}
                    </h3>

                    <p className="text-[#D4A017] mt-1">
                      {item.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}