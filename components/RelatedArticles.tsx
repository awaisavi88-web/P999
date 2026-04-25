"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, BarChart2, Star, Download } from "lucide-react";
import type { ArticleMeta } from "@/lib/articles";

const CATEGORY_ICONS = {
  guide: BookOpen,
  comparison: BarChart2,
  review: Star,
  download: Download,
} as const;

const CATEGORY_COLORS = {
  guide: "text-blue-400",
  comparison: "text-purple-400",
  review: "text-gold-400",
  download: "text-emerald-400",
} as const;

interface RelatedArticlesProps {
  articles: ArticleMeta[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null;

  return (
    <section className="mt-16 pt-10 border-t border-white/[0.06]">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <h2 className="text-sm font-bold text-gold-400 uppercase tracking-widest whitespace-nowrap">
          Related Articles
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.slice(0, 3).map((article, i) => {
          const Icon = CATEGORY_ICONS[article.category];
          const color = CATEGORY_COLORS[article.category];
          return (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                href={`/${article.slug}`}
                className="group flex flex-col h-full glass rounded-2xl p-5 hover:border-gold-500/20 border border-transparent transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Icon size={13} className={color} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${color}`}>
                    {article.categoryLabel}
                  </span>
                  {article.badge && (
                    <span className="ml-auto px-2 py-0.5 bg-gold-500/10 text-gold-400 text-[10px] font-bold rounded-full border border-gold-500/20">
                      {article.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-slate-200 group-hover:text-white leading-snug mb-2 transition-colors line-clamp-2">
                  {article.h1}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1 mb-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{article.readTime} read</span>
                  <span className="flex items-center gap-1 text-xs text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Read more <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
