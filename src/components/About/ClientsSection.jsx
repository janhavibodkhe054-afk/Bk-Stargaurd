import React from "react";

const clients = [
  { name: "JC Albis Construction", logo: "/cl1.jpg" },
  { name: "Big Bazaar", logo: "/cl2.png" },
  { name: "DAIRY FARM", logo: "/cl3.jpg" },
  { name: "Hatsun Agro Product Limited", logo: "/cl4.jpg" },
  { name: "Hatsun Daily", logo: "/cl5.png" },
  { name: "Hatsun Dairy Ingredients", logo: "/cl6.png" },
  { name: "Arokya Milk", logo: "/cl7.jpg" },
  { name: "Navodaya Vidyalaya Samiti", logo: "/cl8.jpg" },
  { name: "Khilari Infrastructure Private Limited", logo: "/cl9.png" },
  { name: "L&T Construction", logo: "/cl10.jpg" },
  { name: " Mahagenco", logo: "/cl11.png" },

  { name: "Mahadiscom", logo: "/cl13.jpg" },
  { name: " MahaVitaran", logo: "/cl14.png" },
  { name: "Mahatransco", logo: "/cl15.png" },
  { name: "Maharashtra Industrial Development Corporation", logo: "/cl19.jpg" },
  { name: "R.K. Chavan Infrastructure Private Limited", logo: "/cl20.jpg" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="text-yellow-400 uppercase tracking-[3px] font-semibold">
            Our Clients
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#08172F] mt-3">
            Trusted By Leading Organizations
          </h2>

          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-8">
            We proudly serve corporate offices, industries, banks, educational
            institutions, hospitals, commercial establishments, and residential
            communities with reliable security and manpower solutions.
          </p>
        </div>

        {/* Clients */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={(index % 6) * 100}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center border border-gray-100"
            >
              <div className="h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 object-contain group-hover:grayscale-0 transition duration-300"
                />
              </div>

              <h3 className="mt-5 text-sm font-semibold text-[#08172F] group-hover:text-yellow-500 transition">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
