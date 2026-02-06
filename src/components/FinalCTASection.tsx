import WaitlistForm from "./WaitlistForm";

const FinalCTASection = () => {
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
          <WaitlistForm buttonText="Join the waitlist now" showToggle />
          <p className="mt-4 text-sm text-muted-foreground">
            First 500 get early access + exclusive beta perks
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
