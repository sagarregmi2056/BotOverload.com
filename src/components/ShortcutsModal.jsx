import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KeyboardKey = ({ children, size = 'normal' }) => (
    <motion.div
        className={`
            bg-[#1a1b1e] rounded-md flex items-center justify-center
            text-gray-400 text-sm border border-gray-700
            ${size === 'normal' ? 'w-10 h-10' : 'w-16 h-10'}
            shadow-[0_0_10px_rgba(0,0,0,0.2)]
            relative
        `}
        whileHover={{
            backgroundColor: '#25262b',
            color: '#ffffff',
            scale: 1.05,
            boxShadow: '0 0 15px rgba(0,0,0,0.3)'
        }}
    >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-md" />
        <span className="relative z-10">{children}</span>
    </motion.div>
);

const ShortcutsModal = () => {
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [hoveredAction, setHoveredAction] = useState(null);

    const actions = [
        { name: 'Mark Task as Done', shortcut: 'V' },
        { name: 'Open To Do List', shortcut: 'B' },
        { name: 'Switch to Timeline View', shortcut: 'M' }
    ];

    return (
        <motion.div
            className="fixed top-1/2 right-8 -translate-y-1/2 max-w-md w-full rounded-xl overflow-hidden bg-[#1a1b1e] shadow-2xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Search bar */}
            <div className="p-3 border-b border-gray-800">
                <div className={`flex items-center gap-2 bg-[#25262b] rounded-md p-2 ${isSearchFocused ? 'ring-1 ring-gray-600' : ''}`}>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="Run command..."
                        className="bg-transparent border-none outline-none text-gray-300 w-full"
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                    />
                    {searchValue && (
                        <button
                            onClick={() => setSearchValue('')}
                            className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            {/* Actions list */}
            <div className="p-2">
                <div className="text-xs text-gray-500 px-2 py-1">ACTIONS</div>
                <div className="space-y-1">
                    {actions.map((action) => (
                        <motion.div
                            key={action.name}
                            className="flex items-center justify-between p-2 rounded-md cursor-pointer"
                            onHoverStart={() => setHoveredAction(action.name)}
                            onHoverEnd={() => setHoveredAction(null)}
                            onClick={() => console.log(`Executing: ${action.name}`)}
                            whileHover={{ backgroundColor: '#25262b' }}
                            animate={{
                                backgroundColor: hoveredAction === action.name ? '#25262b' : 'transparent'
                            }}
                        >
                            <span className="text-gray-300">{action.name}</span>
                            <motion.span
                                className="text-gray-600 bg-[#2c2d31] px-2 py-0.5 rounded text-sm"
                                animate={{
                                    backgroundColor: hoveredAction === action.name ? '#313236' : '#2c2d31'
                                }}
                            >
                                {action.shortcut}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Updated Keyboard visualization */}
            <div className="relative mt-4">
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
                <div className="relative p-6">
                    {/* First row */}
                    <div className="flex gap-1 mb-1">
                        <KeyboardKey>~</KeyboardKey>
                        <KeyboardKey>1</KeyboardKey>
                        <KeyboardKey>2</KeyboardKey>
                        <KeyboardKey>3</KeyboardKey>
                        <KeyboardKey>4</KeyboardKey>
                        <KeyboardKey>5</KeyboardKey>
                    </div>

                    {/* Second row */}
                    <div className="flex gap-1 mb-1">
                        <KeyboardKey size="wide">Tab</KeyboardKey>
                        <KeyboardKey>Q</KeyboardKey>
                        <KeyboardKey>W</KeyboardKey>
                        <KeyboardKey>E</KeyboardKey>
                        <KeyboardKey>R</KeyboardKey>
                        <KeyboardKey>T</KeyboardKey>
                    </div>

                    {/* Third row - Main focus */}
                    <div className="flex gap-1 mb-1">
                        <KeyboardKey size="wide">Caps</KeyboardKey>
                        <KeyboardKey>A</KeyboardKey>
                        <KeyboardKey>S</KeyboardKey>
                        <KeyboardKey>D</KeyboardKey>
                        <KeyboardKey>F</KeyboardKey>
                        <KeyboardKey>G</KeyboardKey>
                    </div>

                    {/* Fourth row */}
                    <div className="flex gap-1">
                        <KeyboardKey size="wide">Shift</KeyboardKey>
                        <KeyboardKey>Z</KeyboardKey>
                        <KeyboardKey>X</KeyboardKey>
                        <KeyboardKey>C</KeyboardKey>
                        <KeyboardKey>V</KeyboardKey>
                        <KeyboardKey>B</KeyboardKey>
                    </div>

                    <div className="mt-1 mb-6">
                        <h3 className="text-white font-medium">Keyboard shortcuts</h3>
                        <p className="text-gray-400 text-sm mt-1 mb-4">
                            Work efficiently with instant access to common actions.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ShortcutsModal;