import React from 'react';
import { motion } from 'framer-motion';

const FlowingGradient = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden">
            {/* Base layer */}
            <div className="absolute inset-0" style={{ background: '#111112' }} />

            {/* Flowing gradients */}
            <div className="absolute inset-0">
                {/* Primary gradient */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div
                        className="absolute top-[-50%] left-[20%] w-[60%] h-[200%] transform rotate-[-20deg]"
                        style={{
                            background: 'radial-gradient(circle, rgba(77, 166, 255, 0.2) 0%, rgba(77, 166, 255, 0.05) 50%, transparent 70%)',
                            animation: 'flowUp 15s ease-in-out infinite'
                        }}
                    />
                </motion.div>

                {/* Secondary gradient */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        y: [0, 100, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div
                        className="absolute top-[-10%] right-[10%] w-[40%] h-[120%]"
                        style={{
                            background: 'radial-gradient(circle, rgba(191, 106, 251, 0.1) 0%, rgba(191, 106, 251, 0.05) 50%, transparent 70%)',
                            animation: 'flowDown 12s ease-in-out infinite'
                        }}
                    />
                </motion.div>

                {/* Tertiary gradient */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div
                        className="absolute top-[30%] left-[5%] w-[30%] h-[140%]"
                        style={{
                            background: 'radial-gradient(circle, rgba(255, 77, 137, 0.1) 0%, rgba(255, 77, 137, 0.05) 50%, transparent 70%)',
                            animation: 'flowUp 10s ease-in-out infinite'
                        }}
                    />
                </motion.div>
            </div>

            {/* Subtle overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(17, 17, 18, 0.5) 100%)'
                }}
            />
        </div>
    );
};

export default FlowingGradient; 