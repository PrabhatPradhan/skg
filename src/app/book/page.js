'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import Navbar from '../Componentes/Navbar/Navbar';
// import SearchBar from '../Componentes/SearchBar/SearchBar';

const albums = [
  {
    slug: 'wedding-album-design',
    title: 'Wedding Album Design',
    author: 'Telugu Photoshop guruji',
    views: 14900,
    image: '/Images/4.jpg',
  },
  {
    slug: 'album-designing-engagement',
    title: 'Album Designing_Engagement',
    author: 'Harish Raj',
    views: 733,
    image: '/Images/4.jpg',
  },
  {
    slug: 'wedding-album-template',
    title: 'Wedding Album Template',
    author: 'Rahul Telbhare',
    views: 281,
    image: '/Images/5.jpg',
  },
  {
    slug: 'album-designs-dhanu',
    title: 'Album Designs',
    author: 'Dhanu Gunawardhana',
    views: 13500,
    image: '/Images/6.jpg',
  },
];

export default function AlbumGrid() {
  return (
    <>
      <Navbar />

      {/* <div className="flex justify-center mt-12">
        <SearchBar />
      </div> */}

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {albums.map((album) => {
            const albumPath = `/${album.slug}`;
            const whatsappMessage = `https://wa.me/919990144668?text=Hi%2C%20I'm%20interested%20in%20the%20${encodeURIComponent(album.title)}%20album`;

            return (
              <div
                key={albumPath}
                className="bg-white rounded-lg shadow hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="relative w-full h-56">
                  <Link href={albumPath}>
                    <Image
                      src={album.image}
                      alt={album.title}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {album.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{album.author}</p>

                  <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{(album.views / 1000).toFixed(1)}K</span>
                    </div>
                  </div>

                  <div className="flex justify-between gap-2">
                    <Link
                      href={albumPath}
                      className="text-sm bg-black text-white py-1.5 px-3 rounded hover:bg-gray-800 transition"
                    >
                      View Album
                    </Link>
                    <a
                      href={whatsappMessage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm border border-black text-black py-1.5 px-3 rounded hover:bg-gray-100 transition"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center text-sm">
        <p>
          <span className="text-gray-300">Copyright © 2022</span>{' '}
          <a href="tel:+91 9990144668">
            <span className="font-semibold text-yellow-400">SKG PSD.</span>{' '}
          </a>
          <span className="font-bold">All Right Reserved.</span>
        </p>
      </footer>
    </>
  );
}
