import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = Array.from({ length: 63 }, (_, i) => ({
  id: i + 1,
  src: `/g${i + 1}.jpg`,
}));

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div
          className="text-left md:text-cneter mb-16"
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
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid shadow-lg"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={`Gallery ${image.id}`}
                className="w-full rounded-2xl group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-[#08172F]/0 group-hover:bg-[#08172F]/60 transition-all duration-500 flex items-center justify-center">

                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center scale-0 group-hover:scale-100 transition duration-500">
                  <ZoomIn className="text-[#08172F]" />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-5">

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 bg-white rounded-full p-3 hover:bg-yellow-400 transition"
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
          />

        </div>
      )}
    </section>
  );
}