// app/ditails/[detail]/page.js
 
import Navbar from "../../Componentes/Navbar/Navbar";
import Fromright from "../../Componentes/Formright/Formright";
import LightboxClient from "./LightboxClient"; // ✅ New client component

export async function generateStaticParams() {
  const res = await fetch('https://skgpsd.com/skgpsdbe/public/api/web/category/albums-12X36');
  const data = await res.json();

  return data.data.albums.map((album) => ({
    detail: album.url_key,
  }));
}

export default async function DetailPage({ params }) {
  const { detail } = params;

  const res = await fetch('https://skgpsd.com/skgpsdbe/public/api/web/category/albums-12X36');
  const data = await res.json();

  const album = data.data.albums.find((a) => a.url_key === detail);

  if (!album) {
    return <div className="p-10 text-red-500 text-center">Album not found</div>;
  }

  const galleryImages = JSON.parse(album.galleries);

  return (
    <>
      <Navbar />

      <div className="p-6 flex flex-col lg:flex-row gap-8 min-h-screen">
        {/* Left: Gallery Section */}
        <div className="lg:w-2/3 w-full">
          <h1 className="text-3xl font-bold mb-6">{album.name}</h1>
          {/* 🔄 Client Side Lightbox */}
          <LightboxClient galleryImages={galleryImages} />
        </div>

        {/* Right: Inquiry Form */}
        <div className="lg:w-1/3 w-full">
          <div className="sticky top-24 bg-white p-6 rounded shadow-md border">
            <Fromright />
          </div>
        </div>
      </div>
    </>
  );
}
