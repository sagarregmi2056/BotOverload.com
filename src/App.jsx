import { motion } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import "./index.css";
import LandingPage from "./pages/Landing";
import PhoneLayout from "./components/PhoneLayout";
import Navbar from "./components/Navbar";
import Background from './components/Background';
import FlowingGradient from './components/FlowingGradient';
import { useEffect } from 'react';
import MatrixBackground from "./components/MatrixBackground";
import ShortcutsModal from "./components/ShortcutsModal";
import BootloaderClock from "./components/BootloaderClock";
import FeatureGrid from "./components/FeatureGrid";
import GlowingClock from "./components/GlowingClock";
import SocialMediaIcons from "./components/SocialMediaIcons";
import ToolsAnimation from "./components/ToolsAnimation";
import RocketAnimation from "./components/RocketAnimation";
import RocketAnimation3D from "./components/RocketAnimation3D";
import BackgroundAnimation from "./components/BackgroundAnimation";
import AnimatedConnections from "./components/AnimatedConnections";
import MobileDevice from "./components/MobileDevice";
import FlowingBackground from "./components/FlowingBackground";
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import Features from './components/Features';
import Footer from './components/Footer';
import BusinessAutomation from './components/BusinessAutomation';
import Contact from './components/Contact';
import { useCounterAnimation } from './hooks/useCounterAnimation';
import Model3D from './components/Model3D';
import ErrorBoundary from './components/ErrorBoundary';
import { DiscordIcon } from './components/DiscordIcon';

const MessageLoadingAnimation = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: [-100, 0, 100],
            x: [-100, 0, 100]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeInOut"
          }}
          className="absolute w-64 h-20 bg-gradient-to-r from-[#4da6ff]/20 to-[#a98eff]/20 
                     rounded-lg blur-xl transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${30 + i * 20}%`,
            top: `${40 + i * 15}%`
          }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 -z-10">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute w-64 h-20 bg-gradient-to-r from-[#4da6ff]/20 to-[#a98eff]/20 
                     rounded-lg blur-xl transform -translate-x-1/2 -translate-y-1/2"
    />
    <motion.div
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.4, 0.6, 0.4],
        rotate: [360, 270, 180, 90, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[100px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.4, 0.3],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full filter blur-[100px]"
    />
  </div>
);

const PageContainer = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="min-h-screen p-6 flex items-center justify-left"
  >
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-full max-w-7xl bg-black/50 rounded-2xl p-8 border border-purple-500/20"
    >
      {children}
    </motion.div>
  </motion.div>
);

const StatCard = ({ title, value, suffix = "", delay = 0 }) => {
  const count = useCounterAnimation(
    parseInt(value.replace(/[^0-9]/g, '')),
    2000,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20"
    >
      <h3 className="text-purple-400 text-lg font-medium">{title}</h3>
      <p className="text-white text-2xl font-bold">
        {count}{suffix}
      </p>
    </motion.div>
  );
};

const App = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll('.glass-morphism').forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background layer */}
      {/* <div className="fixed inset-0 bg-black -z-20"></div> */}

      {/* Animation layer */}

      <div className="relative z-[40]">
        <AnimatedBackground />
      </div>


      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <div className="relative min-h-[70vh]">
          {/* 3D Model */}
          <ErrorBoundary>
            <div className="absolute inset-0">
              {/* / <Model3D modelPath="/models/model.glb" /> */}
            </div>
          </ErrorBoundary>

          {/* Welcome Text - Centered */}
          <div className="relative z-10 flex items-center justify-center min-h-[70vh]">
            <div className="max-w-3xl mx-auto px-4 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl font-bold bg-gradient-to-r from-[#4da6ff] via-[#a98eff] to-[#c18fff] bg-clip-text text-transparent mb-6"
              >
                Revolutionize Your Automation
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-300 text-xl mb-8"
              >
                <p className="text-gray-300 text-xl mb-8">
                  <span className="text-white px-2 py-1 rounded">
                    Transform your business with AI-powered social automation. BotOverload seamlessly
                    connects and manages all your platforms, making digital productivity effortless.
                  </span>
                </p>

              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex gap-4 justify-center"
              >

                <button className="bg-black/30 text-white px-8 py-3 rounded-full font-medium border border-[#a98eff]/30 hover:bg-black/50 transition-colors flex items-center gap-2">
                  JOIN OUR DISCORD
                  <DiscordIcon />
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Rest of your content */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section id="home">
              <HeroSection />
            </section>

            {/* Phone Demo Section */}
            <div className="mt-2">
              <div className="flex flex-row items-start gap-20">
                <div className="ml-24">
                  <div className="w-[320px]">
                    <ShortcutsModal />
                  </div>
                </div>

                {/* Stats Section */}
                <div id="stats-section" className="flex-1 pt-20">
                  <div className="grid grid-cols-2 gap-8">
                    <StatCard
                      title="Lightning Fast"
                      value="0.5"
                      suffix="s/message"
                      delay={0.6}
                    />
                    <StatCard
                      title="Success Rate"
                      value="99.9"
                      suffix="%"
                      delay={0.7}
                    />
                    <StatCard
                      title="Messages/Day"
                      value="100000"
                      suffix="+"
                      delay={0.8}
                    />
                    <StatCard
                      title="Active Users"
                      value="10000"
                      suffix="+"
                      delay={0.9}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <HowItWorks />

            {/* Features Section */}
            <section id="features">
              <Features />
            </section>

            {/* Pricing Section */}
            <section id="pricingSection">
              <PricingSection />
            </section>

            {/* Business Automation Section */}
            <BusinessAutomation />
          </div>
        </div>

        {/* Rest of the sections with black background */}
        <div className="bg-black">
          <div className="max-w-7xl mx-auto">
            <AnimatedConnections />
          </div>
        </div>

        <div className="bg-black">
          <PageContainer>
            <Dashboard />
          </PageContainer>
        </div>

        <FlowingBackground />

        <section id="contact">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
