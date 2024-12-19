"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SesaBG from '../components/sesa_background';
import SesaIcon from '../components/icons/sesalogoComb';
import Navbar from '../components/navbar';

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <SesaBG />
      </div>

      {/* Navbar with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showNav ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="sticky top-0 z-50"
      >
        <Navbar />
      </motion.div>

      {/* Main content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="max-w-[90rem] mx-auto"> {/* Increased max-width for larger screens */}
          {/* Hero Section */}
          <div className="min-h-[80vh] flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Logo - Updated mobile styles */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:order-2 w-full flex justify-center items-center mb-8 lg:mb-0"
            >
              <div className="w-[85%] sm:w-full max-w-md 2xl:max-w-2xl transition-all duration-300">
                <SesaIcon className="w-full h-full text-gray-800" />
              </div>
            </motion.div>

            {/* Text Content - Updated mobile styles */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:order-1 space-y-4 sm:space-y-6 text-center lg:text-left px-4 sm:px-0"
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-800 tracking-tight transition-all duration-300">
                Software Entwicklung
                <span className="block text-green-600 mt-2">Software Architectur</span>
              </h1>
              <p className="text-base sm:text-xl 2xl:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We supply software systems for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="px-6 py-2.5 sm:py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-base sm:text-lg 2xl:text-xl w-full sm:w-auto">
                  Get Started
                </button>
                <button className="px-6 py-2.5 sm:py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors text-base sm:text-lg 2xl:text-xl w-full sm:w-auto">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>

          {/* Feature Cards - Updated mobile styles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24 px-4 sm:px-0"
          >
            {/* Cards with responsive sizing */}
            {[
              { title: 'Expertise', desc: 'lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .lalalal lalalal lla lal  lla l al la laala la .' },
              { title: 'Innovation', desc: 'Cutting-edge solutions for modern challenges.' },
              { title: 'Results', desc: 'Measurable outcomes and sustainable growth.' }
            ].map((card, index) => (
              <div key={index} className="bg-white p-8 2xl:p-12 rounded-2xl shadow-lg">
                <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                <p className="text-gray-600 2xl:text-lg">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Static Footer */}
      <footer className="bg-gray-800 text-white py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-24 h-5">
            <SesaIcon className="text-white w-full h-full" />
          </div>
          <p className="text-sm text-center md:text-right">
            © tjk sesa exclusive information service, 2024.06/ 2.8
          </p>
        </div>
      </footer>
    </div>
  );
}