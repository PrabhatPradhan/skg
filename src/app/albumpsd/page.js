import React from 'react'
 
import Navbar from '../Componentes/Navbar/Navbar'
import SectionHeading from '../Componentes/Categories/Categories';
export default function pajes() {
  return (
    <>
    <Navbar/>
     
    <SectionHeading title="Album 12 X 36" className="text-pink-600" />
    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{" "}
          <a href="tel:+91 9990144668"><span className="font-semibold text-yellow-400">SKG PSD.</span>{" "}</a> 
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  )
}
