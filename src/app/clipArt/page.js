
'use client';
import React from 'react'
 
import Navbar from '../Componentes/Navbar/Navbar'
import Image from 'next/image';

 
 

const albums = [
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://www.shutterstock.com/image-vector/cute-penguin-clipart-vector-file-600nw-2522211459.jpg',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://www.shutterstock.com/image-vector/cute-penguin-clipart-vector-file-600nw-2522211459.jpg',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://cdn.pixabay.com/photo/2019/12/05/19/28/clip-art-4675943_1280.png',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://img.freepik.com/free-vector/cheerful-cartoon-butterfly-illustration_1308-168815.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosFCtbLy1Kd_MeOakm0YbQzyI1wwFLC_vvQ&s',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://img.freepik.com/free-vector/cheerful-cartoon-butterfly-illustration_1308-168815.jpg?semt=ais_hybrid&w=740',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosFCtbLy1Kd_MeOakm0YbQzyI1wwFLC_vvQ&s',
  },
  {
    title: 'ALBUM (12 X 36)',
    subtitle: 'Get This Album on PSD',
    image: 'https://www.shutterstock.com/image-vector/cute-penguin-clipart-vector-file-600nw-2522211459.jpg',
  },
];

export default function pajes() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto px-4 ">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 ">
          {albums.map((album, index) => (
            <div key={index} className="bg-gray-100 rounded shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <Image
                src={album.image}
                alt={album.title}
                width={400}
                height={300}
                className="w-full h-[12rem] bg-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-md font-bold text-gray-800">{album.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{album.subtitle}</p>
              <a
                  href="https://wa.me/919990144668?text=Hi%2C%20I'm%20interested%20in%20the%20"
                  className="inline-block bg-black text-white px-6 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
    
      
    </>
  )
}
