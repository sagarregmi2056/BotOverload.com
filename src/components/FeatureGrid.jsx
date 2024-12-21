import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, children, className }) => (
    <motion.div
        className={`bg-[#12141a] rounded-xl p-6 overflow-hidden relative ${className}`}
        whileHover={{ scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        <div className="relative z-10">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            {children}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
    </motion.div>
);

const FeatureGrid = () => {
    return (
        <div className="max-w-4xl mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeatureCard
                    title="Create tasks"
                    description="Schedule your personal events and todos."
                >
                    <div className="bg-[#1a1b1e] rounded-lg p-4 space-y-2">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-blue-500/20" />
                            <span className="text-gray-400">Automated testing</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded bg-blue-500/20" />
                            <span className="text-gray-400">Initial usability assessment</span>
                        </div>
                    </div>
                </FeatureCard>

                <FeatureCard
                    title="Plan your work"
                    description="Visualize your workday in your planner."
                    className="bg-gradient-to-br from-purple-900/20 to-transparent"
                >
                    <div className="bg-[#25262b] rounded-lg p-4">
                        <div className="text-gray-300">Discuss detailed project</div>
                        <div className="text-sm text-gray-500">01:00-01:30 pm</div>
                    </div>
                </FeatureCard>

                <FeatureCard
                    title="Chat with team"
                    description="Send DM and create group chats."
                    className="bg-gradient-to-br from-indigo-900/20 to-transparent"
                >
                    <div className="bg-[#25262b] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-full bg-gray-700" />
                            <span className="text-gray-300">Team Chat</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full bg-[#1a1b1e] rounded p-2 text-sm text-gray-300"
                        />
                    </div>
                </FeatureCard>
            </div>
        </div>
    );
};

export default FeatureGrid; 