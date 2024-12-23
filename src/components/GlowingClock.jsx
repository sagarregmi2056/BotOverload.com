import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedConnections from './AnimatedConnections';

const GlowingClock = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full bg-black min-h-screen overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[100px] rounded-full" />
                <div className="absolute -right-1/4 bottom-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 py-20 flex items-center justify-between">
                {/* Clock Container */}
                <div className="relative w-[500px] h-[500px]">
                    {/* Main clock circle with shadow */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-xl"
                        style={{
                            boxShadow: '0 0 50px rgba(0, 0, 0, 0.5), inset 0 0 30px rgba(0, 0, 0, 0.5)'
                        }}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Glowing ring */}
                        <div className="absolute inset-4 rounded-full border border-gray-800/50" />

                        {/* Clock face with numbers */}
                        <div className="absolute inset-8 rounded-full">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-full h-full"
                                    style={{ transform: `rotate(${i * 30}deg)` }}
                                >
                                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-gray-600 text-sm">
                                        {i === 0 ? '12' : i}
                                    </span>
                                </div>
                            ))}

                            {/* Rotating line with enhanced glow */}
                            <motion.div
                                className="absolute inset-0"
                                style={{ rotate: rotation }}
                            >
                                <div className="absolute top-0 left-1/2 h-1/2 w-[2px] origin-bottom">
                                    <div
                                        className="w-full h-full"
                                        style={{
                                            background: 'linear-gradient(to top, #3b82f6, #f97316)',
                                            boxShadow: '0 0 20px #3b82f6, 0 0 40px #f97316'
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Center logo with glow */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className="w-20 h-20 rounded-full bg-black flex items-center justify-center"
                                    style={{
                                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)'
                                    }}
                                >
                                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
                                        H
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Ambient light effects */}
                    <div className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-full h-full">
                        <div className="w-full h-full bg-blue-500/20 blur-[100px]" />
                    </div>
                    <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-full h-full">
                        <div className="w-full h-full bg-orange-500/20 blur-[100px]" />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 ml-20">
                    <motion.h2
                        className="text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        welcome to<br />Bot overload
                    </motion.h2>
                    <motion.p
                        className="text-gray-400 text-lg mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        Unlock the future of productivity with Bot Overload.<br />
                        Remember, this journey is just getting started.
                    </motion.p>
                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <button
                            className="px-8 py-3 rounded-full relative group overflow-hidden"
                            style={{
                                background: 'linear-gradient(90deg, #f97316 0%, #f97316 50%, #3b82f6 100%)',
                                backgroundSize: '200% 100%'
                            }}
                        >
                            <span className="relative z-10 text-white font-medium">START NOW</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <button className="px-8 py-3 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
                            <span className="w-4 h-4 bg-[#36C5F0] rounded-sm" />
                            JOIN OUR SLACK
                        </button>

                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default GlowingClock; 