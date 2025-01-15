import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import Dashboard from '../pages/Dashboard';
import RocketAnimation from './RocketAnimation';
import AnimatedBeam from './AnimatedBeam';

const FlowingBackground = () => {
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let time = 0;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        class SmokeParticle {
            constructor(side) {
                this.side = side;
                this.colorOffset = Math.random() * Math.PI * 2;
                this.colorSpeed = Math.random() * 0.02 + 0.01;
                this.reset();
            }

            reset() {
                const beamX = canvas.width * 0.85;
                const offset = this.side === 'left' ? -15 : 15;
                this.x = beamX + offset;
                this.y = -50;
                this.baseSize = Math.random() * 20 + 10;
                this.size = this.baseSize;
                this.maxSize = this.baseSize * 2;
                this.alpha = Math.random() * 0.15 + 0.08;
                this.speed = Math.random() * 2 + 3;
                this.state = 'falling';
                this.glowIntensity = Math.random() * 0.4 + 0.6;
                this.colorPhase = Math.random() * Math.PI * 2;
                this.colorSpeed = Math.random() * 0.03 + 0.02;
                this.spreadSpeed = Math.random() * 3 + 2;
                this.spreadDirection = this.side === 'left' ? -1 : 1;
                this.dashboardY = 0;
                this.turbulence = Math.random() * 2 - 1;
            }

            update() {
                const beamX = canvas.width * 0.85;
                const curveStartY = canvas.height * 0.7;
                const dashboardY = canvas.height - 60;

                switch (this.state) {
                    case 'falling': {
                        this.y += this.speed * 1.5;
                        const wobble = Math.sin(time * 0.01 + this.colorPhase) * 1;
                        if (this.side === 'left') {
                            this.x = beamX - 15 + wobble;
                        } else {
                            this.x = beamX + 15 + wobble;
                        }

                        if (this.y >= curveStartY) {
                            this.state = 'curving';
                            this.speed *= 0.8;
                        }
                        break;
                    }
                    case 'curving': {
                        const curveProgress = (this.y - curveStartY) / (dashboardY - curveStartY);
                        const targetX = beamX + (this.side === 'left' ? -100 : 200);
                        const targetY = dashboardY;

                        this.x += (targetX - this.x) * 0.08;
                        this.y += (targetY - this.y) * 0.1;

                        if (this.y >= dashboardY - 5) {
                            this.state = 'spreading';
                            this.dashboardY = dashboardY;
                            this.spreadSpeed *= 1.5;
                        }
                        break;
                    }
                    case 'spreading': {
                        this.x += this.spreadDirection * this.spreadSpeed;
                        this.y = this.dashboardY + Math.sin(time * 0.02 + this.colorPhase) * 3;
                        this.alpha *= 0.97;
                        this.size = Math.min(this.size * 1.02, this.maxSize);
                        break;
                    }
                    default:
                        break;
                }

                this.colorPhase += this.colorSpeed;

                if (this.alpha < 0.01 || this.y > canvas.height ||
                    this.x < 0 || this.x > canvas.width) {
                    this.reset();
                }
            }

            draw(ctx) {
                const colors = {
                    primary: [65, 105, 225],
                    secondary: [147, 197, 253],
                    accent1: [123, 97, 255],
                    accent2: [157, 142, 255],
                    accent3: [76, 161, 255],
                    accent4: [111, 114, 255],
                    accent5: [92, 103, 232],
                    accent6: [100, 181, 246],
                    purple1: [130, 100, 255],
                    purple2: [160, 120, 255],
                    purple3: [180, 140, 255],
                    glow1: [140, 158, 255],
                    glow2: [170, 140, 255],
                    dark1: [20, 30, 70],
                    dark2: [30, 40, 90]
                };

                const mix = (color1, color2, factor) => {
                    return color1.map((channel, i) =>
                        Math.round(channel * (1 - factor) + color2[i] * factor)
                    );
                };

                const mixMultiple = (colors, factors) => {
                    let result = [...colors[0]];
                    for (let i = 1; i < colors.length; i++) {
                        result = mix(result, colors[i], factors[i - 1]);
                    }
                    return result;
                };

                const timeFactor = (Math.sin(this.colorPhase) + 1) / 2;
                const secondaryFactor = (Math.cos(this.colorPhase * 0.5) + 1) / 2;
                const tertiaryFactor = (Math.sin(this.colorPhase * 0.3) + 1) / 2;

                let baseColor;
                if (this.state === 'spreading') {
                    baseColor = mixMultiple(
                        [colors.dark1, colors.secondary, colors.purple2, colors.glow2, colors.accent3],
                        [0.7, timeFactor * 0.6, secondaryFactor * 0.5, tertiaryFactor * 0.3]
                    );
                } else {
                    baseColor = mixMultiple(
                        [colors.dark2, colors.primary, colors.purple1, colors.glow1, colors.accent4],
                        [0.6, timeFactor * 0.7, secondaryFactor * 0.5, tertiaryFactor * 0.3]
                    );
                }

                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 1.5
                );

                gradient.addColorStop(0, `rgba(${baseColor.join(',')}, ${this.alpha * 0.9})`);
                gradient.addColorStop(0.3, `rgba(${baseColor.join(',')}, ${this.alpha * 0.5})`);
                gradient.addColorStop(0.7, `rgba(${mix(baseColor, [20, 30, 70], 0.7).join(',')}, ${this.alpha * 0.3})`);
                gradient.addColorStop(1, 'rgba(0, 0, 20, 0)');

                ctx.beginPath();
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles = [
            ...Array(35).fill().map(() => new SmokeParticle('left')),
            ...Array(35).fill().map(() => new SmokeParticle('right'))
        ];

        const drawBackground = () => {
            const beamX = canvas.width * 0.85;

            const bgGradient = ctx.createRadialGradient(
                beamX, canvas.height * 0.5, 0,
                beamX, canvas.height * 0.5, canvas.width * 0.8
            );
            bgGradient.addColorStop(0, 'rgba(0, 0, 20, 1)');
            bgGradient.addColorStop(0.5, 'rgba(0, 0, 10, 1)');
            bgGradient.addColorStop(1, 'rgb(0, 0, 0)');

            ctx.fillStyle = bgGradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        const drawBeam = () => {
            const beamX = canvas.width * 0.85;
            const curveStartY = canvas.height * 0.7;

            const beamLayers = [
                { width: 25, alpha: 0.1, blur: 40 },
                { width: 20, alpha: 0.2, blur: 35 },
                { width: 15, alpha: 0.4, blur: 30 },
                { width: 10, alpha: 0.6, blur: 25 },
                { width: 5, alpha: 0.8, blur: 20 },
                { width: 2, alpha: 1, blur: 15 }
            ];

            beamLayers.forEach(layer => {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${layer.alpha})`;
                ctx.lineWidth = layer.width;
                ctx.shadowColor = 'white';
                ctx.shadowBlur = layer.blur;
                ctx.moveTo(beamX, 0);
                ctx.lineTo(beamX, curveStartY);
                ctx.stroke();
            });

            const curveLayers = [
                { width: 30, alpha: 0.1, blur: 45 },
                { width: 25, alpha: 0.2, blur: 40 },
                { width: 20, alpha: 0.4, blur: 35 },
                { width: 15, alpha: 0.6, blur: 30 },
                { width: 10, alpha: 0.8, blur: 25 },
                { width: 5, alpha: 1, blur: 20 }
            ];

            curveLayers.forEach(layer => {
                ctx.beginPath();
                ctx.moveTo(beamX, curveStartY);
                ctx.quadraticCurveTo(
                    beamX,
                    canvas.height * 0.85,
                    beamX + 100,
                    canvas.height
                );
                ctx.strokeStyle = `rgba(255, 255, 255, ${layer.alpha})`;
                ctx.lineWidth = layer.width;
                ctx.shadowBlur = layer.blur;
                ctx.stroke();
            });

            const curveGlow = ctx.createRadialGradient(
                beamX, curveStartY, 0,
                beamX, curveStartY, 100
            );
            curveGlow.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            curveGlow.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
            curveGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = curveGlow;
            ctx.fillRect(beamX - 100, curveStartY - 100, 200, 200);
        };

        const animate = () => {
            drawBackground();
            particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });
            drawBeam();
            time++;
            requestAnimationFrame(animate);
        };

        animate();

        return () => window.removeEventListener('resize', setCanvasSize);
    }, []);

    const stats = [
        {
            number: "1000+",
            label: "Active Users",
            prefix: "",
            suffix: "+"
        },
        {
            number: "99",
            label: "Time Saved",
            prefix: "",
            suffix: "%"
        },
        {
            number: "24/7",
            label: "Support Available",
            prefix: "",
            suffix: ""
        }
    ];

    const testimonials = [
        {
            text: "This tool has completely transformed how we handle our social media presence. The automation is seamless!",
            author: "Sagar Regmi",
            role: "AI Developer",
            image: "../src/assets/testimonials/images.jpg"
        },
        {
            text: "The AI-powered features have saved us countless hours. Highly recommended!",
            author: "Mike R.",
            role: "Business Owner",
            image: "../src/assets/testimonials/purshotaam.jpg"
        }
        ,
        {
            text: "This is the best social media tool I've ever used. It's a game-changer!",
            author: "Pranesh shrestha",
            role: "Lead Engineer/Developer",
            image: "../src/assets/testimonials/pranesh.jpg"
        }
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="relative z-10 pt-20 pb-16 text-left max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                    >
                        Automate Your Social Media
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 mb-12"
                    >
                        Streamline your social media management with AI-powered automation.
                        Save time, boost engagement, and grow your presence.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mb-16"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="text-4xl md:text-5xl font-bold text-purple-500 mb-2"
                            >
                                {stat.number === "24/7" ? (
                                    "24/7"
                                ) : (
                                    <CountUp
                                        end={parseInt(stat.number)}
                                        suffix={stat.suffix}
                                        prefix={stat.prefix}
                                        duration={2.5}
                                        enableScrollSpy
                                    />
                                )}
                            </motion.div>
                            <p className="text-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                <div className="relative z-10 py-16">
                    <h2 className="text-3xl font-bold text-left text-white mb-12">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                            >
                                <p className="text-gray-300 mb-6">{testimonial.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.parentElement.innerHTML = `
                                                    <div class="w-full h-full bg-purple-600 flex items-center justify-center text-white text-lg font-bold">
                                                        ${testimonial.author.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                `;
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-purple-400 font-semibold">{testimonial.author}</p>
                                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-left py-16"
                >
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                        Get Started Free
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default FlowingBackground;