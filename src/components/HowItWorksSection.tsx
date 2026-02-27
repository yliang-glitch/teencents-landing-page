import { Wallet, Target, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Log it fast",
    description: "Drop in spending and earnings in seconds, right when it happens.",
    icon: Wallet,
    gradient: "from-primary/20 to-cyan/20",
    border: "border-primary/30",
  },
  {
    num: "02",
    title: "Lock in a goal",
    description: "Pick what you want next, then watch your progress level up weekly.",
    icon: Target,
    gradient: "from-accent/20 to-primary/20",
    border: "border-accent/30",
  },
  {
    num: "03",
    title: "Level up confidence",
    description: "Use challenges and safe simulations to build skills before real stakes.",
    icon: Rocket,
    gradient: "from-cyan/20 to-accent/20",
    border: "border-cyan/30",
  },
  {
    num: "04",
    title: "AI-native, not overwhelming",
    description: "Intelligence reduces friction and personalizes guidance without overwhelming users.",
    icon: Sparkles,
    gradient: "from-accent/20 to-cyan/20",
    border: "border-accent/30",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-12" />
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
          How it <span className="text-gradient-neon">works</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => (
            <div key={step.num} className="surface-card rounded-2xl p-7 flex flex-col items-center text-center">
              {/* Illustration placeholder */}
              <div
                className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.gradient} border ${step.border} flex items-center justify-center mb-6`}
              >
                <step.icon className="w-12 h-12 text-foreground/80" strokeWidth={1.5} />
              </div>

              {/* Number */}
              <span className="font-display text-5xl font-bold text-muted-foreground/25 mb-2">
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
