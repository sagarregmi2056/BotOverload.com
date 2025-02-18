import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { subscribeToNewsletter } from '../services/api';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            await subscribeToNewsletter(email);
            setStatus({ loading: false, error: null, success: true });
            setEmail(''); // Clear input
            setTimeout(() => setStatus({ loading: false, error: null, success: false }), 3000); // Clear success after 3s
        } catch (error) {
            setStatus({ loading: false, error: error.message, success: false });
        }
    };

    return (
        <footer className="bg-[#010108] text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Bot Overload</h3>
                        <p className="text-sm">
                            Automating your business processes with AI-powered solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
                            <li><a href="/features" className="hover:text-purple-400 transition-colors">Features</a></li>
                            <li><a href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
                            <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}


                    {/* Stay Updated */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">Stay Updated</h4>
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500 text-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={status.loading}
                                className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors disabled:opacity-50"
                            >
                                {status.loading ? 'Subscribing...' : 'Subscribe'}
                            </button>

                            {status.error && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-red-500 text-sm mt-2"
                                >
                                    {status.error}
                                </motion.p>
                            )}

                            {status.success && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-green-500 text-sm mt-2"
                                >
                                    Successfully subscribed!
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800/5 mt-12 pt-8 text-sm text-center">
                    <p>© 2025 Bot Overload. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 