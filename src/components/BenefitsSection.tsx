import { TrendingUp, Target, Gamepad2, LineChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Capture Every Dollar",
    description: "Track allowance, gigs, tips, and online sales without spreadsheets.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_32px_hsl(172_72%_52%/0.35)]",
  },
  {
    icon: Target,
    title: "Save For Real Goals",
    description: "Visual buckets for what teens actually care about: tech, trips, and first-car funds.",
    color: "text-accent",
    glow: "group-hover:shadow-[0_0_32px_hsl(34_92%_58%/0.35)]",
  },
  {
    icon: Gamepad2,
    title: "Gamified Progress",
    description: "Streaks, challenges, and milestones keep consistency high without feeling like homework.",
    color: "text-cyan",
    glow: "group-hover:shadow-[0_0_32px_hsl(196_95%_56%/0.35)]",
  },
  {
    icon: LineChart,
    title: "Safe Investing Practice",
    description: "Simulate decisions and learn compound growth before touching real money.",
    color: "text-primary",
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
            A design teens will <span className="text-gradient-accent">actually use</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group surface-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${b.glow}`}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/70 border border-border/70 mb-5 flex items-center justify-center">
                <b.icon className={`w-6 h-6 ${b.color}`} strokeWidth={1.75} />
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
