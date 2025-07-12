'use client'
import Image from 'next/image';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import { Phone, Mail } from 'lucide-react';

export default function Home() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();
        const phone = form.current?.phone?.value.trim();
        if (!/^\d{10}$/.test(phone)) {
            toast.error("Phone number must be 10 digits.");
            return;
        }
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            )
            .then(
                () => {
                    toast.success("Message sent successfully!");
                    form.current?.reset(); // Clears the form
                },
                (error) => {
                    console.error("FAILED...", error);
                    toast.error("Something went wrong. Please try again later.");
                }
            );
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans relative">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="absolute top-0 left-0 w-full h-1/2 bg-background -z-10" />

            {/* Header */}
            <header className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-12">
                <Image
                    src="/logo.svg"
                    width={70}
                    height={70}
                    alt="Logo"
                    className="w-auto h-auto max-w-[70px]"
                />
            </header>

            {/* Main Section */}
            <main className="py-6 px-4 sm:px-6 md:px-16 text-center relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                    Reach Out for Expert Financial & Legal Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                    Get professional assistance with Income Tax Filing, GST Registration, Trademark Applications,
                    Business Incorporation, and more. We are here to help individuals and businesses stay compliant and grow.
                </p>

                <div className="mt-10 flex flex-col lg:flex-row gap-8 bg-app-white rounded-2xl shadow-lg p-6 sm:p-8">
                    {/* Contact Info */}
                    <div className="bg-green-image text-white p-6 rounded-xl w-full lg:w-96 flex flex-col justify-between relative overflow-hidden">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                            <p className="mb-6 text-sm sm:text-base">
                                Let’s simplify your finances. Contact us for expert solutions in tax filing, GST, trademark,
                                and all your compliance needs.
                            </p>
                            <div className="space-y-4 text-sm">
                                <p className="flex items-center justify-center gap-2">
                                    <Phone className="w-5 h-5" /> +918299159517
                                </p>
                                <p className="flex justify-center items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    <a href="mailto:Work.cacp@gmail.com" className="underline">Work.cacp@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                    </div>

                    {/* Form */}
                    <form
                        className="space-y-6 flex-1"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Trangely"
                                    className="w-full border border-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-image"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="hello@yourmail.com"
                                    className="w-full border border-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-image"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 text-left mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="e.g. 9876543210"
                                    className="w-full border border-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-image"
                                    pattern="^[0-9]{10}$"
                                    title="Phone number must be 10 digits"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 text-left mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Need help with GST registration"
                                className="w-full border border-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-image"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 text-left mb-2">Message</label>
                            <textarea
                                name="message"
                                placeholder="Write here your message"
                                className="w-full border border-gray-50 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-green-image h-28 resize-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto bg-green-image text-white px-6 py-2 rounded hover:bg-teal-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}
