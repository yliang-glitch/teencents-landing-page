import { PiggyBank, Rocket, Lightbulb, LineChart } from "lucide-react";

const benefits = [
  {
    icon: PiggyBank,
    title: "Capture Every Hustle Dollar",
    description: "Track reselling, gigs, content earnings, tips, and online sales — no spreadsheets, no hassle.",
    color: "text-primary",
    iconBg: "from-primary/25 to-cyan/20",
    glow: "group-hover:shadow-[0_0_32px_hsl(172_72%_52%/0.35)]",
  },
  {
    icon: Rocket,
    title: "Save for Real Teen Goals",
    description: "Visual progress buckets made for what actually matters: phone drops, concert tickets, trips, first-car funds, and more.",
    color: "text-accent",
    iconBg: "from-accent/30 to-primary/20",
    glow: "group-hover:shadow-[0_0_32px_hsl(34_92%_58%/0.35)]",
  },
  {
    icon: Lightbulb,
    title: "Gain Financial Independence",
    description: "Streaks, challenges, and milestones that turn money habits into real skills and independence — never feels like homework",
    color: "text-cyan",
    iconBg: "from-cyan/30 to-primary/20",
    glow: "group-hover:shadow-[0_0_32px_hsl(196_95%_56%/0.35)]",
  },
  {
    icon: LineChart,
    title: "Practice Growing Money Risk-Free",
    description: "Simulate investing decisions and watch compound growth happen — zero real money risk, all the future smarts.",
    color: "text-primary",
    iconBg: "from-primary/25 to-accent/20",
    glow: "group-hover:shadow-[0_0_32px_hsl(172_72%_52%/0.35)]",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">
            Why TeenCents
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Money tools teens will <span className="text-gradient-accent">actually use</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group surface-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${b.glow}`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${b.iconBg} border border-border/70 mb-5 flex items-center justify-center shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}>
                <b.icon className={`w-9 h-9 ${b.color}`} strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                0{i + 1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
