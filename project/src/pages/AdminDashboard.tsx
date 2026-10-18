import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Package, Mail, Trash2, Loader, Inbox, TrendingUp, Clock, ArrowLeft, Search, RefreshCw, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface Order {
  id: string;
  name: string;
  email: string;
  website_type: string;
  preferred_style: string;
  num_pages: string;
  budget: string;
  description: string;
  created_at: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'orders' | 'messages'>('orders');
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();

  const loadData = async () => {
    setRefreshing(true);
    const [ordersRes, messagesRes] = await Promise.all([
      supabase.from('orders').select('*').order('created_at', { ascending: false }),
      supabase.from('messages').select('*').order('created_at', { ascending: false }),
    ]);
    setOrders(ordersRes.data || []);
    setMessages(messagesRes.data || []);
    setLoading(false);
    setRefreshing(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate('/admin');
      else loadData();
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const handleDelete = async (id: string, type: 'orders' | 'messages') => {
    await supabase.from(type).delete().eq('id', id);
    if (type === 'orders') setOrders(orders.filter((o) => o.id !== id));
    else setMessages(messages.filter((m) => m.id !== id));
  };

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const formatTime = (d: string) => new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

  const filteredOrders = orders.filter(o =>
    o.name.toLowerCase().includes(search.toLowerCase()) ||
    o.email.toLowerCase().includes(search.toLowerCase()) ||
    o.website_type.toLowerCase().includes(search.toLowerCase())
  );
  const filteredMessages = messages.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.email.toLowerCase().includes(search.toLowerCase())
  );

  const recentOrders = orders.filter(o => {
    const diff = Date.now() - new Date(o.created_at).getTime();
    return diff < 7 * 24 * 60 * 60 * 1000;
  }).length;

  return (
    <div className="min-h-screen relative" style={{ background: '#080910' }}>
      {/* Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b px-6 py-4 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(8,9,16,0.85)', backdropFilter: 'blur(20px)' }}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl blur-md opacity-50" style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)' }} />
            <div className="relative w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)' }}>
              <Inbox size={20} className="text-white" />
            </div>
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-white">Dashboard</h1>
            <p className="text-white/40 text-xs">Ninad Goliwale — Admin Panel</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/50 hover:text-white transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <ExternalLink size={16} /> View Site
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-red-400 transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8 relative">
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="rounded-2xl p-6 relative overflow-hidden transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20" style={{ background: '#3b82f6' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)' }}>
                  <Package size={20} className="text-blue-400" />
                </div>
                <span className="text-white/50 text-sm">Total Orders</span>
              </div>
              <span className="text-4xl font-bold text-white font-display">{orders.length}</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 relative overflow-hidden transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20" style={{ background: '#22c55e' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
                  <Mail size={20} className="text-green-400" />
                </div>
                <span className="text-white/50 text-sm">Total Messages</span>
              </div>
              <span className="text-4xl font-bold text-white font-display">{messages.length}</span>
            </div>
          </div>

          <div className="rounded-2xl p-6 relative overflow-hidden transition-all hover:scale-[1.02]" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-20" style={{ background: '#6a5cff' }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(106,92,255,0.15)' }}>
                  <TrendingUp size={20} className="text-purple-400" />
                </div>
                <span className="text-white/50 text-sm">Recent (7 days)</span>
              </div>
              <span className="text-4xl font-bold text-white font-display">{recentOrders}</span>
            </div>
          </div>
        </div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('orders')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${tab === 'orders' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              style={tab === 'orders' ? { background: 'linear-gradient(135deg, rgba(106,92,255,0.2), rgba(0,212,255,0.2))', border: '1px solid rgba(106,92,255,0.3)' } : { border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="flex items-center gap-2"><Package size={16} /> Orders ({orders.length})</span>
            </button>
            <button
              onClick={() => setTab('messages')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${tab === 'messages' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
              style={tab === 'messages' ? { background: 'linear-gradient(135deg, rgba(106,92,255,0.2), rgba(0,212,255,0.2))', border: '1px solid rgba(106,92,255,0.3)' } : { border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <span className="flex items-center gap-2"><Mail size={16} /> Messages ({messages.length})</span>
            </button>
          </div>

          <div className="flex-1 flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={`Search ${tab}...`}
                className="w-full pl-12 pr-4 py-2.5 rounded-xl text-white text-sm outline-none"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              />
            </div>
            <button
              onClick={loadData}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <RefreshCw size={16} className={refreshing ? 'animate-spin' : ''} />
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader size={28} className="animate-spin text-white/30 mb-3" />
            <p className="text-white/30 text-sm">Loading data...</p>
          </div>
        ) : tab === 'orders' ? (
          filteredOrders.length === 0 ? (
            <div className="text-center py-24">
              <Package size={40} className="mx-auto text-white/10 mb-4" />
              <p className="text-white/30">{search ? 'No results found.' : 'No orders yet.'}</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <div key={order.id} className="rounded-2xl p-6 transition-all hover:border-white/10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #6a5cff, #00d4ff)' }}>
                        {order.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{order.name}</h3>
                        <a href={`mailto:${order.email}`} className="text-blue-400 text-sm hover:underline">{order.email}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <span className="text-white/40 text-xs block">{formatDate(order.created_at)}</span>
                        <span className="text-white/30 text-xs block">{formatTime(order.created_at)}</span>
                      </div>
                      <button onClick={() => handleDelete(order.id, 'orders')} className="text-white/20 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-500/10">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: 'Type', value: order.website_type },
                      { label: 'Style', value: order.preferred_style },
                      { label: 'Pages', value: order.num_pages },
                      { label: 'Budget', value: order.budget },
                    ].map((item, i) => (
                      <div key={i} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.02)' }}>
                        <span className="text-white/30 text-xs uppercase tracking-wider block mb-1">{item.label}</span>
                        <span className="text-white/90 text-sm font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/60 text-sm mt-2 pt-3 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    {order.description}
                  </p>
                </div>
              ))}
            </div>
          )
        ) : filteredMessages.length === 0 ? (
          <div className="text-center py-24">
            <Mail size={40} className="mx-auto text-white/10 mb-4" />
            <p className="text-white/30">{search ? 'No results found.' : 'No messages yet.'}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredMessages.map((msg) => (
              <div key={msg.id} className="rounded-2xl p-6 transition-all hover:border-white/10" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white" style={{ background: 'linear-gradient(135deg, #22c55e, #00d4ff)' }}>
                      {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{msg.name}</h3>
                      <a href={`mailto:${msg.email}`} className="text-green-400 text-sm hover:underline">{msg.email}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-white/40 text-xs block">{formatDate(msg.created_at)}</span>
                      <span className="text-white/30 text-xs block">{formatTime(msg.created_at)}</span>
                    </div>
                    <button onClick={() => handleDelete(msg.id, 'messages')} className="text-white/20 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-500/10">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
