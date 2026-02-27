import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden geo-pattern pt-20">
      {/* Grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-25" />

      {/* Floating geometric shapes */}
      <div className="absolute top-28 left-[8%] w-20 h-20 rounded-xl border border-primary/30 rotate-12 animate-float opacity-50" />
      <div className="absolute bottom-24 right-[12%] w-16 h-16 rounded-full border border-accent/30 animate-float opacity-45" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-[6%] w-12 h-12 rounded-lg border border-cyan/30 rotate-45 animate-float opacity-30" style={{ animationDelay: "4s" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/60 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Built for teens, trusted by parents
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
            Build <span className="text-gradient-neon">money confidence</span> before adulthood.
          </h1>

          <p className="opacity-0 animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            TeenCents helps teens track income, control spending, and hit savings goals with a product that feels like their world.
          </p>

          <div className="opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle />
            <p className="mt-4 text-sm text-muted-foreground">
              Early beta opens this spring for limited families
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-up-delay-2 mesh-panel rounded-3xl p-6 sm:p-7">
          <div className="surface-card rounded-2xl p-5">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-muted-foreground">This week</p>
              <p className="text-sm font-semibold text-primary">+18% savings rate</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="rounded-xl bg-secondary/55 p-4 border border-border/70">
                <p className="text-xs text-muted-foreground mb-1">Side hustle</p>
                <p className="font-display text-2xl font-bold">$86</p>
              </div>
              <div className="rounded-xl bg-secondary/55 p-4 border border-border/70">
                <p className="text-xs text-muted-foreground mb-1">Goal progress</p>
                <p className="font-display text-2xl font-bold">74%</p>
              </div>
            </div>
            <div className="w-full h-2 rounded-full bg-secondary/70 overflow-hidden mb-3">
              <div className="h-full w-3/4 bg-gradient-to-r from-primary to-cyan rounded-full" />
            </div>
            <p className="text-xs text-muted-foreground">Phone upgrade fund: $445 of $600</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
