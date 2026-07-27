import React from "react";
import { ShieldCheck, Target, Eye, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisionMission = () => {
  const navigate = useNavigate();

  const items = [
    {
      no: "01",
      title: "Our Mission",
      desc: "Provide reliable, disciplined and highly trained security personnel to safeguard our clients, their people and their valuable property.",
      icon: <Target size={20} />,
    },
    
    {
      no: "03",
      title: "Our Vision",
      desc: "Become one of India's most trusted security companies known for professionalism, reliability and operational excellence.",
      icon: <Eye size={20} />,
    },
    
  ];

  return (
    <section className="bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-5">

    <div className="relative">

      {/* Right Half Circle */}
      

      <div className="grid lg:grid-cols-[0.95fr_1.05fr] items-center">

        {/* LEFT CARD */}
        <div className="relative z-20 bg-[#08172F] text-white rounded-none lg:mr-[-80px] shadow-2xl p-8 sm:p-10 lg:p-14">

          <span className="uppercase tracking-[5px] text-[#D4A017] font-semibold text-sm">
            Our Purpose
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-10">
            Vision & Mission
          </h2>

          <div className="relative">

            <div className="absolute left-6 top-6 bottom-5 w-[2px] bg-white/20"></div>

            {items.map((item) => (
              <div key={item.no} className="flex gap-5 mb-8 relative">

                <div className="w-12 h-12 rounded-full bg-white text-[#08172F] font-bold flex items-center justify-center shrink-0 z-10">
                  {item.no}
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <span className="text-[#D4A017]">
                      {item.icon}
                    </span>

                    <h3 className="font-bold text-lg lg:text-xl">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-2 text-gray-300 leading-7 text-sm lg:text-base">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative z-10 mt-10 lg:mt-0">

          <img
            src="https://leaderstarsecurity.com/assets/user/assets/img/service-4.jpg"
            alt=""
            className="w-full h-[350px] sm:h-[450px] lg:h-[600px] object-cover shadow-2xl"
          />

        </div>

      </div>

    </div>

  </div>
</section>
  );
};

export default VisionMission;
