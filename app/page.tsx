import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { ClientStickyBar } from "@/components/ClientOnly";

// Dynamic import for below-fold components (improves LCP)
const AppScreenshotSlider = dynamic(() => import("@/components/AppScreenshotSlider"), {
  loading: () => <div className="py-20" />,
});

const ArticleSection = dynamic(() => import("@/components/ArticleSection"), {
  loading: () => (
    <div className="max-w-7xl mx-auto px-4 py-20 animate-pulse">
      <div className="h-8 bg-white/5 rounded-xl w-3/4 mb-4" />
      <div className="h-4 bg-white/5 rounded-lg w-full mb-3" />
      <div className="h-4 bg-white/5 rounded-lg w-5/6 mb-3" />
      <div className="h-4 bg-white/5 rounded-lg w-4/6" />
    </div>
  ),
});

const SITE_URL = "https://p999apk.io";

export const metadata: Metadata = {
  title: "P999 Game Review 2026 | Real or Fake?",
  description:
    "Is P999 Game real or fake? Full 2026 review for Pakistan: evidence-based verdict, login tips, EasyPaisa/JazzCash withdrawal facts, legal landscape & final verdict.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "P999 Game Review 2026 | Real or Fake? Safety Warning for Pakistan",
    description:
      "Is P999 Game real or fake? Evidence-based 2026 review covering login, withdrawals via EasyPaisa/JazzCash, legal landscape, and safety warnings for Pakistan.",
    url: SITE_URL,
    type: "article",
  },
};

/* ── Structured Data ──────────────────────────────────────────── */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "P999 Game Review 2026 – Real or Fake? Complete Safety Guide for Pakistan",
  description:
    "Honest, detailed review of P999 Game for Pakistani users. Includes APK download, earning guide, safety review and FAQ.",
  image: `${SITE_URL}/P999apk.io.webp`,
  author: {
    "@type": "Organization",
    name: "P999APK Team",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "P999 APK",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  datePublished: "2025-01-10",
  dateModified: new Date().toISOString().split("T")[0],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
  keywords: "P999 Game, P999 APK Download, P999 real or fake, P999 review Pakistan",
  inLanguage: "en-PK",
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "P999 Game",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "PKR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "12000",
    bestRating: "5",
    worstRating: "1",
  },
  description:
    "P999 Game is a free Android earning app popular in Pakistan. Play mini-games and earn real cash via EasyPaisa and JazzCash.",
  softwareVersion: "2.4.1",
  fileSize: "45 MB",
  downloadUrl: `${SITE_URL}/#download`,
  url: SITE_URL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is P999 Game real or fake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "P999 is a real, functioning application, but it operates outside any consumer-protection framework that a Pakistani user can rely on. The earning version may pay small amounts to early or low-stakes users, but structural and behavioral evidence suggests it is not a safe place to deposit meaningful money.",
      },
    },
    {
      "@type": "Question",
      name: "How to download P999 APK safely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To download P999 APK safely: identify the official source link from inside the app or its Telegram channel, verify the SSL certificate and .apk extension, scan the file on VirusTotal before installing, grant Unknown Sources permission to your browser only then revoke it, and ideally use a secondary device that does not contain your banking apps.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum withdrawal in P999?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum withdrawal is advertised at PKR 300 to PKR 500, but multiple users report it being raised retroactively to PKR 1,500 or higher at the point of cash-out. Processing times advertised as within 24 hours frequently extend to 3–7 days or longer.",
      },
    },
    {
      "@type": "Question",
      name: "Is P999 available on Google Play Store?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The P999 earning edition is not available on Google Play Store because it falls outside Play Store's policy on real-money gambling apps in regions where the operator is not licensed. It must be sideloaded as an APK.",
      },
    },
    {
      "@type": "Question",
      name: "What are the technical requirements for P999?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "P999 requires Android 8.0 Oreo or higher, at least 3 GB RAM (4 GB recommended), approximately 120 MB storage for the base APK growing to 300–400 MB with cached assets, and a stable 4G or Wi-Fi connection. iOS is not officially supported.",
      },
    },
    {
      "@type": "Question",
      name: "Is P999 legal in Pakistan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Gambling for stakes is broadly prohibited in Pakistan under the Public Gambling Act of 1977. Crash games, slots, and color-prediction games fall within this definition. The PTA routinely blocks domains associated with online gambling. There is no Pakistani regulator with authority over offshore unregulated operators like P999.",
      },
    },
    {
      "@type": "Question",
      name: "What is the P999 Aviator game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "P999 Aviator is a crash-style game where a multiplier rises from 1.00x upward as a plane takes off. Players must cash out before the plane flies off-screen. Rounds last under 30 seconds. On P999, the RNG outcomes are not independently audited, unlike regulated platforms.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

/* ── Page Component ────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* Structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        <HeroSection />
        <AppScreenshotSlider />
        <ArticleSection />
      </main>

      <Footer />
      <ClientStickyBar />
    </>
  );
}
