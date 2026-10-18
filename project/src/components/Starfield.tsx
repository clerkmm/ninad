import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/** 5-layer animated starfield with mouse parallax */
export default function Starfield() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06070d, 0.0008);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 5 layers with different configs
    const layers: { points: THREE.Points; speed: number }[] = [];
    const layerConfigs = [
      { count: 400, depth: 600, size: 1.5, color: 0x6a5cff, speed: 0.3 },
      { count: 350, depth: 800, size: 1.2, color: 0x00d4ff, speed: 0.5 },
      { count: 300, depth: 1000, size: 2.0, color: 0xff4ecd, speed: 0.7 },
      { count: 250, depth: 1200, size: 1.0, color: 0xffffff, speed: 0.9 },
      { count: 200, depth: 1500, size: 1.8, color: 0x88aaff, speed: 1.2 },
    ];

    layerConfigs.forEach((config) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(config.count * 3);
      for (let i = 0; i < config.count; i++) {
        positions[i * 3] = Math.random() * 2000 - 1000;
        positions[i * 3 + 1] = Math.random() * 2000 - 1000;
        positions[i * 3 + 2] = Math.random() * config.depth;
      }
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const material = new THREE.PointsMaterial({
        color: config.color,
        size: config.size,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      layers.push({ points, speed: config.speed });
    });

    // Mouse parallax
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 100;
      targetMouse.y = (e.clientY / window.innerHeight - 0.5) * 100;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;
      camera.position.x = mouse.x;
      camera.position.y = -mouse.y;

      layers.forEach(({ points, speed }) => {
        points.position.y -= speed;
        const positions = points.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          if (positions[i + 1] < -1000) {
            positions[i + 1] = 1000;
          }
        }
        points.geometry.attributes.position.needsUpdate = true;
        points.rotation.z += speed * 0.0005;
      });

      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      layers.forEach(({ points }) => {
        points.geometry.dispose();
        (points.material as THREE.Material).dispose();
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
