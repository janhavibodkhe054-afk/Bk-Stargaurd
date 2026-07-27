import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 bg-white overflow-hidden">

          {/* Contact Form */}
          <div className="p-10 lg:p-14">

            <h2 className="text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <div className="flex items-center mt-3 mb-10">
              <div className="w-24 h-1 bg-[#EFA736]"></div>
              <div className="w-24 h-1 bg-gray-900"></div>
            </div>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-[#EFA736]"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-[#EFA736]"
              />

              <input
                type="text"
                placeholder="Subject*"
                className="w-full border border-gray-300 px-5 py-4 outline-none focus:border-[#EFA736]"
              />

              <textarea
                rows="6"
                placeholder="Your Message*"
                className="w-full border border-gray-300 px-5 py-4 outline-none resize-none focus:border-[#EFA736]"
              ></textarea>

              <button className="bg-yellow-400 text-black px-10 py-4 font-semibold hover:bg-black hover:text-white duration-300">
                SEND
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div className="bg-white flex items-center justify-center p-10 lg:p-14">

            <div>

              <h2 className="text-4xl font-bold text-gray-900">
                Contact Us
              </h2>

              <div className="flex items-center mt-3 mb-10">
                <div className="w-24 h-1 bg-[#EFA736]"></div>
                <div className="w-24 h-1 bg-gray-900"></div>
              </div>

              <div className="space-y-8">

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full border-2 border-[#EFA736] flex items-center justify-center">
                    <Phone className="text-[#EFA736]" />
                  </div>

                  <div>
                    <p>+91 86683 17591</p>
                    <p>+91 88883 20357</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full border-2 border-[#EFA736] flex items-center justify-center">
                    <Mail className="text-[#EFA736]" />
                  </div>

                  <div>
                    <p>info@company.com</p>
                    <p>support@company.com</p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="w-14 h-14 rounded-full border-2 border-[#EFA736] flex items-center justify-center">
                    <MapPin className="text-[#EFA736]" />
                  </div>

                  <div>
                    <p>B K STAR GUARD  SECURITY AND MANPOWER SERVICES</p>
                    <p>21,YASHODHAN NAGAR SANGOLA ROAD PANDHARPUR,413304</p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}