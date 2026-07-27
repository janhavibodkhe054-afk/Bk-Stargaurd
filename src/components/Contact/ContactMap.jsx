import React from "react";

export default function ContactMap() {
  return (
    <section className="w-full">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full border-0"
      ></iframe>
    </section>
  );
}