'use client';

import {
    PhoneCall,
    MapPin,
    Send,
    Facebook,
    Instagram,
    Youtube,
    Printer, // ✅ This exists
  } from 'lucide-react';
  
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Componentes/Navbar/Navbar';
 
export default function page() {
  return (
   <>
   <Navbar/>
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Contact With Us</h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        {/* Phone */}
        <a href="tel:+91 9990144668">
        <div className="border   p-8 hover:shadow-lg transition">
          <PhoneCall className="mx-auto w-10 h-10 text-gray-700 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Contact</h3>
          <div className="w-12 h-1 mx-auto bg-pink-500 mb-2"></div>
          <p className="text-sm text-gray-600">+91 9990144668</p>
        </div>
       </a>

        {/* Address */}
       
        <div className="border   p-8 hover:shadow-lg transition">
          <MapPin className="mx-auto w-10 h-10 text-gray-700 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Address</h3>
          <div className="w-12 h-1 mx-auto bg-pink-500 mb-2"></div>
          <p className="text-sm text-gray-600">Rohini, Delhi - 110085</p>
        </div>

        {/* Email */}
        <a href="mailto:skgphotography94@gmail.com">
        <div className="border   p-8 hover:shadow-lg transition">
          <Send className="mx-auto w-10 h-10 text-pink-600 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
          <div className="w-12 h-1 mx-auto bg-pink-500 mb-2"></div>
          <p className="text-sm text-gray-600">skgphotography94@gmail.com</p>
        </div>
        </a>
      </div>

      {/* Social Icons */}
      <div className="bg-[#1e1e1e] py-6 px-4 flex justify-center gap-6   max-w-xl mx-auto">
        <a
          href="https://wa.me/919990144668"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-700  p-3 rounded-full hover:scale-110 transition"
        >
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61560966011378" className="text-white p-3 rounded-full hover:scale-110 transition bg-gray-700">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/albumwala_/" className="text-white p-3 rounded-full hover:scale-110 transition bg-gray-700">
          <Instagram size={20} />
        </a>
        <a href="https://www.youtube.com/@skgphotography" className="text-white p-3 rounded-full hover:scale-110 transition bg-gray-700">
          <Youtube size={20} />
        </a>
        <a href="https://in.pinterest.com/SKGPhotography11/" className="text-white p-3 rounded-full hover:scale-110 transition bg-gray-700">
          <Printer size={20} />
        </a>
      </div>
    </section>
    
    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668">  <span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}</a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
         
      </footer>
   </>
  );
}
