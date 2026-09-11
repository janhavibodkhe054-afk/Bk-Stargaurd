import React from "react";

export default function ContactMap() {
  return (
    <section className="w-full">
      <iframe
        title="BK Star Guard Security Location"
        src="https://maps.google.com/maps?q=17.6555938,75.32538&hl=en&z=17&output=embed"
        className="w-full h-[450px] md:h-[500px] border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </section>
  );
}