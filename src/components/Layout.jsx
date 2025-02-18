import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HomeIcon,
  ChatBubbleLeftIcon,
  DocumentIcon,
  CogIcon,
} from "@heroicons/react/20/solid";
import { Helmet } from 'react-helmet-async';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { icon: HomeIcon, name: "Home" },
    { icon: ChatBubbleLeftIcon, name: "Chat" },
    { icon: DocumentIcon, name: "Docs" },
    { icon: CogIcon, name: "Settings" },
  ];

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 
      text-white flex flex-col items-center py-8 space-y-8 border-r border-gray-800"
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl mb-8"
      />

      {menuItems.map((item) => (
        <motion.button
          key={item.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab(item.name)}
          className={`w-12 h-12 rounded-xl flex items-center justify-center relative group
            ${activeTab === item.name
              ? "bg-gradient-to-tr from-blue-500 to-purple-500 text-white"
              : "text-gray-400 hover:text-white"
            }`}
        >
          <item.icon className="h-6 w-6" />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-4 px-2 py-1 bg-gray-800 rounded-md text-xs whitespace-nowrap"
          >
            {item.name}
          </motion.span>
        </motion.button>
      ))}
    </motion.div>
  );
};

const Layout = ({ children }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bot Overload",
    "url": "https://botoverload.com",
    "logo": "https://botoverload.com/logo.png",
    "description": "AI-powered automation platform for seamless message broadcasting and customer engagement",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Marina",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+97156671503",
      "contactType": "customer service",
      "email": "support@botoverload.com"
    },
    "sameAs": [
      "https://facebook.com/botoverload",
      "https://twitter.com/botoverload",
      "https://instagram.com/botoverload"
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Sidebar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-20 flex-grow p-8"
        >
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6">
            {children}
          </div>
        </motion.main>
      </div>
    </>
  );
};

export default Layout;
