import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer — P999 APK",
  description: "Disclaimer for p999apk.io — important information about the nature of content on this site.",
  alternates: { canonical: "https://p999apk.io/disclaimer" },
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white mb-6">Disclaimer</h1>
          <p className="text-slate-400 text-sm mb-4">Last updated: April 2026</p>

          <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-sm leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-white mb-2">Independent Review Site</h2>
              <p>P999apk.io is an independent review and information portal. We are not the developers of P999 Game and have no official relationship with the platform or its operators.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">Financial Risk Warning</h2>
              <p>Real-money gaming carries significant financial risk. Earnings are not guaranteed. Most players lose money over time on any real-money gaming platform. Never deposit money you cannot afford to lose.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">Legal Status in Pakistan</h2>
              <p>Gambling for stakes is broadly restricted under the Public Gambling Act of 1977 in Pakistan. The legal status of online earning-game platforms operating in Pakistan is contested. Users are responsible for understanding and complying with applicable laws in their jurisdiction.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">No Endorsement</h2>
              <p>Mention of P999 Game or any related platform does not constitute endorsement. Our reviews aim to be honest and factual. Where we identify risks, we report them clearly.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">Accuracy of Information</h2>
              <p>App versions, withdrawal limits, and platform policies change frequently. While we update our content regularly, some information may become outdated. Always verify critical details directly with the platform before making financial decisions.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
              <p>Questions: <a href="mailto:support@p999apk.io" className="text-gold-400 hover:text-gold-300">support@p999apk.io</a></p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
