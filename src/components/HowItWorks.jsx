import React from 'react';
import { motion } from 'framer-motion';

// You can import specific icons from heroicons or any other icon library
const icons = {
    "1": (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    ),
    "2": (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    "3": (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
};

const Step = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay }}
        className="flex flex-col items-center text-center max-w-sm relative"
    >
        {/* Connecting lines */}
        {number !== "3" && (
            <motion.div
                className="absolute top-8 left-[50%] w-[100%] h-[2px] bg-purple-500/50"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: delay + 0.3 }}
                style={{ transformOrigin: 'left' }}
            />
        )}

        {/* Step Circle with Icon */}
        <motion.div
            className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center mb-6 relative z-10"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.div
                className="text-white absolute"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: delay + 0.2 }}
            >
                {icons[number]}
            </motion.div>

            <motion.span
                className="text-2xl font-bold text-white absolute opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, delay: delay + 0.2 }}
            >
                {number}
            </motion.span>
        </motion.div>

        {/* Text Content */}
        <motion.h3
            className="text-xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
            {title}
        </motion.h3>

        <motion.p
            className="text-gray-400 max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.6 }}
        >
            {description}
        </motion.p>
    </motion.div>
);

const HowItWorks = () => {
    return (
        <div className="py-20 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                How It Works
            </motion.h2>

            <div className="flex flex-row justify-center items-start gap-16 px-4">
                <Step
                    number="1"
                    title="Sign Up"
                    description="Create your account and connect your favorite apps and services"
                    delay={0.2}
                />
                <Step
                    number="2"
                    title="Configure Bots"
                    description="Set up your automation workflows with our intuitive interface"
                    delay={0.4}
                />
                <Step
                    number="3"
                    title="Launch & Monitor"
                    description="Start your bots and track their performance in real-time"
                    delay={0.6}
                />
            </div>
        </div>
    );
};

export default HowItWorks; 