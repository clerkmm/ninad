import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle, Loader, ShieldCheck, UserPlus, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminLogin() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate('/admin/dashboard');
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    setSuccessMsg('');

    if (mode === 'signup') {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setStatus('error');
        setErrorMsg(error.message);
        return;
      }
      if (data.session) {
        navigate('/admin/dashboard');
      } else {
        setStatus('success');
        setSuccessMsg('Account created! You can now sign in.');
        setMode('login');
        setPassword('');
      }
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session) {
      setStatus('error');
      setErrorMsg('Invalid credentials. Please try again.');
      return;
    }
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden" style={{ background: '#080910' }}>
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20" style={{ background: '#6a5cff' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15" style={{ background: '#00d4ff' }} />

      {/* Back to site */}
      <div className="absolute top-6 left-6 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/40 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <ArrowLeft size={16} /> Back to Site
        </button>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative w-20 h-20 mx-auto mb-5">
            <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 animate-pulse-glow" style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)' }} />
            <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)', boxShadow: '0 10px 40px rgba(106,92,255,0.4)' }}>
              <ShieldCheck size={36} className="text-white" />
            </div>
          </div>
          <h1 className="font-display text-3xl font-bold text-white">
            {mode === 'login' ? 'Admin Access' : 'Create Account'}
          </h1>
          <p className="text-white/40 text-sm mt-2">
            {mode === 'login' ? 'Sign in to manage orders and messages' : 'Set up your admin credentials'}
          </p>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl p-8 space-y-5 relative overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px -20px rgba(0,0,0,0.5)',
          }}
        >
          <div>
            <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-wider">Email</label>
            <div className="relative">
              <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
                placeholder="admin@example.com"
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-12 py-3.5 rounded-xl text-white text-sm outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
                placeholder="••••••••"
                onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
                onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {status === 'error' && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl text-sm animate-fade-in" style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}>
              <AlertCircle size={16} className="shrink-0" />
              {errorMsg}
            </div>
          )}

          {status === 'success' && (
            <div className="flex items-center gap-2 p-3.5 rounded-xl text-sm animate-fade-in" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', color: '#4ade80' }}>
              <ShieldCheck size={16} className="shrink-0" />
              {successMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)', boxShadow: '0 10px 30px rgba(106,92,255,0.3)' }}
          >
            {status === 'loading' ? (
              <><Loader size={18} className="animate-spin" /> Please wait...</>
            ) : mode === 'login' ? (
              'Sign In'
            ) : (
              <><UserPlus size={18} /> Create Account</>
            )}
          </button>

          <div className="text-center pt-2">
            {mode === 'login' ? (
              <button
                type="button"
                onClick={() => { setMode('signup'); setStatus('idle'); setErrorMsg(''); }}
                className="text-white/35 text-sm hover:text-white/70 transition-colors"
              >
                First time? <span className="text-neon-cyan">Create admin account</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => { setMode('login'); setStatus('idle'); setErrorMsg(''); }}
                className="text-white/35 text-sm hover:text-white/70 transition-colors"
              >
                Already have an account? <span className="text-neon-cyan">Sign in</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
