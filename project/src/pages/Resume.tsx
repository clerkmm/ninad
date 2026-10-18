import { Mail, Phone, MapPin, Printer, Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';

const experiences = [
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2022 — Present',
    desc: 'Designing and developing custom websites for clients across various industries including salons, restaurants, medical clinics, and e-commerce stores. Delivering 20+ projects with 100% client satisfaction.',
  },
  {
    role: 'Frontend Developer',
    company: 'Web Studio India',
    period: '2021 — 2022',
    desc: 'Built responsive web applications using modern JavaScript frameworks. Collaborated with designers to create pixel-perfect interfaces. Improved site performance by 40% on average.',
  },
  {
    role: 'Web Design Intern',
    company: 'Digital Agency',
    period: '2020 — 2021',
    desc: 'Assisted in designing and developing client websites. Gained hands-on experience with HTML, CSS, JavaScript, and modern design tools.',
  },
];

const education = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Pune',
    period: '2018 — 2021',
    desc: 'Graduated with honors. Focus on web technologies, databases, and software engineering.',
  },
  {
    degree: 'Web Development Certification',
    institution: 'Online Bootcamp',
    period: '2021',
    desc: 'Intensive program covering full-stack development, modern frameworks, and deployment.',
  },
];

const skillBadges = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Node.js',
  'Python', 'Flask', 'Tailwind CSS', 'Three.js', 'Figma', 'Git',
  'Responsive Design', 'SEO', 'UI/UX', 'GraphQL', 'Supabase', 'Vite',
];

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <Layout>
      <div className="section-padding print-area">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <Reveal>
            <div className="glass rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
              <div className="glow-orb w-[300px] h-[300px] bg-neon-purple -top-20 -right-20" />
              <div className="relative">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                  <div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-2">
                      Ninad Goliwale
                    </h1>
                    <p className="text-neon-cyan text-lg mb-4">Web Developer & Designer</p>
                    <div className="space-y-2">
                      <a href="mailto:ninadgoliwale463@gmail.com" className="flex items-center gap-2 text-text-muted text-sm hover:text-neon-cyan transition-colors">
                        <Mail size={16} /> ninadgoliwale463@gmail.com
                      </a>
                      <div className="flex items-center gap-2 text-text-muted text-sm">
                        <MapPin size={16} /> Pune, India
                      </div>
                    </div>
                  </div>
                  <div className="no-print flex gap-3">
                    <TiltButton className="btn-secondary" onClick={handlePrint}>
                      <span className="flex items-center gap-2">
                        <Printer size={16} /> Print
                      </span>
                    </TiltButton>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Experience */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase size={24} className="text-neon-cyan" />
                <h2 className="font-display text-2xl font-bold">Experience</h2>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="glass glass-hover rounded-2xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                        <span className="text-neon-cyan text-sm">{exp.period}</span>
                      </div>
                      <p className="text-neon-purple text-sm mb-3">{exp.company}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={24} className="text-neon-cyan" />
                <h2 className="font-display text-2xl font-bold">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="glass glass-hover rounded-2xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="font-display text-lg font-bold">{edu.degree}</h3>
                        <span className="text-neon-cyan text-sm">{edu.period}</span>
                      </div>
                      <p className="text-neon-purple text-sm mb-3">{edu.institution}</p>
                      <p className="text-text-muted text-sm leading-relaxed">{edu.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Skills as pill badges */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Award size={24} className="text-neon-cyan" />
                <h2 className="font-display text-2xl font-bold">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillBadges.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full glass glass-hover text-sm font-medium"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Summary footer */}
          <Reveal>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-text-muted text-sm">
                Full professional resume — Ninad Goliwale, Web Developer & Designer.
                Available for freelance and full-time opportunities.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
