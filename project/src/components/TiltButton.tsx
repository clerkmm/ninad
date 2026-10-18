import { type ReactNode, useRef, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface TiltButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  to?: string;
  type?: 'button' | 'submit';
}

/** Button/link with 3D tilt effect tracking mouse position. Uses Link for navigation (no nested anchors). */
export default function TiltButton({ children, className = '', onClick, to, type = 'button' }: TiltButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;
    el.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateZ(0) scale(1)';
  };

  const combined = `tilt ${className}`;

  if (to) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        to={to}
        className={combined}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      className={combined}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}
