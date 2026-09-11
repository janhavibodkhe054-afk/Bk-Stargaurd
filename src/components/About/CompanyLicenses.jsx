import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  FileBadge,
  Building2,
  Users,
  Receipt,
  CreditCard,
  Landmark,
  Award,
  PenTool,
  ShieldAlert,
} from "lucide-react";

const licenses = [
  {
    icon: <ShieldCheck size={30} />,
    title: "Private Security Regulation Act License",
    value: "PSA/L/98/MH/2020/SEP/3/298",
    desc: "Private Security Regulation Act 2007 (PASARA) License Holder",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "ISO Certification",
    value: "ISO 9001:2015",
    desc: "Certified Quality Management System",
  },
  {
    icon: <Building2 size={30} />,
    title: "Shop Act License",
    value: "1631100310239463",
    desc: "Registered under Shop & Establishment Act",
  },
  {
    icon: <Users size={30} />,
    title: "Labor License",
    value: "1631100110006980",
    desc: "Government Approved Labour License",
  },
  {
    icon: <FileBadge size={30} />,
    title: "PF Code",
    value: "PUSLP1024482",
    desc: "Employees Provident Fund Registration",
  },
  {
    icon: <Receipt size={30} />,
    title: "GST Registration",
    value: "27AKVPK8728Q1ZV",
    desc: "Goods & Services Tax Registration",
  },
  {
    icon: <CreditCard size={30} />,
    title: "ESIC Registration",
    value: "330000640780000606",
    desc: "Employees State Insurance Corporation",
  },
  {
    icon: <Landmark size={30} />,
    title: "PAN Number",
    value: "AKVPK8728Q",
    desc: "Permanent Account Number",
  },
  {
    icon: <Award size={30} />,
    title: "Professional Tax",
    value: "27395312084P",
    desc: "Professional Tax Registration",
  },
  {
    icon: <PenTool size={30} />,
    title: "Army Security Training Certification",
    value: "10118426",
    desc: "Physical Training & Fire Protection Training Provider",
  },
  {
    icon: <ShieldAlert size={30} />,
    title: "Security Guard Board Registration",
    value: "SGB/MH/REG-APPROVED",
    desc: "Maharashtra State Security Guard Board Registered Agency",
  },
];

export default function CompanyLicenses() {
  return (
    <section className="py-10 md:py-10 bg-gradient-to-b from-[#f8fbff] via-white to-[#f5f8fc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Company Licenses & Certifications
          </h2>

          <p className="mt-6 max-w-7xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg leading-7">
            Our organization operates with complete legal compliance and
            government-approved certifications to ensure trust, safety and
            professional security services.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
          {licenses.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Left Border Animation */}
              <div className="absolute left-0 top-0 h-full w-0 group-hover:w-2 bg-yellow-400 transition-all duration-500"></div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 md:p-4">
                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0B3C6D] to-[#174C83] text-yellow-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300 flex-shrink-0">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="sm:ml-6 mt-5 sm:mt-0 text-center sm:text-left flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0B3C6D]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-500 text-sm sm:text-base leading-6">
                    {item.desc}
                  </p>

                  <div className="mt-4 inline-block bg-yellow-50 border border-yellow-300 rounded-xl px-4 py-2">
                    <span className="font-bold text-[#0B3C6D] text-xs sm:text-sm md:text-base break-all">
                      {item.value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}