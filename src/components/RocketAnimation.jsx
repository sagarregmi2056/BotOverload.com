import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FireCore = () => (
    <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{
            width: '24px',
            height: '160px',
            background: 'linear-gradient(to top, #ff4d4d, #ff9933, #ffff66, #ffffff)',
            filter: 'blur(8px)',
            transformOrigin: 'bottom',
            opacity: 0.8
        }}
        animate={{
            scaleY: [0.8, 1.2, 0.8],
            scaleX: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
        }}
        transition={{
            duration: 0.15,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

const TurbulentFlame = ({ offset }) => (
    <motion.div
        className="absolute bottom-0"
        style={{
            left: `calc(50% + ${offset}px)`,
            width: '16px',
            height: '120px',
            background: 'linear-gradient(to top, #ff4d4d, #ff9933, transparent)',
            filter: 'blur(4px)',
            transformOrigin: 'bottom',
        }}
        animate={{
            height: ['120px', '140px', '120px'],
            opacity: [0.6, 0.8, 0.6],
            x: [0, offset * 0.5, 0]
        }}
        transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
        }}
    />
);

const SparkParticle = ({ delay }) => (
    <motion.div
        className="absolute bottom-0 left-1/2 w-1 h-1 bg-yellow-200"
        style={{ filter: 'blur(1px)' }}
        initial={{
            x: Math.random() * 40 - 20,
            y: 0,
            opacity: 1,
            scale: 1
        }}
        animate={{
            x: [null, Math.random() * 100 - 50],
            y: [0, -100],
            opacity: [1, 0],
            scale: [1, 0]
        }}
        transition={{
            duration: 0.6,
            delay: delay,
            repeat: Infinity,
            ease: "easeOut"
        }}
    />
);

const SmokeParticle = ({ delay, position }) => (
    <motion.div
        className="absolute"
        style={{
            left: `${position}%`,
            bottom: '0%',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
            opacity: [0.3, 0],
            scale: [0.5, 4],
            y: [-50, -400],
            x: [position - 50, position - 50 + (Math.random() * 100 - 50)]
        }}
        transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            ease: "easeOut"
        }}
    >
        <div
            className="w-32 h-32 rounded-full"
            style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(100,100,100,0.1) 40%, transparent 70%)',
                filter: 'blur(8px)'
            }}
        />
    </motion.div>
);

const RocketAnimation = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-50 overflow-hidden bg-black/20"
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            {/* Rocket container */}


            {/* Smoke trail */}
            <div className="absolute inset-x-0 bottom-0">
                {[...Array(40)].map((_, i) => (
                    <SmokeParticle
                        key={i}
                        delay={i * 0.08}
                        position={45 + Math.random() * 10}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default RocketAnimation; 