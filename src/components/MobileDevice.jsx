import React from 'react';
import { motion } from 'framer-motion';

const MobileDevice = ({ isVisible = true, url = "https://www.algorithmsquad.com" }) => (
    <motion.div
        className="absolute left-20 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-black rounded-[40px] shadow-2xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{
            opacity: isVisible ? 1 : 0,
            x: isVisible ? 0 : 100,
            scale: isVisible ? 1 : 0.95
        }}
        transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20
        }}
        style={{
            border: '12px solid #333',
            overflow: 'hidden',
            pointerEvents: isVisible ? 'auto' : 'none'
        }}
    >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-black rounded-b-2xl z-20" />

        {/* Screen Content */}
        <div className="w-full h-full overflow-hidden rounded-[25px] relative">
            <iframe
                src={url}
                className="w-full h-full border-0"
                title="Mobile Preview"
                style={{
                    transform: 'scale(0.9)',
                    transformOrigin: 'top left',
                    width: '111%', // Compensate for scale
                    height: '111%' // Compensate for scale
                }}
            />

            {/* Screen Glare Effect */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"
                style={{
                    borderRadius: '25px'
                }}
            />
        </div>

        {/* Home Button / Bar */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-gray-600 rounded-full" />
    </motion.div>
);

export default MobileDevice; 