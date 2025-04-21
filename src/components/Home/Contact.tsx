import React from 'react';
import ContactForm from './Contact/ContactFrom';
import ContactInfo from './Contact/ContactInfo';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h2>
        <div className="w-[150px] h-1 bg-dark-green-500 mx-auto mb-4"></div>

          <p className="text-lg text-gray-600">
            We&apos;d love to hear from you. Please fill out the form below or use our contact information to reach out.
          </p>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 ">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;