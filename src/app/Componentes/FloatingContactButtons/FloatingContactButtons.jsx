"use client";
import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <>
      {/* Phone Icon with pulse animation */}
      {/* <a
        href="tel:+918800542270"
        className="fixed bottom-24 left-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110 animate-pulse"
        aria-label="Call Us"
      >
        <FaPhoneAlt className="text-xl" />
      </a> */}

      {/* WhatsApp Icon with bounce animation */}
      <a
        href="https://api.whatsapp.com/send/?phone=919990144668&text=Hi%2C+I%27m+interested+in+the+Wedding+Album+Design+album&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110 animate-bounce"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </>
  );
}
