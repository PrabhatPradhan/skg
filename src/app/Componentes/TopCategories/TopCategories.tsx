"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: string;
  url_key?: string;
}

export default function TopCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const baseImageUrl = "https://skgpsd.com/skgpsdbe/public/";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "https://skgpsd.com/skgpsdbe/public/api/web/cat-home-albums"
        );
        if (res.data?.data?.categories) {
          setCategories(res.data.data.categories);
        } else {
          console.warn("No categories found in API response.");
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const generateSlug = (name: string): string => {
    return name
      .replace(/Albums\s*\(/i, "")
      .replace(/\)/, "")
      .replace(/\s*X\s*/i, "x")
      .trim()
      .toLowerCase();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mb-12">
      <div className="text-center mb-12">
        <h5 className="text-2xl font-semibold tracking-widest text-gray-500 uppercase mb-1">
          Top Albums Categories
        </h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => {
          if (!cat?.id || !cat?.name || !cat?.image) return null;

          const slug = generateSlug(cat.name);

          return (
            <div
              key={cat.id}
              className="bg-gray-100 rounded shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="relative w-full h-[250px]">
                <Image
                  src={baseImageUrl + cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-md font-bold text-gray-800">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get This Album on PSD
                </p>
                <Link
                  href={`/album/${slug}`}
                  className="inline-block bg-black text-white px-6 py-2 text-sm font-semibold rounded hover:bg-gray-800 transition"
                >
                  View All
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
