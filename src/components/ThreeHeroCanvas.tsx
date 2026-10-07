'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Initial dimensions
    let width = container.clientWidth || 700;
    let height = container.clientHeight || 700;

    // 2. Scene & Camera Setup
    const scene = new THREE.Scene();

    // Field of view 45deg, distance 15.0 gives grand prominent size with safe breathing room
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 15.0;

    // 3. High-Performance WebGL Renderer with True Alpha & Anti-aliasing
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Pure transparent background

    // Clear any previous canvas element
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Central 3D Cybernetic Globe (Increased size, bold, vibrant)
    const sphereRadius = 2.6;

    // Outer Network Polyhedron Cage (Vibrant Electric Royal Blue)
    const sphereGeo = new THREE.IcosahedronGeometry(sphereRadius, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x1d4ed8, // Vibrant High-Contrast Blue
      wireframe: true,
      transparent: true,
      opacity: 0.88,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphereMesh);

    // Glowing Node Points at every vertex of the outer cage
    const sphereNodesGeo = new THREE.IcosahedronGeometry(sphereRadius, 2);
    const sphereNodesMat = new THREE.PointsMaterial({
      color: 0x0284c7, // Vivid Sky/Cyan Node Dots
      size: 0.24,
      transparent: true,
      opacity: 0.95,
    });
    const sphereNodes = new THREE.Points(sphereNodesGeo, sphereNodesMat);
    scene.add(sphereNodes);

    // Inner Geometric Core (Dodecahedron in Bright Indigo / Violet)
    const coreGeo = new THREE.DodecahedronGeometry(sphereRadius * 0.62, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1, // Indigo
      wireframe: true,
      transparent: true,
      opacity: 0.78,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Deep Inner Crystal Core (Octahedron with Cyber Glow)
    const crystalGeo = new THREE.OctahedronGeometry(sphereRadius * 0.35);
    const crystalMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Vivid Cyan
      wireframe: false,
      transparent: true,
      opacity: 0.45,
    });
    const crystalMesh = new THREE.Mesh(crystalGeo, crystalMat);
    scene.add(crystalMesh);

    // 5. Triple Concentric Planetary & Quantum Rings
    // Ring 1 (Vibrant Cyan)
    const ring1Geo = new THREE.TorusGeometry(3.6, 0.045, 16, 120);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      transparent: true,
      opacity: 0.85,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3.2;
    scene.add(ring1);

    // Ring 2 (Neon Purple/Violet)
    const ring2Geo = new THREE.TorusGeometry(4.2, 0.035, 16, 120);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.75,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 3.8;
    ring2.rotation.x = -Math.PI / 5;
    scene.add(ring2);

    // Ring 3 (Electric Blue Orbital)
    const ring3Geo = new THREE.TorusGeometry(4.8, 0.025, 16, 120);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      transparent: true,
      opacity: 0.65,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.x = -Math.PI / 2.5;
    ring3.rotation.y = Math.PI / 6;
    scene.add(ring3);

    // 6. Constellation Network Particles (Multi-color Depth Swarm)
    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x1d4ed8); // Royal Blue
    const c2 = new THREE.Color(0x0284c7); // Sky / Cyan
    const c3 = new THREE.Color(0x7c3aed); // Violet
    const c4 = new THREE.Color(0x059669); // Emerald Green

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      // Strictly bounded radius
      const r = 2.7 + Math.random() * 2.2;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const roll = Math.random();
      const chosenColor = roll > 0.65 ? c2 : roll > 0.35 ? c1 : roll > 0.15 ? c3 : c4;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.19,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Interactive Cursor & Touch Physics (Fluid Lerp Inertia)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 2.0;
      mouseY = y * 2.0;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width - 0.5;
        const y = (touch.clientY - rect.top) / rect.height - 0.5;
        mouseX = x * 2.0;
        mouseY = y * 2.0;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    // 8. Robust ResizeObserver (Dynamically adapts to any screen or layout changes)
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        if (cr.width > 0 && cr.height > 0) {
          camera.aspect = cr.width / cr.height;
          camera.updateProjectionMatrix();
          renderer.setSize(cr.width, cr.height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
      }
    });
    resizeObserver.observe(container);

    // 9. Viewport Intersection Observer (0% CPU when scrolled away)
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // 10. 60 FPS Render Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Fluid inertia damping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Outer Cage & Nodes
      sphereMesh.rotation.y = elapsedTime * 0.15 + targetX * 0.4;
      sphereMesh.rotation.x = elapsedTime * 0.09 + targetY * 0.4;
      sphereNodes.rotation.y = sphereMesh.rotation.y;
      sphereNodes.rotation.x = sphereMesh.rotation.x;

      // Inner Core (Counter-rotation)
      coreMesh.rotation.y = -elapsedTime * 0.22 + targetX * 0.3;
      coreMesh.rotation.x = -elapsedTime * 0.14 + targetY * 0.3;

      // Crystal (Pulsing tumble)
      crystalMesh.rotation.y = elapsedTime * 0.35;
      crystalMesh.rotation.z = elapsedTime * 0.25;

      // Concentric Rings
      ring1.rotation.z = elapsedTime * 0.28;
      ring1.rotation.x = Math.PI / 3.2 + targetY * 0.2;

      ring2.rotation.z = -elapsedTime * 0.22;
      ring2.rotation.y = Math.PI / 3.8 + targetX * 0.2;

      ring3.rotation.z = elapsedTime * 0.16;

      // Constellation field
      particles.rotation.y = elapsedTime * 0.07 + targetX * 0.15;
      particles.rotation.x = elapsedTime * 0.04 + targetY * 0.15;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup & Memory Disposal
    return () => {
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      sphereGeo.dispose();
      sphereMat.dispose();
      sphereNodesGeo.dispose();
      sphereNodesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      crystalGeo.dispose();
      crystalMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center relative select-none"
      aria-label="Interactive 3D Technology Globe"
    />
  );
}
