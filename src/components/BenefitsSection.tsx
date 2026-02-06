import { TrendingUp, Target, Gamepad2, LineChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Track Every Hustle",
    description: "Log income from side gigs, allowance, Venmo, Depop — see exactly what comes in.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_hsl(82_85%_55%/0.3)]",
  },
  {
    icon: Target,
    title: "Crush Your Goals",
    description: "Set targets (new phone, concert tickets, car fund) and watch visual progress fill up.",
    color: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_hsl(315_85%_60%/0.3)]",
  },
  {
    icon: Gamepad2,
    title: "Fun Money Challenges",
    description: "Earn XP, badges and streaks by logging, saving and learning — feels like a game.",
    color: "text-cyan",
    glow: "group-hover:shadow-[0_0_30px_hsl(185_85%_55%/0.3)]",
  },
  {
    icon: LineChart,
    title: "Safe Investing Playground",
    description: "Play with virtual investing to see compound growth — no real money at risk.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_hsl(82_85%_55%/0.3)]",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 ${b.glow}`}
            >
              <b.icon className={`w-10 h-10 mb-4 ${b.color}`} strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
