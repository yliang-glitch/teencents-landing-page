import { BrainCircuit, Sparkles, Target, Wallet } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Track income fast",
    description: "Log money from work, gigs, and side hustles in seconds.",
    icon: Wallet,
  },
  {
    num: "02",
    title: "Choose a goal",
    description: "Save toward something real and see every dollar move the plan forward.",
    icon: Target,
  },
  {
    num: "03",
    title: "Keep momentum",
    description: "Build streaks and simple habits that make progress easier to repeat.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Learn by doing",
    description: "Get gentle guidance that helps teens make smarter money choices over time.",
    icon: BrainCircuit,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="px-6 py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="section-divider mb-12" />
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Features</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple enough to start today, strong enough to grow with them
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="surface-card rounded-[1.75rem] p-6 shadow-[0_18px_40px_rgba(63,104,142,0.06)]">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/14 via-accent/10 to-cyan/14">
                  <step.icon className="h-6 w-6 text-primary" strokeWidth={1.8} />
                </div>
                <span className="font-display text-3xl font-bold text-muted-foreground/25">{step.num}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 surface-card rounded-[2rem] p-7 shadow-[0_20px_55px_rgba(63,104,142,0.08)] sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">AI Coach</p>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground">
                Questions about money? Ask TeenCents.
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                Get clear answers to help you make smart decisions with your money.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-border/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,249,255,0.95))] p-5 shadow-[0_18px_45px_rgba(63,104,142,0.08)]">
              <div className="rounded-2xl bg-secondary/75 p-4 text-sm text-foreground shadow-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Teen</p>
                <p className="mt-2">How much should I save from my paycheck?</p>
              </div>
              <div className="mt-4 rounded-2xl bg-gradient-to-r from-cyan/12 via-primary/10 to-accent/10 p-4 text-sm text-foreground shadow-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">TeenCents</p>
                <p className="mt-2 leading-relaxed">
                  A good rule is the 50/30/20 rule. Try saving 20% of what you earn for your future goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="for-parents" className="mt-8 surface-card rounded-[1.75rem] px-6 py-5 shadow-[0_18px_40px_rgba(63,104,142,0.06)] scroll-mt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-display text-2xl font-bold text-foreground">Built for teens. Trusted by parents.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "Privacy first",
                "No gambling",
                "Educational AI",
                "Parent controls",
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-border/80 bg-white/80 px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
