import { Coins, PiggyBank, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    eyebrow: "Earn",
    title: "See every hustle dollar clearly",
    description: "Track money from jobs, reselling, tips, content, and side gigs without messy notes or spreadsheets.",
    color: "text-cyan",
    iconBg: "from-cyan/18 via-primary/16 to-white",
    glow: "group-hover:shadow-[0_18px_48px_rgba(40,201,203,0.16)]",
  },
  {
    icon: PiggyBank,
    eyebrow: "Save",
    title: "Turn goals into visible progress",
    description: "Build savings buckets for the stuff teens actually care about, then watch each deposit move the plan forward.",
    color: "text-primary",
    iconBg: "from-primary/18 via-cyan/12 to-white",
    glow: "group-hover:shadow-[0_18px_48px_rgba(59,173,239,0.16)]",
  },
  {
    icon: Sprout,
    eyebrow: "Grow",
    title: "Build confidence while you learn",
    description: "Use streaks, simple lessons, and AI guidance to build money habits early without it ever feeling heavy.",
    color: "text-accent",
    iconBg: "from-accent/16 via-primary/12 to-white",
    glow: "group-hover:shadow-[0_18px_48px_rgba(175,138,255,0.16)]",
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">
            Built for real life
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            A money app that helps teens <span className="text-gradient-neon">earn, save, and grow</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            TeenCents keeps money progress visual and motivating so teens can track income, save with purpose, and learn by doing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group surface-card rounded-[1.75rem] p-8 transition-all duration-300 hover:-translate-y-1 ${b.glow}`}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {b.eyebrow}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  0{i + 1}
                </span>
              </div>
              <div className={`w-[4.5rem] h-[4.5rem] rounded-[1.35rem] bg-gradient-to-br ${b.iconBg} border border-border/80 mb-5 flex items-center justify-center shadow-[0_16px_35px_rgba(63,104,142,0.1)]`}>
                <b.icon className={`w-9 h-9 ${b.color}`} strokeWidth={1.9} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
