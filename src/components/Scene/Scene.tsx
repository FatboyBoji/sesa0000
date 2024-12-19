"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Mesh } from 'three';

function RotatingLogo() {
  const meshRef = useRef<Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup animation on unmount
      if (meshRef.current) {
        meshRef.current.rotation.x = 0;
        meshRef.current.rotation.y = 0;
      }
    };
  }, []);

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="w-full h-[50vh]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingLogo />
        <OrbitControls />
      </Canvas>
    </div>
  );
}