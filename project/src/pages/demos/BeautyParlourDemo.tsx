import DemoLayout from '@/components/DemoLayout';
import { Flower2, Heart, Sparkles, Star } from 'lucide-react';

export default function BeautyParlourDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff0f5 0%, #ffe0ec 50%, #ffd1e0 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 70% 20%, #ff69b4 0%, transparent 40%)' }} />
        <div className="relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#ff69b4' }}>
            <Flower2 size={14} color="white" />
            <span className="text-sm text-white font-medium">Beauty Studio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#8b3a62', fontFamily: 'Georgia, serif' }}>
            Bloom <span style={{ color: '#ff69b4' }}>Beauty</span>
          </h1>
          <p className="text-lg mb-8" style={{ color: '#a64d7a' }}>
            Your beauty, our passion. From flawless makeup to stunning nails,
            we make you feel radiant inside and out.
          </p>
          <button className="px-8 py-3 rounded-full font-semibold text-white" style={{ background: '#ff69b4' }}>
            Book Your Glow Up
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: '#fff5f8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#8b3a62', fontFamily: 'Georgia, serif' }}>Our Beauty Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sparkles, title: 'Makeup', desc: 'Bridal & party makeup' },
              { icon: Heart, title: 'Skincare', desc: 'Facials & treatments' },
              { icon: Flower2, title: 'Nail Art', desc: 'Manicure & pedicure' },
              { icon: Star, title: 'Hair Spa', desc: 'Treatments & styling' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-6 text-center" style={{ background: 'white', border: '1px solid #ffe0ec' }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: '#fff0f5' }}>
                  <s.icon size={24} style={{ color: '#ff69b4' }} />
                </div>
                <h3 className="font-bold mb-1" style={{ color: '#8b3a62' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#a64d7a' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #ffe0ec 0%, #fff0f5 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#8b3a62', fontFamily: 'Georgia, serif' }}>Why Choose Bloom?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Certified Beauty Experts', 'Premium Products', 'Relaxing Atmosphere'].map((item, i) => (
              <div key={i} className="rounded-2xl p-8" style={{ background: 'white' }}>
                <Flower2 size={28} style={{ color: '#ff69b4' }} className="mx-auto mb-3" />
                <p className="font-medium" style={{ color: '#8b3a62' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background: '#8b3a62' }}>
        <p className="text-white/80 text-sm">© 2026 Bloom Beauty. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
