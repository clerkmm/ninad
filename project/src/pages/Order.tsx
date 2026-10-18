import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import Layout from '@/components/Layout';
import Reveal from '@/components/Reveal';
import TiltButton from '@/components/TiltButton';
import { supabase } from '@/lib/supabase';

const websiteTypes = ['Salon', 'Medical', 'Beauty Parlour', 'Restaurant', 'Gym', 'E-commerce', 'Portfolio', 'Real Estate', 'Custom'];
const styles = ['Modern & Minimal', 'Bold & Vibrant', 'Elegant & Luxurious', 'Dark & Moody', 'Clean & Corporate', 'Playful & Creative'];
const pageCounts = ['1-3 pages', '4-6 pages', '7-10 pages', '10+ pages'];
const budgets = ['Under $200', '$200 - $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500+'];

export default function Order() {
  const [form, setForm] = useState({
    name: '', email: '', website_type: '', preferred_style: '', num_pages: '', budget: '', description: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('orders').insert({
      name: form.name,
      email: form.email,
      website_type: form.website_type,
      preferred_style: form.preferred_style,
      num_pages: form.num_pages,
      budget: form.budget,
      description: form.description,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', website_type: '', preferred_style: '', num_pages: '', budget: '', description: '' });
  };

  return (
    <Layout>
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
                Start a <span className="gradient-text">Project</span>
              </h1>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                Fill out the form below and I'll get back to you within 24 hours with a quote.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              {/* Website type */}
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Website Type *</label>
                <select
                  required
                  value={form.website_type}
                  onChange={(e) => handleChange('website_type', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select a type...</option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Style + Pages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Preferred Style *</label>
                  <select
                    required
                    value={form.preferred_style}
                    onChange={(e) => handleChange('preferred_style', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select a style...</option>
                    {styles.map((style) => (
                      <option key={style} value={style}>{style}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-2">Number of Pages *</label>
                  <select
                    required
                    value={form.num_pages}
                    onChange={(e) => handleChange('num_pages', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select page count...</option>
                    {pageCounts.map((count) => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Budget Range *</label>
                <select
                  required
                  value={form.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  className="input-field"
                >
                  <option value="">Select budget...</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-text-muted mb-2">Project Description *</label>
                <textarea
                  required
                  rows={5}
                  value={form.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  className="input-field resize-none"
                  placeholder="Tell me about your project — what do you need, what's your vision, any specific features..."
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan">
                  <CheckCircle size={20} />
                  <span className="text-sm">Order submitted successfully! I'll contact you within 24 hours.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                  <AlertCircle size={20} />
                  <span className="text-sm">{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <TiltButton type="submit" className={`btn-primary w-full justify-center ${status === 'loading' ? 'opacity-60' : ''}`}>
                <span className="flex items-center gap-2">
                  {status === 'loading' ? (
                    <><Loader size={18} className="animate-spin" /> Submitting...</>
                  ) : (
                    <><Send size={18} /> Submit Order</>
                  )}
                </span>
              </TiltButton>
            </form>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
}
