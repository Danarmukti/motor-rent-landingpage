"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Zap } from "lucide-react";

interface Motorcycle {
  id: number;
  name: string;
  brand: string;
  price: number;
  rentalPrice: number;
  image: string;
  type: "sport" | "cruiser" | "touring" | "adventure";
  year: number;
  engine: string;
  available: boolean;
}

const motorcycles: Motorcycle[] = [
  {
    id: 1,
    name: "Ninja ZX-10R",
    brand: "Kawasaki",
    price: 18500,
    rentalPrice: 150,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    type: "sport",
    year: 2023,
    engine: "998cc",
    available: true,
  },
  {
    id: 2,
    name: "Street Glide",
    brand: "Harley-Davidson",
    price: 26900,
    rentalPrice: 200,
    image: "https://images.pexels.com/photos/2116718/pexels-photo-2116718.jpeg",
    type: "cruiser",
    year: 2023,
    engine: "1868cc",
    available: false,
  },
  {
    id: 3,
    name: "R1250GS",
    brand: "BMW",
    price: 19995,
    rentalPrice: 180,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    type: "adventure",
    year: 2023,
    engine: "1254cc",
    available: false,
  },
  {
    id: 4,
    name: "Gold Wing",
    brand: "Honda",
    price: 28500,
    rentalPrice: 220,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    type: "touring",
    year: 2023,
    engine: "1833cc",
    available: true,
  },
  {
    id: 5,
    name: "MT-09",
    brand: "Yamaha",
    price: 14500,
    rentalPrice: 120,
    image: "https://images.pexels.com/photos/2116718/pexels-photo-2116718.jpeg",
    type: "sport",
    year: 2023,
    engine: "847cc",
    available: true,
  },
  {
    id: 6,
    name: "Sportster S",
    brand: "Harley-Davidson",
    price: 15499,
    rentalPrice: 140,
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg",
    type: "cruiser",
    year: 2023,
    engine: "1252cc",
    available: true,
  },
];

export default function Motorcycles() {
  const [activeTab, setActiveTab] = useState<"sale" | "rent">("sale");
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredMotorcycles = motorcycles.filter(
    (bike) => selectedType === "all" || bike.type === selectedType
  );

  const types = ["all", "sport", "cruiser", "touring", "adventure"];

  return (
    <section id="motorcycles" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Motorcycles
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our premium collection of motorcycles available for purchase
            or rental.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-xl">
            <button
              onClick={() => setActiveTab("sale")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "sale"
                  ? "bg-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setActiveTab("rent")}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "rent"
                  ? "bg-orange-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full capitalize font-medium transition-all ${
                selectedType === type
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {type === "all" ? "All Types" : type}
            </button>
          ))}
        </div>

        {/* Motorcycles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMotorcycles.map((bike, index) => (
            <div
              key={bike.id}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500 transition-all transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64">
                <Image
                  src={bike.image}
                  alt={`${bike.brand} ${bike.name}`}
                  fill
                  className="object-cover"
                />
                {!bike.available && (
                  <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                      Not Available
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white">{bike.name}</h3>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                    {bike.type}
                  </span>
                </div>

                <p className="text-gray-400 mb-4">{bike.brand}</p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {bike.year}
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {bike.engine}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">
                      $
                      {activeTab === "sale"
                        ? bike.price.toLocaleString()
                        : bike.rentalPrice}
                      {activeTab === "rent" && (
                        <span className="text-sm text-gray-400">/day</span>
                      )}
                    </div>
                  </div>
                  <button
                    disabled={!bike.available}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      bike.available
                        ? "bg-orange-500 hover:bg-orange-600 text-white"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {activeTab === "sale" ? "Buy Now" : "Rent Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
