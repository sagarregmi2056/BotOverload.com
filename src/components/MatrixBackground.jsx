import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import RocketAnimation from './RocketAnimation';

const MobileDevice = ({ isVisible }) => (
    <motion.div
        className="absolute right-20 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-black rounded-[40px] shadow-2xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 100,
            scale: isVisible ? 1 : 0.95
        }}
        transition={{ duration: 0.5 }}
        style={{
            border: '12px solid #333',
            overflow: 'hidden'
        }}
    >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />

        {/* Screen Content */}
        <div className="w-full h-full overflow-hidden rounded-[25px] relative">
            <iframe
                src="https://www.algorithmsquad.com"
                className="w-full h-full border-0"
                title="Algorithm Squad Website"
                style={{
                    transform: 'scale(0.9)',
                    transformOrigin: 'top left',
                    width: '111%', // Compensate for scale
                    height: '111%' // Compensate for scale
                }}
            />

            {/* Screen Glare Effect */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                style={{
                    borderRadius: '25px'
                }}
            />
        </div>

        {/* Home Button / Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-gray-600 rounded-full" />
    </motion.div>
);

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [showMobile, setShowMobile] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Matrix characters
        const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            // Darker semi-transparent background for trail effect
            ctx.fillStyle = 'rgba(17, 17, 18, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // White text for matrix rain
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = `${fontSize}px monospace`;
            ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
            ctx.shadowBlur = 2;

            drops.forEach((y, i) => {
                const char = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(char, i * fontSize, y * fontSize);

                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            });
        };

        const animate = () => {
            draw();
            requestAnimationFrame(animate);
        };

        animate();
        window.addEventListener('resize', setCanvasSize);

        return () => window.removeEventListener('resize', setCanvasSize);
    }, []);

    return (
        <div className="fixed inset-0 z-0"
            style={{
                background: 'linear-gradient(to bottom right, #0a0b0f, #111827, #1f2937)'
            }}
        >
            {/* Embedded website in an iframe - visible on hover */}


            {/* Main content positioned to the left */}
            <div className="absolute inset-0 flex items-center px-20">
                <motion.div className="max-w-2xl text-left relative z-10 mt-32">
                    <motion.h1
                        className="text-6xl font-bold mb-4 cursor-pointer"
                        style={{
                            color: '#facc15',
                            textShadow: isHovering
                                ? '0 0 20px rgba(250, 204, 21, 0.8), 0 0 40px rgba(250, 204, 21, 0.4)'
                                : '0 0 10px rgba(250, 204, 21, 0.3)',
                        }}
                        onMouseEnter={() => {
                            setIsHovering(true);
                            setShowMobile(true);
                        }}
                        onMouseLeave={() => {
                            setIsHovering(false);
                            setShowMobile(false);
                        }}
                    >
                        Boost Your productivity.


                        <RocketAnimation />

                        <p className="text-sm text-white mt-4">Automate your tasks.</p>
                        {/* add loading animation */}
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                        <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    </motion.h1>


                </motion.div>

                {/* Mobile Device */}
                <MobileDevice isVisible={showMobile} />
            </div>

            {/* Matrix rain canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{
                    opacity: 0.4,
                    mixBlendMode: 'screen'
                }}
            />

            {/* Glowing beam effect */}
            <motion.div
                className="absolute h-[200%] w-[2px] top-[-50%]"
                style={{
                    right: '25%',
                    background: 'linear-gradient(to bottom, transparent, rgba(77, 166, 255, 0.3), rgba(255, 255, 255, 0.6), rgba(77, 166, 255, 0.3), transparent)',
                    filter: 'blur(4px)',
                    transform: 'translateX(-50%)',
                }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default MatrixBackground; 