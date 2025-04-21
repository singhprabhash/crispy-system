import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { validateForm } from '../../../utils/validation';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Show submitting state
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col items-center justify-center text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }
  
  return (
    <div className="bg-white border rounded-2xl shadow-xl p-8 transform transition duration-500 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
            placeholder="How can we help?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
            placeholder="Tell us how we can assist you..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition duration-200 ${
            isSubmitting 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200'
          }`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <div 
                className="flex items-center w-full md:w-auto px-12 py-4 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-app-white transition-all text-center"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;