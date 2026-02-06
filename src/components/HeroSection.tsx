import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

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
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 px-5 py-3.5 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-body"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-base hover:brightness-110 transition-all animate-pulse-glow cursor-pointer"
              >
                Join the waitlist
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-semibold">🎉 You're on the list!</span>
            </div>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            Early access — limited spots
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
