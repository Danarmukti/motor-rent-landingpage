import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@motohub.com", "sales@motohub.com"],
      description: "Send us a message anytime",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Motorcycle Ave", "Los Angeles, CA 90210"],
      description: "Visit our premium showroom",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-8PM", "Sat-Sun: 10AM-6PM"],
      description: "We're here when you need us",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to find your perfect motorcycle? Contact us today and let our
            experts help you make the right choice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start space-x-4 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-lg">
                      {detail}
                    </p>
                  ))}
                  <p className="text-gray-400 mt-2">{info.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="animate-slideInRight">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="buying">Buying a motorcycle</option>
                    <option value="renting">Renting a motorcycle</option>
                    <option value="service">Service & maintenance</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your motorcycle needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-orange-500">MotoHub</h3>
              <p className="text-gray-400">Premium Motorcycle Sales & Rental</p>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 MotoHub. All rights reserved.</p>
              <p className="mt-2">
                Ride responsibly. Always wear protective gear.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
