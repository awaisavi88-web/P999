export type ArticleCategory = "guide" | "comparison" | "review" | "download";

export interface ArticleMeta {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: ArticleCategory;
  categoryLabel: string;
  keywords: string[];
  related: string[];
  publishDate: string;
  updateDate: string;
  readTime: string;
  badge?: string;
  schema: "article" | "faq";
}

export const ARTICLES: Record<string, ArticleMeta> = {
  "p999-for-pc": {
    slug: "p999-for-pc",
    title: "P999 Game for PC 2026 | Play on Windows with BlueStacks",
    h1: "How to Download & Play P999 Game on PC — 2026 Guide",
    description:
      "Step-by-step guide to running P999 Game on Windows PC using BlueStacks or LDPlayer. Full setup walkthrough with screenshots. Updated April 2026.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["P999 game for PC", "P999 on Windows", "P999 BlueStacks", "P999 PC download"],
    related: ["how-to-play-p999", "p999-login", "p999-aviator-game"],
    publishDate: "2026-01-20",
    updateDate: "2026-04-23",
    readTime: "6 min",
    schema: "article",
  },
  "p999-for-ios": {
    slug: "p999-for-ios",
    title: "P999 Game for iOS 2026 | Can You Download It on iPhone?",
    h1: "P999 Game for iOS — Can You Download It on iPhone? 2026 Answer",
    description:
      "Can you play P999 on iPhone? Full 2026 guide on iOS availability, safe alternatives, and what to avoid. Honest answer for Pakistani iPhone users.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["P999 for iOS", "P999 iPhone", "P999 Apple", "P999 iOS download"],
    related: ["p999-for-pc", "how-to-play-p999", "p999-faqs"],
    publishDate: "2026-01-22",
    updateDate: "2026-04-23",
    readTime: "5 min",
    schema: "article",
  },
  "p999-old-versions": {
    slug: "p999-old-versions",
    title: "P999 APK Old Versions 2026 | Previous Version Download Archive",
    h1: "P999 APK Old Versions — Version History & Download Archive",
    description:
      "Looking for P999 old version APK? Version history, archived downloads, and why old versions carry higher security risks. Pakistan guide 2026.",
    category: "download",
    categoryLabel: "Download",
    keywords: ["P999 old version", "P999 APK old", "P999 previous version", "P999 version history"],
    related: ["p999-login", "how-to-play-p999", "p999-for-pc"],
    publishDate: "2026-02-01",
    updateDate: "2026-04-23",
    readTime: "5 min",
    schema: "article",
  },
  "p999-login": {
    slug: "p999-login",
    title: "P999 Game Login 2026 | Fix Login Problems — Pakistan Guide",
    h1: "P999 Game Login — How to Sign In & Fix Common Login Issues",
    description:
      "Complete P999 login guide for Pakistan. Fix login errors, forgot password, account blocked, and OTP issues step by step. Updated April 2026.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["P999 login", "P999 sign in", "P999 login problem", "P999 forgot password"],
    related: ["how-to-play-p999", "p999-redeem-code", "p999-faqs"],
    publishDate: "2026-01-25",
    updateDate: "2026-04-23",
    readTime: "5 min",
    schema: "article",
  },
  "p999-aviator-game": {
    slug: "p999-aviator-game",
    title: "P999 Aviator Game 2026 | Guide, Tips & Safety Warning — Pakistan",
    h1: "P999 Aviator Game — Complete Guide, Tricks & Safety Warning 2026",
    description:
      "Full guide to the P999 Aviator crash game. How it works, betting strategies, and an honest assessment of RNG fairness. Pakistan 2026.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["P999 Aviator", "P999 Aviator game", "P999 crash game", "P999 Aviator tips"],
    related: ["how-to-play-p999", "p999-faqs", "p999-hack"],
    publishDate: "2026-01-28",
    updateDate: "2026-04-23",
    readTime: "7 min",
    schema: "article",
  },
  "how-to-play-p999": {
    slug: "how-to-play-p999",
    title: "How to Play P999 Game 2026 | Beginner's Complete Guide Pakistan",
    h1: "How to Play P999 Game — Complete Beginner's Guide 2026",
    description:
      "New to P999? This complete guide covers registration, game modes, Aviator, slots, earning strategies, and withdrawal steps for Pakistani users.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["how to play P999", "P999 game guide", "P999 beginner guide", "P999 earning guide"],
    related: ["p999-for-pc", "p999-aviator-game", "p999-redeem-code"],
    publishDate: "2026-01-15",
    updateDate: "2026-04-23",
    readTime: "8 min",
    schema: "article",
  },
  "p999-hack": {
    slug: "p999-hack",
    title: "P999 Hack APK 2026 | Warning — What You Really Need to Know",
    h1: "P999 Hack — The Truth About Hack APKs and What They Actually Do",
    description:
      "Searching for P999 hack APK? Read this first. We expose what fake hack tools contain and the real security risks for Pakistani users. 2026.",
    category: "review",
    categoryLabel: "Warning",
    keywords: ["P999 hack", "P999 hack APK", "P999 mod APK", "P999 cheat"],
    related: ["p999-user-reviews", "p999-faqs", "how-to-play-p999"],
    publishDate: "2026-02-10",
    updateDate: "2026-04-23",
    readTime: "6 min",
    badge: "Warning",
    schema: "article",
  },
  "p999-redeem-code": {
    slug: "p999-redeem-code",
    title: "P999 Redeem Code April 2026 | Working Codes & How to Use",
    h1: "P999 Redeem Code 2026 — Latest Working Codes for Pakistan",
    description:
      "Find working P999 redeem codes for April 2026. How to enter codes, what rewards to expect, and how to spot fake code scams.",
    category: "guide",
    categoryLabel: "Guide",
    keywords: ["P999 redeem code", "P999 promo code", "P999 bonus code", "P999 free code 2026"],
    related: ["how-to-play-p999", "p999-login", "p999-faqs"],
    publishDate: "2026-04-01",
    updateDate: "2026-04-23",
    readTime: "4 min",
    badge: "Updated",
    schema: "article",
  },
  "p999-faqs": {
    slug: "p999-faqs",
    title: "P999 Game FAQ 2026 | Most Asked Questions Answered — Pakistan",
    h1: "P999 Game Frequently Asked Questions — Complete FAQ 2026",
    description:
      "All your P999 questions answered in one place. APK, login, withdrawal, safety, legality, and more for Pakistani users. Updated April 2026.",
    category: "review",
    categoryLabel: "FAQ",
    keywords: ["P999 FAQ", "P999 questions", "P999 help", "P999 guide Pakistan"],
    related: ["p999-user-reviews", "p999-hack", "how-to-play-p999"],
    publishDate: "2026-01-18",
    updateDate: "2026-04-23",
    readTime: "7 min",
    schema: "faq",
  },
  "p999-vs-3-patti-gold": {
    slug: "p999-vs-3-patti-gold",
    title: "P999 vs 3 Patti Gold 2026 | Which Earning App Wins? Pakistan",
    h1: "P999 vs 3 Patti Gold — Side-by-Side Comparison for Pakistan 2026",
    description:
      "P999 or 3 Patti Gold? We compare features, earning potential, safety, and withdrawals so Pakistani users can choose wisely in 2026.",
    category: "comparison",
    categoryLabel: "Comparison",
    keywords: ["P999 vs 3 Patti Gold", "P999 3 Patti Gold comparison", "best earning app Pakistan"],
    related: ["p999-vs-basant-club", "p999-user-reviews", "p999-faqs"],
    publishDate: "2026-02-15",
    updateDate: "2026-04-23",
    readTime: "7 min",
    schema: "article",
  },
  "p999-vs-basant-club": {
    slug: "p999-vs-basant-club",
    title: "P999 vs Basant Club 2026 | Full Comparison — Pakistan",
    h1: "P999 vs Basant Club — Which Earning App Is Safer for Pakistan?",
    description:
      "Detailed comparison of P999 and Basant Club earning apps. Features, withdrawals, trust score, and our honest recommendation. Pakistan 2026.",
    category: "comparison",
    categoryLabel: "Comparison",
    keywords: ["P999 vs Basant Club", "P999 Basant Club comparison", "Basant Club review Pakistan"],
    related: ["p999-vs-3-patti-gold", "p999-vs-royal-x-casino", "p999-user-reviews"],
    publishDate: "2026-02-18",
    updateDate: "2026-04-23",
    readTime: "6 min",
    schema: "article",
  },
  "p999-vs-royal-x-casino": {
    slug: "p999-vs-royal-x-casino",
    title: "P999 vs Royal X Casino 2026 | Comparison — Pakistan",
    h1: "P999 vs Royal X Casino — Features, Safety & Earnings Compared",
    description:
      "P999 vs Royal X Casino: a full feature-by-feature comparison for Pakistani users evaluating earning apps in 2026.",
    category: "comparison",
    categoryLabel: "Comparison",
    keywords: ["P999 vs Royal X Casino", "Royal X Casino review", "P999 Royal X comparison"],
    related: ["p999-vs-w777", "p999-vs-td777", "p999-user-reviews"],
    publishDate: "2026-02-20",
    updateDate: "2026-04-23",
    readTime: "6 min",
    schema: "article",
  },
  "p999-vs-w777": {
    slug: "p999-vs-w777",
    title: "P999 vs W777 2026 | Which Earning App Is Better? Pakistan",
    h1: "P999 vs W777 — Honest Side-by-Side Comparison for Pakistan 2026",
    description:
      "We compare P999 and W777 earning apps on safety, game variety, withdrawal speed, and overall value for Pakistani users in 2026.",
    category: "comparison",
    categoryLabel: "Comparison",
    keywords: ["P999 vs W777", "W777 review Pakistan", "P999 W777 comparison"],
    related: ["p999-vs-td777", "p999-vs-royal-x-casino", "p999-user-reviews"],
    publishDate: "2026-02-22",
    updateDate: "2026-04-23",
    readTime: "6 min",
    schema: "article",
  },
  "p999-vs-td777": {
    slug: "p999-vs-td777",
    title: "P999 vs TD777 2026 | Full Comparison — Pakistan Earning Apps",
    h1: "P999 vs TD777 — Which App Should Pakistani Users Choose in 2026?",
    description:
      "P999 vs TD777 compared across gameplay, earning potential, withdrawal reliability, and safety. Honest verdict for Pakistan users 2026.",
    category: "comparison",
    categoryLabel: "Comparison",
    keywords: ["P999 vs TD777", "TD777 review Pakistan", "P999 TD777 comparison"],
    related: ["p999-vs-w777", "p999-vs-basant-club", "p999-user-reviews"],
    publishDate: "2026-02-25",
    updateDate: "2026-04-23",
    readTime: "6 min",
    schema: "article",
  },
  "download": {
    slug: "download",
    title: "P999 Game Download APK 2026 | Latest Version — Free for Android",
    h1: "P999 Game Download APK — Latest Version 2026",
    description:
      "Download the latest P999 Game APK for Android. Free install guide, step-by-step setup, system requirements, and safety information for Pakistani users.",
    category: "download",
    categoryLabel: "Download",
    keywords: ["P999 game download", "P999 APK download", "download P999 latest version", "P999 Android app"],
    related: ["how-to-play-p999", "p999-login", "p999-for-pc", "p999-faqs"],
    publishDate: "2026-04-24",
    updateDate: "2026-04-24",
    readTime: "4 min",
    badge: "Free",
    schema: "article",
  },
  "p999-user-reviews": {
    slug: "p999-user-reviews",
    title: "P999 User Reviews 2026 | What Pakistani Players Say — Honest",
    h1: "P999 Game User Reviews — What Real Pakistani Players Say in 2026",
    description:
      "Compiled P999 user reviews from Reddit, Trustpilot, and Facebook groups. Positive and negative feedback analyzed honestly. Pakistan 2026.",
    category: "review",
    categoryLabel: "Reviews",
    keywords: ["P999 user reviews", "P999 reviews Pakistan", "P999 feedback", "P999 complaints"],
    related: ["p999-faqs", "p999-hack", "p999-vs-3-patti-gold"],
    publishDate: "2026-02-05",
    updateDate: "2026-04-23",
    readTime: "8 min",
    schema: "article",
  },
};

