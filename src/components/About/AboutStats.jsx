import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  Building2,
  Users,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
    number: 500,
    suffix: "+",
    title: "Security Guards",
  },
  {
    icon: <Building2 className="w-7 h-7 sm:w-8 sm:h-8" />,
    number: 200,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: <Users className="w-7 h-7 sm:w-8 sm:h-8" />,
    number: 150,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <Award className="w-7 h-7 sm:w-8 sm:h-8" />,
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

  return count;
};

export default function AboutStats() {
  return (
    <section className="relative -mt-10 sm:-mt-14 lg:-mt-20 z-20 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="group bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100 p-4 sm:p-6 lg:p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-[#08172F] flex items-center justify-center text-white shadow-lg transition duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Counter */}
              <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">
                <Counter end={item.number} />
                {item.suffix}
              </h2>

              {/* Divider */}
              <div className="w-10 sm:w-12 h-1 bg-[#D4A017] rounded-full mx-auto my-3 sm:my-4"></div>

              {/* Title */}
              <p className="text-[#08172F] font-semibold text-xs sm:text-sm lg:text-lg leading-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}