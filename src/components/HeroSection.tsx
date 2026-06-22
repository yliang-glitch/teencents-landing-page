import WaitlistForm from "./WaitlistForm";

const recentActivity = [
  { label: "Babysitting", date: "May 14", amount: "+$60.00", positive: true, icon: "🙂" },
  { label: "Dog Walking", date: "May 12", amount: "+$25.00", positive: true, icon: "🐶" },
  { label: "Target", date: "May 10", amount: "-$23.40", positive: false, icon: "🎯" },
  { label: "Ice Cream", date: "May 9", amount: "-$6.50", positive: false, icon: "🍦" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 geo-grid opacity-[0.1]" />
      <div className="absolute left-[-10%] top-8 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[-4%] top-20 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-accent/14 via-primary/10 to-cyan/14 blur-3xl" />
      <div className="absolute right-[10%] top-[24%] hidden h-80 w-80 rounded-full border border-primary/12 bg-gradient-to-br from-accent/8 to-cyan/8 lg:block" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/18 bg-white/88 px-5 py-3 shadow-[0_12px_32px_rgba(63,104,142,0.08)] backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="text-sm text-accent">⚡</span>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">
              The money app for teens
            </span>
          </div>

          <h1 className="mt-8 font-display text-[3.25rem] font-bold uppercase leading-[0.92] tracking-[-0.04em] text-foreground opacity-0 animate-fade-up-delay-1 sm:text-[4.4rem] lg:text-[5.7rem]">
            Your first
            <span className="mt-3 block bg-gradient-to-r from-accent via-primary to-cyan bg-clip-text text-transparent">
              $1,000
            </span>
            <span className="mt-2 block">starts here.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up-delay-2 sm:text-[1.45rem] lg:mx-0">
            Track money from jobs and side hustles. Save for what matters. Get smart about money—early.
          </p>

          <div className="mt-10 opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle buttonText="Join the Beta" className="lg:mx-0" />
            <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-2xl bg-white/90 px-2 py-1 pr-5 text-sm font-semibold text-foreground shadow-[0_12px_28px_rgba(63,104,142,0.08)] transition-all hover:-translate-y-0.5 hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-white text-base text-foreground/80">
                  ▶
                </span>
                See how it works
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[
                ["A", "from-pink-200 to-purple-200"],
                ["J", "from-blue-200 to-cyan-200"],
                ["M", "from-emerald-200 to-teal-200"],
              ].map(([initial, colors], index) => (
                <span
                  key={initial}
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br ${colors} text-sm font-bold text-foreground shadow-[0_10px_22px_rgba(63,104,142,0.1)]`}
                  style={{ zIndex: 4 - index }}
                >
                  {initial}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-accent">☆☆☆☆☆</span>
              <span>4.9 from 500+ teens</span>
            </div>
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-up-delay-2">
          <div className="absolute inset-x-12 top-16 h-[24rem] rounded-full bg-gradient-to-br from-accent/18 via-primary/10 to-cyan/16 blur-3xl" />
          <div className="relative mx-auto max-w-[22rem] rounded-[3rem] border border-border/70 bg-white/88 p-3 shadow-[0_36px_90px_rgba(63,104,142,0.16)] backdrop-blur-xl">
            <div className="rounded-[2.6rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(243,248,255,0.96))] px-5 pb-5 pt-4 shadow-inner">
              <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-foreground/10" />

              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 via-primary/20 to-cyan/30 text-lg shadow-sm">
                    🧑🏽
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Hey, Alex! 👋</p>
                    <p className="text-sm text-muted-foreground">Let's build your future.</p>
                  </div>
                </div>
                <span className="text-lg text-foreground/70">◌</span>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.7rem] border border-border/70 bg-white/94 p-5 shadow-[0_16px_36px_rgba(63,104,142,0.07)]">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Balance</p>
                  <div className="mt-2 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-display text-[2.3rem] font-bold leading-none text-foreground">$387.50</p>
                      <p className="mt-3 text-sm text-muted-foreground">This month</p>
                    </div>
                    <p className="text-base font-semibold text-cyan">+$84.20</p>
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-border/70 bg-white/94 p-5 shadow-[0_16px_36px_rgba(63,104,142,0.07)]">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Goal</p>
                      <p className="mt-2 font-display text-2xl font-bold text-foreground">MacBook Air</p>
                    </div>
                    <span className="text-3xl">💻</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-accent via-primary to-cyan" />
                    </div>
                    <span className="text-sm font-medium text-foreground/80">67%</span>
                  </div>
                </div>

                <div className="rounded-[1.7rem] border border-border/70 bg-white/94 p-5 shadow-[0_16px_36px_rgba(63,104,142,0.07)]">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Recent activity</p>
                    <a href="#features" className="text-sm font-medium text-primary">
                      See all
                    </a>
                  </div>

                  <div className="space-y-3">
                    {recentActivity.map((item) => (
                      <div key={item.label} className="flex items-center justify-between gap-3 rounded-2xl px-2 py-1">
                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-lg">
                            {item.icon}
                          </span>
                          <div>
                            <p className="font-medium text-foreground">{item.label}</p>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                        </div>
                        <p className={`text-base font-semibold ${item.positive ? "text-cyan" : "text-red-500"}`}>
                          {item.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-5 gap-2 rounded-[1.5rem] border border-border/70 bg-white/92 px-3 py-2 text-center text-[11px] text-muted-foreground">
                {[
                  ["🏠", "Home"],
                  ["🎯", "Goals"],
                  ["💸", "Earn"],
                  ["📚", "Learn"],
                  ["👤", "Profile"],
                ].map(([icon, label]) => (
                  <div key={label} className="flex flex-col items-center gap-1 rounded-xl py-2">
                    <span className="text-base">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
