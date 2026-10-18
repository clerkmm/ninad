import { useRef, type MouseEvent, type ReactNode } from 'react';

interface Demo3DPreviewProps {
  emoji: string;
  accent: string;
  glow: string;
  children?: ReactNode;
}

/**
 * 3D demo preview — emoji floats in layered 3D space with mouse parallax.
 * Background grid + glow orbs shift at different depths for immersive effect.
 */
export default function Demo3DPreview({ emoji, accent, glow, children }: Demo3DPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    el.style.transform = `perspective(800px) rotateY(${x * 20}deg) rotateX(${-y * 20}deg)`;

    const layers = el.querySelectorAll('[data-depth]');
    layers.forEach((layer) => {
      const depth = parseFloat(layer.getAttribute('data-depth') || '0');
      (layer as HTMLElement).style.transform = `translate3d(${x * depth}px, ${y * depth}px, ${Math.abs(depth) * 0.5}px)`;
    });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
    el.querySelectorAll('[data-depth]').forEach((layer) => {
      (layer as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
    });
  };

  return (
    <div
      ref={ref}
      className={`relative h-52 bg-gradient-to-br ${accent} flex items-center justify-center overflow-hidden transition-transform duration-200 ease-out`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Grid floor */}
      <div
        data-depth="-20"
        className="absolute inset-0 opacity-20 transition-transform duration-200"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow orb back */}
      <div
        data-depth="-40"
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-60 transition-transform duration-200"
        style={{ background: glow }}
      />

      {/* Glow orb front */}
      <div
        data-depth="30"
        className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl opacity-40 transition-transform duration-200"
        style={{ background: glow }}
      />

      {/* Emoji at front depth */}
      <div
        data-depth="60"
        className="relative z-10 transition-transform duration-200"
      >
        <span className="text-7xl filter drop-shadow-2xl block" style={{ transform: 'translateZ(40px)' }}>
          {emoji}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 z-20 bg-black/20 backdrop-blur-sm">
        <span className="glass px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 text-white">
          {children}
        </span>
      </div>
    </div>
  );
}
