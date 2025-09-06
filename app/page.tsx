import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Motorcycles from "@/components/Motorcycles";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <Services />
      <Motorcycles />
      <About />
      <Contact />
    </main>
  );
}
