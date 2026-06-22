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
    <section id="features" className="px-6 py-10 scroll-mt-28">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-6 surface-card overflow-hidden rounded-[2rem] p-8 shadow-[0_22px_60px_rgba(63,104,142,0.08)] sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">AI money coach</p>
              <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-[2.9rem]">
                Questions about money?
                <br />
                Ask TeenCents.
              </h2>
              <p className="mt-5 max-w-md text-xl leading-relaxed text-muted-foreground">
                Get clear answers to help you make smart decisions with your money.
              </p>
            </div>

            <div className="relative rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.96))] p-6 shadow-[0_18px_45px_rgba(63,104,142,0.08)]">
              <div className="absolute inset-y-0 right-0 w-28 rounded-r-[1.8rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-end">
                <div className="flex justify-center sm:w-40 lg:w-44">
                  <div className="rounded-[1.5rem] bg-white/92 p-2 shadow-[0_12px_30px_rgba(63,104,142,0.08)]">
                    <img
                      src="/ai-coach-bot.png"
                      alt="TeenCents AI coach"
                      className="h-44 w-44 object-contain sm:h-48 sm:w-48 lg:h-52 lg:w-52"
                    />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="ml-auto max-w-[18rem] rounded-[1.4rem] bg-gradient-to-r from-accent to-primary px-5 py-4 text-base font-medium text-white shadow-[0_14px_35px_rgba(99,102,241,0.16)]">
                    How much should I save from my paycheck?
                  </div>
                  <div className="max-w-[20rem] rounded-[1.4rem] bg-white px-5 py-4 text-base leading-relaxed text-foreground shadow-[0_14px_35px_rgba(63,104,142,0.08)]">
                    A good rule is the 50/30/20 rule. Try saving 20% of what you earn for your future goals.
                  </div>
                  <div className="flex gap-2 px-2">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className={`h-2.5 w-2.5 rounded-full ${dot === 1 ? "bg-accent" : "bg-primary/30"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="for-parents" className="mt-6 surface-card rounded-[1.75rem] px-6 py-5 shadow-[0_18px_40px_rgba(63,104,142,0.06)] scroll-mt-28">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-4 lg:min-w-[19rem]">
              <span className="flex h-14 w-14 items-center justify-center rounded-[1.3rem] bg-gradient-to-br from-primary/14 via-accent/10 to-white shadow-[0_12px_28px_rgba(63,104,142,0.08)]">
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
                  <span className="text-sm font-medium text-foreground/80">{item.label}</span>
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
