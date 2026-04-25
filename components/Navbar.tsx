"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Download, Shield, Star, ChevronDown,
  BookOpen, BarChart2, Home,
} from "lucide-react";
import { ARTICLES, NAV_CATEGORIES } from "@/lib/articles";

const CATEGORY_ICONS = {
  Guides: BookOpen,
  Comparisons: BarChart2,
  Reviews: Star,
} as const;

function DropdownMenu({
  label,
  slugs,
  isOpen,
  onClose,
}: {
  label: string;
  slugs: readonly string[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const Icon = CATEGORY_ICONS[label as keyof typeof CATEGORY_ICONS];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.97 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 z-50"
          onMouseLeave={onClose}
        >
          <div className="rounded-2xl overflow-hidden border border-white/[0.12]" style={{ background: "rgba(9,9,18,0.97)", backdropFilter: "blur(24px)", WebkitBackdropFilter: "blur(24px)", boxShadow: "0 8px 40px rgba(0,0,0,0.7)" }}>
            <div className="px-4 py-3 border-b border-white/[0.06] flex items-center gap-2">
              <Icon size={13} className="text-gold-400" />
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                {label}
              </span>
            </div>
            <ul className="py-2 max-h-72 overflow-y-auto">
              {slugs.map((slug) => {
                const article = ARTICLES[slug];
                if (!article) return null;
                const shortTitle = article.h1.split("—")[0].trim();
                return (
                  <li key={slug}>
                    <Link
                      href={`/${slug}`}
                      onClick={onClose}
                      className="flex items-start gap-2.5 px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/[0.04] transition-all duration-150 group"
                    >
                      <ChevronDown
                        size={11}
                        className="mt-1 flex-shrink-0 -rotate-90 text-slate-600 group-hover:text-gold-500 transition-colors"
                      />
                      <span className="leading-snug">{shortTitle}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-900/92 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-gold group-hover:shadow-gold-lg transition-all duration-300">
                <Image src="/P999apk.io.webp" alt="P999 Game" width={36} height={36} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg leading-none text-gradient-gold">P999</span>
                <span className="text-[10px] text-slate-500 font-medium leading-none mt-0.5 tracking-wider uppercase">
                  Game
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-400 hover:text-white font-medium rounded-lg hover:bg-white/[0.06] transition-all duration-150"
              >
                <Home size={13} />
                Home
              </Link>

              {/* Download page link */}
              <Link
                href="/download"
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-slate-400 hover:text-white font-medium rounded-lg hover:bg-white/[0.06] transition-all duration-150"
              >
                <Download size={13} />
                Download
              </Link>

              {/* Category dropdowns */}
              {NAV_CATEGORIES.map(({ label, slugs }) => (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                      openDropdown === label
                        ? "text-white bg-white/[0.06]"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${
                        openDropdown === label ? "rotate-180 text-gold-400" : ""
                      }`}
                    />
                  </button>
                  <DropdownMenu
                    label={label}
                    slugs={slugs}
                    isOpen={openDropdown === label}
                    onClose={() => setOpenDropdown(null)}
                  />
                </div>
              ))}
            </nav>

            {/* Right: CTA + mobile toggle */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/download"
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-dark-900 font-bold text-sm rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download size={14} strokeWidth={2.5} />
                Download
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden bg-dark-800/97 backdrop-blur-xl border-b border-white/[0.08] max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <nav className="px-4 py-3">
              {/* Home */}
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/[0.06] transition-all text-sm mb-1"
              >
                <Home size={14} />
                Home
              </Link>

              {/* Download page link */}
              <Link
                href="/download"
                className="flex items-center gap-2 px-3 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/[0.06] transition-all text-sm mb-1"
              >
                <Download size={14} />
                Download
              </Link>

              {/* Category sections */}
              {NAV_CATEGORIES.map(({ label, slugs }) => {
                const Icon = CATEGORY_ICONS[label as keyof typeof CATEGORY_ICONS];
                const expanded = mobileExpanded === label;
                return (
                  <div key={label} className="mb-1">
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : label)}
                      className="flex items-center justify-between w-full px-3 py-3 text-slate-300 hover:text-white font-medium rounded-xl hover:bg-white/[0.06] transition-all text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <Icon size={14} className="text-gold-500" />
                        {label}
                      </span>
                      <ChevronDown
                        size={14}
                        className={`text-slate-500 transition-transform ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {expanded && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {slugs.map((slug) => {
                            const article = ARTICLES[slug];
                            if (!article) return null;
                            return (
                              <li key={slug}>
                                <Link
                                  href={`/${slug}`}
                                  className="flex items-start gap-2 px-3 py-2.5 text-xs text-slate-400 hover:text-gold-400 rounded-lg hover:bg-white/[0.04] transition-all"
                                >
                                  <ChevronDown
                                    size={10}
                                    className="-rotate-90 mt-0.5 flex-shrink-0 text-slate-600"
                                  />
                                  {article.h1.split("—")[0].trim()}
                                </Link>
                              </li>
                            );
                          })}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile download CTA */}
              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <Link
                  href="/download"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-bold text-sm rounded-xl mb-2"
                >
                  <Download size={15} strokeWidth={2.5} />
                  Download P999 APK Free
                </Link>
                <div className="flex items-center gap-4 px-2 pt-1 pb-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Shield size={11} className="text-emerald-500" />
                    Verified Safe
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Star size={11} className="text-gold-500" />
                    4.6 Rating
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
