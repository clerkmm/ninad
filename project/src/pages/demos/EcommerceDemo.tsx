import DemoLayout from '@/components/DemoLayout';
import { ShoppingBag, Search, Heart, Star, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

export default function EcommerceDemo() {
  return (
    <DemoLayout>
      {/* Hero / banner */}
      <section className="relative py-20 px-6" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2f7 100%)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: '#059669' }}>New Collection</span>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6" style={{ color: '#0f172a' }}>
              Shop the <span style={{ color: '#059669' }}>Latest</span> Trends
            </h1>
            <p className="text-lg mb-8" style={{ color: '#64748b' }}>
              Discover curated products at unbeatable prices. Free shipping on orders over $50.
            </p>
            <button className="px-8 py-3 rounded-lg font-semibold text-white" style={{ background: '#059669' }}>
              Shop Now
            </button>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-72 h-72 rounded-3xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' }}>
              <ShoppingBag size={120} style={{ color: '#059669' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <section className="py-6 px-6 bg-white border-b" style={{ borderColor: '#eef2f7' }}>
        <div className="max-w-4xl mx-auto relative">
          <Search size={20} style={{ color: '#94a3b8' }} className="absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border outline-none"
            style={{ borderColor: '#e2e8f0', background: '#f8fafc', color: '#0f172a' }}
          />
        </div>
      </section>

      {/* Product grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#0f172a' }}>Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Wireless Headphones', price: '$89', cat: 'Electronics' },
              { name: 'Smart Watch', price: '$149', cat: 'Electronics' },
              { name: 'Sneakers', price: '$69', cat: 'Fashion' },
              { name: 'Backpack', price: '$45', cat: 'Accessories' },
              { name: 'Coffee Maker', price: '$99', cat: 'Home' },
              { name: 'Sunglasses', price: '$35', cat: 'Fashion' },
              { name: 'Desk Lamp', price: '$55', cat: 'Home' },
              { name: 'Phone Case', price: '$19', cat: 'Accessories' },
            ].map((product, i) => (
              <div key={i} className="rounded-xl overflow-hidden border group cursor-pointer" style={{ borderColor: '#eef2f7' }}>
                <div className="aspect-square flex items-center justify-center relative" style={{ background: '#f8fafc' }}>
                  <ShoppingBag size={40} style={{ color: '#059669' }} className="opacity-30 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Heart size={16} style={{ color: '#94a3b8' }} />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs" style={{ color: '#94a3b8' }}>{product.cat}</span>
                  <h3 className="font-semibold text-sm mt-1" style={{ color: '#0f172a' }}>{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold" style={{ color: '#059669' }}>{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star size={12} style={{ color: '#fbbf24' }} fill="#fbbf24" />
                      <span className="text-xs" style={{ color: '#94a3b8' }}>4.{i + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 px-6" style={{ background: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '30-day return policy' },
            { icon: ShieldCheck, title: 'Secure Payment', desc: 'Encrypted checkout' },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <t.icon size={28} style={{ color: '#059669' }} className="mb-3" />
              <h3 className="font-bold text-sm" style={{ color: '#0f172a' }}>{t.title}</h3>
              <p className="text-xs" style={{ color: '#64748b' }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background: '#0f172a' }}>
        <p className="text-white/60 text-sm">© 2026 ShopEasy. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
