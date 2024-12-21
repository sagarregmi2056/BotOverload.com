import React, { useRef } from 'react';
import AnimatedBeam from './AnimatedBeam';

const Circle = React.forwardRef(({ children, className = "" }, ref) => {
    return (
        <div
            ref={ref}
            className={`z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-lg ${className}`}
        >
            {children}
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

const AnimatedConnections = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const centerRef = useRef(null);
    const userRef = useRef(null);

    return (
        <div
            className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-gray-50 p-10"
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
    );
};

export default AnimatedConnections; 