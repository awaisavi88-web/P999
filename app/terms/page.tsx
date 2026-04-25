import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use — P999 APK",
  description: "Terms of Use for p999apk.io — conditions for accessing this site.",
  alternates: { canonical: "https://p999apk.io/terms" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white mb-6">Terms of Use</h1>
          <p className="text-slate-400 text-sm mb-4">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h2>
              <p>By accessing p999apk.io you agree to these Terms of Use. If you disagree, please leave the site.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">2. Informational Purpose Only</h2>
              <p>All content on this site is for informational and review purposes only. Nothing on this site constitutes financial, legal, or investment advice. We do not guarantee the accuracy of information about third-party applications including P999 Game.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">3. Age Restriction</h2>
              <p>This site discusses real-money gaming applications. You must be at least 18 years old to access this content. By continuing, you confirm you meet this age requirement.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">4. No Affiliation</h2>
              <p>P999apk.io is an independent review portal. We are not affiliated with, endorsed by, or officially connected to P999 Game or its developers.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">5. Limitation of Liability</h2>
              <p>We are not liable for any financial losses, security incidents, or legal consequences arising from the use of third-party applications discussed on this site. Use any application at your own risk.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">6. Changes to Terms</h2>
              <p>These terms may be updated at any time. Continued use of the site constitutes acceptance of the current terms.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">7. Contact</h2>
              <p>Questions: <a href="mailto:support@p999apk.io" className="text-gold-400 hover:text-gold-300">support@p999apk.io</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
