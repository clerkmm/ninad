import DemoLayout from '@/components/DemoLayout';
import { Home, BedDouble, Bath, Maximize, MapPin, Phone } from 'lucide-react';

export default function RealEstateDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6" style={{ background: 'linear-gradient(135deg, #e0ecff 0%, #f0f7ff 100%)' }}>
        <div className="text-center max-w-3xl relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#0ea5e9' }}>
            <Home size={14} color="white" />
            <span className="text-sm text-white font-medium">Premium Properties</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0c4a6e' }}>
            Find Your <span style={{ color: '#0ea5e9' }}>Dream Home</span>
          </h1>
          <p className="text-lg mb-8" style={{ color: '#475569' }}>
            Browse our curated collection of premium properties.
            From cozy apartments to luxury villas — your perfect home awaits.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            {['For Sale', 'For Rent', 'New Listings'].map((tab, i) => (
              <button key={i} className={`px-6 py-2 rounded-lg font-medium text-sm ${i === 0 ? 'text-white' : ''}`}
                style={i === 0 ? { background: '#0ea5e9' } : { background: 'white', color: '#475569', border: '1px solid #e0ecff' }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#0c4a6e' }}>Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Modern Villa', loc: 'Beverly Hills, CA', price: '$1.2M', beds: 4, baths: 3, sqft: '3,200' },
              { title: 'Downtown Loft', loc: 'New York, NY', price: '$850K', beds: 2, baths: 2, sqft: '1,800' },
              { title: 'Beachfront House', loc: 'Malibu, CA', price: '$2.5M', beds: 5, baths: 4, sqft: '4,500' },
              { title: 'Suburban Family Home', loc: 'Austin, TX', price: '$450K', beds: 3, baths: 2, sqft: '2,100' },
              { title: 'Luxury Penthouse', loc: 'Miami, FL', price: '$1.8M', beds: 3, baths: 3, sqft: '2,800' },
              { title: 'Garden Cottage', loc: 'Portland, OR', price: '$320K', beds: 2, baths: 1, sqft: '1,200' },
            ].map((prop, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border cursor-pointer group" style={{ borderColor: '#e0ecff' }}>
                <div className="aspect-video relative flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e0ecff, #d0e0ff)' }}>
                  <Home size={48} style={{ color: '#0ea5e9' }} className="opacity-30 group-hover:scale-110 transition-transform" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#0ea5e9' }}>
                    {prop.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg" style={{ color: '#0c4a6e' }}>{prop.title}</h3>
                  <p className="flex items-center gap-1 text-sm mb-3" style={{ color: '#64748b' }}>
                    <MapPin size={14} style={{ color: '#0ea5e9' }} /> {prop.loc}
                  </p>
                  <div className="flex items-center gap-4 text-sm" style={{ color: '#475569' }}>
                    <span className="flex items-center gap-1"><BedDouble size={16} style={{ color: '#0ea5e9' }} /> {prop.beds}</span>
                    <span className="flex items-center gap-1"><Bath size={16} style={{ color: '#0ea5e9' }} /> {prop.baths}</span>
                    <span className="flex items-center gap-1"><Maximize size={16} style={{ color: '#0ea5e9' }} /> {prop.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact agent */}
      <section className="py-16 px-6" style={{ background: '#f0f7ff' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#0c4a6e' }}>Ready to Move In?</h2>
          <p className="mb-6" style={{ color: '#475569' }}>Contact our agents today for a viewing.</p>
          <button className="px-8 py-3 rounded-lg font-semibold text-white inline-flex items-center gap-2" style={{ background: '#0ea5e9' }}>
            <Phone size={18} /> (555) 987-6543
          </button>
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background: '#0c4a6e' }}>
        <p className="text-white/70 text-sm">© 2026 PrimeEstate. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
