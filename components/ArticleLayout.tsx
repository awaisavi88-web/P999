import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Shield, ChevronRight, ArrowLeft, BookOpen, BarChart2, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import type { ArticleMeta } from "@/lib/articles";
import { getRelatedArticles } from "@/lib/articles";

export interface TocItem {
  id: string;
  label: string;
  depth?: 2 | 3;
}

interface ArticleLayoutProps {
  article: ArticleMeta;
  toc?: TocItem[];
  children: ReactNode;
  featureImage?: string | false;
}

const CATEGORY_META = {
  guide: { icon: BookOpen, color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  comparison: { icon: BarChart2, color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
  review: { icon: Star, color: "text-gold-400", bg: "bg-gold-400/10 border-gold-400/20" },
  download: { icon: Download, color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
};

export default function ArticleLayout({ article, toc, children, featureImage }: ArticleLayoutProps) {
  const resolvedImage = featureImage === false ? false : (featureImage ?? `/${article.slug}.webp`);
  const relatedArticles = getRelatedArticles(article.related);
  const catMeta = CATEGORY_META[article.category];
  const CatIcon = catMeta.icon;

  const breadcrumbs = [
    {
      label: article.categoryLabel,
      href:
        article.category === "comparison"
          ? "/#comparisons"
          : article.category === "review"
          ? "/#reviews"
          : "/#guides",
    },
    { label: article.h1 },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* ── Mini Hero ──────────────────────────────────────── */}
        <section
          className="relative pt-24 pb-10 overflow-hidden"
          aria-label="Article header"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-gradient-radial from-gold-600/8 to-transparent blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <div className="mb-5">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-gold-400 transition-colors group"
              >
                <ArrowLeft
                  size={13}
                  className="group-hover:-translate-x-0.5 transition-transform"
                />
                Back to Main Review
              </Link>
            </div>

            {/* Breadcrumbs */}
            <div className="mb-5">
              <Breadcrumbs crumbs={breadcrumbs} />
            </div>

            {/* Category + badge row */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${catMeta.bg} ${catMeta.color}`}
              >
                <CatIcon size={11} />
                {article.categoryLabel}
              </span>
              {article.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold border bg-gold-500/10 border-gold-500/20 text-gold-400">
                  {article.badge}
                </span>
              )}
              <span className="text-xs text-slate-600">
                Updated: {new Date(article.updateDate).toLocaleDateString("en-PK", { month: "long", year: "numeric" })}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-5 max-w-4xl">
              {article.h1}
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-6">
              {article.description}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-white/[0.06]">
              <span className="text-xs text-slate-500">
                ⏱ {article.readTime} read
              </span>
              <span className="text-xs text-slate-500">
                Published:{" "}
                {new Date(article.publishDate).toLocaleDateString("en-PK", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="text-xs text-slate-500">Pakistan 🇵🇰</span>
            </div>

            {/* Mini CTA bar */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Link
                href="https://000p999.com/?dl=d7494r"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-black text-sm rounded-xl shadow-gold hover:shadow-gold-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                <Download size={14} strokeWidth={2.5} />
                Download P999 APK
              </Link>
              <Link
                href="/#article"
                className="flex items-center gap-2 px-4 py-2.5 glass border border-white/[0.08] hover:border-gold-500/20 text-slate-300 hover:text-white font-semibold text-sm rounded-xl transition-all duration-200"
              >
                <Shield size={14} className="text-emerald-400" />
                Main Review
              </Link>
            </div>
          </div>
        </section>

        {/* ── Article body ─────────────────────────────────── */}
        <section className="relative py-10 sm:py-14">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/40 to-dark-900 pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

              {/* ── Sidebar ── */}
              <aside className="hidden lg:block w-60 xl:w-64 flex-shrink-0">
                <div className="sticky top-24 space-y-5">

                  {/* TOC */}
                  {toc && toc.length > 0 && (
                    <div className="glass rounded-2xl p-5">
                      <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
                        On This Page
                      </p>
                      <nav aria-label="Table of contents">
                        <ul className="space-y-0.5">
                          {toc.map(({ id, label, depth = 2 }) => (
                            <li key={id}>
                              <a
                                href={`#${id}`}
                                className={`flex items-start gap-1.5 py-1.5 rounded-lg hover:bg-white/[0.04] px-2 transition-all duration-150 group ${
                                  depth === 3 ? "pl-5" : ""
                                }`}
                              >
                                <ChevronRight
                                  size={11}
                                  className="text-slate-600 group-hover:text-gold-500 transition-colors mt-0.5 flex-shrink-0"
                                />
                                <span className="text-xs text-slate-400 group-hover:text-gold-400 transition-colors leading-snug">
                                  {label}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  )}

                  {/* Sidebar CTA */}
                  <div className="glass-gold rounded-2xl p-4">
                    <p className="text-xs font-bold text-gold-400 mb-1">
                      Download P999
                    </p>
                    <p className="text-xs text-slate-500 mb-3 leading-relaxed">
                      Read the safety guide before installing.
                    </p>
                    <Link
                      href="https://000p999.com/?dl=d7494r"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-bold text-xs rounded-xl shadow-gold"
                    >
                      <Download size={13} strokeWidth={2.5} />
                      Download Free
                    </Link>
                    <Link
                      href="/#real-or-fake"
                      className="flex items-center justify-center gap-2 w-full mt-2 py-2 glass border border-white/[0.08] text-slate-400 text-xs rounded-xl"
                    >
                      <Shield size={12} className="text-emerald-400" />
                      Safety Review
                    </Link>
                  </div>

                  {/* Related links in sidebar */}
                  {relatedArticles.length > 0 && (
                    <div className="glass rounded-2xl p-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                        See Also
                      </p>
                      <ul className="space-y-1">
                        {relatedArticles.slice(0, 4).map((a) => (
                          <li key={a.slug}>
                            <Link
                              href={`/${a.slug}`}
                              className="flex items-start gap-1.5 text-xs text-slate-400 hover:text-gold-400 py-1 transition-colors group"
                            >
                              <ChevronRight
                                size={11}
                                className="mt-0.5 flex-shrink-0 text-slate-600 group-hover:text-gold-500"
                              />
                              <span className="leading-snug">{a.h1}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </aside>

              {/* ── Main content ── */}
              <div className="flex-1 min-w-0">
                {/* Mobile: compact TOC chips */}
                {toc && toc.length > 0 && (
                  <div className="lg:hidden glass rounded-2xl p-4 mb-8">
                    <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
                      Jump to section
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {toc.map(({ id, label }) => (
                        <a
                          key={id}
                          href={`#${id}`}
                          className="text-xs px-3 py-1.5 glass rounded-lg text-slate-400 hover:text-gold-400 border border-transparent hover:border-gold-500/20 transition-all"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile CTA inline */}
                <div className="lg:hidden glass-gold rounded-xl p-4 mb-8 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold text-gold-400">P999 APK — Free</p>
                    <p className="text-xs text-slate-500">Read safety guide first</p>
                  </div>
                  <Link
                    href="https://000p999.com/?dl=d7494r"
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-bold text-xs rounded-xl shadow-gold whitespace-nowrap"
                  >
                    <Download size={13} strokeWidth={2.5} />
                    Download
                  </Link>
                </div>

                {/* Feature image */}
                {resolvedImage && (
                  <div className="mb-8 rounded-2xl overflow-hidden">
                    <Image
                      src={resolvedImage}
                      alt={article.slug}
                      width={900}
                      height={506}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                )}

                {/* Article content */}
                <div
                  className="article-prose"
                  itemScope
                  itemType="https://schema.org/Article"
                  itemProp="articleBody"
                >
                  {children}
                </div>

                {/* Internal link strip */}
                <div className="mt-10 p-5 glass rounded-2xl">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Continue Reading
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/"
                      className="flex items-center gap-1.5 text-xs px-3 py-2 glass-gold rounded-lg text-gold-400 hover:bg-gold-500/10 transition-colors border border-gold-500/20"
                    >
                      Main P999 Review
                    </Link>
                    <Link
                      href="https://000p999.com/?dl=d7494r"
                      className="flex items-center gap-1.5 text-xs px-3 py-2 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                      Download APK
                    </Link>
                    {relatedArticles.slice(0, 3).map((a) => (
                      <Link
                        key={a.slug}
                        href={`/${a.slug}`}
                        className="flex items-center gap-1.5 text-xs px-3 py-2 glass rounded-lg text-slate-400 hover:text-white transition-colors"
                      >
                        {a.categoryLabel}: {a.h1.split("—")[0].trim()}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Related articles */}
                <RelatedArticles articles={relatedArticles} />

                {/* Bottom CTA */}
                <div className="mt-12 p-6 sm:p-8 glass-gold rounded-3xl text-center">
                  <h2 className="text-xl font-black text-white mb-2">
                    Ready to Try P999 Game?
                  </h2>
                  <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
                    Read the full safety review on our homepage before you install. Knowledge first, then decide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="https://000p999.com/?dl=d7494r"
                      className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-black text-sm rounded-xl shadow-gold hover:shadow-gold-lg hover:scale-[1.02] transition-all duration-200"
                    >
                      <Download size={16} strokeWidth={2.5} />
                      Download P999 APK
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center justify-center gap-2 px-6 py-3.5 glass border border-white/10 hover:border-gold-500/30 text-slate-200 font-semibold text-sm rounded-xl transition-all duration-200"
                    >
                      Read Full Review
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-slate-600">
                    ⚠️ Disclaimer: Real money gaming involves financial risk. For informational purposes only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
