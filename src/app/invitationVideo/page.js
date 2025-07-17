"use client";
import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";

export default function Page() {
  const videoUrls = [
    "https://www.youtube.com/embed/_4jR9njMhSo",
    "https://www.youtube.com/embed/l0FE8tew6Ws",
    "https://www.youtube.com/embed/WRHhvh_a-G0",
    "https://www.youtube.com/embed/RWLc1sOTDnQ",
    "https://www.youtube.com/embed/_4jR9njMhSo",
    "https://www.youtube.com/embed/l0FE8tew6Ws",
    "https://www.youtube.com/embed/WRHhvh_a-G0",
    "https://www.youtube.com/embed/RWLc1sOTDnQ",
  ];
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Invitation Video
        </h2>
        {/* 4 Videos Grid */}
        <h2 className="text-3xl mb-4 font-bold   text-gray-700">
            Wedding album
          </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {videoUrls.map((url, index) => (
    <React.Fragment key={index}>
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[26rem]"
          src={url}
          title={`YouTube video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Show heading after every 4 videos */}
      {(index + 1) % 4 === 0 && (
        <div className="col-span-full">
          <h2 className="text-3xl mb-4 font-bold   text-gray-700">
          Ring Ceremony
          </h2>
        </div>
      )}
    </React.Fragment>
  ))}
</div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668">
            <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}
          </a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
