'use client';

import { Testimonials } from "@/src/components/Home/Testimonials";
import HeroSection from "@/src/components/Home/HeroSection";
import { Services } from "@/src/components/Home/Services";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import OurWork from "@/src/components/Home/OurWork";
import { ArrowRight } from "lucide-react";
import Faq from "@/src/components/Home/Faq";
import Contact from "@/src/components/Home/Contact";
import GallerySection from "@/src/components/Home/Gallery";

export default function Home() {
  return (
    <main className="main relative">
      <Navbar />
      <HeroSection />

      {/* <Services /> */}

      <section className="bg-green-50 placeholder:py-16 px-6 py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-2">Empowering Business The Excellence</h2>
        <div className="w-[250px] h-1 bg-dark-green-500 mx-auto mb-4"></div>
        <p className="max-w-2xl mx-auto text-lg">
            Comprehensive financial and legal services tailored to your needs
          </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
          {['Efficiency Experts', 'Growth and Innovation', 'Management Mastery', 'Success Accelerators'].map((title) => (
            <div className="p-6 border rounded-lg bg-app-white shadow-sm" key={title}>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">Many desktop publishing packages web page editors now use.</p>
              <button className="mt-4 text-green-600 font-medium">Read More →</button>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
            <div className="w-full md:w-auto">
              <a 
                href="#contact" 
                className="block w-full md:w-auto px-12 py-4 bg-app-black-600 text-app-white rounded-lg font-medium hover:bg-app-black transition-all group"
              >
                Start Consultation
                <ArrowRight className="inline-block ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="w-full md:w-auto">
              <a 
                href="#services" 
                className="block w-full md:w-auto px-12 py-4 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-app-white transition-all text-center"
              >
                View Services
              </a>
            </div>
          </div>
        <section className="flex w-11/12 mx-auto mt-20">
          <div className="bg-dark-green-500 py-10 px-6 flex-1 rounded-l-2xl h-[150px] flex items-center">
            <h3 className="text-2xl font-semibold mb-4 md:mb-0 text-neon-green">Lets Do Great!</h3>
          </div>
          <div className="bg-neon-green flex-1 flex items-center py-10 px-6 rounded-r-2xl h-[150px]">
            <p className="text-sm mb-2 md:mb-0">2.80 million+ Worldwide clients</p>
          </div>
        </section>

        <OurWork />

      </section>
      <GallerySection />

      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}
