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
    className="min-h-screen p-6 flex items-center justify-center"
  >
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-full max-w-7xl glass-morphism rounded-2xl p-8"
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

      <MatrixBackground />
      <ShortcutsModal />

      <div className="relative z-10">
        <Navbar />



        <LandingPage />


        <PageContainer>

          <ShortcutsModal />

        </PageContainer>


        <PageContainer>
          <Dashboard />
          <RocketAnimation />

        </PageContainer>
      </div>

      <div className="relative z-10">
        <FeatureGrid />



        <div className="relative z-10">
          {/* Your other components */}
          <GlowingClock />
          <AnimatedConnections />

          <ToolsAnimation />



        </div>
      </div>
    </div>
  );
};

export default App;
