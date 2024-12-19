"use client";

import dynamic from 'next/dynamic';
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

// Create a separate component for the 3D content
const ThreeContent = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [font, setFont] = useState<any | null>(null);
  const [geometry, setGeometry] = useState<TextGeometry | null>(null);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      const progress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load the font asynchronously
  useEffect(() => {
    const loadFont = async () => {
      const response = await fetch("/fonts/helvetiker_regular.typeface.json");
      const fontData = await response.json();
      const fontLoader = new FontLoader();
      setFont(fontLoader.parse(fontData));
    };
    loadFont();
  }, []);

  useEffect(() => {
    if (font) {
      const textGeometry = new TextGeometry("SESA", {
        font: font,
        size: 1,
        height: 0.5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize: 0.02,
        bevelSegments: 5,
      });
      setGeometry(textGeometry);
    }
  }, [font]);

  if (!font || !geometry) return null;

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      geometry={geometry}
    >
      <meshStandardMaterial
        color={hovered ? "red" : "white"}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
};

// Dynamically import Canvas and other r3f components
const Scene = dynamic(
  () =>
    import("@react-three/fiber").then((mod) => {
      const { Canvas } = mod;
      return function Scene({ children }: { children: React.ReactNode }) {
        return (
          <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            {children}
          </Canvas>
        );
      };
    }),
  { ssr: false }
);

// Main component
const Logo3D = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-screen h-screen bg-black text-white relative">
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(120deg, rgba(255,0,0,0.2) 0%, rgba(0,0,255,0.2) 100%)`,
        }}
      />
      
      <Scene>
        <ThreeContent />
      </Scene>

      <div className="absolute inset-x-0 bottom-20 text-center text-lg">
        <p className="text-gray-400">
          Scroll or hover over the logo for an interactive experience.
        </p>
      </div>
    </div>
  );
};

// Export with no SSR
export default dynamic(() => Promise.resolve(Logo3D), { ssr: false });
