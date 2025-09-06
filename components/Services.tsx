"use client";

import { Zap, Shield, Users, Clock, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Motorcycle Sales",
      description:
        "Find your perfect ride from our extensive collection of new and certified pre-owned motorcycles. Every bike comes with our quality guarantee.",
      features: [
        "New & certified pre-owned motorcycles",
        "Comprehensive warranty coverage",
        "Professional inspections",
        "Financing options available",
      ],
    },
    {
      icon: Clock,
      title: "Motorcycle Rentals",
      description:
        "Experience the thrill without the commitment. Rent premium motorcycles for your adventures, from weekend rides to extended touring.",
      features: [
        "Hourly, daily, and weekly rentals",
        "Premium motorcycle selection",
        "Full insurance coverage",
        "Safety equipment included",
      ],
    },
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Zap, value: "500+", label: "Motorcycles Available" },
    { icon: Shield, value: "15+", label: "Years Experience" },
    { icon: Star, value: "4.9", label: "Average Rating" },
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you&apos;re looking to buy your dream motorcycle or rent one
            for an adventure, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-orange-500">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 text-gray-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
