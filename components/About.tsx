import { Shield, Users, Award, Clock } from "lucide-react";
import Image from "next/image";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every motorcycle undergoes rigorous inspection and maintenance to ensure peak performance and safety.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced team of motorcycle enthusiasts provides personalized service and expert guidance.",
    },
    {
      icon: Award,
      title: "Premium Brands",
      description:
        "We partner with leading manufacturers to offer the finest selection of motorcycles.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support and roadside assistance for complete peace of mind.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slideInLeft">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-orange-500">MotoHub</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              With over 15 years of experience in the motorcycle industry,
              we&apos;ve built our reputation on trust, quality, and exceptional
              service. Whether you&apos;re buying your first bike or your tenth,
              we&apos;re here to make your motorcycle dreams a reality.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-3 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slideInRight">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-2xl transform rotate-6"></div>
              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="relative h-80">
                  <Image
                    src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg"
                    alt="Motorcycle showroom"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Visit Our Showroom
                  </h3>
                  <p className="text-gray-400">
                    Experience our motorcycles up close. Our showroom features
                    the latest models from top manufacturers, all in pristine
                    condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
