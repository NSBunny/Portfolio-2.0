"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./CinematicLayer.module.css";

// Generate a soft circular particle texture
function createParticleTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.9)");
  gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.2)");
  gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 64, 64);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function Particles({ count = 120 }) {
  const meshRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const texture = useMemo(() => createParticleTexture(), []);

  // Generate particle positions, colors, sizes, and animation offsets
  const { positions, colors, sizes, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const offsets = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Keep particles heavily clustered on the left side
      positions[i * 3] = (Math.random() - 1.0) * 12;     // x (from -12 to 0)
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;  // z

      // Warm orange + white color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.45) {
        // Warm orange
        colors[i * 3] = 0.91 + Math.random() * 0.09;     // R
        colors[i * 3 + 1] = 0.45 + Math.random() * 0.2;  // G
        colors[i * 3 + 2] = 0.15 + Math.random() * 0.1;  // B
      } else if (colorChoice < 0.75) {
        // Soft white/cream
        colors[i * 3] = 0.95 + Math.random() * 0.05;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.85 + Math.random() * 0.1;
      } else {
        // Golden warm
        colors[i * 3] = 1.0;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.2;
        colors[i * 3 + 2] = 0.2 + Math.random() * 0.15;
      }

      // Varied sizes for depth (smaller and sharper)
      sizes[i] = Math.random() * 1.5 + 0.2;

      // Random phase offsets for sine-wave animation
      offsets[i] = Math.random() * Math.PI * 2;
    }

    return { positions, colors, sizes, offsets };
  }, [count]);

  // Track mouse for parallax
  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Animate particles
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime * 0.3; // Slow motion
    const posArray = meshRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const offset = offsets[i];

      // Gentle sine-wave floating
      posArray[i3] += Math.sin(time + offset) * 0.001;
      posArray[i3 + 1] += Math.cos(time * 0.7 + offset) * 0.0008;
      posArray[i3 + 2] += Math.sin(time * 0.5 + offset * 1.5) * 0.0005;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;

    // Mouse parallax on the entire points group
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      mouseRef.current.x * 0.05,
      0.02
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      -mouseRef.current.y * 0.03,
      0.02
    );
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={count}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          array={sizes}
          count={count}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
        size={1.2}
      />
    </points>
  );
}

function CameraController() {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouseRef.current.x * 0.5,
      0.02
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouseRef.current.y * 0.3,
      0.02
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function CinematicLayer() {
  return (
    <div className={styles.canvasContainer}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <CameraController />
        <Particles count={120} />
      </Canvas>
    </div>
  );
}
