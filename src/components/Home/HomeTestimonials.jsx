import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import "swiper/css";

const testimonials = [
  {
    name: "Sachin Kulkarni",
    role: "Plant Operations Head, Chakan",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "BK Star Guard has provided exceptional security services for our manufacturing unit. Their guards are disciplined, punctual, and handle gate management flawlessly.",
  },
  {
    name: "Ananya Iyer",
    role: "Hospital Operations Chief",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    review:
      "Hospital environments require both empathy and vigilance. The security team handles crowd control in emergency wards with remarkable patience and authority.",
  },
  {
    name: "Nitin Gaikwad",
    role: "Logistics Manager, Bhiwandi Hub",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    review:
      "Managing high-value inventory needs sharp surveillance. The security personnel deployed by BK Star Guard are vigilant, alert, and report incidents instantly.",
  },
  {
    name: "Karthik Venkatraman",
    role: "Senior Infrastructure Manager",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    review:
      "We contracted them for round-the-clock perimeter and tech park security. Their response time and turnstile monitoring procedures are strictly professional.",
  },
  {
    name: "Pallavi Shinde",
    role: "Society Secretary, Baner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Our gated community feels safe 24/7. Their night-patrolling team and visitor management protocols have made our society management completely stress-free.",
  },
  {
    name: "Suresh Balakrishnan",
    role: "Regional Distribution Lead",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    review:
      "Outstanding loading dock management and truck movement tracking. They have reduced gate turnaround time while keeping strict access control.",
  },
  {
    name: "Sunita Deshmukh",
    role: "Facility Director, Pune IT Park",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    review:
      "We have relied on their corporate security and housekeeping solutions for over three years. Their staff is extremely courteous, proactive, and well-trained.",
  },
  {
    name: "Deepa Menon",
    role: "General Manager, Hospitality Group",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    review:
      "First impressions matter in luxury hotels. Their guards are well-groomed, polite with guests, and maintain absolute vigilance across valet and lobby areas.",
  },
  {
    name: "Milind Jadhav",
    role: "Operations Head, MIDC Bhosari",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    review:
      "Their industrial manpower and safety compliance standards are top-notch. Finding such disciplined and reliable personnel on short notice is rare.",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Corporate HR Business Partner",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    review:
      "Transparent verification, PF/ESIC compliance, and dedicated site supervisors make them a hassle-free agency to partner with for large enterprises.",
  },
  {
    name: "Tanvi Sawant",
    role: "Administrative Head, Navi Mumbai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Fast escalation handling and professional supervisory visits keep their standards high. BK Star Guard has been our most dependable facility partner.",
  },
  {
    name: "Arunachalam Murugan",
    role: "Commercial Real Estate Developer",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    review:
      "From on-site construction surveillance to post-handover facility security, BK Star Guard delivered seasoned manpower without any downtime.",
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

                    {/* <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[#D4A017] mx-auto mt-6"
                    /> */}

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