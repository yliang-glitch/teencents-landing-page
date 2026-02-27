import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-25" />
      <div className="absolute -left-20 top-28 h-72 w-72 rounded-[42%_58%_58%_42%/47%_39%_61%_53%] bg-primary/20 blur-2xl pointer-events-none" />
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-[66%_34%_45%_55%/40%_56%_44%_60%] bg-accent/20 blur-2xl pointer-events-none" />
      <div className="absolute left-[18%] bottom-12 h-56 w-56 rounded-[52%_48%_34%_66%/45%_35%_65%_55%] bg-cyan/15 blur-2xl pointer-events-none" />
      <div className="absolute left-[6%] top-40 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-secondary/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] pointer-events-none">
        <span className="h-2.5 w-2.5 rounded-full bg-cyan animate-pulse" />
        <span className="text-xs font-semibold text-foreground/90">XP +120</span>
      </div>
      <div className="absolute right-[7%] bottom-24 hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-border/70 bg-secondary/70 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.25)] pointer-events-none">
        <span className="text-sm">🔥</span>
        <span className="text-xs font-semibold text-foreground/90">12 day streak</span>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute bottom-24 right-[12%] w-16 h-16 rounded-full border border-accent/30 animate-float opacity-45" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-[6%] w-12 h-12 rounded-lg border border-cyan/30 rotate-45 animate-float opacity-30" style={{ animationDelay: "4s" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/60 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Built for teens, trusted by parents
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Build money confidence before adulthood — track your hustles, own your goals,{" "}
            <span className="text-gradient-neon">stack your future.</span>
          </h1>

          <p className="opacity-0 animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            From side gigs to savings goals, teens get a money app that feels fun, clear, and built for how they actually live.
          </p>

          <div className="opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle />
            <p className="mt-4 text-sm text-muted-foreground">
              Spring beta is limited. Grab your spot early.
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-up-delay-2 mesh-panel rounded-3xl p-7 sm:p-8">
          <div className="surface-card rounded-2xl p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Total stack</p>
                <p className="font-display text-4xl sm:text-5xl font-bold leading-none">$1,248</p>
                <p className="text-xs text-primary mt-2 font-semibold">+22% this month</p>
              </div>
              <div className="relative w-20 h-20 rounded-[30px] bg-gradient-to-br from-accent/35 via-primary/30 to-cyan/35 border border-border/70 flex items-center justify-center shadow-[0_12px_24px_rgba(0,0,0,0.25)]">
                <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-xl">
                  😎
                </div>
                <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold">
                  LVL 7
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl bg-secondary/55 p-4 border border-border/70">
                <p className="text-xs text-muted-foreground mb-1">Cash in</p>
                <p className="font-display text-2xl font-bold">$164</p>
              </div>
              <div className="rounded-xl bg-secondary/55 p-4 border border-border/70">
                <p className="text-xs text-muted-foreground mb-1">Goal mode</p>
                <p className="font-display text-2xl font-bold">82%</p>
              </div>
            </div>

            <div className="rounded-xl bg-secondary/45 border border-border/70 p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">XP progress</p>
                <p className="text-xs font-semibold text-cyan">760 / 1000 XP</p>
              </div>
              <div className="w-full h-2.5 rounded-full bg-secondary/70 overflow-hidden mb-2">
                <div className="h-full w-[76%] bg-gradient-to-r from-cyan via-primary to-accent rounded-full" />
              </div>
              <p className="text-xs text-muted-foreground">Next unlock: Custom avatar drip pack</p>
            </div>

            <div className="w-full h-2 rounded-full bg-secondary/70 overflow-hidden mb-3">
              <div className="h-full w-[82%] bg-gradient-to-r from-primary to-cyan rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground">Sneaker drop fund: $492 of $600</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
