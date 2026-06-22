import { Coins, PiggyBank, Sprout } from "lucide-react";

const benefits = [
  {
    icon: Coins,
    title: "Earn",
    description: "Track income from real jobs and side hustles. See your progress.",
  },
  {
    icon: PiggyBank,
    title: "Save",
    description: "Set goals that matter. Build habits and watch your money grow.",
  },
  {
    icon: Sprout,
    title: "Grow",
    description: "Learn investing, budgeting, credit, and more with AI guidance.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="why-teencents" className="px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Why TeenCents</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Money confidence built for real teen life
          </h2>
        </div>

        <div className="surface-card overflow-hidden rounded-[2rem] shadow-[0_22px_60px_rgba(63,104,142,0.08)]">
          <div className="grid divide-y divide-border/80 md:grid-cols-3 md:divide-x md:divide-y-0">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-cyan/16 via-primary/14 to-white shadow-[0_14px_32px_rgba(63,104,142,0.08)]">
                  <benefit.icon className="h-7 w-7 text-cyan" strokeWidth={1.8} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-foreground">{benefit.title}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="surface-card rounded-[1.75rem] p-7 shadow-[0_18px_50px_rgba(63,104,142,0.08)] sm:p-8">
            <p className="text-lg leading-relaxed text-foreground">
              “I saved <span className="font-semibold text-cyan">$1,200</span> teaching piano.”
            </p>
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-semibold text-foreground">Sophia, 16</p>
                <p className="text-sm text-muted-foreground">Using TeenCents for 8 months</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-2xl bg-secondary/80 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Saved</p>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">$1,200</p>
                </div>
                <div className="rounded-2xl bg-secondary/80 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Goals achieved</p>
                  <p className="mt-1 font-display text-xl font-bold text-foreground">7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
