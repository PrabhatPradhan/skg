'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Navbar from "../Componentes/Navbar/Navbar";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(null); 

  // Fetch images on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('https://skgpsd.com/skgpsdbe/public/api/web/album/album');
        const data = res.data?.data?.album?.galleries;
        if (data) {
          const parsed = JSON.parse(data);
          setImages(parsed.map(item => `https://skgpsd.com/skgpsdbe/public/${item.url}`));
        }
      } catch (err) {
        console.error('Failed to fetch images:', err);
      }
    };

    fetchImages();
  }, []);

  const open = (i) => setIndex(i);
  const close = () => setIndex(null);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <>
      <Navbar />
      <h2 className="text-center text-3xl font-bold mb-6 mt-8">Our Best Design</h2>
      <section className="p-6 flex flex-col lg:flex-row gap-6 relative">
        {/* Gallery Section */}
        <div className="lg:w-2/3 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {images.map((src, i) => (
              <div key={i} onClick={() => open(i)} className="relative cursor-pointer group">
                <Image src={src} alt={`Gallery ${i}`} width={400} height={500} className="rounded w-full h-auto" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white text-4xl font-bold">+</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          {index !== null && (
            <Dialog open={true} onClose={close} className="fixed inset-0 z-50">
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
                <Dialog.Panel className="relative">
                  <Image src={images[index]} alt={`Large ${index}`} width={1000} height={700} className="rounded" />
                  <button onClick={close} className="absolute top-2 right-2 text-white bg-black/50 p-2 rounded-full">
                    <X />
                  </button>
                  <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full">
                    <ChevronLeft />
                  </button>
                  <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 p-2 rounded-full">
                    <ChevronRight />
                  </button>
                </Dialog.Panel>
              </div>
            </Dialog>
          )}
        </div>

        {/* Inquiry Form */}
        <div className="lg:w-1/3 w-full lg:sticky lg:top-28 h-fit bg-white p-6 rounded shadow-md border">
          <h3 className="text-xl font-bold mb-4">PSD Service Inquiry</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" required className="w-full border px-3 py-2 rounded" />
            <input type="email" placeholder="Email Address (optional)" required className="w-full border px-3 py-2 rounded" />
            <input type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
            <input type="text" placeholder="Location" className="w-full border px-3 py-2 rounded" />
            <textarea placeholder="Describe your request or additional notes" className="w-full border px-3 py-2 rounded" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit Request</button>
          </form>
        </div>
      </section>

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
