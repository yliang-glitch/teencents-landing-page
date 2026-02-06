import { Wallet, Target, Rocket } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Log your money in seconds",
    description: "Hustles, spends, whatever — tap it in and move on.",
    icon: Wallet,
    gradient: "from-primary/20 to-cyan/20",
    border: "border-primary/30",
  },
  {
    num: "02",
    title: "Set goals that actually matter",
    description: "New phone, concert tickets, car fund — watch them grow.",
    icon: Target,
    gradient: "from-accent/20 to-primary/20",
    border: "border-accent/30",
  },
  {
    num: "03",
    title: "Level up with challenges",
    description: "Fun challenges & safe investing practice — no real money at risk.",
    icon: Rocket,
    gradient: "from-cyan/20 to-accent/20",
    border: "border-cyan/30",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center mb-16">
          How it <span className="text-gradient-neon">works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Illustration placeholder */}
              <div
                className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.gradient} border ${step.border} flex items-center justify-center mb-6`}
              >
                <step.icon className="w-12 h-12 text-foreground/80" strokeWidth={1.5} />
              </div>

              {/* Number */}
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
