import React from "react";
import { motion } from "framer-motion";
import MatrixBackground from "../components/MatrixBackground";
import ShortcutsModal from "../components/ShortcutsModal";
import MobileDevice from "../components/MobileDevice";
import FlowingBackground from "../components/FlowingBackground";
import AnimatedConnections from "../components/AnimatedConnections";

const features = [
  {
    title: "Bulk Messaging",
    description: "Send messages to multiple contacts simultaneously, saving you time and ensuring consistent communication across your audience."
  },
  {
    title: "AI-Powered Chatbots",
    description: "Leverage advanced AI technology to automate responses, manage inquiries, and provide 24/7 support. Our chatbots are designed to engage users effectively, enhancing their experience while reducing your workload."
  },
  {
    title: "Task Automation",
    description: "Automate repetitive tasks and workflows, allowing you to focus on what truly matters—growing your business. From scheduling messages to managing customer interactions, Botoverload simplifies your daily operations."
  },
  {
    title: "Multi-Platform Integration",
    description: "Beyond WhatsApp, Botoverload supports various messaging platforms, ensuring you can reach your audience wherever they are."
  },
  {
    title: "User-Friendly Interface",
    description: "Our intuitive dashboard allows you to manage all features effortlessly. No technical expertise is required—just log in and start optimizing your communication strategy."
  }
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background layers */}


      {/* Main Content */}
      <div className="relative z-10 min-h-screen">


        {/* Hero Section with Glass Effect */}
        <section className="relative min-h-[70vh] pl-56 pt-[700px]">
          <div className="w-full flex flex-col items-start space-y-0">


            {/* AnimatedConnections directly below */}

          </div>
        </section>

        {/* Content after hero - With blur effect */}
        <div className="relative">
          {/* Blue gradient overlay with blur */}
          <div className="absolute inset-0 " />

          {/* Productivity Text and ShortcutsModal */}
          <div className="relative z-10 mt-0 w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              {/* Left side - Productivity Text */}


              {/* Right side - ShortcutsModal */}
              <div className=" bg-black">
                <AnimatedConnections />
              </div>
            </div>
          </div>

          {/* Features Grid Section */}
          <section className="relative z-10 py-10 px-4 md:px-20">
            <FlowingBackground />

            <div className="max-w-6xl mx-auto">

              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Key Features
              </h2>
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -10 }}
                      className="relative overflow-hidden rounded-xl p-6 transition-all duration-300"
                      style={{
                        background: 'linear-gradient(169.44deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
                        boxShadow: `
                          inset 0 0px 20px -10px rgba(255, 255, 255, 0.3),
                          0 0 20px -10px rgba(255, 255, 255, 0.2)
                        `
                      }}
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
