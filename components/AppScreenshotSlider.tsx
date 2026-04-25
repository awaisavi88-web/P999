"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SCREENSHOTS = [
  {
    src: "/p999-game.webp",
    label: "Game Lobby",
    caption: "Main P999 lobby — all earning modes at a glance",
  },
  {
    src: "/p999-game%20interface.webp",
    label: "Game Interface",
    caption: "Smooth Aviator gameplay with live multiplier tracker",
  },
  {
    src: "/promotions-in-the-game.webp",
    label: "Promotions",
    caption: "Active bonus offers and promotional reward codes",
  },
  {
    src: "/refer-and-earn-menu.webp",
    label: "Refer & Earn",
    caption: "Invite friends and collect referral bonuses automatically",
  },
  {
    src: "/deposit-menu.webp",
    label: "Deposit Menu",
    caption: "Instant deposits via EasyPaisa and JazzCash",
  },
  {
    src: "/customer-suppor-menu.webp",
    label: "Customer Support",
    caption: "24/7 live chat and Telegram support channel",
  },
];

function PhoneMockup({
  src,
  alt,
  active,
}: {
  src: string;
  alt: string;
  active: boolean;
}) {
  return (
    <div
      className={`relative flex-shrink-0 transition-all duration-500 ease-out select-none ${
        active ? "scale-100 opacity-100 z-10" : "scale-[0.78] opacity-[0.35] z-0"
      }`}
    >
      {/* Gold glow beneath active phone */}
      {active && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[160px] h-12 bg-gold-500/20 blur-2xl rounded-full pointer-events-none" />
      )}

      {/* Phone shell */}
      <div
        className="relative w-[210px] h-[444px] rounded-[40px] bg-[#0A0D18]"
        style={{
          boxShadow: active
            ? "0 40px 100px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
      >
        {/* Volume buttons — left side */}
        <div className="absolute -left-[3px] top-[98px] w-[3px] h-[28px] bg-[#1a2035] rounded-l-sm" />
        <div className="absolute -left-[3px] top-[140px] w-[3px] h-[54px] bg-[#1a2035] rounded-l-sm" />
        {/* Power button — right side */}
        <div className="absolute -right-[3px] top-[118px] w-[3px] h-[44px] bg-[#1a2035] rounded-r-sm" />

        {/* Dynamic island / notch pill */}
        <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-[#0A0D18] rounded-full z-20" />

        {/* Screen */}
        <div className="absolute inset-[5px] rounded-[35px] overflow-hidden bg-black">
          {/* Status bar gradient so screenshots blend naturally */}
          <div className="absolute inset-x-0 top-0 h-7 bg-gradient-to-b from-black/40 to-transparent z-10 pointer-events-none" />
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 90vw, 210px"
            draggable={false}
          />
        </div>

        {/* Glass sheen on phone body */}
        <div
          className="absolute inset-0 rounded-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}

export default function AppScreenshotSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = SCREENSHOTS.length;

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 3800);
    return () => clearInterval(id);
  }, [paused, go]);

  const prevIdx = (current - 1 + total) % total;
  const nextIdx = (current + 1) % total;

  return (
    <section
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="P999 Game App Screenshots"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/60 to-dark-900 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-radial from-gold-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold-400 text-xs font-semibold tracking-wider uppercase mb-5">
            📱 Real App Screenshots
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            P999 Game{" "}
            <span className="text-gradient-gold">In Action</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Actual screenshots from the app — no stock images, no filters.
          </p>
        </motion.div>

        {/* Slider area */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Phones row */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 h-[500px] sm:h-[520px]">

            {/* Left phone — desktop only */}
            <div className="hidden sm:block">
              <PhoneMockup
                src={SCREENSHOTS[prevIdx].src}
                alt={SCREENSHOTS[prevIdx].label}
                active={false}
              />
            </div>

            {/* Center phone — animated */}
            <div className="relative w-[210px] h-[444px] flex items-center justify-center">
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 70, scale: 0.88 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 70, scale: 0.88 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  <PhoneMockup
                    src={SCREENSHOTS[current].src}
                    alt={SCREENSHOTS[current].label}
                    active={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right phone — desktop only */}
            <div className="hidden sm:block">
              <PhoneMockup
                src={SCREENSHOTS[nextIdx].src}
                alt={SCREENSHOTS[nextIdx].label}
                active={false}
              />
            </div>
          </div>

          {/* Prev arrow */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-gold-400 border border-white/[0.08] hover:border-gold-500/30 transition-all duration-200"
            style={{ background: "rgba(9,9,18,0.7)", backdropFilter: "blur(12px)" }}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => go(1)}
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-gold-400 border border-white/[0.08] hover:border-gold-500/30 transition-all duration-200"
            style={{ background: "rgba(9,9,18,0.7)", backdropFilter: "blur(12px)" }}
            aria-label="Next screenshot"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Caption */}
        <div className="text-center mt-6 h-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
            >
              <p className="text-gold-400 font-bold text-base">
                {SCREENSHOTS[current].label}
              </p>
              <p className="text-slate-500 text-sm mt-0.5">
                {SCREENSHOTS[current].caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-[6px] bg-gold-400"
                  : "w-[6px] h-[6px] bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`View screenshot ${i + 1}: ${SCREENSHOTS[i].label}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
