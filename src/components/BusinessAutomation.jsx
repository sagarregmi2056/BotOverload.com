import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AutomationStep = ({ step, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-start space-x-4"
    >
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            <span className="text-white font-bold">{step}</span>
        </div>
        <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </motion.div>
);

const ChatMessage = ({ message, isAi, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`flex ${isAi ? 'justify-start' : 'justify-end'} mb-4`}
    >
        <div className={`max-w-[80%] p-3 rounded-lg ${isAi ? 'bg-gray-800 text-white' : 'bg-purple-500 text-white'
            }`}>
            {message}
        </div>
    </motion.div>
);

const BusinessAutomation = () => {
    const [showChat, setShowChat] = useState(true);
    const [showExcel, setShowExcel] = useState(false);
    const [chatStep, setChatStep] = useState(0);

    const chatMessages = [
        { message: "Hi! I'd like to place an order for 100 widgets.", isAi: false },
        { message: "I'll help you place that order. Could you confirm the quantity - 100 widgets?", isAi: true },
        { message: "Yes, that's correct.", isAi: false },
        { message: "Great! I've processed your order for 100 widgets. Your order number is #12345.", isAi: true },
        { message: "Thank you! When will it be delivered?", isAi: false },
        { message: "Your order will be delivered within 3-5 business days. I'm updating our system now.", isAi: true },
    ];

    useEffect(() => {
        const chatTimer = setInterval(() => {
            if (chatStep < chatMessages.length) {
                setChatStep(prev => prev + 1);
            } else {
                clearInterval(chatTimer);
                setTimeout(() => {
                    setShowChat(false);
                    setShowExcel(true);
                }, 1000);
            }
        }, 1500);

        return () => clearInterval(chatTimer);
    }, [chatStep]);

    return (
        <div className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl font-bold text-white mb-4">
                    Automate Your Business
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Let our AI agents handle your business operations while you focus on growth
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <div className="grid gap-12">
                    <AutomationStep
                        step="1"
                        title="Sign Up & Connect"
                        description="Create your account and connect your business tools and platforms"
                        delay={0.2}
                    />
                    <AutomationStep
                        step="2"
                        title="Name Your AI Agent"
                        description="Personalize your AI assistant and set up its primary functions"
                        delay={0.4}
                    />
                    <AutomationStep
                        step="3"
                        title="Business Information"
                        description="Tell us about your business processes and automation needs"
                        delay={0.6}
                    />
                    <AutomationStep
                        step="4"
                        title="AI Takes Control"
                        description="Watch as our AI handles your tasks like order processing, data entry, and customer support"
                        delay={0.8}
                    />
                </div>

                {/* Enhanced Animation Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-16 p-8 rounded-xl bg-gray-900/50 border border-purple-500/20"
                >
                    <div className="relative h-[500px]">
                        {/* Chat Interface */}
                        <AnimatePresence>
                            {showChat && (
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md bg-gray-800/90 rounded-lg overflow-hidden">
                                        {/* Chat Header */}
                                        <div className="bg-gray-700 p-3 flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-gray-300 ml-2 text-sm">AI Chat Assistant</span>
                                        </div>

                                        {/* Chat Messages */}
                                        <div className="p-4 space-y-2 h-[400px] overflow-y-auto">
                                            {chatMessages.slice(0, chatStep).map((msg, index) => (
                                                <ChatMessage
                                                    key={index}
                                                    message={msg.message}
                                                    isAi={msg.isAi}
                                                    delay={index * 0.5}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Excel Sheet Animation */}
                        <AnimatePresence>
                            {showExcel && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md bg-gray-800/90 rounded-lg overflow-hidden">
                                        {/* Excel Header */}
                                        <div className="bg-gray-700 p-3 flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-gray-300 ml-2 text-sm">Orders.xlsx</span>
                                        </div>

                                        {/* Excel Content */}
                                        <div className="p-4 space-y-3">
                                            {/* Headers */}
                                            <div className="flex space-x-4 border-b border-gray-600 pb-2">
                                                <div className="w-24 text-sm text-gray-400">Order ID</div>
                                                <div className="w-32 text-sm text-gray-400">Product</div>
                                                <div className="w-24 text-sm text-gray-400">Quantity</div>
                                            </div>

                                            {/* Existing Rows */}
                                            {[...Array(3)].map((_, index) => (
                                                <motion.div
                                                    key={`existing-${index}`}
                                                    className="flex space-x-4"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: index * 0.2 }}
                                                >
                                                    <div className="w-24 text-sm text-gray-500">#{12342 + index}</div>
                                                    <div className="w-32 text-sm text-gray-500">Widgets</div>
                                                    <div className="w-24 text-sm text-gray-500">{50 + (index * 25)}</div>
                                                </motion.div>
                                            ))}

                                            {/* New Order Row */}
                                            <motion.div
                                                className="flex space-x-4"
                                                initial={{ opacity: 0, backgroundColor: 'rgba(147, 51, 234, 0.2)' }}
                                                animate={{ opacity: 1, backgroundColor: 'rgba(147, 51, 234, 0)' }}
                                                transition={{ delay: 1, duration: 2 }}
                                            >
                                                <div className="w-24 text-sm text-purple-400">#12345</div>
                                                <div className="w-32 text-sm text-purple-400">Widgets</div>
                                                <div className="w-24 text-sm text-purple-400">100</div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Processing Indicator */}
                        <motion.div
                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <div className="h-2 w-2 bg-purple-500 rounded-full" />
                            <div className="h-2 w-2 bg-purple-500 rounded-full" />
                            <div className="h-2 w-2 bg-purple-500 rounded-full" />
                        </motion.div>
                    </div>

                    <div className="text-center mt-6 space-y-2">
                        <p className="text-purple-400 font-medium">Real-time AI Processing</p>
                        <p className="text-gray-400 text-sm">Watch as our AI handles customer interactions and automatically updates your business data</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BusinessAutomation; 