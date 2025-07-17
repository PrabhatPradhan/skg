'use client';
import Image from 'next/image';
import Link from 'next/link';
// import SearchBar from "../SearchBar/SearchBar"
export default function CardsSection() {
  // const handleSearch = (query: string) => {
  //   console.log("Searching for:", query);
  //   // add your search logic here
  // };
  return (
    <>
    {/* <div className="flex justify-center mt-12">
        <SearchBar onSearch={handleSearch} />
      </div>
     */}

    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Card 1 */}
        <div className="group bg-[#FFF8E5] p-8 rounded-3xl shadow-xl flex flex-col-reverse lg:flex-row items-center gap-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">
              Album Designing
            </h4>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 leading-snug">
              Premium Album Designing Starting At Just ₹40!
            </h3>
            <Link
              href="/book"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              src="/Images/card-2.jpg"
              alt="Album Design"
              width={480}
              height={300}
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="group bg-[#FFF8E5] p-8 rounded-3xl shadow-xl flex flex-col-reverse lg:flex-row items-center gap-8 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          {/* Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h4 className="text-sm font-bold text-yellow-600 tracking-widest uppercase mb-2">
              WhatsApp Group
            </h4>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 leading-snug">
              Join Our WhatsApp Group For Just ₹199
            </h3>
            <p className="text-gray-600 mb-4">
              Get Access to Premium PSD Templates Worth ₹5000
            </p>
            <Link
              href="/book"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-900 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Image */}
          <div className="lg:w-1/2">
            <Image
              src="/Images/card-1.jpg"
              alt="PSD Templates"
              width={480}
              height={300}
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
