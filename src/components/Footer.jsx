import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
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
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="/docs" className="hover:text-purple-400 transition-colors">Documentation</a></li>
                            <li><a href="/api" className="hover:text-purple-400 transition-colors">API Reference</a></li>
                            <li><a href="/blog" className="hover:text-purple-400 transition-colors">Blog</a></li>
                            <li><a href="/support" className="hover:text-purple-400 transition-colors">Support</a></li>
                        </ul>
                    </div>

                    {/* Stay Updated */}
                    <div>
                        <h4 className="text-lg font-medium text-white mb-4">Stay Updated</h4>
                        <div className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
                            />
                            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                                Subscribe
                            </button>
                        </div>
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