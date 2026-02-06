import { useState } from "react";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-gradient-accent">own your money</span>?
        </h2>

        <div className="mt-8">
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
                Join the waitlist now
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <span className="text-primary font-semibold">🎉 You're on the list!</span>
            </div>
          )}
          <p className="mt-4 text-sm text-muted-foreground">
            First 500 get early access + exclusive beta perks
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
