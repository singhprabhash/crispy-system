import { Header } from '@/src/UI/Header/Header'
import { SubHeader } from '@/src/UI/Header/SubHeader'
import Image from 'next/image';
import React from 'react'
// import styles from '../../../styles/ourworks.module.css';
// import ourServices from "../../../FactoryData/ourServices.json";
import { FileText, Bookmark, Building, BarChart, Shield, FileCheck, ArrowRight } from 'lucide-react';
import ServiceCards from '../Cards/ServiceCards';

const services = [
  {
    icon: <FileText size={32} />,
    title: "Income Tax Filing",
    description: "Comprehensive income tax filing services for individuals and businesses.",
    features: [
      "Personal and business tax returns",
      "Tax planning and consultation",
      "Deduction optimization",
      "Compliance assurance"
    ]
  },
  {
    icon: <Bookmark size={32} />,
    title: "Trademark Registration",
    description: "Protect your brand identity with our trademark services.",
    features: [
      "Trademark search and analysis",
      "Application processing",
      "Opposition handling",
      "Renewal management"
    ]
  },
  {
    icon: <Building size={32} />,
    title: "Company Registration",
    description: "Start your business journey with proper registration.",
    features: [
      "Company incorporation",
      "Documentation support",
      "Legal compliance",
      "Post-registration support"
    ]
  },
  {
    icon: <BarChart size={32} />,
    title: "GST Services",
    description: "Complete GST registration and filing solutions.",
    features: [
      "GST registration",
      "Monthly/quarterly returns",
      "Input tax credit",
      "GST audit support"
    ]
  },
  {
    icon: <Shield size={32} />,
    title: "Legal Compliance",
    description: "Stay compliant with all regulatory requirements.",
    features: [
      "Regulatory compliance",
      "Legal documentation",
      "Advisory services",
      "Risk assessment"
    ]
  },
  {
    icon: <FileCheck size={32} />,
    title: "Accounting Services",
    description: "Professional bookkeeping and accounting solutions.",
    features: [
      "Bookkeeping",
      "Financial statements",
      "Payroll management",
      "Business advisory"
    ]
  }
];


function OurWork() {
  return (
    <div className='ourWorks__header snap-start px-8 mt-10 text-center'>
      
      <section id="services" className="py-20 rounded-2xl">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Our Professional Services
          </h2>
          <div className="w-[250px] h-1 bg-dark-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Comprehensive financial and legal services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCards
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default OurWork