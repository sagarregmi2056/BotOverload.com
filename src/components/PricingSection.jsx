import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/20/solid';

const PricingTier = ({ name, price, features, isPopular, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        className={`relative p-8 rounded-2xl ${isPopular ? 'bg-purple-900/50 border-2 border-purple-500/50' : 'bg-gray-900/50'
            }`}
    >
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-purple-500 rounded-full text-sm font-medium text-white">
                Most Popular
            </div>
        )}
        <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
        <div className="mb-6">
            <span className="text-4xl font-bold text-white">${price}</span>
            <span className="text-gray-400">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300">
                    <CheckIcon className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 rounded-lg font-medium transition-colors ${isPopular
                ? 'bg-purple-500 hover:bg-purple-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
            }`}>
            Get Started
        </button>
    </motion.div>
);

const PricingSection = () => {
    return (
        <div className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                Pricing Plans
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <PricingTier
                    name="Starter"
                    price={29}
                    features={[
                        "5 Bots",
                        "Basic Analytics",
                        "24/7 Support",
                        "1,000 API calls/month"
                    ]}
                    delay={0.2}
                />
                <PricingTier
                    name="Professional"
                    price={99}
                    features={[
                        "25 Bots",
                        "Advanced Analytics",
                        "Priority Support",
                        "50,000 API calls/month",
                        "Custom Integrations"
                    ]}
                    isPopular={true}
                    delay={0.4}
                />
                <PricingTier
                    name="Enterprise"
                    price={299}
                    features={[
                        "Unlimited Bots",
                        "Enterprise Analytics",
                        "24/7 Premium Support",
                        "Unlimited API calls",
                        "Custom Development",
                        "SLA Guarantee"
                    ]}
                    delay={0.6}
                />
            </div>
        </div>
    );
};

export default PricingSection; 