import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-10"></div>
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
          alt="Premium motorcycle"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-3xl animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Ride Your
            <span className="text-orange-500"> Dream</span>
            <br />
            Motorcycle
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Premium motorcycles for sale and rent. Experience the thrill of the
            open road with our carefully curated collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
              Browse Motorcycles
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all">
              Rent Today
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-8 h-8 text-orange-500" />
      </div>
    </section>
  );
}