/* ── Helpers ────────────────────────────────────────────────── */

export function getArticle(slug: string): ArticleMeta | undefined {
  return ARTICLES[slug];
}

export function getRelatedArticles(slugs: string[]): ArticleMeta[] {
  return slugs
    .map((s) => ARTICLES[s])
    .filter((a): a is ArticleMeta => Boolean(a));
}

export function getArticlesByCategory(category: ArticleCategory): ArticleMeta[] {
  return Object.values(ARTICLES).filter((a) => a.category === category);
}

export function getAllArticleSlugs(): string[] {
  return Object.keys(ARTICLES);
}

/* ── Metadata generator ─────────────────────────────────────── */

const SITE_URL = "https://p999apk.io";

export function buildArticleSchema(article: ArticleMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.description,
    image: `${SITE_URL}/P999apk.io.webp`,
    author: { "@type": "Organization", name: "P999APK Team", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "P999 APK",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/P999apk.io.webp` },
    },
    datePublished: article.publishDate,
    dateModified: article.updateDate,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/${article.slug}` },
    keywords: article.keywords.join(", "),
    inLanguage: "en-PK",
  };
}

export function buildBreadcrumbSchema(article: ArticleMeta) {
  const categoryPath =
    article.category === "guide"
      ? "Guides"
      : article.category === "comparison"
      ? "Comparisons"
      : article.category === "download"
      ? "Download"
      : "Reviews";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryPath,
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.h1,
        item: `${SITE_URL}/${article.slug}`,
      },
    ],
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function buildFAQSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export function buildHowToSchema(name: string, description: string, steps: HowToStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s) => ({
      "@type": "HowToStep",
      name: s.name,
      text: s.text,
    })),
  };
}

/* ── Nav structure (used by Navbar) ─────────────────────────── */

export const NAV_CATEGORIES = [
  {
    label: "Guides",
    slugs: [
      "download",
      "how-to-play-p999",
      "p999-for-pc",
      "p999-for-ios",
      "p999-login",
      "p999-old-versions",
      "p999-aviator-game",
      "p999-redeem-code",
      "p999-hack",
    ],
  },
  {
    label: "Comparisons",
    slugs: [
      "p999-vs-3-patti-gold",
      "p999-vs-basant-club",
      "p999-vs-royal-x-casino",
      "p999-vs-w777",
      "p999-vs-td777",
    ],
  },
  {
    label: "Reviews",
    slugs: ["p999-user-reviews", "p999-faqs"],
  },
] as const;
