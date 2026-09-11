import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919272136995"; // तुमचा WhatsApp नंबर

    const text = `*New Security Enquiry*

👤 *Name:* ${formData.name}

📧 *Email:* ${formData.email}

📱 *Phone:* ${formData.phone}

📌 *Subject:* ${formData.subject}

📝 *Message:*
${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <section className="py-20 bg-[#f8f9fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ================= Left Form ================= */}

          <div
            className="bg-[#08172F] rounded-3xl p-8 md:p-12 shadow-2xl"
            data-aos="fade-right"
          >
            <h2 className="text-4xl md:text-4l font-bold text-white mt-5 leading-tight">
              Let's Discuss Your Security Requirements
            </h2>

            <p className="text-gray-300 mt-5 leading-8">
              Whether you need security guards, housekeeping, industrial
              security, manpower supply, or event security, our experienced team
              is here to provide the right solution for your business.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-yellow-400 transition"
                required
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-yellow-400 transition"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-yellow-400 transition"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 outline-none focus:border-yellow-400 transition"
                required
              />

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message..."
                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-300 resize-none outline-none focus:border-yellow-400 transition"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white hover:bg-white text-[#08172F] py-4 rounded-xl font-semibold transition duration-300"
              >
                Get Free Quote
              </button>
            </form>
          </div>

          {/* ================= Right Contact Info ================= */}

          <div data-aos="fade-left">
            <span className="text-yellow-500 uppercase tracking-[3px] font-semibold">
              Contact Information
            </span>

            <h2 className="text-4xl font-bold text-[#08172F] mt-3">
              We're Always Ready
              <span className="block">To Help You</span>
            </h2>

            <p className="text-gray-600 leading-8 mt-5 mb-10">
              Contact our experienced team for reliable security guards,
              industrial security, housekeeping, manpower solutions, and
              customized security services tailored to your requirements.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-7">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-5">
                  <Phone className="text-[#08172F]" />
                </div>

                <h3 className="text-xl font-bold text-[#08172F]">Call Us</h3>

                <div>
                  

                  <div className="gap-x-6 gap-y-2 mt-3 text-gray-600">
                    <p>+91 92721 36995 </p>
                    <p>+91 76209 66270</p>
                  </div>
                </div>
              </div>

              {/* Email */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-7">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-5">
                  <Mail className="text-[#08172F]" />
                </div>

                <h3 className="text-xl font-bold text-[#08172F]">Email Us</h3>

                <p className="text-gray-600 mt-3 leading-7">
                  bkstaguard1@gmail.com
                  <br />
                  bkstarguard@gmail.com
                </p>
              </div>

              {/* Address */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-7">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-5">
                  <MapPin className="text-[#08172F]" />
                </div>

                <h3 className="text-xl font-bold text-[#08172F]">
                  Office Address
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Maharashtra, India
                </p>
              </div>

              {/* Hours */}

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 p-7">
                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-5">
                  <Clock className="text-[#08172F]" />
                </div>

                <h3 className="text-xl font-bold text-[#08172F]">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Monday - Sunday
                  <br />
                  24 × 7 Security Services
                  <br />
                  Emergency Support Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
