import React from 'react';
import { motion } from 'framer-motion';
import {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    ChartBarIcon,
    CogIcon,
    ShieldCheckIcon,
    CircleStackIcon,
} from '@heroicons/react/24/outline';

const FeatureCard = ({ Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className="p-6 rounded-2xl bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
    >
        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            Icon: BoltIcon,
            title: "Automated Workflows",
            description: "Create complex automation workflows with our visual builder",
        },
        {
            Icon: ChatBubbleBottomCenterTextIcon,
            title: "Multi-Channel Support",
            description: "Connect with users across various messaging platforms",
        },
        {
            Icon: ChartBarIcon,
            title: "Advanced Analytics",
            description: "Track and analyze bot performance with detailed metrics",
        },
        {
            Icon: CogIcon,
            title: "Easy Integration",
            description: "Seamlessly integrate with your existing tools and services",
        },
        {
            Icon: ShieldCheckIcon,
            title: "Enterprise Security",
            description: "Bank-grade security with end-to-end encryption",
        },
        {
            Icon: CircleStackIcon,
            title: "Scalable Infrastructure",
            description: "Built to handle millions of interactions efficiently",
        },
    ];

    return (
        <div className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                Powerful Features
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        Icon={feature.Icon}
                        title={feature.title}
                        description={feature.description}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
};

export default Features; 