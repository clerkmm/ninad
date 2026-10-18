import DemoLayout from '@/components/DemoLayout';
import { UtensilsCrossed, Wine, Star, MapPin, Clock, Phone } from 'lucide-react';

export default function RestaurantDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0f0a 50%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.2) 0%, transparent 40%)' }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="relative text-center max-w-3xl z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in" style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)' }}>
            <Wine size={14} style={{ color: '#d4af37' }} />
            <span className="text-sm tracking-wider uppercase" style={{ color: '#d4af37' }}>Fine Dining Est. 2018</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-bold mb-4 animate-fade-up" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif', letterSpacing: '0.05em' }}>
            SAVEUR
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12" style={{ background: '#d4af37' }} />
            <Star size={16} style={{ color: '#d4af37' }} fill="#d4af37" />
            <div className="h-px w-12" style={{ background: '#d4af37' }} />
          </div>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto" style={{ color: '#8a7a64' }}>
            An intimate dining experience where every dish tells a story.
            Modern cuisine, timeless atmosphere.
          </p>
          <button className="px-10 py-4 rounded-sm font-semibold tracking-wider uppercase text-sm transition-all hover:scale-105" style={{ background: '#d4af37', color: '#0a0a0a', boxShadow: '0 10px 40px rgba(212,175,55,0.3)' }}>
            Reserve a Table
          </button>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="py-20 px-6" style={{ background: '#0f0a06' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>Signature Dishes</h2>
          <div className="w-20 h-1 mx-auto mb-12 rounded-full" style={{ background: '#d4af37' }} />
          <div className="space-y-6">
            {[
              { name: 'Pan-Seared Salmon', desc: 'Atlantic salmon with citrus glaze, seasonal vegetables, and herb oil', price: '$32' },
              { name: 'Truffle Risotto', desc: 'Arborio rice with black truffle, aged parmesan, and fresh herbs', price: '$28' },
              { name: 'Wagyu Beef Steak', desc: 'Grade A5 Wagyu with red wine reduction and roasted potatoes', price: '$55' },
              { name: 'Lava Cake', desc: 'Dark chocolate molten cake with vanilla bean ice cream', price: '$14' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-6 group cursor-pointer transition-all hover:pl-4" style={{ borderColor: 'rgba(212,175,55,0.15)' }}>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>{item.name}</h3>
                  <p className="text-sm" style={{ color: '#8a7a64' }}>{item.desc}</p>
                </div>
                <span className="text-2xl font-bold ml-4" style={{ color: '#d4af37' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section className="py-20 px-6" style={{ background: '#1a0f0a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <UtensilsCrossed size={36} style={{ color: '#d4af37' }} className="mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: '#f5e6c8', fontFamily: 'Georgia, serif' }}>An Unforgettable Atmosphere</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: '#8a7a64' }}>
            Dim lighting, curated playlists, and an intimate setting designed for
            memorable evenings. Perfect for date nights, celebrations, and quiet dinners.
          </p>
          <div className="flex items-center justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} style={{ color: '#d4af37' }} fill="#d4af37" />)}
          </div>
          <p className="text-sm mt-2" style={{ color: '#8a7a64' }}>Rated 5.0 by 500+ guests</p>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 px-6" style={{ background: '#0f0a06' }}>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <Clock size={28} style={{ color: '#d4af37' }} className="mx-auto mb-4" />
              <h3 className="font-bold mb-3" style={{ color: '#f5e6c8' }}>Dinner Hours</h3>
              <p className="text-sm" style={{ color: '#8a7a64' }}>Tue — Sun: 5PM — 11PM</p>
              <p className="text-sm" style={{ color: '#8a7a64' }}>Monday: Closed</p>
            </div>
            <div className="text-center">
              <MapPin size={28} style={{ color: '#d4af37' }} className="mx-auto mb-4" />
              <h3 className="font-bold mb-3" style={{ color: '#f5e6c8' }}>Find Us</h3>
              <p className="text-sm" style={{ color: '#8a7a64' }}>123 Gourmet Street</p>
              <p className="text-sm" style={{ color: '#8a7a64' }}>Downtown, City</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="flex items-center justify-center gap-2 mb-2" style={{ color: '#8a7a64' }}>
            <Phone size={16} style={{ color: '#d4af37' }} /> (555) 234-5678
          </p>
          <p className="text-sm" style={{ color: '#5a4a34' }}>© 2026 SAVEUR. Crafted by Ninad Goliwale.</p>
        </div>
      </footer>
    </DemoLayout>
  );
}
