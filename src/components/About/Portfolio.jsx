import React from "react";

const logos = [
  "/c1.jpg",
  "/c2.webp",
  "/c3.png",
  "/c4.png",
  "/c5.jpg",
  "/c6.jpg",
  "/c7.jpg",
  "/c8.jpg",
  "/c9.jpg",
  "/c10.avif",
];

const Portfolio = () => {
  return (
    <>
      <style>{`
        .logo-scroll {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollLeft 20s linear infinite;
        }

        .logo-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-280px * ${logos.length}));
          }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-20 bg-fixed bg-cover"
        style={{
          backgroundImage: "url('https://leaderstarsecurity.com/uploads/slider/slider.jpg')",
          backgroundPosition: "35% center", // तुमच्या image चा path
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
                Current
                <br />
                Operating Portfolio
              </h2>

              <p className="mt-8 text-base leading-8 text-gray-200">
                We proudly work with India's leading organizations across dairy,
                infrastructure, manufacturing and energy sectors. Our portfolio
                reflects trust, quality and long-term business relationships
                built over the years.
              </p>

              <button className="mt-10 px-8 py-4 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 transition duration-300 hover:scale-105">
                View Portfolio
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="relative overflow-hidden">
              {/* Left Fade */}
              <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black/60 to-transparent z-10"></div>

              {/* Right Fade */}
              <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black/60 to-transparent z-10"></div>

              <div className="logo-scroll py-6">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 h-40 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 flex items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={logo}
                      alt=""
                      className="max-h-24 max-w-[170px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
