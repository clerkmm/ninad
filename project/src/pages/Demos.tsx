import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';
import Demo3DPreview from '@/components/Demo3DPreview';

const demos = [
  {
    emoji: '💇',
    title: 'Luxury Salon & Spa',
    desc: 'Elegant salon website with gold accents, booking showcase, and premium service menus.',
    path: '/demos/salon',
    accent: 'from-amber-500 to-yellow-700',
    glow: 'rgba(212,175,55,0.4)',
    tag: 'Beauty',
  },
  {
    emoji: '⚕️',
    title: 'Medical Clinic',
    desc: 'Trust-focused clinic site with clean blue design, doctor profiles, and appointment info.',
    path: '/demos/medical',
    accent: 'from-blue-500 to-cyan-700',
    glow: 'rgba(59,130,246,0.4)',
    tag: 'Healthcare',
  },
  {
    emoji: '💅',
    title: 'Beauty Parlour',
    desc: 'Soft, floral-themed beauty studio with pink palette and treatment showcase.',
    path: '/demos/beautyparlour',
    accent: 'from-pink-400 to-rose-600',
    glow: 'rgba(255,105,180,0.4)',
    tag: 'Beauty',
  },
  {
    emoji: '🍽️',
    title: 'Fine Dining Restaurant',
    desc: 'Moody, atmospheric restaurant site with dark theme, menu highlights, and ambiance.',
    path: '/demos/restaurant',
    accent: 'from-orange-600 to-red-800',
    glow: 'rgba(212,127,36,0.4)',
    tag: 'Food',
  },
  {
    emoji: '💪',
    title: 'Fitness Gym',
    desc: 'Bold, energetic gym site with red/black theme, class schedules, and trainer profiles.',
    path: '/demos/gym',
    accent: 'from-red-500 to-red-800',
    glow: 'rgba(220,38,38,0.4)',
    tag: 'Fitness',
  },
  {
    emoji: '🛒',
    title: 'E-Commerce Store',
    desc: 'Clean online shop with product grid, featured items, and shopping experience.',
    path: '/demos/ecommerce',
    accent: 'from-emerald-500 to-teal-700',
    glow: 'rgba(5,150,105,0.4)',
    tag: 'Retail',
  },
  {
    emoji: '🎨',
    title: 'Creative Portfolio',
    desc: 'Artistic portfolio with bold typography, project showcases, and creative flair.',
    path: '/demos/portfolio',
    accent: 'from-violet-500 to-purple-700',
    glow: 'rgba(139,92,246,0.4)',
    tag: 'Creative',
  },
  {
    emoji: '🏠',
    title: 'Real Estate Listings',
    desc: 'Property listing site with grid of homes, blue/white theme, and detailed cards.',
    path: '/demos/realestate',
    accent: 'from-sky-500 to-blue-700',
    glow: 'rgba(14,165,233,0.4)',
    tag: 'Property',
  },
];

export default function Demos() {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Demo <span className="gradient-text">Showcase</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Eight complete website designs. Hover to preview in 3D — click any card to explore the full demo.
              </p>
            </div>
          </Reveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demos.map((demo, i) => (
              <Reveal key={demo.title} delay={i * 80}>
                <Link to={demo.path} className="block group">
                  <div className="glass glass-hover rounded-2xl overflow-hidden h-full">
                    {/* 3D Preview */}
                    <Demo3DPreview
                      emoji={demo.emoji}
                      accent={demo.accent}
                      glow={demo.glow}
                    >
                      <Eye size={16} /> View Demo
                    </Demo3DPreview>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-display text-lg font-bold">{demo.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full glass text-text-muted">
                          {demo.tag}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed mb-4">
                        {demo.desc}
                      </p>
                      <span className="flex items-center gap-1 text-neon-cyan text-sm font-medium group-hover:gap-2 transition-all">
                        Explore <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="glass rounded-3xl p-10 text-center mt-16 relative overflow-hidden">
              <div className="glow-orb w-[200px] h-[200px] bg-neon-cyan -top-10 -right-10" />
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 relative">
                Like What You See?
              </h3>
              <p className="text-text-muted mb-6 max-w-xl mx-auto relative">
                Order your own custom website today. Choose any style above or request something unique.
              </p>
              <TiltButton to="/order" className="btn-primary relative">
                <span className="flex items-center gap-2">
                  Start a Project <ArrowRight size={18} />
                </span>
              </TiltButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
