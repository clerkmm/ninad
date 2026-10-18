import { ArrowRight, Code2, Palette, Server, Smartphone, Search, Zap, Award, Users, Clock, Target, Heart } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';
import TiltCard from '@/components/TiltCard';

const skills = [
  { icon: Code2, name: 'HTML5 / CSS3', level: 95 },
  { icon: Palette, name: 'UI/UX Design', level: 90 },
  { icon: Server, name: 'Backend & APIs', level: 85 },
  { icon: Smartphone, name: 'Responsive Design', level: 95 },
  { icon: Search, name: 'SEO Optimization', level: 88 },
  { icon: Zap, name: 'Performance', level: 92 },
];

const whyChoose = [
  { icon: Award, title: 'Quality First', desc: 'Every project meets the highest standards of design and functionality.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Your project launches when promised, no excuses, no delays.' },
  { icon: Target, title: 'Tailored Solutions', desc: 'No templates. Every website is built from scratch for your brand.' },
  { icon: Heart, title: 'Passion-Driven', desc: 'I love what I do, and it shows in every pixel I place.' },
  { icon: Users, title: 'Client-Focused', desc: 'Your vision leads the way. I build what you need, not what I want.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed and performance from the ground up.' },
];

export default function About() {
  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Get to know the developer behind the code.
              </p>
            </div>
          </Reveal>

          {/* Bio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <Reveal>
              <TiltCard className="glass rounded-3xl p-8 relative overflow-hidden">
                <div className="glow-orb w-[200px] h-[200px] bg-neon-purple -top-10 -right-10" />
                <div className="relative" style={{ transform: 'translateZ(40px)' }}>
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center mb-6 text-5xl font-bold font-display shadow-lg">
                    NG
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-2">Ninad Goliwale</h2>
                  <p className="text-neon-cyan text-sm mb-4">Web Developer & Designer</p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    Based in India, working with clients worldwide. Available for
                    freelance projects and long-term collaborations.
                  </p>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={200}>
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">My Story</h3>
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    I'm Ninad Goliwale, a passionate web developer and designer with
                    a keen eye for detail and a love for clean, functional design.
                  </p>
                  <p>
                    Over the past few years, I've delivered 20+ projects ranging from
                    elegant salon websites to robust e-commerce platforms. My approach
                    blends creativity with technical precision — ensuring every site
                    looks stunning and performs flawlessly.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new design trends,
                    experimenting with 3D web technologies, and pushing the boundaries
                    of what's possible in a browser.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Skills */}
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                My <span className="gradient-text">Skills</span>
              </h2>
              <p className="text-text-muted">Technologies and tools I work with daily.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 100}>
                <TiltCard className="glass glass-hover rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-cyan">
                      <skill.icon size={24} />
                    </div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-text-muted text-xs mt-2 block">{skill.level}% proficiency</span>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* Why choose me */}
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Why <span className="gradient-text">Choose Me?</span>
              </h2>
              <p className="text-text-muted">Reasons clients trust me with their projects.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <TiltCard className="glass glass-hover rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-pink mb-4">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div className="glass rounded-3xl p-10 text-center relative overflow-hidden">
              <div className="glow-orb w-[200px] h-[200px] bg-neon-purple -top-10 -right-10" />
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 relative">
                Let's Work Together
              </h3>
              <p className="text-text-muted mb-6 max-w-xl mx-auto relative">
                Have a project in mind? I'd love to hear about it.
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
