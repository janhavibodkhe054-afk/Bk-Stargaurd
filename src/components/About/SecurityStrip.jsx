import React from "react";

const SecurityStrip = () => {
  return (
    <section
      className="relative overflow-hidden bg-yellow-400 py-10 lg:py-10"
      data-aos="fade-up"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2px, transparent 2px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 text-center">

        {/* Small Line */}
        <div className="w-16 h-1 bg-white mx-auto rounded-full mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Trusted Security & Manpower Services
        </h2>

        {/* Description */}
        <p className="mt-6 text-black text-lg leading-9 max-w-5xl mx-auto">
          BK Star Guard provides professional security guards,
          industrial security, housekeeping and manpower services
          across Maharashtra with highly trained personnel,
          24×7 support and complete commitment to safety,
          discipline and customer satisfaction.
        </p>

      </div>
    </section>
  );
};

export default SecurityStrip;