import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, RoundedBox, Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

function PhoneModel() {
  const group = useRef<THREE.Group>(null);
  const [hoveredAnnotation, setHoveredAnnotation] = useState<string | null>(null);

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Main Body */}
        <RoundedBox args={[3, 6, 0.4]} radius={0.2} smoothness={4}>
          <meshStandardMaterial color="#111" metalness={0.9} roughness={0.1} />
        </RoundedBox>
        
        {/* Screen */}
        <mesh position={[0, 0, 0.21]}>
          <planeGeometry args={[2.8, 5.8]} />
          <meshStandardMaterial color="#000" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Projection Lens (Hologram Emitter) */}
        <mesh position={[0, 2.5, 0.22]}>
          <circleGeometry args={[0.15, 32]} />
          <meshBasicMaterial color="#0064ff" />
          <pointLight color="#0064ff" intensity={2} distance={5} />
        </mesh>
        
        {/* Camera Bump (Back) */}
        <RoundedBox args={[1.2, 1.2, 0.1]} radius={0.1} position={[-0.7, 2.2, -0.25]}>
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Annotations */}
        <Html position={[0, 2.5, 0.3]} distanceFactor={10}>
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredAnnotation('lens')}
            onMouseLeave={() => setHoveredAnnotation(null)}
          >
            <div className="w-4 h-4 rounded-full bg-blue-500/50 border border-blue-400 animate-ping absolute -inset-0" />
            <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white relative z-10" />
            
            <div className={`absolute left-8 top-1/2 -translate-y-1/2 w-48 bg-black/80 backdrop-blur-md border border-white/20 p-3 rounded-xl transition-all duration-300 ${hoveredAnnotation === 'lens' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
              <h4 className="text-white font-medium text-sm mb-1">Holographic Emitter</h4>
              <p className="text-gray-400 text-xs">Projects high-fidelity 3D holograms directly from the device.</p>
            </div>
          </div>
        </Html>

        <Html position={[1.4, 0, 0.3]} distanceFactor={10}>
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredAnnotation('display')}
            onMouseLeave={() => setHoveredAnnotation(null)}
          >
            <div className="w-4 h-4 rounded-full bg-white/30 border border-white/50 animate-ping absolute -inset-0" />
            <div className="w-4 h-4 rounded-full bg-white/50 border-2 border-white relative z-10" />
            
            <div className={`absolute right-8 top-1/2 -translate-y-1/2 w-48 bg-black/80 backdrop-blur-md border border-white/20 p-3 rounded-xl transition-all duration-300 ${hoveredAnnotation === 'display' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
              <h4 className="text-white font-medium text-sm mb-1">Edge-to-Edge Display</h4>
              <p className="text-gray-400 text-xs">Seamless glass melting into the aerospace-grade aluminum frame.</p>
            </div>
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function HolophoneViewer() {
  return (
    <div className="w-full h-[600px] md:h-[800px] relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <PhoneModel />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -4, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={15}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-500 text-sm pointer-events-none flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
        <span>Drag to rotate</span>
        <span className="w-1 h-1 rounded-full bg-gray-500" />
        <span>Scroll to zoom</span>
      </div>
    </div>
  );
}
