import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Code2, Rocket, Palette, Zap, CheckCircle2, Box, Layers, Globe } from 'lucide-react';
import Starfield from '@/components/Starfield';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';
import TiltCard from '@/components/TiltCard';

const heroPhrases = [
  'Professional Web Developer',
  'Professional Web Designer',
  'Freelance Web Architect',
  'Creative Digital Craftsman',
];

function useTypingEffect(phrases: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: number;

    if (!isDeleting && text === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = window.setTimeout(() => {
        setText((prev) =>
          isDeleting
            ? current.substring(0, prev.length - 1)
            : current.substring(0, prev.length + 1)
        );
      }, isDeleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, speed, pause]);

  return text;
}

const stats = [
  { value: '8+', label: 'Demo Designs' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '100%', label: 'Custom Work' },
];

const introCards = [
  {
    icon: Palette,
    title: 'Design',
    desc: 'Every pixel placed with intention. Modern, bold, and tailored to your brand identity.',
    color: 'from-neon-purple to-indigo-500',
    glow: 'rgba(106,92,255,0.4)',
  },
  {
    icon: Code2,
    title: 'Development',
    desc: 'Clean, performant code built on the latest technologies. Fast, responsive, and SEO-ready.',
    color: 'from-neon-cyan to-blue-500',
    glow: 'rgba(0,212,255,0.4)',
  },
  {
    icon: Rocket,
    title: 'Delivery',
    desc: 'On-time launches with ongoing support. Your project goes live, stress-free.',
    color: 'from-neon-pink to-rose-500',
    glow: 'rgba(255,78,205,0.4)',
  },
];

const features = [
  'Pixel-perfect responsive layouts',
  'SEO-optimized & lightning fast',
  'Modern animations & interactions',
  'Cross-browser compatibility',
  'Clean, maintainable codebase',
  'Post-launch support included',
];

const showcaseItems = [
  { icon: Box, label: '3D Interactive' },
  { icon: Layers, label: 'Multi-Page' },
  { icon: Globe, label: 'SEO Ready' },
  { icon: Zap, label: 'Lightning Fast' },
];

export default function Home() {
  const typedText = useTypingEffect(heroPhrases);

  return (
    <>
      <Starfield />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 z-10">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="glow-orb w-[500px] h-[500px] bg-neon-purple -top-20 -left-20 animate-float" />
        <div className="glow-orb w-[400px] h-[400px] bg-neon-cyan bottom-0 right-0" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
            </span>
            <span className="text-sm text-text-muted">Available for new projects</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-up">
            I am <span className="gradient-text">Ninad Goliwale</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-muted mb-2 h-8">
            <span className="typing-cursor gradient-text-static">{typedText}</span>
          </p>
          <p className="text-base text-text-muted/70 mb-10 max-w-xl mx-auto">
            Building premium websites that turn visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <TiltButton to="/order" className="btn-primary">
              <span className="flex items-center gap-2">
                Start a Project <ArrowRight size={18} />
              </span>
            </TiltButton>
            <TiltButton to="/demos" className="btn-secondary">
              <span className="flex items-center gap-2">
                View Demo Sites
              </span>
            </TiltButton>
          </div>

          {/* Showcase badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {showcaseItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-text-muted">
                <item.icon size={14} className="text-neon-cyan" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — 3D tilt cards */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 150}>
              <TiltCard className="glass glass-hover rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10" />
                <div className="relative">
                  <div className="font-display text-4xl md:text-5xl font-bold gradient-text-static mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-sm md:text-base">{stat.label}</div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Intro cards — 3D tilt */}
      <section className="relative z-10 section-padding">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                From Concept to <span className="gradient-text">Launch</span>
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                A complete process covering every stage of your website's journey.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {introCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 200}>
                <TiltCard className="glass glass-hover rounded-2xl p-8 h-full group relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                    style={{ background: card.glow }} />
                  <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <card.icon size={28} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">{card.title}</h3>
                    <p className="text-text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose me */}
      <section className="relative z-10 section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Why Choose <span className="gradient-text-static">Me?</span>
                </h2>
                <p className="text-text-muted text-lg mb-8 leading-relaxed">
                  I don't just build websites — I craft digital experiences that
                  represent your brand with excellence. Every project is built from
                  scratch, no templates, no shortcuts.
                </p>
                <TiltButton to="/about" className="btn-primary">
                  <span className="flex items-center gap-2">
                    Learn More <ArrowRight size={18} />
                  </span>
                </TiltButton>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, i) => (
                  <TiltCard key={i} className="flex items-center gap-3 glass rounded-xl p-4" glare={false}>
                    <CheckCircle2 size={20} className="text-neon-cyan shrink-0" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </TiltCard>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <TiltCard className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="glow-orb w-[300px] h-[300px] bg-neon-purple -top-10 -right-10" />
              <div className="glow-orb w-[200px] h-[200px] bg-neon-cyan -bottom-10 -left-10" />
              <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                <Zap size={40} className="text-neon-cyan mx-auto mb-6" />
                <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  Ready to Build Something <span className="gradient-text">Extraordinary?</span>
                </h2>
                <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
                  Let's turn your vision into a stunning website that sets you apart
                  from the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <TiltButton to="/order" className="btn-primary">
                    <span className="flex items-center gap-2">
                      Start a Project <ArrowRight size={18} />
                    </span>
                  </TiltButton>
                  <TiltButton to="/contact" className="btn-secondary">
                    <span className="flex items-center gap-2">
                      Get in Touch
                    </span>
                  </TiltButton>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
