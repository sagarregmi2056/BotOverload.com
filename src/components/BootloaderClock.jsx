import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootloaderClock = () => {
    const [progress, setProgress] = useState(0);
    const [showCrown, setShowCrown] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setShowCrown(true);
                    return 100;
                }
                return prev + 1;
            });
        }, 50);

        const clockTimer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
            clearInterval(clockTimer);
        };
    }, []);

    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    return (
        <motion.div
            className="relative w-48 h-48 rounded-full bg-[#1a1b1e] flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Clock face */}
            <div className="absolute inset-2 rounded-full border-4 border-gray-800 bg-black overflow-hidden">
                {/* Analog clock hands */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Hour markers */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-2 bg-gray-600"
                            style={{
                                transform: `rotate(${i * 30}deg) translateY(-40px)`
                            }}
                        />
                    ))}

                    {/* Clock hands */}
                    <div
                        className="absolute w-1 h-16 bg-blue-500 origin-bottom rounded-full"
                        style={{
                            transform: `rotate(${(hours * 30) + (minutes / 2)}deg)`
                        }}
                    />
                    <div
                        className="absolute w-0.5 h-20 bg-white origin-bottom rounded-full"
                        style={{
                            transform: `rotate(${minutes * 6}deg)`
                        }}
                    />
                    <motion.div
                        className="absolute w-0.5 h-24 bg-red-500 origin-bottom rounded-full"
                        style={{
                            transform: `rotate(${seconds * 6}deg)`
                        }}
                    />

                    {/* Digital progress */}
                    <motion.div
                        className="text-4xl font-bold text-[#4da6ff]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: progress === 100 ? 0 : 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {Math.floor(progress)}%
                    </motion.div>
                </div>

                {/* Loading circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="45%"
                        fill="none"
                        stroke="#4da6ff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: progress / 100 }}
                        transition={{ duration: 0.5 }}
                        className="opacity-20"
                    />
                </svg>
            </div>

            {/* Crown */}
            <AnimatePresence>
                {showCrown && (
                    <motion.div
                        className="absolute -top-6 left-1/2 -translate-x-1/2"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#facc15"
                        >
                            <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute -bottom-8 text-gray-300 text-sm">
                Bootloader
            </div>
        </motion.div>
    );
};

export default BootloaderClock; 