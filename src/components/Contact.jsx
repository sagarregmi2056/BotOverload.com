import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitContactForm } from '../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ loading: false, error: null, success: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, error: null, success: false });

        try {
            await submitContactForm({
                fullName: formData.fullName,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message
            });

            setFormStatus({ loading: false, error: null, success: true });
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Success toast
            toast.success('Message sent successfully! We will get back to you soon.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {
                    background: '#1a1a1a',
                    color: '#fff',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }
            });
        } catch (error) {
            setFormStatus({ loading: false, error: error.message, success: false });

            // Error toast
            toast.error(error.message || 'Failed to send message. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                style: {
                    background: '#1a1a1a',
                    color: '#fff',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-black py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Have questions about Bot Overload? We're here to help. Our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side - Business Info & Contacts */}
                    <div className="rounded-2xl p-8 relative overflow-hidden bg-[#111111]">
                        <h3 className="text-2xl font-semibold text-white mb-8">Get in Touch</h3>

                        {/* Contact Information */}
                        <div className="space-y-6 mb-8">
                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400">Email</p>
                                    <p className="text-white">support@botoverload.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400">Phone</p>
                                    <p className="text-white">+97156671503</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-400">Location</p>
                                    <p className="text-white">Dubai Marina, Dubai, UAE</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="" className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href="" className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>


                                <a href="https://www.instagram.com/bot_overload/" className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="mt-8">
                            <h4 className="text-lg font-medium text-white mb-4">Business Hours</h4>
                            <div className="space-y-2 text-gray-300">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="rounded-2xl p-8 relative overflow-hidden bg-[#111111]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name field */}
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                                    required
                                />
                            </div>

                            {/* Email and Phone fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Business Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Business Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+1234567890"
                                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject field */}
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                                    required
                                />
                            </div>

                            {/* Message field */}
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white resize-none"
                                    required
                                ></textarea>
                            </div>

                            {/* Submit button */}
                            <button
                                type="submit"
                                disabled={formStatus.loading}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 disabled:opacity-50"
                            >
                                {formStatus.loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;