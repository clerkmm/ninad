import DemoLayout from '@/components/DemoLayout';
import { Sparkles, Clock, Star, Scissors, Phone, MapPin } from 'lucide-react';

export default function SalonDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a1410 0%, #2a2018 50%, #1a1410 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.3) 0%, transparent 50%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative text-center max-w-3xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in" style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
            <Sparkles size={14} style={{ color: '#d4af37' }} />
            <span className="text-sm tracking-wider uppercase" style={{ color: '#d4af37' }}>Premium Salon & Spa</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-fade-up" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>
            Élégance
            <br />
            <span style={{ color: '#d4af37' }}>Salon & Spa</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto" style={{ color: '#c4b599' }}>
            Where beauty meets artistry. Experience luxury hair, skin, and spa treatments
            in an atmosphere of pure elegance.
          </p>
          <button className="px-10 py-4 rounded-lg font-semibold text-lg tracking-wider uppercase transition-all hover:scale-105 shadow-lg" style={{ background: 'linear-gradient(135deg, #d4af37, #b8941f)', color: '#1a1410', boxShadow: '0 10px 40px rgba(212,175,55,0.3)' }}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ background: '#221a12' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>
            Our Signature Services
          </h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: '#d4af37' }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Scissors, title: 'Hair Styling', desc: 'Cuts, color, and treatments by master stylists.', price: 'From $45', features: ['Precision Cuts', 'Color & Highlights', 'Deep Conditioning'] },
              { icon: Sparkles, title: 'Facial & Skincare', desc: 'Rejuvenating facials tailored to your skin.', price: 'From $65', features: ['Custom Facials', 'Anti-Aging', 'Skin Analysis'] },
              { icon: Star, title: 'Spa & Massage', desc: 'Full-body relaxation and therapeutic massage.', price: 'From $80', features: ['Swedish Massage', 'Aromatherapy', 'Hot Stone'] },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-8 text-center transition-all hover:scale-105 cursor-pointer group" style={{ background: '#2a2018', border: '1px solid rgba(212,175,55,0.2)' }}>
                <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}>
                  <s.icon size={28} style={{ color: '#d4af37' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>{s.title}</h3>
                <p className="text-sm mb-4" style={{ color: '#c4b599' }}>{s.desc}</p>
                <div className="space-y-1 mb-4">
                  {s.features.map((f, j) => (
                    <p key={j} className="text-xs" style={{ color: '#a89478' }}>• {f}</p>
                  ))}
                </div>
                <span className="text-xl font-bold block" style={{ color: '#d4af37' }}>{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #1a1410, #221a12)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>The Élégance Experience</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Luxury Interior', 'Expert Stylists', 'Premium Products', 'Relaxing Atmosphere'].map((item, i) => (
              <div key={i} className="rounded-xl p-6 text-center" style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.15)' }}>
                <Star size={24} style={{ color: '#d4af37' }} className="mx-auto mb-3" />
                <p className="text-sm font-medium" style={{ color: '#c4b599' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20 px-6" style={{ background: '#1a1410' }}>
        <div className="max-w-2xl mx-auto text-center">
          <Clock size={36} style={{ color: '#d4af37' }} className="mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>Opening Hours</h2>
          <div className="space-y-3" style={{ color: '#c4b599' }}>
            {[
              { day: 'Monday — Friday', hours: '9:00 AM — 8:00 PM' },
              { day: 'Saturday', hours: '10:00 AM — 6:00 PM' },
              { day: 'Sunday', hours: '11:00 AM — 4:00 PM' },
            ].map((h, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'rgba(212,175,55,0.1)' }}>
                <span className="text-lg">{h.day}</span>
                <span style={{ color: '#d4af37' }}>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6" style={{ background: '#14100c' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <span className="text-2xl font-bold" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>Élégance</span>
            <div className="flex gap-6 text-sm" style={{ color: '#8a7a64' }}>
              <span className="flex items-center gap-2"><Phone size={14} /> (555) 123-4567</span>
              <span className="flex items-center gap-2"><MapPin size={14} /> 123 Luxury Ave</span>
            </div>
          </div>
          <p style={{ color: '#5a4a34' }} className="text-sm text-center">© 2026 Élégance Salon. Crafted by Ninad Goliwale.</p>
        </div>
      </footer>
    </DemoLayout>
  );
}
