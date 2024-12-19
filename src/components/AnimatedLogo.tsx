"use client";
import { motion } from "framer-motion";
import SesaIcon from './icons/sesalogoComb';

export default function AnimatedLogo() {
  return (
    <motion.div
      className="w-48 md:w-64 lg:w-72"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      <SesaIcon className="w-full h-full text-black" />
    </motion.div>
  );
} 