import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Resume', path: '/resume' },
  { name: 'Demos', path: '/demos' },
  { name: 'Order', path: '/order' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06070d]/85 backdrop-blur-2xl border-b border-white/[0.06] py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2 shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center font-display text-sm font-bold text-white">
              N
            </div>
          </div>
          <span className="font-display text-lg font-bold tracking-tight hidden sm:block">
            <span className="text-white">NINAD</span>
            <span className="text-neon-cyan">.DEV</span>
          </span>
        </Link>

        {/* Nav pill — always visible on desktop, premium 3D pill */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-2xl glass relative">
          {/* sliding highlight */}
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  active
                    ? 'text-[#06070d]'
                    : 'text-text-muted hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple -z-10" />
                )}
                {active && (
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple blur-md opacity-50 -z-10" />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side — mobile toggle only */}
        <button
          className="md:hidden text-white p-2 glass rounded-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#06070d]/95 backdrop-blur-2xl border-b border-white/5 animate-fade-in">
          <div className="flex flex-col py-4 px-6 gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-4 rounded-xl text-base font-medium transition-all ${
                    active
                      ? 'text-[#06070d] bg-gradient-to-r from-neon-cyan to-neon-purple'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
