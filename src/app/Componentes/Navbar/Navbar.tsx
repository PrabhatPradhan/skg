"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
const albums = [
  { slug: "12x36" },
  { slug: "18x24" },
  { slug: "20x30" },
  { slug: "14x40" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [albumDropdownOpen, setAlbumDropdownOpen] = useState(false); // for mobile

  return (
    <header className="sticky top-0 bg-white shadow px-4 md:px-10 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
          <Image
            src="/Images/skg-logo.png"
            alt="Logo"
            width={180}
            height={90}
          />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base text-black font-medium relative">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>

          {/* Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <Link href="#" className="hover:text-pink-600 transition">
                Album PSD
              </Link>
              <ChevronDown
                size={16}
                className="text-gray-500 group-hover:text-pink-600 transition"
              />
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
              <ul className="py-2">
                {albums.map((album, index) => {
                  // Format slug to readable title like "12 X 36 album"
                  const formattedTitle = album.slug.replace(
                    /(\d+)(x)(\d+)/i,
                    "$1 X $3 album"
                  );

                  return (
                    <li
                      key={album.slug}
                      className={
                        index !== albums.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <Link
                        href={`/album/${album.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                      >
                        {formattedTitle}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <Link href="/courses">Courses</Link>
          <Link href="/invitationVideo">Invitation Video</Link>
          <Link href="/clipArt">Clip Art</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center gap-2">
          <div className="bg-black text-white p-2 rounded-full">
            <Phone size={20} />
          </div>
          <a href="tel:+91 9990144668">
            <div className="text-sm leading-tight">
              <p className="text-gray-600">Contact us</p>
              <p className="font-bold text-black">+91 9990144668</p>
            </div>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(true)} className="md:hidden z-50">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 p-6 space-y-6",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <Image
            src="/Images/skg-logo.png"
            alt="Logo"
            width={180}
            height={90}
          />
          </Link>
          <button onClick={() => setOpen(false)}>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col space-y-4 text-base font-medium text-gray-800">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          {/* Clickable Dropdown */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setAlbumDropdownOpen(!albumDropdownOpen)}
            >
              <span className="hover:text-pink-600 transition">Album PSD</span>
              <ChevronDown
                size={16}
                className={clsx(
                  "transition",
                  albumDropdownOpen && "rotate-180"
                )}
              />
            </div>

            {albumDropdownOpen && (
              <ul className="pl-4 mt-2">
                {[
                  "12 X 36 album",
                  "18 X 24 album",
                  "20 X 30 album",
                  "14 X 40 album",
                ].map((item, index, array) => (
                  <li
                    key={item}
                    className={
                      index !== array.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }
                  >
                    <Link
                      href="/albumpsd"
                      className="block py-2 text-sm text-gray-700 hover:text-pink-600"
                      onClick={() => setOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link href="/invitationVideo" onClick={() => setOpen(false)}>
            Invitation Video
          </Link>
          <Link href="/clipArt" onClick={() => setOpen(false)}>
            Clip Art
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>

        {/* Mobile Contact */}
        <div className="flex items-center gap-3 pt-6 border-t">
          <div className="bg-red-500 text-white p-2 rounded-full">
            <Phone size={20} />
          </div>
          <div className="text-sm">
            <p className="text-gray-600">Contact us</p>
            <p className="font-bold text-black">+91 9990144668</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        />
      )}
    </header>
  );
}
