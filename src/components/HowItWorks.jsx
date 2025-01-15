import React from 'react';
import { motion } from 'framer-motion';

const Step = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center text-center max-w-sm"
    >
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-purple-400">{number}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const HowItWorks = () => {
    return (
        <div className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                How It Works
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-16">
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