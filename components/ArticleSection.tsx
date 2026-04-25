"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Shield, ChevronRight } from "lucide-react";

/* ─── TABLE OF CONTENTS ──────────────────────────────────────── */
const TOC = [
  { id: "introduction", label: "What Is the P999 Game?" },
  { id: "real-or-fake", label: "Real or Fake? Evidence-Based" },
  { id: "features", label: "App Features & Gameplay" },
  { id: "download-guide", label: "How to Download Safely" },
  { id: "login", label: "P999 Login Guide" },
  { id: "withdrawal", label: "Withdrawals & Deposits" },
  { id: "technical", label: "Technical Requirements" },
  { id: "pros-cons", label: "Pros & Cons" },
  { id: "legal", label: "Legal Landscape in Pakistan" },
  { id: "responsible-gaming", label: "Responsible Gaming" },
  { id: "verdict", label: "Final Verdict" },
];

/* ─── ARTICLE CONTENT ────────────────────────────────────────── */
const ARTICLE_HTML = `
<div class="highlight-box-red" style="margin-top:0">
  <p><strong>Disclaimer:</strong> Real money gaming involves financial risk. This article is for informational purposes only and does not constitute financial advice. Use at your own risk. Readers in Pakistan should also be aware of the legal restrictions on gambling-style applications discussed in the Legal Landscape section below.</p>
</div>

<p><em>Last updated: April 2026. Reading time: around 14 minutes.</em></p>

<section id="introduction">
  <h2>Introduction: What Exactly Is the P999 Game?</h2>
  <p>If you have spent any time on Pakistani Facebook groups, TikTok feeds, or WhatsApp forwards in the past year, you have almost certainly seen the name P999 Game floating around.</p>
  <p>Influencers in Lahore, Karachi, and Islamabad have promoted it as a side income opportunity, while others have warned subscribers to stay far away. The truth, as is usually the case with viral earning apps, sits somewhere in the middle, and depends entirely on which version of P999 you are actually using.</p>
  <p>P999 is not a single product. The name is currently attached to two very different applications circulating in Pakistan.</p>
  <p>The first is the <strong>P999 Puzzle or Casual Edition</strong>. This is a relatively harmless mobile puzzle game with mini-quizzes, match-three boards, and trivia rounds. It contains advertisements and a small in-app currency, but no real-money cash-out feature.</p>
  <p>The second is the <strong>P999 Earning Edition</strong>, often referred to as the RMG version. This is a real-money gaming platform offering casino-style mechanics including the P999 Aviator game, slot machines, color-prediction boards, and instant card games. This version connects to EasyPaisa and JazzCash for deposits and withdrawals, and is the one driving most search traffic for terms like <em>P999 earning app Pakistan</em>.</p>
  <p>This review focuses primarily on the second version, because that is the one carrying genuine financial risk for users, and the one most likely to land in Google searches for <em>P999 real or fake</em>. We will cover safe download practices, withdrawal mechanics, technical requirements, the broader legal context for users in Pakistan, and a balanced verdict at the end.</p>
  <p>If you are a casual gamer simply looking for puzzle entertainment, you can skip ahead to the Technical Requirements section. If you are evaluating P999 as an income source, please read every section carefully.</p>
</section>

<section id="real-or-fake">
  <h2>Is P999 Game Real or Fake? An Evidence-Based Look</h2>
  <p>This is the most important question on the page, and it deserves a careful, evidence-based answer rather than a clickbait headline.</p>

  <h3>What Real and Fake Actually Mean Here</h3>
  <p>When users in Pakistan ask whether P999 Game is real or fake, they usually mean one of three things.</p>
  <p>First, does the app actually exist and run on my phone? Yes, the APK exists and functions.</p>
  <p>Second, do the games such as Aviator and slots operate fairly? This is contested and unverifiable.</p>
  <p>Third, will I actually receive my withdrawals via JazzCash or EasyPaisa? Mixed reports, and this is the area of greatest concern.</p>

  <h3>What Trustpilot and Public Reviews Suggest</h3>
  <p>A scan of publicly visible reviews on Trustpilot, the Google Play comments on related apps, and Pakistani Reddit communities such as r/pakistan and r/PakistanTech reveals a familiar pattern seen with most South Asian earning apps.</p>
  <p>Early-cycle users, those who join during a marketing push, frequently report small, successful withdrawals of PKR 500 to PKR 5,000. These positive reviews tend to be short, repetitive, and often clustered within a narrow time window, which is itself a warning sign of incentivized reviews.</p>
  <p>Later-cycle users repeatedly report withdrawal delays, sudden minimum-withdrawal hikes, KYC loops, locked accounts, or a complete disappearance of the platform after they have deposited larger sums.</p>
  <p>A consistent complaint is that customer support channels, typically a WhatsApp number or Telegram group, become unresponsive once a user requests a payout above a certain threshold.</p>
  <p>This life-cycle pattern — small payouts to build trust followed by walls when users try to cash out larger amounts — is common to many unregulated RMG platforms operating in Pakistan, India, and Bangladesh. It does not, on its own, prove fraud, but it is a strong indicator that the app should not be trusted with any money you cannot afford to lose.</p>

  <h3>Red Flags Identified by Independent Researchers</h3>
  <p>Independent researchers and consumer-protection volunteers have flagged several recurring concerns with P999-style platforms.</p>
  <p>There is <strong>no verifiable licensing</strong>. Unlike regulated operators in jurisdictions such as Malta, the UK, or Curaçao, P999 does not publish a license number, a registered company address, or a parent corporation that can be contacted.</p>
  <p>The <strong>ownership is anonymous</strong>. WHOIS data for sites linked to P999 is privacy-shielded, and the listed company, when one is mentioned at all, does not appear in Pakistan's SECP corporate registry.</p>
  <p>There are <strong>aggressive referral structures</strong>. Earnings are heavily tilted toward recruiting new users rather than gameplay outcomes, a structural feature of pyramid-style schemes.</p>

  <h3>So, Real or Fake?</h3>
  <div class="highlight-box">
    <p>The honest, balanced answer is that P999 is a real, functioning application, but it operates outside any consumer-protection framework that a Pakistani user can rely on.</p>
    <p>The puzzle version is harmless. The earning version may pay small amounts to early or low-stakes users, but the structural and behavioral evidence strongly suggests it is not a safe place to deposit meaningful money.</p>
  </div>
  <p>If you have already deposited and are unable to withdraw, your realistic recourse options inside Pakistan are limited. You can file a complaint with the Federal Investigation Agency Cyber Crime Wing through their online portal, but recovery rates for funds lost to unregulated foreign-hosted platforms are historically low.</p>
</section>

<section id="features">
  <h2>App Features and Gameplay</h2>
  <p>P999 centers on an <strong>Aviator crash game</strong> — a fast-paced multiplier mechanic where players cash out before the plane flies off-screen — alongside slot machines, color-prediction boards, big/small wagers, and daily task rewards. EasyPaisa and JazzCash are the supported payment channels, with bets starting from PKR 10. The referral program, which pays a percentage of a downline user's deposits, is heavily promoted inside the app. For a full breakdown of each game mode and earning strategy, see our <a href="/how-to-play-p999">How to Play P999 guide</a> and the dedicated <a href="/p999-aviator-game">P999 Aviator game page</a>.</p>
</section>

<section id="download-guide">
  <h2>How to Download P999 APK</h2>
  <p>Because P999 is not on the Google Play Store, it must be installed as a sideloaded APK — the exact point where most malware risk enters. Only use the official source link, not WhatsApp forwards or third-party APK mirrors. For the full step-by-step install walkthrough, VirusTotal scan instructions, permission checklist, and device requirements, see our dedicated <a href="/download">P999 Download Guide</a>.</p>
</section>

<section id="login">
  <h2>P999 Game Login: What to Expect</h2>
  <p>The P999 game login flow is straightforward but worth flagging for one specific reason. Registration typically requires a Pakistani mobile number used as the username, an OTP sent via SMS, a self-chosen password, and an optional referral code.</p>
  <p>There are two important cautions here.</p>
  <p>First, never reuse a password from your bank, JazzCash, EasyPaisa, or primary email account. If P999's database is breached or sold — and breaches of unregulated RMG operators are common — credential stuffing attacks against your other accounts become trivial.</p>
  <p>Second, treat the OTP step as the moment you are most exposed. Do not install any OTP helper apps the platform may suggest.</p>
</section>

<section id="withdrawal">
  <h2>Withdrawal and Deposit Methods: EasyPaisa and JazzCash</h2>
  <p>For users in Pakistan, the main reason P999 has any traction at all is its integration with the country's two dominant mobile wallets, EasyPaisa and JazzCash. Here is how the flow generally works, and where the friction tends to appear.</p>

  <h3>Deposits</h3>
  <p>The minimum deposit is typically PKR 100 to PKR 300, depending on the campaign.</p>
  <p>The user enters an amount, selects EasyPaisa or JazzCash, and is shown a recipient mobile number or merchant ID. The user then initiates the transfer manually from their mobile wallet app and enters the transaction ID into the P999 interface. Credit usually appears in the in-app balance within a few minutes.</p>
  <p>This is a manual, agent-style flow, not a true integrated payment gateway. There is no automatic refund mechanism if the deposit fails to reflect, and the recipient mobile number can change between sessions — a structural weakness that has caused users to send funds to a stale account.</p>

  <h3>Withdrawals</h3>
  <p>This is where most user complaints concentrate. The typical journey is as follows.</p>
  <p>The minimum withdrawal threshold is advertised at PKR 300 to PKR 500, but is reported by multiple users to be raised retroactively to PKR 1,500 or higher once a user attempts to cash out.</p>
  <p>A KYC step is often introduced at the withdrawal stage, requiring CNIC photos, a selfie, and sometimes a utility bill. This is sensitive personal data being handed to an unregulated, anonymously owned platform.</p>
  <p>Processing times advertised as within 24 hours frequently extend to 3 to 7 days, then indefinitely.</p>
  <p>Users in Karachi, Lahore, Faisalabad, and smaller cities have all reported the same pattern.</p>
</section>

<section id="technical">
  <h2>Technical Requirements</h2>
  <p>For users who simply want to know whether their phone can run the application, the technical footprint is modest. These figures apply to the earning edition. The puzzle edition is even lighter.</p>
  <table>
    <thead>
      <tr>
        <th>Requirement</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Operating System</td><td>Android 8.0 Oreo or higher</td></tr>
      <tr><td>iOS Support</td><td>Not supported — any P999 for iPhone link should be treated as a phishing attempt</td></tr>
      <tr><td>RAM</td><td>3 GB minimum; 4 GB or more recommended for smooth Aviator gameplay</td></tr>
      <tr><td>Storage</td><td>~120 MB base APK; grows to 300–400 MB after a week of use</td></tr>
      <tr><td>Internet</td><td>Stable 4G or Wi-Fi required (crash games are time-sensitive)</td></tr>
      <tr><td>Display</td><td>Any resolution; optimized for 6-inch and larger screens</td></tr>
    </tbody>
  </table>
  <p>The app does not require a high-end device. The most relevant technical question is not whether your phone can run it, but whether you should install it on the same device that holds your real banking apps. For most users, the answer to that is no.</p>
</section>

<section id="pros-cons">
  <h2>Pros and Cons of the P999 Game</h2>
  <p>Here are the main advantages users might highlight.</p>
  <ul>
    <li>It is a lightweight APK that runs on most mid-range Android phones.</li>
    <li>It is localized for Pakistan with EasyPaisa and JazzCash deposit support.</li>
    <li>The Aviator and slots gameplay loop is fast and visually polished.</li>
    <li>The low entry barrier allows deposits from as little as PKR 100.</li>
    <li>There is an active Telegram community for tips and updates.</li>
    <li>The free puzzle edition is genuinely harmless for casual play.</li>
  </ul>
  <p>Now the disadvantages, which in this case carry significantly more weight.</p>
  <ul>
    <li>The app is not available on the Google Play Store, meaning sideloading is required.</li>
    <li>There is no verifiable license or registered corporate ownership.</li>
    <li>Withdrawal complaints are widespread and follow a recognizable pattern.</li>
    <li>The KYC step requires handing CNIC and selfie data to an anonymous operator.</li>
    <li>There is heavy reliance on referral earnings that resembles a pyramid structure.</li>
    <li>The RNG outcomes for Aviator and slots are not independently audited.</li>
    <li>The platform operates in a legal grey zone under Pakistani gambling law.</li>
    <li>Domain and recipient account changes are frequent, indicating PTA evasion.</li>
  </ul>
</section>

<section id="legal">
  <h2>The Legal Landscape: RMG in Pakistan</h2>
  <p>Any honest review of an earning game in Pakistan has to address the legal context, because it directly affects user risk.</p>
  <p>Gambling for stakes is broadly prohibited in Pakistan under the <strong>Public Gambling Act of 1977</strong>, with provincial amendments in Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan reinforcing the prohibition.</p>
  <p>The Pakistan Telecommunication Authority routinely blocks domains and applications associated with online gambling, and the State Bank of Pakistan has issued advisories discouraging the use of mobile wallets for gambling-style transactions.</p>
  <p>Crash games like P999 Aviator, slot machines, and color-prediction games fall squarely within the definition of games of chance for stakes that the Public Gambling Act addresses. While individual user prosecution is rare, the legal status of the platform itself — and the recourse available to users who lose money — is effectively zero. There is no Pakistani regulator you can complain to that has authority over an offshore unregulated operator.</p>
  <p>This is meaningfully different from regulated jurisdictions such as the UK, Malta, parts of the EU, or US states like New Jersey, where licensed operators are bound by rules on fairness, dispute resolution, and player protection.</p>
</section>

<section id="responsible-gaming">
  <h2>Responsible Gaming Considerations</h2>
  <p>Even setting aside the platform-specific risks of P999, the gameplay style itself — featuring fast cycles, near-miss visuals, and rising-multiplier tension — is engineered to encourage continuous play.</p>
  <p>Independent research on crash games and slots consistently shows that they are among the most associated with problem-gambling behaviors in the under-30 demographic.</p>
  <p>If you choose to play any RMG product, please observe the following baseline practices.</p>
  <ul>
    <li>Set a strict deposit limit before you log in, not after a losing session.</li>
    <li>Never chase losses by increasing bet sizes.</li>
    <li>Treat any money sent to the platform as already spent and unrecoverable.</li>
    <li>Do not borrow money or use credit to fund deposits.</li>
    <li>If you find yourself thinking about the game during work or losing sleep over it, that is the moment to stop, not after one more round.</li>
  </ul>
  <p>Pakistan does not currently have a national gambling-addiction helpline equivalent to those in the UK or Australia. Local mental health resources, including the Pakistan Association for Mental Health and university-affiliated counseling services in major cities, can be a starting point if you or someone in your family is showing signs of compulsive play.</p>
  <p>For lower-risk income alternatives, see the guide to the best earning apps in Pakistan 2026.</p>
</section>

<section id="verdict">
  <h2>Final Verdict: Should You Play P999?</h2>
  <p>After weighing the available evidence, here is the honest bottom line for readers in Pakistan.</p>
  <p>For the <strong>puzzle edition</strong>, it is a perfectly reasonable casual time-killer. There is no real money involved, the worst-case outcome is some advertising fatigue, and it can be uninstalled freely. No special warning is needed.</p>
  <p>For the <strong>earning edition</strong>, which is the one most users are searching for, this site cannot recommend it. The combination of unverifiable ownership, unaudited gameplay outcomes, a withdrawal-complaint pattern that mirrors well-documented exit-scam life cycles, sensitive-data exposure through KYC, and the broader illegality of RMG in Pakistan adds up to a risk profile that is simply too high for the modest sums most users are likely to win.</p>
  <p>If your goal is genuinely to earn supplemental income from your phone in Pakistan, you will be far better served by skill-based freelancing platforms, content creation, tutoring marketplaces, e-commerce reselling, or remote micro-task platforms.</p>
  <p>None of these will give you the dopamine hit of an Aviator multiplier climbing past 5x, but none of them will lock your CNIC inside an anonymous server in an unknown jurisdiction either.</p>
  <blockquote>Should you play it? If you are doing so purely for entertainment, with money you would otherwise spend on a movie ticket, and you have followed every safety step in the download section above, the experience is yours to choose. If you are treating it as an income source, even a small one, the structural evidence points firmly in one direction. The house, in this case, is also the dealer, the regulator, and the appeals court. That is not a game worth funding.</blockquote>
  <p>Stay informed, stay cautious, and protect your CNIC and mobile wallet credentials at all costs.</p>
  <p>For answers to the most common P999 questions — deposits, withdrawals, account issues, and comparisons with other platforms — see our <a href="/p999-faqs">P999 Frequently Asked Questions page</a>.</p>
</section>
`;

