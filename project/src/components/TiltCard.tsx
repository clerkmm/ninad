import { type ReactNode, useRef, type MouseEvent } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
}

/** 3D tilt card — tilts toward mouse with optional glare overlay. */
export default function TiltCard({ children, className = '', glare = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px) scale(1.02)`;
    if (glareRef.current) {
      glareRef.current.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.12), transparent 50%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
    if (glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          style={{ zIndex: 1 }}
        />
      )}
    </div>
  );
}
