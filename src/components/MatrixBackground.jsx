import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MatrixBackground = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

        // Matrix content using Algorithm Squad text
        const phrases = [
            'ALGORITHM SQUAD',
            'DIGITAL PRODUCTS',
            'WEB DEVELOPMENT',
            'MOBILE APPS',
            'AI SOLUTIONS',
            'FLUTTER',
            'BLOCKCHAIN',
            'INNOVATION',
            'EXCELLENCE'
        ];

        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(17, 17, 18, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.font = `${fontSize}px monospace`;
            ctx.shadowColor = 'rgba(77, 166, 255, 0.5)';
            ctx.shadowBlur = 3;

            drops.forEach((y, i) => {
                // Randomly select a phrase or character
                const usePhrase = Math.random() > 0.95;
                const text = usePhrase
                    ? phrases[Math.floor(Math.random() * phrases.length)]
                    : String.fromCharCode(48 + Math.random() * 33);

                ctx.fillText(text, i * fontSize, y * fontSize);

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

        const handleMouseMove = (e) => {
            setMousePos({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0">
            {/* Website content background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <div className="max-w-4xl text-center">
                    <h1 className="text-6xl text-[#facc15]  font-bold mb-4">ALGORITHM SQUAD</h1>
                    <p className="text-2xl mb-8">Creating Digital Products and Experiences</p>
                    <div className="grid grid-cols-3 gap-8 text-xl">
                        <div>Artificial Intelligence</div>
                        <div>Mobile App Development</div>
                        <div>Web Development</div>
                    </div>
                </div>
            </div>

            {/* Matrix rain canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full mix-blend-multiply"
                style={{ filter: 'blur(0.5px)' }}
            />

            {/* Hover glow effect */}
            <motion.div
                className="pointer-events-none absolute"
                animate={{
                    x: mousePos.x - 150,
                    y: mousePos.y - 150,
                }}
                transition={{ type: "spring", damping: 30 }}
                style={{
                    width: 300,
                    height: 300,
                    background: 'radial-gradient(circle, rgba(77, 166, 255, 0.15) 0%, transparent 70%)',
                    filter: 'blur(10px)',
                }}
            />

            {/* Additional glow layer */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
                                rgba(77, 166, 255, 0.1) 0%, 
                                transparent 25%)`,
                    transition: 'background 0.2s ease',
                }}
            />
        </div>
    );
};

export default MatrixBackground; 