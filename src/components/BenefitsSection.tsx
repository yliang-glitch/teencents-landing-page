import { Calendar, Coins, PiggyBank, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "Earn",
    description: "Track income from real jobs and side hustles. See your progress.",
    color: "text-accent",
    bg: "from-accent/14 via-primary/12 to-white",
  },
  {
    icon: PiggyBank,
    title: "Save",
    description: "Set goals that matter. Build habits and watch your money grow.",
    color: "text-cyan",
    bg: "from-cyan/14 via-primary/12 to-white",
  },
  {
    icon: Sprout,
    title: "Grow",
    description: "Learn investing, budgeting, credit, and more with AI guidance.",
    color: "text-primary",
    bg: "from-primary/14 via-accent/10 to-white",
  },
];

const BenefitsSection = () => {
  return (
    <section id="why-teencents" className="px-6 py-12 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(63,104,142,0.08)]">
          <div className="grid divide-y divide-border/80 md:grid-cols-3 md:divide-x md:divide-y-0">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 md:p-10">
                <div className={`flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-gradient-to-br ${benefit.bg} shadow-[0_14px_32px_rgba(63,104,142,0.08)]`}>
                  <benefit.icon className={`h-7 w-7 ${benefit.color}`} strokeWidth={1.9} />
                </div>
                <h3 className={`mt-6 font-display text-3xl font-bold ${benefit.color}`}>{benefit.title}</h3>
                <p className="mt-3 max-w-sm text-lg leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 surface-card overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(63,104,142,0.08)]">
          <div className="grid gap-8 p-8 md:grid-cols-[0.95fr_1.1fr_0.7fr] md:items-center md:p-10">
            <div className="relative mx-auto flex h-[16rem] w-full max-w-[13rem] items-end justify-center overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(214,227,255,0.95),rgba(239,229,255,0.95))] shadow-[0_18px_45px_rgba(63,104,142,0.1)]">
              <div className="absolute inset-x-6 top-6 h-24 rounded-[1.5rem] border border-white/80 bg-gradient-to-br from-white/60 to-transparent" />
              <div className="absolute inset-x-10 bottom-0 h-[13rem] rounded-t-[6rem] bg-[linear-gradient(180deg,rgba(51,65,85,0.08),rgba(99,102,241,0.16))]" />
              <div className="absolute bottom-0 flex flex-col items-center">
                <span className="text-7xl">😊</span>
                <div className="-mt-3 h-20 w-32 rounded-t-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(199,210,254,0.9))]" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">Real teen. Real progress.</p>
              <p className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                “I saved $1,200 teaching piano.”
              </p>
              <div className="mt-5">
                <p className="text-2xl font-semibold text-foreground">Sophia, 16</p>
                <p className="mt-2 text-lg text-muted-foreground">Using TeenCents for 8 months</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
              <div className="rounded-[1.5rem] bg-secondary/70 p-5">
                <Sprout className="h-6 w-6 text-cyan" strokeWidth={1.8} />
                <p className="mt-4 font-display text-4xl font-bold text-foreground">$1,200</p>
                <p className="mt-1 text-lg text-muted-foreground">Saved</p>
              </div>
              <div className="rounded-[1.5rem] bg-secondary/70 p-5">
                <Calendar className="h-6 w-6 text-primary" strokeWidth={1.8} />
                <p className="mt-4 font-display text-4xl font-bold text-foreground">7</p>
                <p className="mt-1 text-lg text-muted-foreground">Goals achieved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
