import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Features", href: "features" },
    { name: "Pricing", href: "pricingSection" },
    { name: "Contact", href: "contact" },
  ];

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      setIsOpen(false);
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <div className={`w-full transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg shadow-lg' : 'bg-black/50'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Bot Overload
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
