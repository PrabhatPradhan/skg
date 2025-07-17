"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function LightboxClient({ galleryImages }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const base = "https://skgpsd.com/skgpsdbe/public/";

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer"
            onClick={() => setSelectedIndex(idx)}
          >
            <Image
              src={`${base}${img.url}`}
              alt={`Image ${idx}`}
              width={400}
              height={300}
              className="rounded shadow"
            />
            {/* Hover Plus Icon */}
            <div className="absolute inset-0   bg-black/50 opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center rounded">
              <span className="text-white text-5xl font-bold">+</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black/60 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          {/* Enlarged Image */}
          <img
            src={`${base}${galleryImages[selectedIndex].url}`}
            alt="Full View"
            className="w-[90vw] h-auto max-h-[90vh] object-contain rounded shadow-lg"
          />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            className="absolute left-4 text-white text-3xl font-bold"
            onClick={handlePrev}
          >
            ⟨
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-3xl font-bold"
            onClick={handleNext}
          >
            ⟩
          </button>
        </div>
      )}
    </>
  );
}
