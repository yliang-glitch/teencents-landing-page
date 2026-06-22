import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern pt-20">
      <div className="absolute inset-0 geo-grid opacity-[0.22]" />
      <div className="absolute -left-12 top-28 h-72 w-72 rounded-full bg-primary/14 blur-3xl pointer-events-none" />
      <div className="absolute right-[-80px] top-16 h-96 w-96 rounded-full bg-cyan/16 blur-3xl pointer-events-none" />
      <div className="absolute left-[28%] bottom-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/80 bg-white/85 backdrop-blur-sm mb-8 shadow-[0_10px_30px_rgba(63,104,142,0.08)]">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Built for hustle income, savings goals, and real momentum
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Your first <span className="text-gradient-neon">$1,000</span> starts here.
          </h1>

          <p className="opacity-0 animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Track money from jobs and side hustles. Save for what matters. Get smart about money—early.
          </p>

          <div className="opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle />
            <p className="mt-4 text-sm text-muted-foreground">
              Early access is limited. Join the list before the next beta wave opens.
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-up-delay-2 relative">
          <div className="absolute -top-6 right-6 rounded-2xl border border-primary/15 bg-white/90 px-4 py-3 shadow-[0_18px_45px_rgba(63,104,142,0.12)] backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Weekly win</p>
            <p className="mt-1 text-2xl font-display font-bold text-cyan">+$86.50</p>
          </div>

          <div className="mesh-panel rounded-[2rem] p-5 sm:p-6 shadow-[0_28px_70px_rgba(63,104,142,0.14)]">
            <div className="surface-card rounded-[1.75rem] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Total tracked</p>
                  <p className="font-display text-4xl sm:text-5xl font-bold leading-none">$1,248</p>
                  <p className="text-xs text-cyan mt-2 font-semibold">+18% from last month</p>
                </div>
                <div className="relative w-24 h-24 rounded-[32px] bg-gradient-to-br from-primary/20 via-cyan/20 to-accent/20 border border-border/80 flex items-center justify-center shadow-[0_18px_35px_rgba(63,104,142,0.12)]">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl shadow-inner">
                    <span role="img" aria-label="teen avatar">
                      🧠
                    </span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-cyan/90 text-cyan-foreground text-[10px] font-bold">
                    XP 860
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="rounded-2xl bg-white/80 p-4 border border-border/80">
                  <p className="text-xs text-muted-foreground mb-1">Hustle income</p>
                  <p className="font-display text-2xl font-bold">$164</p>
                  <p className="mt-2 text-xs text-muted-foreground">Tips, sales, gigs</p>
                </div>
                <div className="rounded-2xl bg-white/80 p-4 border border-border/80">
                  <p className="text-xs text-muted-foreground mb-1">Savings streak</p>
                  <p className="font-display text-2xl font-bold">12 days</p>
                  <p className="mt-2 text-xs text-muted-foreground">Momentum stays visible</p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/80 border border-border/80 p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Goal progress</p>
                  <p className="text-xs font-semibold text-primary">$420 / $600</p>
                </div>
                <div className="w-full h-3 rounded-full bg-secondary/90 overflow-hidden mb-3">
                  <div className="h-full w-[70%] bg-gradient-to-r from-primary via-cyan to-accent rounded-full" />
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>New phone fund</span>
                  <span>70% there</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-[1.15fr_0.85fr] gap-3">
                <div className="rounded-2xl border border-border/80 bg-gradient-to-r from-primary/12 via-white to-cyan/14 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">AI guidance</p>
                  <p className="font-semibold text-foreground">You are saving faster this week.</p>
                  <p className="mt-1 text-sm text-muted-foreground">Move $15 from gigs to your phone goal to stay on pace.</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-cyan/10 via-white to-accent/12 p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2">Level up</p>
                  <p className="font-display text-3xl font-bold">7</p>
                  <p className="mt-1 text-sm text-muted-foreground">Learn-by-doing keeps progress moving.</p>
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
