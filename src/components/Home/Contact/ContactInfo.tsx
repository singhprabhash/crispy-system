import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-8 md:pl-8">
      {/* Contact Details */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex items-start rounded-lg p-4 bg-app-white shadow-sm border">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-dark-green-500 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-neon-green" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">Our Location</h4>
              <p className="text-gray-600 mt-1">
                123 Business Avenue<br />
                San Francisco, CA 94107
              </p>
              <a 
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 mt-2 transition duration-200"
              >
                View on Map <ExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
          </div>
          
          <div className="flex items-start rounded-lg p-4 bg-app-white shadow-sm border ">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-dark-green-500 flex items-center justify-center">
                <Phone className="w-5 h-5 text-neon-green" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">Phone Number</h4>
              <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-1">Mon-Fri from 8am to 6pm</p>
            </div>
          </div>
          
          <div className="flex items-start rounded-lg p-4 bg-app-white shadow-sm border ">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-dark-green-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-neon-green" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">Email Address</h4>
              <p className="text-gray-600 mt-1">contact@example.com</p>
              <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-start rounded-lg p-4 bg-app-white shadow-sm border">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-dark-green-500 flex items-center justify-center">
                <Clock className="w-5 h-5 text-neon-green" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-base font-medium text-gray-900">Office Hours</h4>
              <div className="text-gray-600 mt-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          <a 
            href="https://linkedin.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition duration-300 hover:bg-blue-600 hover:text-white"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition duration-300 hover:bg-blue-400 hover:text-white"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition duration-300 hover:bg-pink-600 hover:text-white"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://facebook.com"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition duration-300 hover:bg-blue-800 hover:text-white"
          >
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;