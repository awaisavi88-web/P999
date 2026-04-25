import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — P999 APK",
  description: "Privacy Policy for p999apk.io — how we handle visitor data.",
  alternates: { canonical: "https://p999apk.io/privacy" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white mb-6">Privacy Policy</h1>
          <p className="text-slate-400 text-sm mb-4">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
              <p>P999apk.io is an informational review website. We do not require registration and do not collect personal information directly. We may collect anonymous usage analytics (page views, browser type, country) via standard web analytics tools to improve site performance.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Cookies</h2>
              <p>This site may use cookies for analytics purposes only. No personally identifiable information is stored in cookies. You can disable cookies in your browser settings.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Third-Party Links</h2>
              <p>This site links to third-party platforms including the P999 Game application. We are not responsible for the privacy practices of those platforms. Review their privacy policies before registering or depositing.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. Data Retention</h2>
              <p>We do not store personal data. Anonymous analytics data is retained for up to 12 months.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Contact</h2>
              <p>Questions about this policy: <a href="mailto:support@p999apk.io" className="text-gold-400 hover:text-gold-300">support@p999apk.io</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
