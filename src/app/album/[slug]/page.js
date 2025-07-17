import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Componentes/Navbar/Navbar";

// Static album slugs (for static generation)
export function generateStaticParams() {
  return ["12x36", "18x24", "20x30", "14x40"].map((slug) => ({ slug }));
}

// Convert slug to API key format
const formatSlugForAPI = (slug) => `albums-${slug.toUpperCase()}`;

export default async function AlbumDetailPage({ params }) {
  const { slug } = params;
  const apiSlug = formatSlugForAPI(slug);

  const res = await fetch(`https://skgpsd.com/skgpsdbe/public/api/web/category/${apiSlug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-10 text-center text-xl text-red-500">Failed to fetch album data</div>;
  }

  const json = await res.json();
  const album = json?.data?.albums?.[0];

  if (!album) {
    return <div className="p-10 text-center text-xl">Album not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Top section with title */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold uppercase">{album.name}</h1>
        </div>

        {/* Card Section */}
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <Image
            src={`https://skgpsd.com/skgpsdbe/public/${album.image}`}
            alt={album.name}
            width={800}
            height={500}
            className="w-full object-cover"
          />
          <div className="px-6 py-4">
            <p className="text-gray-700 text-base pb-4">{album.meta_description}</p>
            <Link
              href={`/ditails/${album.url_key}`}
              className="bg-black text-white text-sm px-4 py-2 rounded hover:bg-gray-800"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
