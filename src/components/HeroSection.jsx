import { motion } from "framer-motion";
import styled from "styled-components";
import myImage from '../assets/top2.png';

const companies = [
    {
        name: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
        name: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
    },
    {
        name: "Meta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png",
    },
    {
        name: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    }
];

const GlowingGif = styled.div`
  position: relative;
  width: 1000px;  // Further increased size
  height: 700px;  // Further increased size
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid transparent; // Thinner border
  border-bottom: none; // Remove bottom border
  animation: borderAnimation 5s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0; // Start gradient from the top
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 100%);
    z-index: 1;
    pointer-events: none;
  }

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    z-index: 0;
  }

  @keyframes borderAnimation {
    0% {
      border-color: #ff0000;
    }
    33% {
      border-color: #00ff00;
    }
    66% {
      border-color: #0000ff;
    }
    100% {
      border-color: #ff0000;
    }
  }
`;

const HeroSection = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="text-center space-y-12">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-6xl md:text-7xl font-bold">
                            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                                Bot Overload is the new way
                            </span>
                            <br />
                            <span className="text-white">
                                to automate messaging.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Beautifully designed, AI-powered automation platform built with
                            advanced features for seamless message broadcasting and customer engagement.
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center gap-6"
                    >
                        <button className="px-12 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-lg font-medium">
                            Get Started for free
                        </button>
                        <button className="px-12 py-4 border-2 border-purple-500 text-purple-400 rounded-xl hover:bg-purple-900/30 transition-colors text-lg font-medium">
                            View Demo
                        </button>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="pt-20"
                    >
                        <p className="text-gray-500 uppercase tracking-widest font-medium mb-12 text-center text-sm">
                            TRUSTED BY TEAMS FROM AROUND THE WORLD
                        </p>
                        <div className="flex justify-center items-center gap-20">
                            {companies.map((company, index) => (
                                <motion.div
                                    key={company.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                                    className="flex flex-col items-center space-y-4"
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className="h-12 object-contain opacity-90"
                                    />
                                    <span className="text-gray-500 text-sm">{company.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <GlowingGif>
                        <img
                            src={myImage}
                            alt="Custom Design"
                        />
                    </GlowingGif>
                </div>
            </div>
        </div>
    );
};

export default HeroSection; 