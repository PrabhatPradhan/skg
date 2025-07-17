"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Album {
  id: number;
  name: string;
  image: string;
  url_key: string;
}

interface Category {
  id: number;
  name: string;
  url_key: string;
  image: string;
  albums: Album[];
}

export default function AlbumCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const baseImageUrl = "https://skgpsd.com/skgpsdbe/public/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://skgpsd.com/skgpsdbe/public/api/web/cat-home-albums");
        setCategories(res.data?.data?.categories || []);
      } catch (error) {
        console.error("Error fetching album categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium">Loading albums...</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-2xl font-semibold tracking-widest text-gray-500 uppercase mb-1">
            Albums Categories
          </h5>
        </div>

        {categories.map((category) => (
          <div key={category.id} className="mb-16">
            <div className="flex flex-row justify-between items-center mb-8">
              <h5 className="text-2xl font-bold text-black uppercase">
                {category.name}
              </h5>
              <Link
                href={`/album/${category.url_key}`}
                className="inline-block bg-black text-white px-6 py-3 h-[2.5rem] text-sm font-semibold rounded hover:bg-gray-800 transition"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {category.albums.map((album) => (
                <div
                  key={album.id}
                  className="bg-gray-100 rounded shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                  <Image
                    src={baseImageUrl + album.image}
                    alt={album.name}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-md font-bold text-gray-800">{album.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">Get This Album on PSD</p>
                    <Link
                        href={`/ditails/${album.url_key}`}
                      className="inline-block bg-black text-white px-6 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
