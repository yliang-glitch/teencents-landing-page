import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-25" />
      <div className="absolute -left-20 top-28 h-72 w-72 rounded-[42%_58%_58%_42%/47%_39%_61%_53%] bg-primary/20 blur-2xl pointer-events-none" />
      <div className="absolute right-[-120px] top-20 h-96 w-96 rounded-[66%_34%_45%_55%/40%_56%_44%_60%] bg-accent/20 blur-2xl pointer-events-none" />
      <div className="absolute left-[18%] bottom-12 h-56 w-56 rounded-[52%_48%_34%_66%/45%_35%_65%_55%] bg-cyan/15 blur-2xl pointer-events-none" />
      {/* Floating geometric shapes */}
      <div className="absolute bottom-24 right-[12%] w-16 h-16 rounded-full border border-accent/30 animate-float opacity-45" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-[6%] w-12 h-12 rounded-lg border border-cyan/30 rotate-45 animate-float opacity-30" style={{ animationDelay: "4s" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.02fr_0.98fr] gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-secondary/65 backdrop-blur-sm mb-7">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-primary">
              Beta Access Open
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.98] tracking-tight mb-6">
            Stop reading about money.
            <br />
            Start{" "}
            <span className="text-gradient-accent">
              visualizing the hustle.
            </span>
          </h1>

          <p className="opacity-0 animate-fade-up-delay-2 text-lg sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            The AI-powered command center for your first $1,000. Track hustle income, spot opportunities, and level up confidence daily.
          </p>

          <div className="opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle />
            <p className="mt-4 text-sm text-muted-foreground">
              Built for teen momentum, not textbook finance.
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-up-delay-2 rounded-3xl p-1.5 bg-gradient-to-br from-primary/20 via-accent/15 to-cyan/20 border border-border/60">
          <div className="surface-card rounded-[22px] p-4 sm:p-5">
            <div className="mb-3 rounded-2xl border border-border/70 bg-background/60 px-4 py-3 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <span className="h-3 w-3 rounded-full bg-primary" />
                5 New Hustles Available
              </span>
              <span className="text-xs text-muted-foreground">Updated now</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="relative rounded-2xl overflow-hidden min-h-[190px] border border-border/70 bg-gradient-to-br from-secondary/80 to-background/90">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,hsl(var(--primary)/0.25),transparent_50%),radial-gradient(circle_at_80%_80%,hsl(var(--accent)/0.22),transparent_52%)]" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-foreground/90">#Lifestyle</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden min-h-[190px] border border-border/70 bg-gradient-to-br from-secondary/80 to-background/90">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,hsl(var(--cyan)/0.22),transparent_45%),radial-gradient(circle_at_20%_78%,hsl(var(--accent)/0.18),transparent_48%)]" />
                <div className="absolute bottom-3 left-3 text-xs font-semibold tracking-wide text-foreground/90">#Building</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-background/60 px-4 py-4">
              <p className="text-4xl font-display font-bold text-cyan">+$124.50</p>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mt-1">Weekly profit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
