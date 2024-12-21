import React from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";
import MatrixBackground from "../components/MatrixBackground";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

      <div className="fixed inset-0 z-1">

        <MatrixBackground />

      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >

          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Welcome to Bot Overload

          </h1>
          <p className="mt-6 text-xl text-gray-300">
            Your AI-powered assistant for modern development
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl"
        />
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Feature {item}
              </h3>
              <p className="text-gray-300">
                Description of the amazing feature that makes your product stand
                out.
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Landing;
