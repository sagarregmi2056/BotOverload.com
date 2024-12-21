import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBeam = ({ fromRef, toRef, containerRef, duration = 3 }) => {
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

            gsap.fromTo(particleRef.current,
                {
                    left: '0%',
                    opacity: 0.8,
                },
                {
                    left: '100%',
                    opacity: 0,
                    duration: duration,
                    ease: "none",
                    repeat: -1,
                }
            );
        };

        updateBeamPosition();
        animateParticle();

        window.addEventListener('resize', updateBeamPosition);
        return () => window.removeEventListener('resize', updateBeamPosition);
    }, [fromRef, toRef, containerRef, duration]);

    return (
        <div
            ref={beamRef}
            className="absolute origin-left"
            style={{
                height: '1px',
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                pointerEvents: 'none',
            }}
        >
            <div
                ref={particleRef}
                className="absolute top-1/2 -translate-y-1/2"
                style={{
                    width: '20px',
                    height: '2px',
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
                    filter: 'blur(1px)',
                    pointerEvents: 'none',
                }}
            />
        </div>
    );
};

export default AnimatedBeam; 