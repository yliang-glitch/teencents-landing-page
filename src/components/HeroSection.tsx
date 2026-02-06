import WaitlistForm from "./WaitlistForm";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geo-pattern">
      {/* Grid overlay */}
      <div className="absolute inset-0 geo-grid opacity-30" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-[10%] w-20 h-20 rounded-xl border border-primary/20 rotate-12 animate-float opacity-40" />
      <div className="absolute bottom-32 right-[15%] w-16 h-16 rounded-full border border-accent/20 animate-float opacity-30" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-[8%] w-12 h-12 rounded-lg border border-cyan/20 rotate-45 animate-float opacity-25" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-1/4 left-[5%] w-24 h-24 rounded-2xl border border-primary/10 -rotate-12 animate-float opacity-20" style={{ animationDelay: "1s" }} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="opacity-0 animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">
            Built for the next generation
          </span>
        </div>

        {/* Headline */}
        <h1 className="opacity-0 animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
          Teens are hustling more than ever —{" "}
          <span className="text-gradient-neon">
            but most don't have the tools
          </span>{" "}
          to keep their money, control spending, or build real independence.
        </h1>

        {/* Subheadline */}
        <p className="opacity-0 animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          <span className="text-foreground font-semibold">Kashly</span> is the
          wallet made for teens. Track every side hustle, crush your goals,
          level up your money game — and start owning your financial future.
        </p>

        {/* CTA */}
        <div className="opacity-0 animate-fade-up-delay-3">
          <WaitlistForm showToggle />
          <p className="mt-4 text-sm text-muted-foreground">
            Early access — limited spots
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
