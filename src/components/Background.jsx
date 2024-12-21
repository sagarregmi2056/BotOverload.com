import React, { useEffect, useRef } from 'react';
import { FaUser, FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const setCanvasSize = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        setCanvasSize();

        class Particle {
            constructor(x, y, isFixed = false) {
                this.x = x;
                this.y = y;
                this.size = isFixed ? 4 : Math.random() * 2 + 1;
                this.speedX = isFixed ? 0 : (Math.random() - 0.5) * 2;
                this.speedY = isFixed ? 0 : (Math.random() - 0.5) * 2;
                this.opacity = Math.random() * 0.5 + 0.5;
                this.isFixed = isFixed;
                this.angle = 0;
            }

            update() {
                if (!this.isFixed) {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
                    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
                } else {
                    this.angle += 0.02;
                    this.x += Math.sin(this.angle) * 0.5;
                    this.y += Math.cos(this.angle) * 0.5;
                }
            }

            draw() {
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size
                );
                gradient.addColorStop(0, `rgba(77, 166, 255, ${this.opacity})`);
                gradient.addColorStop(1, 'rgba(17, 17, 18, 0)');
                ctx.fillStyle = gradient;
                ctx.shadowColor = '#4da6ff';
                ctx.shadowBlur = 15;
                ctx.fill();
                ctx.restore();
            }
        }

        const particles = [];
        const particleCount = 30;

        const initParticles = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                ));
            }
        };

        initParticles();

        const animate = () => {
            ctx.fillStyle = 'rgba(17, 17, 18, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        };

        animate();

        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden" style={{ background: '#111112' }}>
            <motion.div
                className="beam-effect"
                animate={{
                    opacity: [0.6, 0.8, 0.6],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: 'linear-gradient(180deg, transparent, #4da6ff, #f9fafa, #4da6ff, transparent)'
                }}
            />

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-20"
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[1000px] h-[400px]">
                    <motion.div
                        className="node-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                    >
                        <div className="absolute left-[100px] top-1/2 -translate-y-1/2">
                            <motion.div className="node">
                                <FaUser className="w-12 h-12" style={{ color: '#4da6ff' }} />
                            </motion.div>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <motion.div className="node central-node">
                                <div className="text-xl font-bold" style={{ color: '#4da6ff' }}>AI</div>
                            </motion.div>
                        </div>

                        <div className="absolute right-[100px] top-1/2 -translate-y-1/2">
                            <motion.div className="node">
                                <FaRobot className="w-12 h-12" style={{ color: '#4da6ff' }} />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Background;