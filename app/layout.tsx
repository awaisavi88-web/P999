import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://p999apk.io";
const SITE_NAME = "P999 Game";
const DEFAULT_TITLE = "P999 Game Download | P999 APK Free Download Pakistan 2026";
const DEFAULT_DESCRIPTION =
  "Download P999 Game APK for Pakistan. Read our honest P999 review – is it real or fake? Get the latest version, safety tips, and full earning guide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "P999 Game",
    "P999 APK Download",
    "P999 Game Download",
    "P999 real or fake",
    "P999 review Pakistan",
    "P999 earning app",
    "P999 apk",
    "p999apk.io",
  ],
  authors: [{ name: "P999 Team", url: SITE_URL }],
  creator: "P999 Team",
  publisher: "P999 APK",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/P999apk.io.webp`,
        width: 1200,
        height: 630,
        alt: "P999 Game – Download APK Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/P999apk.io.webp`],
    creator: "@p999game",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "P999 Game",
    url: SITE_URL,
    logo: `${SITE_URL}/P999apk.io.webp`,
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/P999apk.io.webp" type="image/webp" />
        {/* favicon.ico intentionally omitted — webp favicon above is used instead */}
        <link rel="apple-touch-icon" href="/P999apk.io.webp" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased bg-dark-900 text-slate-200 font-sans">
        {children}
      </body>
    </html>
  );
}
