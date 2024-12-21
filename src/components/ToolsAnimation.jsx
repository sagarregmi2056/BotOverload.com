import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const ToolIcon = ({ icon, name, index }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            className="relative group"
            initial="hidden"
            animate={controls}
            variants={{
                hidden: {
                    opacity: 0,
                    y: 50,
                    rotate: -10,
                    scale: 0.8
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                    }
                }
            }}
        >
            <motion.div
                className="w-24 h-24 bg-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden"
                whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                }}
            >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <div className="text-3xl text-white z-10">{icon}</div>

                {/* Moving background lines */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    initial={{ backgroundPosition: '0% 0%' }}
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 45%, #ffffff 49%, #ffffff 51%, transparent 55%)',
                        backgroundSize: '200% 200%'
                    }}
                />
            </motion.div>

            {/* Tool name with reveal animation */}
            <motion.span
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
            >
                {name}
            </motion.span>
        </motion.div>
    );
};

const ToolsAnimation = () => {
    const tools = [
        { icon: "🚀", name: "Jenkins" },
        { icon: "⚡", name: "GitHub Actions" },
        { icon: "🐳", name: "Docker" },
        { icon: "☸️", name: "Kubernetes" },
        { icon: "🔄", name: "CircleCI" },
        { icon: "🛠️", name: "Terraform" },
        { icon: "🔍", name: "SonarQube" },
        { icon: "📊", name: "Grafana" },
        { icon: "⚙️", name: "Ansible" }
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-10">
            {/* Heading with split animation */}
            <motion.h1
                className="text-6xl font-bold text-white mb-20 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="block">BOOST YOUR</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    AUTOMATION
                </span>
            </motion.h1>

            {/* Tools grid */}
            <motion.div
                className="grid grid-cols-3 gap-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {tools.map((tool, index) => (
                    <ToolIcon
                        key={tool.name}
                        icon={tool.icon}
                        name={tool.name}
                        index={index}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ToolsAnimation; 