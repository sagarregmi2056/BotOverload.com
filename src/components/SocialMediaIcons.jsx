import React from 'react';
import { motion } from 'framer-motion';

const SocialIcon = ({ icon, color, delay }) => {
    return (
        <motion.div
            className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${color}`}
            initial={{ scale: 0, rotate: -180 }}
            animate={{
                scale: 1,
                rotate: 0,
                transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: delay,
                }
            }}
            whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.3 }
            }}
        >
            {icon}
        </motion.div>
    );
};

const SocialMediaIcons = () => {
    const socialIcons = [
        {
            icon: <i className="fab fa-facebook-f text-xl"></i>,
            color: 'bg-[#1877f2]',
            delay: 0
        },
        {
            icon: <i className="fab fa-twitter text-xl"></i>,
            color: 'bg-[#1da1f2]',
            delay: 0.1
        },
        {
            icon: <i className="fab fa-instagram text-xl"></i>,
            color: 'bg-[#e4405f]',
            delay: 0.2
        },
        {
            icon: <i className="fab fa-linkedin-in text-xl"></i>,
            color: 'bg-[#0077b5]',
            delay: 0.3
        },
        {
            icon: <i className="fab fa-youtube text-xl"></i>,
            color: 'bg-[#ff0000]',
            delay: 0.4
        },
        {
            icon: <i className="fab fa-github text-xl"></i>,
            color: 'bg-[#333]',
            delay: 0.5
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {socialIcons.map((social, index) => (
                    <SocialIcon
                        key={index}
                        icon={social.icon}
                        color={social.color}
                        delay={social.delay}
                    />
                ))}
            </motion.div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/10 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight
                        }}
                        animate={{
                            y: [-20, window.innerHeight + 20],
                            x: [null, Math.random() * 100 - 50]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialMediaIcons; 