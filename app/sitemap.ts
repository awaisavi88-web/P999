import { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

const SITE_URL = "https://p999apk.io";

export default function sitemap(): MetadataRoute.Sitemap {
  /* ── Homepage ── */
  const homepageRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date("2026-04-25"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  /* ── Static pages ── */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/download`, lastModified: new Date("2026-04-25"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/about`, lastModified: new Date("2026-04-25"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified: new Date("2026-04-25"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/disclaimer`, lastModified: new Date("2026-04-25"), changeFrequency: "yearly", priority: 0.2 },
  ];

  /* ── Article pages — generated from registry ── */
  const articleRoutes: MetadataRoute.Sitemap = Object.values(ARTICLES).map(
    (article) => {
      // Category priority weighting
      const priorityMap: Record<string, number> = {
        review: 0.88,
        guide: 0.82,
        comparison: 0.78,
        download: 0.80,
      };

      return {
        url: `${SITE_URL}/${article.slug}`,
        lastModified: new Date(article.updateDate),
        changeFrequency:
          article.badge === "Updated"
            ? "weekly"
            : article.category === "review"
            ? "weekly"
            : "monthly",
        priority: priorityMap[article.category] ?? 0.75,
      };
    }
  );

  return [...homepageRoutes, ...staticRoutes, ...articleRoutes];
}
