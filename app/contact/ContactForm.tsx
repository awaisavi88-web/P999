"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle } from "lucide-react";

const SUBJECTS = [
  "General Inquiry",
  "Report Incorrect Information",
  "Broken Link / Technical Issue",
  "Partnership or Advertising",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6">

          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Contact Us</h1>
          <p className="text-slate-400 text-sm mb-8">
            Use the form below or email{" "}
            <a href="mailto:support@p999apk.io" className="text-gold-400 hover:text-gold-300 transition-colors">
              support@p999apk.io
            </a>{" "}
            directly.
          </p>

          {submitted ? (
            <div className="glass rounded-2xl p-8 text-center border border-emerald-500/20">
              <CheckCircle size={40} className="text-emerald-400 mx-auto mb-4" />
              <h2 className="text-xl font-black text-white mb-2">Message Received</h2>
              <p className="text-slate-400 text-sm">
                Thanks, {form.name.split(" ")[0]}. We&apos;ll get back to you at{" "}
                <span className="text-slate-300">{form.email}</span> within 1–2 business days.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: SUBJECTS[0], message: "" }); }}
                className="mt-6 text-xs text-slate-500 hover:text-slate-400 transition-colors underline underline-offset-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 border border-white/[0.06] space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s} className="bg-dark-900 text-slate-200">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to tell us?"
                  className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold-500/40 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-black text-sm rounded-xl shadow-gold hover:shadow-gold-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-dark-900/40 border-t-dark-900 rounded-full animate-spin" />
                ) : (
                  <Send size={15} strokeWidth={2.5} />
                )}
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
