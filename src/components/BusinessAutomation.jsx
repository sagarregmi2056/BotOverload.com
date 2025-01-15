import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [currentView, setCurrentView] = useState('chat');
    const [chatStep, setChatStep] = useState(0);
    const [showExcel, setShowExcel] = useState(false);

    const chatMessages = [
        { message: "Hi! I'd like to place an order for 100 widgets.", isAi: false },
        { message: "I'll help you place that order. Could you confirm the quantity - 100 widgets?", isAi: true },
        { message: "Yes, that's correct.", isAi: false },
        { message: "Great! I've processed your order for 100 widgets. Your order number is #12345.", isAi: true },
        { message: "Thank you! When will it be delivered?", isAi: false },
        { message: "Your order will be delivered within 3-5 business days. I'm updating our system now.", isAi: true },
    ];

    const workflowSteps = [
        {
            title: "Natural Language Processing",
            description: "AI processes customer messages and understands intent",
            icon: "🧠"
        },
        {
            title: "Data Validation",
            description: "Verifies order details and customer information",
            icon: "✓"
        },
        {
            title: "Automated Processing",
            description: "Updates inventory and creates order records",
            icon: "⚙️"
        },
        {
            title: "Integration",
            description: "Syncs data across all business platforms",
            icon: "🔄"
        }
    ];

    // Function to reset and restart animation
    const startAnimation = () => {
        setCurrentView('chat');
        setChatStep(0);
        setShowExcel(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setChatStep(prev => {
                if (prev < chatMessages.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(timer);
                    setTimeout(() => {
                        setShowExcel(true);
                        setCurrentView('excel');
                        setTimeout(() => {
                            setShowExcel(false);
                            setCurrentView('workflow');
                            setTimeout(() => {
                                startAnimation(); // Restart the animation
                            }, 6000);
                        }, 4000);
                    }, 2000);
                    return prev;
                }
            });
        }, 1500);

        return () => clearInterval(timer);
    }, [chatStep === 0]); // Dependency on chatStep reset to trigger new animation cycle

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
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="mt-16 p-8 rounded-xl bg-gray-900/50 border border-purple-500/20"
                >
                    <div className="relative h-[500px]">
                        {/* Chat Interface */}
                        <AnimatePresence mode="wait">
                            {currentView === 'chat' && (
                                <motion.div
                                    key="chat"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md bg-gray-800/90 rounded-lg overflow-hidden">
                                        <div className="bg-gray-700 p-3 flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-gray-300 ml-2 text-sm">AI Chat Assistant</span>
                                        </div>
                                        <div className="p-4 space-y-2 h-[450px] overflow-y-auto scrollbar-hide">
                                            <div className="flex flex-col justify-end min-h-full">
                                                {chatMessages.slice(0, chatStep + 1).map((msg, index) => (
                                                    <ChatMessage
                                                        key={index}
                                                        message={msg.message}
                                                        isAi={msg.isAi}
                                                        delay={index * 0.5}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Excel Sheet */}
                        <AnimatePresence mode="wait">
                            {currentView === 'excel' && (
                                <motion.div
                                    key="excel"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md bg-gray-800/90 rounded-lg overflow-hidden">
                                        <div className="bg-gray-700 p-3 flex items-center space-x-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            <span className="text-gray-300 ml-2 text-sm">Orders.xlsx</span>
                                        </div>

                                        <div className="p-4 space-y-3">
                                            <div className="flex space-x-4 border-b border-gray-600 pb-2">
                                                <div className="w-24 text-sm text-gray-400">Order ID</div>
                                                <div className="w-32 text-sm text-gray-400">Product</div>
                                                <div className="w-24 text-sm text-gray-400">Quantity</div>
                                            </div>

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

                        {/* Workflow Steps */}
                        <AnimatePresence mode="wait">
                            {currentView === 'workflow' && (
                                <motion.div
                                    key="workflow"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-full max-w-md">
                                        <h3 className="text-2xl font-bold text-white text-center mb-8">
                                            How BotOverload Works
                                        </h3>
                                        <div className="space-y-6">
                                            {workflowSteps.map((step, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.5 }}
                                                    className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg border border-purple-500/20"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl">
                                                        {step.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white font-semibold">{step.title}</h4>
                                                        <p className="text-gray-400 text-sm">{step.description}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
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
                        <p className="text-purple-400 font-medium">
                            {currentView === 'workflow' ? 'AI-Powered Workflow' : 'Real-time AI Processing'}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {currentView === 'workflow'
                                ? 'See how our AI processes and handles your business operations'
                                : 'Watch as our AI handles customer interactions and automatically updates your business data'}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Add this CSS to your global styles or component
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default BusinessAutomation; 