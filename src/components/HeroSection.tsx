import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-32">
      <div className="absolute inset-0 geo-grid opacity-[0.12]" />
      <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute right-[4%] top-20 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-primary/14 via-accent/12 to-cyan/14 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-[0_12px_32px_rgba(63,104,142,0.08)] backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-cyan" />
            Built for teens, trusted by parents
          </div>

          <h1 className="mt-7 font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground opacity-0 animate-fade-up-delay-1 sm:text-5xl md:text-6xl">
            Your first <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">$1,000</span> starts here.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up-delay-2 sm:text-xl lg:mx-0">
            Track money from jobs and side hustles. Save for what matters. Get smart about money—early.
          </p>

          <div className="mt-10 opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle className="lg:mx-0" />
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border/80 bg-white/85 px-5 py-3 text-sm font-semibold text-foreground shadow-[0_12px_30px_rgba(63,104,142,0.08)] transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
              >
                See how it works
              </a>
              <p className="text-sm text-muted-foreground">Get launch updates, beta invites, and product news.</p>
            </div>
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-up-delay-2">
          <div className="absolute inset-x-10 top-12 h-[28rem] rounded-full bg-gradient-to-br from-primary/18 via-accent/12 to-cyan/16 blur-3xl" />
          <div className="relative mx-auto max-w-[24rem] rounded-[2.8rem] border border-border/70 bg-white/88 p-3 shadow-[0_34px_80px_rgba(63,104,142,0.16)] backdrop-blur-xl">
            <div className="rounded-[2.3rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,248,255,0.96))] p-5 shadow-inner">
              <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-foreground/10" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">TeenCents</p>
                  <p className="mt-1 font-display text-3xl font-bold text-foreground">$387.50</p>
                </div>
                <div className="rounded-2xl bg-cyan/12 px-3 py-2 text-right">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">This month</p>
                  <p className="mt-1 text-sm font-semibold text-cyan">+$84.20</p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-border/70 bg-white/90 p-4 shadow-[0_18px_45px_rgba(63,104,142,0.08)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Goal</p>
                    <p className="mt-1 font-display text-xl font-bold text-foreground">MacBook Air</p>
                  </div>
                  <div className="rounded-full bg-primary/12 px-3 py-1 text-sm font-semibold text-primary">67%</div>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-primary via-accent to-cyan" />
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-border/70 bg-white/90 p-4 shadow-[0_18px_45px_rgba(63,104,142,0.08)]">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Recent activity</p>
                  <p className="text-xs font-medium text-muted-foreground">Today</p>
                </div>

                <div className="space-y-3">
                  {[
                    ["Babysitting", "+$60.00", "positive"],
                    ["Dog Walking", "+$25.00", "positive"],
                    ["Target", "-$23.40", "negative"],
                    ["Ice Cream", "-$6.50", "negative"],
                  ].map(([label, amount, tone]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl bg-secondary/70 px-4 py-3">
                      <div>
                        <p className="font-medium text-foreground">{label}</p>
                        <p className="text-sm text-muted-foreground">Tracked instantly</p>
                      </div>
                      <p className={`text-sm font-semibold ${tone === "positive" ? "text-cyan" : "text-foreground/75"}`}>
                        {amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
