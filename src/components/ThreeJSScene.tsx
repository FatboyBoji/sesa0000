"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function ThreeJSScene() {
  return (
    <div className="w-full h-[50vh]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
} 