/* ─── COMPONENT ──────────────────────────────────────────────── */
function SectionFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ArticleSection() {
  return (
    <article
      id="article"
      className="relative py-16 sm:py-20"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/60 to-dark-900 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0">
            <div className="sticky top-24">
              <SectionFade>
                {/* TOC */}
                <div className="glass rounded-2xl p-5 mb-5">
                  <p className="text-sm font-bold text-gold-400 uppercase tracking-widest mb-4">
                    Table of Contents
                  </p>
                  <nav aria-label="Article sections">
                    <ul className="space-y-1">
                      {TOC.map(({ id, label }) => (
                        <li key={id}>
                          <a
                            href={`#${id}`}
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 py-1.5 px-2 rounded-lg hover:bg-white/[0.04] transition-all duration-150 group"
                          >
                            <ChevronRight
                              size={12}
                              className="text-slate-600 group-hover:text-gold-500 transition-colors flex-shrink-0"
                            />
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Sidebar CTA */}
                <div className="glass-gold rounded-2xl p-5">
                  <p className="text-sm font-bold text-gold-400 mb-1">
                    Ready to Start?
                  </p>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                    Get the latest P999 APK — read the safety steps first.
                  </p>
                  <a
                    href="/download"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-bold text-sm rounded-xl hover:from-gold-400 hover:to-gold-500 transition-all duration-200 shadow-gold"
                  >
                    <Download size={14} strokeWidth={2.5} />
                    Download Guide
                  </a>
                  <a
                    href="#real-or-fake"
                    className="flex items-center justify-center gap-2 w-full mt-2.5 py-2.5 glass border border-white/[0.08] hover:border-slate-600 text-slate-300 font-semibold text-sm rounded-xl transition-all duration-200"
                  >
                    <Shield size={14} className="text-emerald-400" />
                    Safety Review
                  </a>
                </div>
              </SectionFade>
            </div>
          </aside>

          {/* ── Main article ── */}
          <div className="flex-1 min-w-0">
            {/* Article header */}
            <SectionFade>
              <header className="mb-10">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 glass-gold rounded-full text-xs font-semibold text-gold-400 uppercase tracking-wider">
                    Full Review
                  </span>
                  <span className="px-3 py-1 glass rounded-full text-xs font-medium text-slate-400">
                    Pakistan
                  </span>
                  <span className="px-3 py-1 glass rounded-full text-xs font-medium text-slate-400">
                    April 2026
                  </span>
                </div>
                <h1
                  className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4"
                  itemProp="headline"
                >
                  P999 Game App Review and{" "}
                  <span className="text-gradient-gold">
                    Safety Warnings
                  </span>{" "}
                  for Pakistani Users in 2026
                </h1>
                <p
                  className="text-slate-400 text-base leading-relaxed max-w-2xl"
                  itemProp="description"
                >
                  An honest, evidence-based look at{" "}
                  <strong className="text-slate-200">P999 Game</strong> — is it
                  real or fake? Full download guide, withdrawal mechanics,
                  technical requirements, and the legal picture for Pakistani
                  users.
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-white/[0.06]">
                  <span
                    className="text-xs text-slate-500"
                    itemProp="datePublished"
                    content="2026-04-01"
                  >
                    Published: April 2026
                  </span>
                  <span
                    className="text-xs text-slate-500"
                    itemProp="dateModified"
                    content="2026-04-23"
                  >
                    Updated: April 2026
                  </span>
                  <span className="text-xs text-slate-500">⏱ 14 min read</span>
                </div>
              </header>
            </SectionFade>

            {/* Mobile TOC */}
            <SectionFade>
              <div className="lg:hidden glass rounded-2xl p-4 mb-8">
                <p className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-3">
                  Jump to section
                </p>
                <div className="flex flex-wrap gap-2">
                  {TOC.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="text-xs px-3 py-1.5 glass rounded-lg text-slate-400 hover:text-gold-400 hover:border-gold-500/20 border border-transparent transition-all duration-150"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </SectionFade>

            {/* Article content */}
            <SectionFade>
              <div
                className="article-prose"
                itemProp="articleBody"
                dangerouslySetInnerHTML={{ __html: ARTICLE_HTML }}
              />
            </SectionFade>

            {/* End CTA */}
            <SectionFade>
              <div className="mt-12 p-6 sm:p-8 glass-gold rounded-3xl text-center">
                <h3 className="text-xl font-black text-white mb-2">
                  Ready to Download P999?
                </h3>
                <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                  Read our step-by-step APK install guide, safety checklist,
                  and device requirements before you install.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/download"
                    className="flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-gold-500 to-gold-600 text-dark-900 font-black text-base rounded-xl shadow-gold hover:shadow-gold-lg transition-all duration-200 hover:scale-[1.03]"
                  >
                    <Download size={18} strokeWidth={2.5} />
                    Download Guide
                  </a>
                  <a
                    href="#verdict"
                    className="flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/10 hover:border-gold-500/30 text-slate-200 font-semibold text-base rounded-xl transition-all duration-200"
                  >
                    Read Final Verdict
                  </a>
                </div>
                <p className="mt-4 text-xs text-slate-600">
                  ⚠️ Disclaimer: Real money gaming involves financial risk. This
                  article is for informational purposes only.
                </p>
              </div>
            </SectionFade>
          </div>
        </div>
      </div>
    </article>
  );
}
