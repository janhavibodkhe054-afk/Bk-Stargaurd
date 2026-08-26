import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    id: 1,
    src: "/bk-star-guard-security-manpower-services.jpeg",
    alt: "BK Star Guard Security and Manpower Services",
  },
  {
    id: 2,
    src: "/bk-star-guard-security-services-pune.jpeg",
    alt: "BK Star Guard Security Services in Pune",
  },
  {
    id: 3,
    src: "/bk-star-guard-manpower-services-pune.jpeg",
    alt: "BK Star Guard Manpower Services in Pune",
  },
  {
    id: 4,
    src: "/security-guards-in-pune-bk-star-guard.jpeg",
    alt: "Professional Security Guards in Pune",
  },
  {
    id: 5,
    src: "/best-security-services-pune-bk-star-guard.jpeg",
    alt: "Professional Security Services in Pune",
  },
  {
    id: 6,
    src: "/security-agency-in-pune-bk-star-guard.jpeg",
    alt: "Security Agency in Pune - BK Star Guard",
  },
  {
    id: 7,
    src: "/security-guard-services-pune.jpeg",
    alt: "Security Guard Services in Pune",
  },
  {
    id: 8,
    src: "/professional-security-guards-pune.jpeg",
    alt: "Professional Security Guards in Pune",
  },
  {
    id: 9,
    src: "/security-guard-agency-pune.jpeg",
    alt: "Security Guard Agency in Pune",
  },
  {
    id: 10,
    src: "/private-security-services-pune.jpeg",
    alt: "Private Security Services in Pune",
  },
  {
    id: 11,
    src: "/industrial-security-services-pune.jpeg",
    alt: "Industrial Security Services in Pune",
  },
  {
    id: 12,
    src: "/corporate-security-services-pune.jpeg",
    alt: "Corporate Security Services in Pune",
  },
  {
    id: 13,
    src: "/commercial-security-services-pune.jpeg",
    alt: "Commercial Security Services in Pune",
  },
  {
    id: 14,
    src: "/residential-security-services-pune.jpeg",
    alt: "Residential Security Services in Pune",
  },
  {
    id: 15,
    src: "/office-security-guards-pune.jpeg",
    alt: "Office Security Guards in Pune",
  },
  {
    id: 16,
    src: "/factory-security-services-pune.jpeg",
    alt: "Factory Security Services in Pune",
  },
  {
    id: 17,
    src: "/society-security-services-pune.jpeg",
    alt: "Society Security Services in Pune",
  },
  {
    id: 18,
    src: "/bank-security-guard-services-pune.jpeg",
    alt: "Bank Security Guard Services in Pune",
  },
  {
    id: 19,
    src: "/hospital-security-services-pune.jpeg",
    alt: "Hospital Security Services in Pune",
  },
  {
    id: 20,
    src: "/school-security-guards-pune.jpeg",
    alt: "School Security Guards in Pune",
  },
  {
    id: 21,
    src: "/event-security-services-pune.jpeg",
    alt: "Event Security Services in Pune",
  },
  {
    id: 22,
    src: "/security-guards-for-events-pune.jpeg",
    alt: "Security Guards for Events in Pune",
  },
  {
    id: 23,
    src: "/24x7-security-services-pune.jpeg",
    alt: "24x7 Security Services in Pune",
  },
  {
    id: 24,
    src: "/trained-security-guards-pune.jpeg",
    alt: "Trained Security Guards in Pune",
  },
  {
    id: 25,
    src: "/professional-security-agency-pune.jpeg",
    alt: "Professional Security Agency in Pune",
  },
  {
    id: 26,
    src: "/reliable-security-services-pune.jpeg",
    alt: "Reliable Security Services in Pune",
  },
  {
    id: 27,
    src: "/security-manpower-agency-pune.jpeg",
    alt: "Security Manpower Agency in Pune",
  },
  {
    id: 28,
    src: "/security-manpower-services-maharashtra.jpeg",
    alt: "Security Manpower Services in Maharashtra",
  },
  {
    id: 29,
    src: "/manpower-services-pune.jpeg",
    alt: "Manpower Services in Pune",
  },
  {
    id: 30,
    src: "/professional-manpower-services-pune.jpeg",
    alt: "Professional Manpower Services in Pune",
  },
  {
    id: 31,
    src: "/housekeeping-manpower-services-pune.jpeg",
    alt: "Housekeeping Manpower Services in Pune",
  },
  // {
  //   id: 32,
  //   src: "/housekeeping-services-pune-bk-star-guard.jpeg",
  //   alt: "Housekeeping Services in Pune by BK Star Guard",
  // },
  // {
  //   id: 33,
  //   src: "/facility-management-services-pune.jpeg",
  //   alt: "Facility Management Services in Pune",
  // },
  // {
  //   id: 34,
  //   src: "/trained-manpower-services-pune.jpeg",
  //   alt: "Trained Manpower Services in Pune",
  // },
  // {
  //   id: 35,
  //   src: "/security-and-manpower-services-pune.jpeg",
  //   alt: "Security and Manpower Services in Pune",
  // },
  // {
  //   id: 36,
  //   src: "/security-guard-company-maharashtra.jpeg",
  //   alt: "Security Guard Company in Maharashtra",
  // },
  // {
  //   id: 37,
  //   src: "/security-services-maharashtra.jpeg",
  //   alt: "Professional Security Services in Maharashtra",
  // },
  
  // {
  //   id: 41,
  //   src: "/bk-star-guard-security-team-pune.jpeg",
  //   alt: "BK Star Guard Security Team in Pune",
  // },
  // {
  //   id: 42,
  //   src: "/bk-star-guard-trained-security-guards.jpeg",
  //   alt: "BK Star Guard Trained Security Guards",
  // },
  // {
  //   id: 43,
  //   src: "/bk-star-guard-professional-security-team.jpeg",
  //   alt: "BK Star Guard Professional Security Team",
  // },
  // {
  //   id: 44,
  //   src: "/bk-star-guard-security-operations-pune.jpeg",
  //   alt: "BK Star Guard Security Operations in Pune",
  // },
  // {
  //   id: 45,
  //   src: "/bk-star-guard-manpower-team-pune.jpeg",
  //   alt: "BK Star Guard Manpower Team in Pune",
  // },
  // {
  //   id: 46,
  //   src: "/bk-star-guard-housekeeping-services.jpeg",
  //   alt: "BK Star Guard Housekeeping Services",
  // },
  // {
  //   id: 47,
  //   src: "/bk-star-guard-industrial-security-pune.jpeg",
  //   alt: "BK Star Guard Industrial Security Services in Pune",
  // },
  // {
  //   id: 48,
  //   src: "/bk-star-guard-corporate-security-pune.jpeg",
  //   alt: "BK Star Guard Corporate Security Services in Pune",
  // },
  // {
  //   id: 49,
  //   src: "/bk-star-guard-security-manpower-maharashtra.jpeg",
  //   alt: "BK Star Guard Security and Manpower Services in Maharashtra",
  // },
  // {
  //   id: 50,
  //   src: "/bk-star-guard-pune-security-services.jpeg",
  //   alt: "BK Star Guard Pune Security Services",
  // },
  // {
  //   id: 51,
  //   src: "/security-company-pune-bk-star-guard.jpeg",
  //   alt: "Security Company in Pune - BK Star Guard",
  // },
  // {
  //   id: 52,
  //   src: "/security-solutions-pune.jpeg",
  //   alt: "Professional Security Solutions in Pune",
  // },
  // {
  //   id: 53,
  //   src: "/security-personnel-pune.jpeg",
  //   alt: "Professional Security Personnel in Pune",
  // },
  // {
  //   id: 54,
  //   src: "/security-services-pimpri-chinchwad.jpeg",
  //   alt: "Security Services in Pimpri Chinchwad",
  // },
  // {
  //   id: 55,
  //   src: "/security-guards-pimpri-chinchwad.jpeg",
  //   alt: "Security Guards in Pimpri Chinchwad",
  // },
  // {
  //   id: 56,
  //   src: "/manpower-agency-pune.jpeg",
  //   alt: "Professional Manpower Agency in Pune",
  // },
  // {
  //   id: 57,
  //   src: "/security-staff-pune.jpeg",
  //   alt: "Professional Security Staff in Pune",
  // },
  // {
  //   id: 58,
  //   src: "/security-guard-training-pune.jpeg",
  //   alt: "Security Guard Training in Pune",
  // },
  // {
  //   id: 59,
  //   src: "/security-management-services-pune.jpeg",
  //   alt: "Security Management Services in Pune",
  // },
  // {
  //   id: 60,
  //   src: "/security-and-housekeeping-services-pune.jpeg",
  //   alt: "Security and Housekeeping Services in Pune",
  // },
  // {
  //   id: 61,
  //   src: "/bk-star-guard-security-services-maharashtra.jpeg",
  //   alt: "BK Star Guard Security Services Maharashtra",
  // },
  // {
  //   id: 62,
  //   src: "/bk-star-guard-manpower-solutions-pune.jpeg",
  //   alt: "BK Star Guard Manpower Solutions in Pune",
  // },
  // {
  //   id: 63,
  //   src: "/bk-star-guard-professional-security-services.jpeg",
  //   alt: "BK Star Guard Professional Security Services",
  // },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div
          className="text-left md:text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-yellow-400 uppercase tracking-[4px] font-semibold">
            Our Gallery
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#08172F] mt-3">
            Capturing Our Commitment
          </h2>

          <p className="text-gray-600 max-w-5xl mx-auto mt-6 leading-8">
            A glimpse of our professional security services, industrial
            protection, housekeeping, manpower support, and successful projects
            delivered with dedication and excellence.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {images.map((image, index) => (
            <div
              key={image.id}
              data-aos="zoom-in"
              data-aos-delay={(index % 8) * 80}
              className="
                relative
                overflow-hidden
                rounded-2xl
                cursor-pointer
                group
                break-inside-avoid
                shadow-lg
              "
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="
                  w-full
                  rounded-2xl
                  group-hover:scale-110
                  duration-700
                "
              />

              {/* Hover Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-[#08172F]/0
                  group-hover:bg-[#08172F]/60
                  transition-all
                  duration-500
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-yellow-400
                    flex
                    items-center
                    justify-center
                    scale-0
                    group-hover:scale-100
                    transition
                    duration-500
                  "
                >
                  <ZoomIn className="text-[#08172F]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/95
            flex
            items-center
            justify-center
            p-5
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-5
              right-5
              sm:top-8
              sm:right-8
              bg-white
              rounded-full
              p-3
              hover:bg-yellow-400
              transition
              z-10
            "
          >
            <X size={28} />
          </button>

          {/* Selected Image */}
          <img
            src={selectedImage}
            alt="BK Star Guard Security and Manpower Services"
            className="
              max-w-full
              max-h-[85vh]
              sm:max-h-[90vh]
              rounded-xl
              shadow-2xl
              object-contain
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}