import DemoLayout from '@/components/DemoLayout';
import { Dumbbell, Flame, Zap, Users, Clock, Trophy, ArrowRight } from 'lucide-react';

export default function GymDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(220,38,38,0.3) 0%, transparent 40%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(220,38,38,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative text-center max-w-3xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded mb-6 animate-fade-in" style={{ background: '#dc2626' }}>
            <Flame size={14} color="white" />
            <span className="text-sm text-white font-bold uppercase tracking-wider">Push Your Limits</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-4 text-white animate-fade-up" style={{ letterSpacing: '-0.03em' }}>
            IRON<span style={{ color: '#dc2626' }}>FORGE</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 uppercase tracking-[0.2em] text-white/60">
            Train Hard. Train Smart. Win.
          </p>
          <button className="px-10 py-4 font-bold uppercase tracking-wider text-white text-lg transition-all hover:scale-105" style={{ background: '#dc2626', boxShadow: '0 10px 40px rgba(220,38,38,0.4)' }}>
            Join Now — Free Trial
          </button>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 px-6" style={{ background: '#dc2626' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center">
          {[
            { value: '500+', label: 'Active Members' },
            { value: '30+', label: 'Classes Weekly' },
            { value: '15', label: 'Expert Trainers' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-black text-white">{s.value}</div>
              <div className="text-white/70 text-xs md:text-sm uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6" style={{ background: '#0f0a0a' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-center mb-4 text-white">Our Programs</h2>
          <div className="w-20 h-1 mx-auto mb-12" style={{ background: '#dc2626' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Dumbbell, title: 'Strength Training', desc: 'Build muscle and power with expert coaching and progressive overload.', tag: 'All Levels' },
              { icon: Zap, title: 'HIIT Classes', desc: 'High-intensity intervals for maximum calorie burn in minimum time.', tag: 'Intermediate' },
              { icon: Trophy, title: 'CrossFit', desc: 'Compete with yourself. Conquer every WOD with our community.', tag: 'Advanced' },
            ].map((p, i) => (
              <div key={i} className="p-8 transition-all hover:scale-105 cursor-pointer group" style={{ background: '#1a0a0a', border: '2px solid #dc2626' }}>
                <div className="flex items-center justify-between mb-4">
                  <p.icon size={40} style={{ color: '#dc2626' }} className="group-hover:scale-110 transition-transform" />
                  <span className="text-xs uppercase tracking-wider px-2 py-1 rounded" style={{ background: 'rgba(220,38,38,0.2)', color: '#dc2626' }}>{p.tag}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase text-white mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm mb-4">{p.desc}</p>
                <span className="flex items-center gap-1 text-sm font-bold uppercase" style={{ color: '#dc2626' }}>
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule strip */}
      <section className="py-16 px-6" style={{ background: '#1a0a0a' }}>
        <div className="max-w-3xl mx-auto text-center">
          <Clock size={36} style={{ color: '#dc2626' }} className="mx-auto mb-4" />
          <h2 className="text-3xl font-black uppercase text-white mb-4">Open 24/7</h2>
          <p className="text-white/60 text-lg mb-8">Your goals don't sleep. Neither do we.</p>
          <div className="flex items-center justify-center gap-3 text-white/80">
            <Users size={20} style={{ color: '#dc2626' }} />
            <span>Free trial session for all new members</span>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 text-center" style={{ background: '#0a0a0a', borderTop: '3px solid #dc2626' }}>
        <p className="text-white/50 text-sm uppercase tracking-wider">© 2026 IRONFORGE. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
