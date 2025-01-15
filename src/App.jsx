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
      className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full filter blur-[100px]"
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
    <div className="relative min-h-screen">
      <GlowingClock />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section with Phone and Content */}
        <div className="bg-black min-h-screen">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* Hero Section */}
            <HeroSection />

            {/* Phone Demo Section */}
            <div className="mt-20">
              <div className="flex flex-row items-start gap-20">
                <div className="ml-24">
                  <div className="w-[320px]">
                    <ShortcutsModal />
                  </div>
                </div>

                {/* Stats Section */}
                <div className="flex-1 pt-20">
                  <div className="grid grid-cols-2 gap-8">
                    {[
                      { title: "Lightning Fast", value: "0.5s/message" },
                      { title: "Success Rate", value: "99.9%" },
                      { title: "Messages/Day", value: "100K+" },
                      { title: "Active Users", value: "10K+" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/20"
                      >
                        <h3 className="text-purple-400 text-lg font-medium">{stat.title}</h3>
                        <p className="text-white text-2xl font-bold">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <HowItWorks />

            {/* Features Section */}
            <Features />

            {/* Pricing Section */}
            <PricingSection />

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
        <Contact />

        <Footer />
      </div>
    </div>
  );
};

export default App;
