import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Star, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | P999 APK",
  description:
    "Meet the team behind p999apk.io — independent researchers and app analysts who test and review Pakistani earning apps honestly since 2023.",
  alternates: { canonical: "https://p999apk.io/about" },
};

const AUTHORS = [
  {
    name: "Bilal Raza",
    role: "Lead Analyst & Editor",
    bio: "Bilal has been covering Pakistani fintech and mobile earning apps since 2023. He tests apps hands-on before reviewing them and has written extensively on EasyPaisa/JazzCash payment flows, APK security, and the regulatory landscape for online gaming in Pakistan.",
    expertise: ["App Security", "Withdrawal Analysis", "Pakistan Fintech"],
  },
  {
    name: "Sara Malik",
    role: "Content Researcher",
    bio: "Sara focuses on user experience research and community feedback. She monitors P999 Telegram channels, app stores, and Pakistani tech forums to surface real user reports and identify withdrawal complaints before they reach mainstream awareness.",
    expertise: ["User Research", "Community Monitoring", "Risk Assessment"],
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">About Us</h1>
            <p className="text-slate-400 leading-relaxed">
              P999apk.io is an independent review and information portal covering Pakistani Android earning apps.
              We are not affiliated with P999 Game or its developers. Our goal is to help Pakistani users
              make informed decisions before depositing real money into unregulated platforms.
            </p>
          </div>

          {/* Mission statement */}
          <div className="glass rounded-2xl p-5 mb-10 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-emerald-400" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Our Mission</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              We publish honest, evidence-based reviews that explain both the opportunity and the risk.
              For YMYL content like real-money gaming, we believe users deserve clear safety warnings
              alongside download guides — not just affiliate links.
            </p>
          </div>

          {/* Author cards */}
          <h2 className="text-lg font-bold text-white mb-5">Our Team</h2>
          <div className="space-y-5">
            {AUTHORS.map((author) => (
              <div
                key={author.name}
                className="glass rounded-2xl p-5 sm:p-6 border border-white/[0.06]"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-600/30 to-gold-900/30 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold-400 font-black text-lg">
                      {author.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-white text-base" itemProp="name">
                      {author.name}
                    </h3>
                    <p className="text-gold-400 text-xs font-medium mb-3" itemProp="jobTitle">
                      {author.role}
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4" itemProp="description">
                      {author.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 px-2.5 py-1 glass rounded-lg text-xs text-slate-400"
                        >
                          <BookOpen size={10} className="text-gold-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial standards */}
          <div className="mt-10 glass rounded-2xl p-5 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-3">
              <Star size={13} className="text-gold-400" />
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">Editorial Standards</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">·</span>
                We test apps directly on Android devices before publishing reviews.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">·</span>
                Withdrawal claims are verified against community reports, not just platform marketing.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">·</span>
                We disclose all affiliate relationships transparently.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 mt-0.5">·</span>
                Safety warnings are included on every page, not just the disclaimer.
              </li>
            </ul>
          </div>

          <p className="mt-8 text-sm text-slate-500">
            Questions or corrections?{" "}
            <a href="/contact" className="text-gold-400 hover:text-gold-300 transition-colors">
              Contact us
            </a>{" "}
            or email{" "}
            <a href="mailto:support@p999apk.io" className="text-gold-400 hover:text-gold-300 transition-colors">
              support@p999apk.io
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
