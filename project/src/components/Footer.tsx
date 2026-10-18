import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo + tagline */}
          <div>
            <div className="font-display text-xl font-bold mb-3">
              <span className="text-white">NINAD</span>
              <span className="text-neon-cyan">.DEV</span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Professional web developer & designer crafting premium digital experiences.
              100% custom work, built to impress.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Home</Link>
              <Link to="/about" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">About</Link>
              <Link to="/resume" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Resume</Link>
              <Link to="/demos" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Demos</Link>
              <Link to="/order" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Order</Link>
              <Link to="/contact" className="text-text-muted hover:text-neon-cyan text-sm transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact + socials */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Get in Touch</h4>
            <a
              href="mailto:ninadgoliwale463@gmail.com"
              className="flex items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors text-sm mb-4"
            >
              <Mail size={16} />
              ninadgoliwale463@gmail.com
            </a>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass glass-hover w-10 h-10 rounded-lg flex items-center justify-center text-text-muted hover:text-neon-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Ninad Goliwale. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
