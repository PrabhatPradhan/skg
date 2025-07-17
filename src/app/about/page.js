'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '../Componentes/Navbar/Navbar';
import Link from 'next/link';

export default function About() {
  return (
   <>
   <Navbar/>
    <section className="bg-white text-gray-800  ">
      {/* Hero Section */}
      <div className="relative w-full h-[150px]">
        <Image
          src="/Images/card-1.jpg" // Replace with your hero image
          alt="Wedding Photography"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            About SKG Photography
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          We believe every photo tells a story—and every story deserves a beautiful frame.
          Our mission is to empower photographers with beautiful, affordable wedding album templates.
        </p>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
            <p className="mb-4">
              At <strong>SKG Photography</strong>, we offer high-quality PSD wedding album templates
              at an unbeatable price—just ₹1. With years of experience, we know how to save you time and
              enhance your editing workflow.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>12x36, 24x36, 12x30, and Square Formats</li>
              <li>Fully customizable and print-ready</li>
              <li>Traditional, candid, cinematic & modern styles</li>
            </ul>
          </div>

          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/Images/Categories-2.jpg" // Replace with your PSD preview
              alt="Sample PSD Layout"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="/Images/Categories-3.jpg" // Replace with your PSD preview
              alt="Wedding Album Design"
              fill
              className="object-cover rounded-xl shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose SKG?</h2>
            <p className="mb-4">
              We understand the needs of wedding editors and studio owners. That’s why we provide premium designs
              that are elegant, time-saving, and affordable.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Only ₹1 per template—great design made accessible</li>
              <li>Fresh layouts added regularly</li>
              <li>Built to support India’s creative community</li>
            </ul>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-8">Template Previews</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/Images/4.jpg', '/Images/5.jpg', '/Images/6.jpg', '/Images/4.jpg'].map((src, index) => (
              <div key={index} className="relative w-full h-48">
              <Link href="/wedding-album-design">  <Image
                  src={src} // Replace with real paths to your preview images
                  alt={`Template ${index + 1}`}
                  fill
                  className="object-cover rounded-lg shadow-sm"
                /></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668">   <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}</a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
   </>
  );
}
