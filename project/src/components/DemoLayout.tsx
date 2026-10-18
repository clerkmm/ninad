import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface DemoLayoutProps {
  children: ReactNode;
  themeColor?: string;
}

/** Wrapper for demo showcase pages — provides back link and standalone feel */
export default function DemoLayout({ children, themeColor = '#6a5cff' }: DemoLayoutProps) {
  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50 no-print">
        <Link
          to="/demos"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-white hover:text-neon-cyan transition-colors"
        >
          <ArrowLeft size={16} /> Back to Demos
        </Link>
      </div>
      {children}
    </div>
  );
}
