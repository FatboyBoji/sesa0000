"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const InteractiveTypography = () => {
  const text = "SESA";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
      controls.start({ y: progress * -200 }); // Adjust y-position dynamically
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Main Typography Section */}
      <div className="relative flex items-center justify-center h-screen">
        <motion.h1
          className="text-8xl font-bold flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              className={`${
                index === 1 ? "text-red-500" : ""
              } relative hover:scale-125 transition-transform duration-300`}
              style={{
                transform: `translate(${
                  (mousePosition.x - window.innerWidth / 2) * 0.01
                }px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
              }}
              whileHover={{
                scale: 1.3,
                rotate: [0, 5, -5, 0],
              }}
              animate={{
                y: scrollProgress * 100 * (index % 2 === 0 ? -1 : 1),
              }}
              transition={{ duration: 0.5 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Color-Shifting Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(120deg, rgba(255,0,0,${
            scrollProgress * 0.5
          }) 0%, rgba(0,0,255,${
            scrollProgress * 0.5
          }) 100%)`,
        }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      />

      {/* Content Section with Scroll Animation */}
      <div className="relative z-10">
        <motion.div
          className="bg-gray-800 rounded-lg p-12 my-20 mx-auto max-w-4xl shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to SESA</h2>
          <p className="text-lg text-gray-400">
            Explore our professional solutions, tailored to elevate your
            experience. Whether it's innovation, service, or elegance you're
            seeking, we're here to deliver.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 rounded-lg p-12 my-20 mx-auto max-w-4xl shadow-lg"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-400">
            At SESA, we strive to bring a touch of creativity and professionalism
            to every project we undertake. Let us help you achieve your goals
            with our innovative solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTypography;
