'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { sendContactMessage } from '@/lib/api';
import { PersonalInfo } from '@/types/portfolio';

interface ContactSectionProps {
  info: PersonalInfo;
}

export default function ContactSection({ info }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setResponseStatus(null);

    const result = await sendContactMessage(formData);
    setLoading(false);
    setResponseStatus(result);

    if (result.success) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-slate-800/60 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium">
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                Extraordinary Together
              </span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Have a project in mind, a software engineering opportunity, or need custom AI/ML model integration? Feel free to reach out.
            </p>

            <div className="space-y-4 pt-4">
              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</p>
                  <a href={`mailto:${info.email}`} className="text-sm font-bold text-white hover:text-cyan-400">
                    {info.email}
                  </a>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</p>
                  <a href={`tel:${info.phone}`} className="text-sm font-bold text-white hover:text-cyan-400">
                    {info.phone}
                  </a>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Primary Location</p>
                  <p className="text-sm font-bold text-white">{info.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-6">Send Me a Direct Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Issah Salim"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="salim@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Hiring"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Issah, I would like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                {responseStatus && (
                  <div
                    className={`p-4 rounded-xl text-xs flex items-center gap-3 border ${
                      responseStatus.success
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                        : 'bg-rose-950/60 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    {responseStatus.success ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
                    )}
                    <span>{responseStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>please wait...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
