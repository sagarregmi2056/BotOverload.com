import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBeam = ({ fromRef, toRef, containerRef, duration = 2 }) => {
    const beamRef = useRef(null);
    const particleRef = useRef(null);

    useEffect(() => {
        if (!fromRef?.current || !toRef?.current || !containerRef?.current) return;

        const updateBeamPosition = () => {
            const fromRect = fromRef.current.getBoundingClientRect();
            const toRect = toRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            const from = {
                x: fromRect.left + fromRect.width / 2 - containerRect.left,
                y: fromRect.top + fromRect.height / 2 - containerRect.top
            };

            const to = {
                x: toRect.left + toRect.width / 2 - containerRect.left,
                y: toRect.top + toRect.height / 2 - containerRect.top
            };

            const distance = Math.sqrt(
                Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)
            );

            const angle = Math.atan2(to.y - from.y, to.x - from.x) * 180 / Math.PI;

            if (beamRef.current) {
                beamRef.current.style.width = `${distance}px`;
                beamRef.current.style.left = `${from.x}px`;
                beamRef.current.style.top = `${from.y}px`;
                beamRef.current.style.transform = `rotate(${angle}deg)`;
            }
        };

        const animateParticle = () => {
            if (!particleRef.current) return;

            gsap.to(particleRef.current, {
                left: '100%',
                duration: duration,
                repeat: -1,
                ease: "none",
                onUpdate: () => {
                    if (particleRef.current) {
                        const progress = gsap.getProperty(particleRef.current, "left");
                        // Create pulsing effect
                        const opacity = 0.8 - Math.abs(Math.sin(progress * Math.PI)) * 0.3;
                        particleRef.current.style.opacity = opacity;
                    }
                }
            });
        };

        updateBeamPosition();
        animateParticle();

        window.addEventListener('resize', updateBeamPosition);
        return () => window.removeEventListener('resize', updateBeamPosition);
    }, [fromRef, toRef, containerRef, duration]);

    return (
        <>
            {/* Base beam */}
            <div
                ref={beamRef}
                className="absolute origin-left"
                style={{
                    height: '1.5px',
                    background: 'linear-gradient(90deg, rgba(99,102,241,0.15) 0%, rgba(168,85,247,0.15) 100%)',
                    boxShadow: '0 0 8px rgba(168,85,247,0.3)',
                    pointerEvents: 'none',
                }}
            >
                {/* Moving particle effect */}
                <div
                    ref={particleRef}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                        width: '50px',
                        height: '2px',
                        background: 'linear-gradient(90deg, rgba(99,102,241,0) 0%, rgba(168,85,247,1) 50%, rgba(99,102,241,0) 100%)',
                        boxShadow: '0 0 15px rgba(168,85,247,0.8), 0 0 30px rgba(99,102,241,0.5)',
                        filter: 'blur(0.5px)',
                        pointerEvents: 'none',
                        left: 0,
                    }}
                />
            </div>

            {/* Additional glow effect */}
            <div
                className="absolute"
                style={{
                    ...beamRef.current?.style,
                    height: '3px',
                    background: 'linear-gradient(90deg, rgba(99,102,241,0.05) 0%, rgba(168,85,247,0.05) 100%)',
                    filter: 'blur(2px)',
                    pointerEvents: 'none',
                }}
            />
        </>
    );
};

export default AnimatedBeam; 