import React, { useRef } from 'react';
import AnimatedBeam from './AnimatedBeam';

const Circle = React.forwardRef(({ children, className = "" }, ref) => {
    return (
        <div
            ref={ref}
            className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm backdrop-filter ${className}`}
            style={{
                boxShadow: `
                    0 0 15px -5px rgba(255, 255, 255, 0.2),
                    inset 0 0 15px -5px rgba(255, 255, 255, 0.1)
                `,
            }}
        >
            <div className="text-white/80">
                {children}
            </div>
        </div>
    );
});

Circle.displayName = 'Circle';

// Icon Components
const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const AIIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a7 7 0 0 1 7 7v1h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h1V9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);

const AppIcon1 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h10M7 12h10M7 17h10" />
    </svg>
);

const AppIcon2 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8M8 12h8" />
    </svg>
);

const AppIcon3 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-4.97 0-9-4.03-9-9m9-9a9 9 0 0 0-9 9" />
    </svg>
);

const FeatureItem = ({ icon, text, color }) => (
    <div className="group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]">
        <div className="flex flex-col items-center gap-3 md:flex-row">
            <div
                className={`h-8 w-8 rounded-full ${color}/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:${color}/30 backdrop-blur-sm backdrop-filter border border-white/10`}
                style={{
                    boxShadow: '0 0 15px -5px rgba(255, 255, 255, 0.2)',
                }}
            >
                {icon}
            </div>
            <span className="text-gray-300 transition-colors duration-300 group-hover:text-white whitespace-nowrap">
                {text}
            </span>
        </div>
    </div>
);

const AnimatedConnections = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const centerRef = useRef(null);
    const userRef = useRef(null);

    return (
        <div
            className="w-full rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm backdrop-filter overflow-hidden"
            style={{
                boxShadow: `
                    inset 0 0px 20px -10px rgba(255, 255, 255, 0.3),
                    0 0 20px -10px rgba(255, 255, 255, 0.2)
                `,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.2) 100%)',
            }}
        >
            {/* Optional: Add subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />

            {/* Content Section */}
            <div className="relative z-10 text-white text-center px-4 md:px-8 py-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    BOOST YOUR AUTOMATION
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Connect your favorite apps and automate your workflow with AI-powered integration.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 max-w-3xl mx-auto">
                    <FeatureItem
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        }
                        text="Seamless Integration"
                        color="bg-blue-500"
                    />
                    <FeatureItem
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-purple-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                        text="Real-time Processing"
                        color="bg-purple-500"
                    />
                    <FeatureItem
                        icon={
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        }
                        text="Secure Connection"
                        color="bg-indigo-500"
                    />
                </div>
            </div>

            {/* Subtle divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Animation Section */}
            <div
                className="relative flex h-[500px] w-full items-center justify-center p-10"
                ref={containerRef}
            >
                <div className="flex w-full max-w-lg flex-row items-stretch justify-between gap-10">
                    {/* Left side - User */}
                    <div className="flex flex-col justify-center">
                        <Circle ref={userRef}>
                            <UserIcon />
                        </Circle>
                    </div>

                    {/* Center - AI */}
                    <div className="flex flex-col justify-center">
                        <Circle ref={centerRef} className="h-16 w-16">
                            <AIIcon />
                        </Circle>
                    </div>

                    {/* Right side - Apps */}
                    <div className="flex flex-col justify-center gap-2">
                        <Circle ref={div1Ref}>
                            <AppIcon1 />
                        </Circle>
                        <Circle ref={div2Ref}>
                            <AppIcon2 />
                        </Circle>
                        <Circle ref={div3Ref}>
                            <AppIcon3 />
                        </Circle>
                    </div>
                </div>

                {/* Animated Beams */}
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={centerRef}
                    duration={3}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={centerRef}
                    duration={3}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={centerRef}
                    duration={3}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={centerRef}
                    toRef={userRef}
                    duration={3}
                />
            </div>
        </div>
    );
};

export default AnimatedConnections; 