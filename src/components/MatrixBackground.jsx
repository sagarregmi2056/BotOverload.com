import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import FlowingBackground from './FlowingBackground';
import RocketAnimation from './RocketAnimation';
import GlowingClock from './GlowingClock';

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

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
        const chars = 'Bot overload the internet';
        const charArray = chars.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(17, 17, 18, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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
        <div className=" inset-0 z-[10]"
            style={{
                background: 'linear-gradient(to bottom right, #0a0b0f, #111827, #1f2937)'
            }}
        >
            <div className="absolute inset-0 flex items-center px-4">
                <motion.div className="max-w-2xl text-left relative z-10 mt-32">
                    <motion.h1
                        className="text-6xl font-bold mb-4"
                        style={{
                            color: '#facc15',
                            textShadow: isHovering
                                ? '0 0 20px rgba(250, 204, 21, 0.8), 0 0 40px rgba(250, 204, 21, 0.4)'
                                : '0 0 10px rgba(250, 204, 21, 0.3)',
                        }}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        Boost Your productivity.
                        <p className="text-sm text-white mt-4"> Our platform integrates seamlessly with popular messaging services like WhatsApp, enabling you to streamline communication and enhance productivity with ease. Here’s what you can expect from Botoverload</p>

                    </motion.h1>


                    {/* add some rocket animation */}

                </motion.div>
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
            <GlowingClock />

        </div>
    );
};

export default MatrixBackground; 