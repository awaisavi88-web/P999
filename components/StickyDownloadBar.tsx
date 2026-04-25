"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, X, Star } from "lucide-react";

export default function StickyDownloadBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past the hero section (~100vh)
      const threshold = window.innerHeight * 0.9;
      if (window.scrollY > threshold && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= threshold) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="fixed bottom-0 inset-x-0 z-50 pb-safe"
          role="complementary"
          aria-label="Download P999 Game"
        >
          {/* Bar */}
          <div className="mx-3 mb-3 sm:mx-6 sm:mb-4 md:mx-auto md:max-w-lg">
            <div
              className="relative flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(17,17,34,0.97) 0%, rgba(7,7,15,0.97) 100%)",
                border: "1px solid rgba(245,158,11,0.25)",
                boxShadow:
                  "0 -4px 40px rgba(0,0,0,0.5), 0 0 30px rgba(245,158,11,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-gold-600/5 via-transparent to-transparent pointer-events-none" />

              {/* App icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-gold">
                <span className="text-dark-900 font-black text-sm">P9</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-white font-bold text-sm truncate">
                    P999 Game
                  </p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={9}
                        className={
                          i < 4
                            ? "text-gold-400 fill-gold-400"
                            : "text-gold-400 fill-gold-400 opacity-50"
                        }
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-500 text-xs">
                  v2.4.1 · 45MB · Free
                </p>
              </div>

              {/* CTA */}
              <motion.a
                href="https://000p999.com/?dl=d7494r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-black text-sm rounded-xl shadow-gold"
              >
                <Download size={14} strokeWidth={2.5} />
                <span className="hidden sm:inline">Download</span>
                <span className="sm:hidden">Get</span>
              </motion.a>

              {/* Dismiss */}
              <button
                onClick={() => setDismissed(true)}
                className="flex-shrink-0 p-1 rounded-lg text-slate-600 hover:text-slate-400 transition-colors"
                aria-label="Dismiss download bar"
              >
                <X size={14} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
