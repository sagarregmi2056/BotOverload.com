import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="bg-black/80 border-t border-purple-500/20 mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4">Bot Overload</h3>
                        <p className="text-gray-400 text-sm">
                            Automating your business processes with AI-powered solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {['Documentation', 'API Reference', 'Blog', 'Support'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-purple-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-bold mb-4">Stay Updated</h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-purple-500/20 text-white focus:outline-none focus:border-purple-500"
                            />
                            <button className="w-full px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-white transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} Bot Overload. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 