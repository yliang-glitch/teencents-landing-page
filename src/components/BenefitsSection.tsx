import { Calendar, Coins, PiggyBank, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "Earn",
    description: "Track income from real jobs and side hustles. See your progress.",
    color: "text-accent",
  },
  {
    icon: PiggyBank,
    title: "Save",
    description: "Set goals that matter. Build habits and watch your money grow.",
    color: "text-cyan",
  },
  {
    icon: Sprout,
    title: "Grow",
    description: "Learn investing, budgeting, credit, and more with AI guidance.",
    color: "text-primary",
  },
];

const BenefitsSection = () => {
  return (
    <section id="why-teencents" className="px-6 py-12 scroll-mt-28 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
          <div className="grid gap-8 p-8 md:grid-cols-[0.5fr_1.5fr] md:items-start md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">Why TeenCents</p>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-[2.7rem]">
                Money habits that feel clear, calm, and real.
              </h2>
            </div>

            <div className="grid gap-8 border-border/70 md:grid-cols-3 md:divide-x md:divide-border/70">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="md:px-7 first:md:pl-0 last:md:pr-0">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/80">
                      <benefit.icon className={`h-6 w-6 ${benefit.color}`} strokeWidth={1.8} />
                    </span>
                    <h3 className={`font-display text-[1.8rem] font-bold ${benefit.color}`}>{benefit.title}</h3>
                  </div>
                  <p className="mt-4 max-w-xs text-base leading-7 text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 surface-card overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="grid h-full gap-0 sm:grid-cols-[0.88fr_1.12fr]">
              <div className="min-h-[19rem] bg-[linear-gradient(180deg,rgba(224,233,255,0.92),rgba(240,233,255,0.9))]">
                <img
                  src="/testimonial-sophia.png"
                  alt="Sophia using TeenCents"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">Real teen. Real progress.</p>
                <p className="mt-5 font-display text-[2.35rem] font-bold leading-[1.02] text-foreground sm:text-[2.9rem]">
                  “I saved $600 teaching piano.”
                </p>
                <div className="mt-6 border-l border-border/80 pl-4">
                  <p className="text-2xl font-semibold text-foreground">Sophia, 16</p>
                  <p className="mt-2 text-base text-muted-foreground">Using TeenCents for 3 months</p>
                </div>
                <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
                  She used TeenCents to keep piano income visible, split money between spending and savings, and stay motivated while working toward a bigger purchase.
                </p>
              </div>
            </div>
            <div className="border-t border-border/70 px-8 py-8 lg:border-l lg:border-t-0 sm:px-9">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[1.6rem] bg-white/82 px-6 py-6 shadow-[0_14px_35px_rgba(63,104,142,0.05)]">
                  <Sprout className="h-6 w-6 text-cyan" strokeWidth={1.8} />
                  <p className="mt-8 font-display text-5xl font-bold tracking-[-0.05em] text-foreground">$600</p>
                  <p className="mt-2 text-lg text-muted-foreground">Saved</p>
                </div>
                <div className="rounded-[1.6rem] bg-white/82 px-6 py-6 shadow-[0_14px_35px_rgba(63,104,142,0.05)]">
                  <Calendar className="h-6 w-6 text-primary" strokeWidth={1.8} />
                  <p className="mt-8 font-display text-5xl font-bold tracking-[-0.05em] text-foreground">7</p>
                  <p className="mt-2 text-lg text-muted-foreground">Goals achieved</p>
                </div>
              </div>

              <div className="mt-6 border-t border-border/70 pt-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Why it matters</p>
                <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">
                  TeenCents makes progress feel visible, so money lessons stick because they connect to real life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
