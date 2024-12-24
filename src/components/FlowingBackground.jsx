import React, { useEffect, useRef } from 'react';
import Dashboard from '../pages/Dashboard';
import RocketAnimation from './RocketAnimation';
import AnimatedBeam from './AnimatedBeam';

const FlowingBackground = () => {
    const canvasRef = useRef(null);

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
                const beamX = canvas.width * 0.65;
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
                const beamX = canvas.width * 0.65;
                const curveStartY = canvas.height * 0.7;
                const dashboardY = canvas.height - 60; // Adjusted to better match dashboard position

                switch (this.state) {
                    case 'falling': {
                        // Faster downward movement
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
                        const targetX = beamX + (this.side === 'left' ? -100 : 200); // Wider spread
                        const targetY = dashboardY;

                        // Smoother curve transition
                        this.x += (targetX - this.x) * 0.08;
                        this.y += (targetY - this.y) * 0.1;

                        if (this.y >= dashboardY - 5) {
                            this.state = 'spreading';
                            this.dashboardY = dashboardY;
                            this.spreadSpeed *= 1.5; // Faster spread along dashboard
                        }
                        break;
                    }
                    case 'spreading': {
                        // More horizontal movement along dashboard
                        this.x += this.spreadDirection * this.spreadSpeed;
                        this.y = this.dashboardY + Math.sin(time * 0.02 + this.colorPhase) * 3;
                        this.alpha *= 0.97; // Slightly faster fade
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

                // Mix with dark colors for better background integration
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

                // Add dark gradient to edges
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 1.5
                );

                // More gradual color transition with darker edges
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
            const beamX = canvas.width * 0.65;

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
            const beamX = canvas.width * 0.65;
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

    return (
        <div className="relative h-screen w-full overflow-hidden">

            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
            />

            <div className="relative z-10 px-8 pt-16">

                <h1 className="text-6xl font-bold text-white mb-4">Everything App</h1>
                <h2 className="text-4xl font-bold text-white mb-8">for your teams</h2>
                <p className="text-gray-300 text-xl mb-8 max-w-xl">
                    Platform that serves as an all-in-one replacement for your workflow needs.
                </p>
                <button className="px-6 py-3 bg-white rounded-full text-black font-semibold hover:bg-opacity-90 transition-all">
                    TRY IT FREE →

                </button>


            </div>


        </div>
    );
};

export default FlowingBackground;