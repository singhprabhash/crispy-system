'use client';

import { Testimonials } from "@/src/components/Home/Testimonials";
import HeroSection from "@/src/components/Home/HeroSection";
import { Services } from "@/src/components/Home/Services";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import OurWork from "@/src/components/Home/OurWork";

export default function Home() {
  return (
    <main className="main relative">
      <Navbar />
      <HeroSection />
      
      <Services />
      <OurWork />
      <Testimonials />
      <Footer />
    </main>
  )
}
