export default function Home() {
  const faqs = [
    {
      q: "How does the timezone analysis work?",
      a: "You add your team members with their locations. Our engine calculates overlapping working hours and scores each time slot based on fairness — minimizing early mornings and late nights for everyone."
    },
    {
      q: "What counts as a fair meeting time?",
      a: "We define fair as a time slot where the fewest people are outside their 9–6 local window. The scheduler ranks all options and highlights the top picks with a fairness score."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. You can cancel at any time from your billing portal. You keep access until the end of your billing period with no questions asked."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For remote teams &amp; distributed startups
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Find optimal meeting times<br />
          <span className="text-[#58a6ff]">across every timezone</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop guessing. Add your team, get ranked time slots that minimize after-hours attendance — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start scheduling — $7/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[["🌍", "Any timezone"], ["⚖️", "Fairness scoring"], ["📅", "Instant results"]].map(([icon, label]) => (
            <div key={label as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-sm text-[#8b949e]">{label as string}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$7</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited team members",
              "Timezone overlap analysis",
              "Fairness-ranked time slots",
              "Export to calendar",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} TimeZone Scheduler. All rights reserved.
      </footer>
    </main>
  );
}
