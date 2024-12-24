import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Bot Loader Component
const BotLoader = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center gap-2 p-3 bg-[#1a1a1a] rounded-lg mb-4 border border-purple-500/20"
    >
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
    </motion.div>
);

// Notification Toast Component
const NotificationToast = ({ message }) => (
    <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 
                   border border-purple-400/20 backdrop-blur-sm"
    >
        <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {message}
        </div>
    </motion.div>
);

// Bot Avatar Component
const BotAvatar = () => (
    <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
    >
        <rect width="64" height="64" rx="32" fill="#1a1a1a" />
        <path
            d="M32 16C23.164 16 16 23.164 16 32C16 40.836 23.164 48 32 48C40.836 48 48 40.836 48 32C48 23.164 40.836 16 32 16Z"
            fill="#4B5563"
        />
        <path
            d="M32 20C25.372 20 20 25.372 20 32C20 38.628 25.372 44 32 44C38.628 44 44 38.628 44 32C44 25.372 38.628 20 32 20Z"
            fill="#8B5CF6"
        />
        <circle cx="28" cy="30" r="2" fill="white" />
        <circle cx="36" cy="30" r="2" fill="white" />
        <path
            d="M27 36C27 36 29 38 32 38C35 38 37 36 37 36"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
        />
    </svg>
);

const ChatBubble = ({ message, isOutgoing, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: isOutgoing ? 50 : -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay }}
        className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'} mb-4`}
    >
        {!isOutgoing && (
            <div className="w-8 h-8 rounded-full bg-purple-900/50 mr-2 flex-shrink-0 overflow-hidden border border-purple-500/20">
                <BotAvatar />
            </div>
        )}
        <div className={`
            max-w-[70%] rounded-2xl p-3 
            ${isOutgoing
                ? 'bg-purple-900/50 text-white rounded-tr-sm border border-purple-500/20'
                : 'bg-[#1a1a1a] text-white rounded-tl-sm border border-purple-500/20'
            }
        `}>
            <p className="text-sm">{message}</p>
            <p className="text-xs text-purple-300/60 text-right mt-1">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
        </div>
    </motion.div>
);

const BotOverloadDemo = () => {
    const [messages, setMessages] = useState([]);
    const [showLoader, setShowLoader] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const chatContainerRef = useRef(null);

    const demoMessages = [
        { text: "Welcome to BotOverload.com! 🤖", isOutgoing: false },
        { text: "I'll demonstrate our bulk messaging system...", isOutgoing: false },
        { text: "Initializing message broadcast...", isOutgoing: true },
        { text: "Preparing to send messages to 1000 recipients...", isOutgoing: false },
        { text: "Processing bulk message queue...", isOutgoing: false },
        { text: "Optimizing message delivery paths...", isOutgoing: true },
    ];

    // Auto scroll to bottom
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    // Initialize messages
    useEffect(() => {
        let messageIndex = 0;
        let isActive = true;

        const addMessage = () => {
            if (!isActive || messageIndex >= demoMessages.length) return;

            setMessages(prev => [...prev, demoMessages[messageIndex]]);
            messageIndex++;

            if (messageIndex === demoMessages.length) {
                setShowLoader(true);
                setTimeout(() => {
                    if (!isActive) return;
                    setShowLoader(false);
                    setShowNotification(true);
                    setMessages(prev => [...prev, {
                        text: "📊 Bulk Message Report:\n✅ Total Messages: 1000\n✅ Delivered: 1000\n❌ Failed: 0\n⚡ Average Speed: 0.5s/message",
                        isOutgoing: false
                    }]);
                    setTimeout(() => {
                        if (!isActive) return;
                        setShowNotification(false);
                    }, 3000);
                }, 2000);
            } else {
                setTimeout(addMessage, 1000);
            }
        };

        addMessage();
        return () => {
            isActive = false;
        };
    }, []);

    const renderMessages = () => {
        if (!Array.isArray(messages)) return null;

        return messages.map((msg, index) => {
            if (!msg || typeof msg.text === 'undefined') return null;

            return (
                <ChatBubble
                    key={index}
                    message={msg.text}
                    isOutgoing={msg.isOutgoing}
                    delay={0.2}
                />
            );
        });
    };

    return (
        <div className="bg-[#0a0a0a] h-[500px] rounded-xl overflow-hidden relative border border-purple-500/20">
            {/* Notification */}
            <AnimatePresence>
                {showNotification && (
                    <NotificationToast message="Bulk message broadcast completed successfully!" />
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="bg-[#1a1a1a] p-4 flex items-center gap-3 border-b border-purple-500/20">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <BotAvatar />
                </div>
                <div>
                    <h3 className="text-white font-medium flex items-center gap-2">
                        BotOverload.com
                        <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs">
                            PRO
                        </span>
                    </h3>
                    <p className="text-purple-300/60 text-sm">Bulk Message Demo</p>
                </div>
            </div>

            {/* Chat Area */}
            <div
                ref={chatContainerRef}
                className="h-[calc(100%-136px)] overflow-y-auto p-4 bg-[#0a0a0a] scroll-smooth"
            >
                <AnimatePresence>
                    {renderMessages()}
                </AnimatePresence>
                {showLoader && <BotLoader />}
            </div>

            {/* Input Area */}
            <div className="bg-[#1a1a1a] p-4 flex items-center gap-4 border-t border-purple-500/20">
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-purple-900/20 text-white rounded-lg px-4 py-2 outline-none border border-purple-500/20 
                             placeholder-purple-300/40 focus:border-purple-500/40 transition-colors"
                />
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BotOverloadDemo;