import DemoLayout from '@/components/DemoLayout';
import { ArrowRight, Code2, Palette, Briefcase } from 'lucide-react';

export default function PortfolioDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6" style={{ background: '#0a0a0a' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-6xl mx-auto w-full">
          <span className="text-sm uppercase tracking-[0.3em] text-white/40">Portfolio</span>
          <h1 className="text-6xl md:text-9xl font-black uppercase leading-none mt-4 text-white" style={{ letterSpacing: '-0.03em' }}>
            Creative<br/>
            <span style={{ color: '#fbbf24' }}>Work</span>
          </h1>
          <p className="text-xl text-white/50 mt-6 max-w-xl">
            A collection of projects where design meets functionality. Bold ideas, beautifully executed.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6" style={{ background: '#0f0f0f' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-white mb-12">Selected Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Brand Identity', cat: 'Design', color: '#fbbf24' },
              { title: 'Web Application', cat: 'Development', color: '#06b6d4' },
              { title: 'Mobile UI Kit', cat: 'UI/UX', color: '#ec4899' },
              { title: 'Motion Graphics', cat: 'Animation', color: '#84cc16' },
            ].map((p, i) => (
              <div key={i} className="group cursor-pointer relative aspect-video rounded-2xl overflow-hidden" style={{ background: '#1a1a1a' }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity" style={{ background: `radial-gradient(circle, ${p.color}40 0%, transparent 60%)` }}>
                  <Briefcase size={60} style={{ color: p.color }} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs uppercase tracking-wider" style={{ color: p.color }}>{p.cat}</span>
                  <h3 className="text-2xl font-bold text-white mt-1 flex items-center justify-between">
                    {p.title}
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" style={{ color: p.color }} />
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills strip */}
      <section className="py-16 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center">
          {[
            { icon: Code2, label: 'Development' },
            { icon: Palette, label: 'Design' },
            { icon: Briefcase, label: 'Branding' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-full" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <s.icon size={20} style={{ color: '#fbbf24' }} />
              <span className="text-white font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <p className="text-white/40 text-sm uppercase tracking-wider">© 2026 Creative Studio. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
