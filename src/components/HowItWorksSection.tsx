import { BrainCircuit, Sparkles, Target, Wallet } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Track what comes in",
    description: "Log paychecks, tips, sales, and side-hustle income in a few taps while it is fresh.",
    icon: Wallet,
    gradient: "from-primary/16 via-cyan/12 to-white",
    border: "border-primary/25",
  },
  {
    num: "02",
    title: "Choose a goal",
    description: "Create a savings target for something real, then watch each deposit push it forward.",
    icon: Target,
    gradient: "from-cyan/14 via-primary/10 to-white",
    border: "border-cyan/25",
  },
  {
    num: "03",
    title: "Build momentum",
    description: "Streaks, progress bars, and small wins make it easier to keep going every week.",
    icon: Sparkles,
    gradient: "from-accent/14 via-primary/10 to-white",
    border: "border-accent/25",
  },
  {
    num: "04",
    title: "Get smarter guidance",
    description: "Receive calm AI prompts and bite-sized lessons that help teens learn by doing, not by cramming.",
    icon: BrainCircuit,
    gradient: "from-primary/14 via-accent/10 to-white",
    border: "border-primary/25",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-12" />
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">How it works</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Simple enough to start fast, smart enough to <span className="text-gradient-neon">grow with them</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.num} className="surface-card rounded-[1.75rem] p-7 flex flex-col items-center text-center shadow-[0_18px_50px_rgba(63,104,142,0.08)]">
              <div
                className={`w-28 h-28 rounded-[1.6rem] bg-gradient-to-br ${step.gradient} border ${step.border} flex items-center justify-center mb-6`}
              >
                <step.icon className="w-11 h-11 text-foreground/80" strokeWidth={1.6} />
              </div>

              <span className="font-display text-5xl font-bold text-muted-foreground/20 mb-2">
                {step.num}
              </span>

              <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
