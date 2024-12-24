import React, { useEffect } from 'react';
import gsap from 'gsap';

const BackgroundAnimation = () => {
    useEffect(() => {
        // Create smoke particles
        const createSmoke = () => {
            const smoke = document.createElement('div');
            smoke.className = 'smoke-particle';
            document.getElementById('animation-container').appendChild(smoke);

            const startX = Math.random() * window.innerWidth;
            const startSize = Math.random() * 100 + 50;

            gsap.set(smoke, {
                x: startX,
                y: window.innerHeight + 100,
                width: startSize,
                height: startSize,
                opacity: 0
            });

            gsap.to(smoke, {
                y: -100,
                x: startX + (Math.random() * 200 - 100),
                opacity: 0.3,
                duration: Math.random() * 3 + 4,
                ease: "none",
                onComplete: () => {
                    smoke.remove();
                }
            });
        };

        // Create rocket
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        document.getElementById('animation-container').appendChild(rocket);

        // Initial animation setup
        gsap.set(rocket, {
            x: '50%',
            y: window.innerHeight + 100,
            xPercent: -50,
            yPercent: -50
        });

        // Generate smoke continuously
        const smokeInterval = setInterval(() => {
            createSmoke();
        }, 200);

        // Animate rocket after initial smoke
        setTimeout(() => {
            gsap.to(rocket, {
                y: -100,
                duration: 4,
                ease: "power1.inOut"
            });
        }, 3000);

        return () => {
            clearInterval(smokeInterval);
        };
    }, []);

    return (
        <>
            <style>
                {`
                    #animation-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        pointer-events: none;
                        z-index: -1;
                        background: linear-gradient(to bottom, #000000, #1a1a1a);
                        overflow: hidden;
                    }

                    .smoke-particle {
                        position: absolute;
                        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
                        border-radius: 50%;
                        pointer-events: none;
                    }


                    
                `}
            </style>
            <div id="animation-container" />
        </>
    );
};

export default BackgroundAnimation; 