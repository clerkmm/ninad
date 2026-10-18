import DemoLayout from '@/components/DemoLayout';
import { Heart, Stethoscope, Clock, Phone, Shield, UserRound } from 'lucide-react';

export default function MedicalDemo() {
  return (
    <DemoLayout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6" style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #e0ecff 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 50%)' }} />
        <div className="relative text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: '#3b82f6' }}>
            <Heart size={14} color="white" />
            <span className="text-sm text-white font-medium">Trusted Medical Care</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#1e3a5f' }}>
            MediCare <span style={{ color: '#3b82f6' }}>Clinic</span>
          </h1>
          <p className="text-lg mb-8" style={{ color: '#5a6a7e' }}>
            Compassionate, comprehensive healthcare for the whole family.
            Your health is our highest priority.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold text-white" style={{ background: '#3b82f6' }}>
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1e3a5f' }}>Our Medical Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Stethoscope, title: 'General Consultation', desc: 'Comprehensive health check-ups and diagnoses.' },
              { icon: Shield, title: 'Preventive Care', desc: 'Vaccinations, screenings, and wellness programs.' },
              { icon: Heart, title: 'Cardiology', desc: 'Heart health monitoring and cardiac care.' },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl p-8" style={{ background: '#f0f7ff', border: '1px solid #e0ecff' }}>
                <s.icon size={32} style={{ color: '#3b82f6' }} className="mb-4" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1e3a5f' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#5a6a7e' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 px-6" style={{ background: '#f0f7ff' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1e3a5f' }}>Meet Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Chief Physician', exp: '15+ years experience' },
              { name: 'Dr. Michael Chen', role: 'Cardiologist', exp: '12+ years experience' },
            ].map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 flex items-center gap-6 shadow-sm">
                <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: '#3b82f6' }}>
                  <UserRound size={36} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#1e3a5f' }}>{d.name}</h3>
                  <p className="text-sm" style={{ color: '#3b82f6' }}>{d.role}</p>
                  <p className="text-xs mt-1" style={{ color: '#5a6a7e' }}>{d.exp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-6 flex-wrap" style={{ color: '#5a6a7e' }}>
            <span className="flex items-center gap-2"><Phone size={18} style={{ color: '#3b82f6' }} /> (555) 123-4567</span>
            <span className="flex items-center gap-2"><Clock size={18} style={{ color: '#3b82f6' }} /> Mon-Sat: 8AM - 8PM</span>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 text-center" style={{ background: '#1e3a5f' }}>
        <p className="text-white/70 text-sm">© 2026 MediCare Clinic. Crafted by Ninad Goliwale.</p>
      </footer>
    </DemoLayout>
  );
}
