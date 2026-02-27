import WaitlistForm from "./WaitlistForm";

const FinalCTASection = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center mesh-panel rounded-3xl px-6 py-12 sm:px-10">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to launch your teen <span className="text-gradient-accent">money era</span>?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Join the waitlist for early access, feature drops, and first-wave family invites.
        </p>

        <div className="mt-8">
          <WaitlistForm buttonText="Get early access" showToggle />
          <p className="mt-4 text-sm text-muted-foreground">
            First 500 waitlist members unlock bonus beta perks
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
