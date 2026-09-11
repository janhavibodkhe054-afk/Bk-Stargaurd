import React, { useEffect, useState } from "react";
import { ShieldCheck, Users, Building2, Award } from "lucide-react";

const stats = [
  {
    icon: <ShieldCheck size={42} />,
    number: 500,
    suffix: "+",
    title: "Security Guards",
  },
  {
    icon: <Building2 size={42} />,
    number: 200,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: <Users size={42} />,
    number: 150,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <Award size={42} />,
    number: 20,
    suffix: "+",
    title: "Years Experience",
  },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
};

export default function HomeStats() {
  return (
    <section
      className="relative py-14 md:py-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://www.securityms.in/services/residential-schools-colleges-services.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group text-center text-white py-8 px-4 rounded-xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Counter */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <Counter end={item.number} />
                {item.suffix}
              </h2>

              {/* Line */}
              <div className="w-14 h-1 bg-[#D4A017] rounded-full mx-auto my-4"></div>

              {/* Title */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-200 font-medium leading-6">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}