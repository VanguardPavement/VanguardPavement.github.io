import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Properties from "@/components/Properties";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Properties />
        <Amenities />
        <Location />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
