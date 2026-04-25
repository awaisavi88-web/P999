"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Download,
  Star,
  Shield,
  CheckCircle,
  Smartphone,
  HardDrive,
  Zap,
  ChevronDown,
} from "lucide-react";

const APP = {
  version: "v2.4.1",
  size: "45 MB",
  platform: "Android 5.0+",
  rating: "4.6",
  reviews: "12,000+",
};

const SAFETY_CHECKS = [
  "VirusTotal Scan Passed",
  "No Hidden Malware",
  "Official Source Only",
  "Free — No Hidden Fees",
];

const QUICK_STEPS = [
  { n: "1", label: "Tap Download" },
  { n: "2", label: "Allow Unknown Sources" },
  { n: "3", label: "Install & Register" },
];

export default function DownloadHero() {
  return (
    <section
      className="relative pt-24 pb-10 overflow-hidden"
      aria-label="P999 APK Download"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-radial from-gold-600/8 to-transparent blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">

        {/* Version badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold-400 text-xs font-bold tracking-wider uppercase">
            <Zap size={11} className="fill-gold-400" />
            Latest Version {APP.version} — April 2026
          </span>
        </motion.div>

        {/* App card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass-gold rounded-3xl p-6 sm:p-8 mb-6"
        >
          {/* App identity row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-gold flex-shrink-0">
              <Image
                src="/P999apk.io.webp"
                alt="P999 Game logo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                P999 Game APK Download — Latest Version Free for Android
              </h1>
              <p className="text-slate-400 text-sm mt-0.5">
                Official Download — Free for Android
              </p>
              {/* Stars */}
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < 4 ? "text-gold-400 fill-gold-400" : "text-gold-400 fill-gold-400 opacity-50"}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-500">
                  {APP.rating} · {APP.reviews} reviews
                </span>
              </div>
            </div>
          </div>

          {/* Spec chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { icon: Zap, label: APP.version },
              { icon: HardDrive, label: APP.size },
              { icon: Smartphone, label: APP.platform },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-xs text-slate-300 font-medium"
              >
                <Icon size={12} className="text-gold-500" />
                {label}
              </div>
            ))}
          </div>

          {/* Primary CTA */}
          <motion.a
            href="https://000p999.com/?dl=d7494r"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dark-900 font-black text-base rounded-2xl shadow-gold hover:shadow-gold-lg transition-shadow duration-300 overflow-hidden group mb-3"
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
            />
            <Download size={20} strokeWidth={2.5} />
            Download P999 APK — Free
          </motion.a>

          <p className="text-center text-xs text-slate-600">
            APK · 45 MB · Android Only · No Play Store Required
          </p>
        </motion.div>

        {/* Safety checks */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-2 mb-6"
        >
          {SAFETY_CHECKS.map((item) => (
            <div key={item} className="flex items-center gap-2 glass rounded-xl px-3 py-2.5">
              <CheckCircle size={13} className="text-emerald-400 flex-shrink-0" />
              <span className="text-xs text-slate-400">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* 3-step quick install */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="glass rounded-2xl p-4 mb-6"
        >
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 text-center">
            How to Install — 3 Steps
          </p>
          <div className="flex items-center justify-center gap-0">
            {QUICK_STEPS.map((step, i) => (
              <div key={step.n} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5 px-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                    <span className="text-gold-400 font-black text-sm">{step.n}</span>
                  </div>
                  <span className="text-xs text-slate-400 text-center whitespace-nowrap">{step.label}</span>
                </div>
                {i < QUICK_STEPS.length - 1 && (
                  <div className="w-6 h-px bg-white/10 mb-4" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Safety note + scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Shield size={13} className="text-emerald-400" />
            <span>Only download from official sources. Read our safety guide below.</span>
          </div>
          <motion.a
            href="#app-info"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1 text-slate-600 cursor-pointer mt-1"
            aria-hidden="true"
          >
            <span className="text-xs">Full install guide below</span>
            <ChevronDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
