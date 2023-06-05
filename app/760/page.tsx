'use client';

import { Testimonials } from "@/src/components/Home/Testimonials";
import HeroSection from "@/src/components/Home/HeroSection";
import { Services } from "@/src/components/Home/Services";
import Navbar from "@/src/components/Navbar";

export default function Home() {
  return (
    <main className="main relative">
      <Navbar />
      <HeroSection />
      
      <Services />
      <Testimonials />
    </main>
  )
}
