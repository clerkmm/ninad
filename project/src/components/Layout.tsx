import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  showStarfield?: boolean;
}

export default function Layout({ children, showStarfield = false }: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={showStarfield ? 'relative min-h-screen' : 'relative min-h-screen radial-bg'}>
      <Navbar />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
