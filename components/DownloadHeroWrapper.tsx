"use client";

import dynamic from "next/dynamic";

const DownloadHero = dynamic(() => import("@/components/DownloadHero"), { ssr: false });

export default function DownloadHeroWrapper() {
  return <DownloadHero />;
}
