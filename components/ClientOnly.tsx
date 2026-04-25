"use client";

import dynamic from "next/dynamic";

const StickyDownloadBar = dynamic(
  () => import("@/components/StickyDownloadBar"),
  { ssr: false }
);

export function ClientStickyBar() {
  return <StickyDownloadBar />;
}
