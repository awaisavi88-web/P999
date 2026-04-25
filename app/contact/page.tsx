import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | P999 APK",
  description:
    "Get in touch with the P999 APK team. Use the form to report incorrect information, ask questions, or send partnership enquiries. We reply within 1–2 business days.",
  alternates: { canonical: "https://p999apk.io/contact" },
  robots: { index: true, follow: true },
};

export { default } from "./ContactForm";
