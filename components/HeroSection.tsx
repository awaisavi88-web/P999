"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Download,
  Star,
  Shield,
  Users,
  ChevronDown,
  Smartphone,
  HardDrive,
  Zap,
  CheckCircle,
} from "lucide-react";

const APP_INFO = {
  version: "v2.4.1",
  size: "45 MB",
  platform: "Android 5.0+",
  rating: "4.6",
  reviews: "12,000+",
  downloads: "500K+",
};

const TRUST_BADGES = [
  { icon: Shield, label: "Secure Download", color: "text-emerald-400" },
  { icon: Star, label: `${APP_INFO.rating} Rating`, color: "text-gold-400" },
  { icon: Users, label: `${APP_INFO.downloads} Users`, color: "text-blue-400" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="P999 Game Hero Section"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

        {/* Glow orbs */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-gradient-radial from-gold-600/10 via-gold-700/5 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-amber-500/8 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-radial from-emerald-500/6 to-transparent blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-dark-900 to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-500/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16"
      >
        <div className="max-w-5xl mx-auto w-full text-center">
          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold-400 text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Zap size={12} className="fill-gold-400" />
            <span>Pakistan&apos;s #1 Earning Game App</span>
            <Zap size={12} className="fill-gold-400" />
          </motion.div>

          {/* Display text — marketing copy (intentionally a <p>, not h1) */}
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-5"
          >
            <span className="text-gradient-white">P999 Game</span>
            <br />
            <span className="text-gradient-gold">Download APK</span>
            <br />
            <span className="text-white/70 text-3xl sm:text-4xl md:text-5xl font-bold">
              Free for Pakistan
            </span>
          </motion.p>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            The most talked-about earning game in Pakistan. Read our honest
            P999 review — is it <strong className="text-slate-200">real or fake</strong>? Get the
            latest APK, safety guide &amp; full walkthrough.
          </motion.p>

          {/* App info chips */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {[
              { icon: Zap, label: `Version ${APP_INFO.version}` },
              { icon: HardDrive, label: APP_INFO.size },
              { icon: Smartphone, label: APP_INFO.platform },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-sm text-slate-300 font-medium"
              >
                <Icon size={13} className="text-gold-500" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            {/* Primary CTA */}
            <motion.a
              href="https://000p999.com/?dl=d7494r"
              id="download"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-dark-900 font-black text-base rounded-2xl shadow-gold hover:shadow-gold-lg transition-shadow duration-300 overflow-hidden group w-full sm:w-auto justify-center"
            >
              {/* Shimmer effect */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                }}
              />
              <Download size={20} strokeWidth={2.5} />
              <span>Download P999 APK</span>
              <span className="text-xs font-semibold bg-dark-900/20 px-2 py-0.5 rounded-lg">
                FREE
              </span>
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="/#article"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-4 glass border border-white/10 hover:border-gold-500/30 text-slate-200 hover:text-white font-semibold text-base rounded-2xl transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Star size={18} className="text-gold-500" />
              Read Full Review
            </motion.a>
          </motion.div>

          {/* Trust note */}
          <motion.p
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-xs text-slate-600 max-w-sm mx-auto mb-10"
          >
            ⚠️ Disclaimer: This is an entertainment/earning app. Earnings are
            not guaranteed. Play responsibly.
          </motion.p>

          {/* Trust badges row */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-slate-500">
                <Icon size={15} className={color} />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 w-full max-w-3xl mx-auto grid grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { value: APP_INFO.downloads, label: "Downloads" },
            { value: `${APP_INFO.rating}/5`, label: "User Rating" },
            { value: APP_INFO.reviews, label: "Reviews" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="glass rounded-2xl p-4 sm:p-5 text-center group hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl font-black text-gradient-gold mb-1">
                {value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Rating stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < 4 ? "text-gold-400 fill-gold-400" : "text-gold-400 fill-gold-400 opacity-60"}
              />
            ))}
          </div>
          <p className="text-xs text-slate-600">
            Based on {APP_INFO.reviews} verified reviews
          </p>
        </motion.div>

        {/* Verification row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {[
            "Virus Scan Passed",
            "No Hidden Ads",
            "Instant Withdrawal",
            "24/7 Support",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-xs text-slate-500">
              <CheckCircle size={12} className="text-emerald-500" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex justify-center pb-8"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-slate-600 cursor-pointer"
          onClick={() => document.getElementById("article")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs font-medium">Scroll to read</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
