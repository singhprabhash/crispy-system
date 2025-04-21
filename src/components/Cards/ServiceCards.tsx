import React from 'react'
import { FileText, Bookmark, Building, BarChart, Shield, FileCheck, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCards: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-app-white rounded-lg p-8 transition-all duration-300 hover:transform hover:-translate-y-2 group border">
      <div className='flex gap-6 items-start justify-start 0 mb-6'>
        <div className="p-4 bg-app-black-600 rounded-xl text-neon-green mb-6 group-hover:bg-neon-green group-hover:text-app-black transition-all">
          {icon}
        </div>
        <div className='flex flex-col gap-2 text-left'>
          <h3 className="text-lg font-serif font-bold text-app-black-200">{title}</h3>
          <p className="text-app-black-600 text-sm">{description}</p>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
            <span className="text-app-black-200 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="#contact" 
        className="inline-flex items-center text-green-600 hover:text-app-white transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};
export default ServiceCards