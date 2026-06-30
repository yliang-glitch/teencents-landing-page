import { BrainCircuit, ShieldCheck, Sparkles, Target, Wallet } from "lucide-react";

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

const trustItems = [
  { label: "Privacy first", icon: ShieldCheck },
  { label: "No gambling", icon: Target },
  { label: "Educational AI", icon: Sparkles },
  { label: "Parent informed", icon: BrainCircuit },
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="px-6 py-12 scroll-mt-28 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">How it works</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-[2.8rem]">
              A simpler flow for earning, saving, and learning.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
              TeenCents keeps the product experience straightforward so teens can build momentum without feeling buried in tools.
            </p>
          </div>

          <div className="surface-card overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
            <div className="grid md:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step.num}
                  className={`p-7 sm:p-8 ${index % 2 === 0 ? "md:border-r md:border-border/70" : ""} ${index < 2 ? "border-b border-border/70" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[2.2rem] font-bold tracking-[-0.05em] text-foreground/18">{step.num}</span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/85">
                      <step.icon className="h-5 w-5 text-primary" strokeWidth={1.8} />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 surface-card overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="p-8 sm:p-10">
              <div className="max-w-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">AI money coach</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-[2.85rem]">
                Questions about money?
                <br />
                Ask TeenCents.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Get clear answers to help you make smart decisions with your money.
              </p>
                <div className="mt-8 rounded-[1.35rem] border border-border/75 bg-secondary/45 px-5 py-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Good for</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/80">
                    Paychecks, savings targets, spending choices, investing basics, and next-step money questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border/70 p-6 sm:p-8 lg:border-l lg:border-t-0">
              <div className="grid gap-6 sm:grid-cols-[0.72fr_1.28fr] sm:items-center">
              <div className="flex justify-center sm:justify-start">
                <img
                  src="/ai-coach-bot.png"
                  alt="TeenCents AI coach"
                  className="h-52 w-52 object-contain sm:h-60 sm:w-60"
                />
              </div>
                <div className="space-y-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Example conversation</p>
                  <div className="ml-auto max-w-[19rem] rounded-[1.5rem] bg-gradient-to-r from-accent to-primary px-5 py-4 text-base font-medium leading-relaxed text-white shadow-[0_14px_35px_rgba(99,102,241,0.14)]">
                    How much should I save from my paycheck?
                  </div>
                  <div className="max-w-[21rem] rounded-[1.5rem] border border-border/70 bg-white px-5 py-4 text-base leading-relaxed text-foreground shadow-[0_12px_28px_rgba(63,104,142,0.05)]">
                    A good rule is the 50/30/20 rule. Try saving 20% of what you earn for your future goals.
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Short answers first, with more context only when you want it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="for-parents" className="mt-6 surface-card rounded-[2rem] px-6 py-6 shadow-[0_20px_50px_rgba(63,104,142,0.06)] scroll-mt-28 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4 lg:min-w-[19rem]">
              <span className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-secondary/85">
                <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.8} />
              </span>
              <p className="font-display text-2xl font-bold leading-tight text-foreground">
                Built for teens.
                <br />
                Trusted by parents.
              </p>
            </div>

            <div className="grid flex-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:divide-x xl:divide-border/70 xl:gap-0">
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl px-4 py-2 xl:justify-center">
                  <item.icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                  <span className="text-sm font-medium text-foreground/82">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
