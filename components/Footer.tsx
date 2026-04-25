"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Shield, Star, Mail, ExternalLink } from "lucide-react";

const FOOTER_LINKS = {
  App: [
    { label: "Download APK", href: "/download" },
    { label: "Version History", href: "/p999-old-versions" },
    { label: "System Requirements", href: "/download#requirements" },
  ],
  Info: [
    { label: "P999 Review", href: "/#article" },
    { label: "Real or Fake?", href: "/#real-or-fake" },
    { label: "How to Earn", href: "/how-to-play-p999" },
    { label: "FAQ", href: "/p999-faqs" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative mt-0 border-t border-white/[0.06]"
      role="contentinfo"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold">
                <Image src="/P999apk.io.webp" alt="P999 Game" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-black text-xl text-gradient-gold block leading-none">
                  P999
                </span>
                <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">
                  Game
                </span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-5">
              Pakistan&apos;s leading earning game app. Download the P999 APK
              free and start earning today. Trusted by 500K+ users.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shield, label: "Secure", color: "text-emerald-400" },
                { icon: Star, label: "4.6 Rating", color: "text-gold-400" },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-lg text-xs text-slate-400"
                >
                  <Icon size={11} className={color} />
                  {label}
                </div>
              ))}
            </div>

            {/* Download CTA */}
            <motion.a
              href="https://000p999.com/?dl=d7494r"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-bold text-sm rounded-xl shadow-gold w-fit"
            >
              <Download size={14} strokeWidth={2.5} />
              Download P999 APK
            </motion.a>
          </div>

          {/* Link cols */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-slate-500 hover:text-gold-400 transition-colors duration-150 flex items-center gap-1.5 group"
                    >
                      {label}
                      {href.startsWith("http") && (
                        <ExternalLink
                          size={11}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="py-5 border-t border-white/[0.06]">
          <div className="glass rounded-xl px-4 py-3.5 mb-5">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-500">⚠️ Disclaimer:</strong>{" "}
              P999apk.io is an independent review and download portal. We are not officially
              affiliated with P999 Game developers. This website is for informational purposes
              only. Earning amounts are not guaranteed. Participating in earning apps carries
              financial risk. P999 is not regulated by SECP or any Pakistani financial authority.
              Users participate at their own risk. Please play responsibly.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} p999apk.io · All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:support@p999apk.io"
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              <Mail size={12} />
              support@p999apk.io
            </a>
            <a
              href="/sitemap.xml"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
