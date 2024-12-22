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
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <motion.div
                className="max-w-md w-full max-h-[80vh] rounded-xl bg-[#1a1b1e]/95 border border-white/10 backdrop-blur-md shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-xl pointer-events-none" />

                {/* Content container */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* Search bar - Fixed at top */}
                    <div className="p-3 border-b border-gray-800/50">
                        <div
                            className={`
                                flex items-center gap-2 bg-[#25262b]/90 rounded-md p-2 
                                transition-all duration-200 backdrop-blur-sm
                                ${isSearchFocused ? 'ring-1 ring-gray-600' : ''}
                            `}
                        >
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Run command..."
                                className="bg-transparent border-none outline-none text-gray-300 w-full placeholder-gray-500"
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                            />
                            {searchValue && (
                                <button
                                    onClick={() => setSearchValue('')}
                                    className="text-gray-500 hover:text-gray-300 transition-colors flex-shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Scrollable content */}
                    <div className="overflow-y-auto flex-1">
                        {/* Actions list */}
                        <div className="p-2">
                            <div className="text-xs text-gray-500 px-2 py-1">ACTIONS</div>
                            <div className="space-y-1">
                                {actions.map((action) => (
                                    <motion.div
                                        key={action.name}
                                        className={`
                                            flex items-center justify-between p-2 rounded-md cursor-pointer
                                            transition-all duration-200
                                            ${hoveredAction === action.name ? 'bg-[#25262b]/90 backdrop-blur-sm' : 'hover:bg-[#25262b]/80'}
                                        `}
                                        onHoverStart={() => setHoveredAction(action.name)}
                                        onHoverEnd={() => setHoveredAction(null)}
                                        onClick={() => console.log(`Executing: ${action.name}`)}
                                    >
                                        <span className="text-gray-300">{action.name}</span>
                                        <span className={`
                                            text-gray-600 px-2 py-0.5 rounded text-sm
                                            transition-all duration-200
                                            ${hoveredAction === action.name ? 'bg-[#313236] text-gray-400' : 'bg-[#2c2d31]'}
                                        `}>
                                            {action.shortcut}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Keyboard visualization section */}
                        <div className="p-4 mt-2 border-t border-gray-800/50">
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
                </div>
            </motion.div>
        </div>
    );
};

export default ShortcutsModal;