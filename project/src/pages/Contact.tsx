import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader, Mail, MessageSquare } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('messages').insert({
      name: form.name,
      email: form.email,
      message: form.message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Have a question or want to discuss a project? I'm just a message away.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Contact info */}
            <Reveal className="md:col-span-2">
              <div className="glass rounded-3xl p-8 h-full space-y-6">
                <div>
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-cyan mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">Email Me</h3>
                  <a href="mailto:ninadgoliwale463@gmail.com" className="text-text-muted hover:text-neon-cyan transition-colors text-sm break-all">
                    ninadgoliwale463@gmail.com
                  </a>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-neon-purple mb-4">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">Response Time</h3>
                  <p className="text-text-muted text-sm">
                    I typically respond within 24 hours. For urgent inquiries, please mention it in your message.
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h3 className="font-display text-sm font-bold mb-3 text-text-muted uppercase tracking-wider">Working Hours</h3>
                  <div className="space-y-2 text-sm text-text-muted">
                    <div className="flex justify-between"><span>Mon - Fri</span><span>9AM - 8PM IST</span></div>
                    <div className="flex justify-between"><span>Saturday</span><span>10AM - 4PM IST</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span>Closed</span></div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal delay={200} className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                    <CheckCircle size={20} />
                    <span className="text-sm">Message sent! I'll get back to you soon.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                    <AlertCircle size={20} />
                    <span className="text-sm">{errorMsg}</span>
                  </div>
                )}

                <TiltButton type="submit" className={`btn-primary w-full justify-center ${status === 'loading' ? 'opacity-60' : ''}`}>
                  <span className="flex items-center gap-2">
                    {status === 'loading' ? (
                      <><Loader size={18} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={18} /> Send Message</>
                    )}
                  </span>
                </TiltButton>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </Layout>
  );
}
