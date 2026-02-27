import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-25" />

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
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/35 via-primary/30 to-cyan/35 border border-border/70 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center text-sm font-display font-bold text-accent">
                  TC
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
