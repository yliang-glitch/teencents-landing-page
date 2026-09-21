import { BrainCircuit, Eye, GraduationCap, LockKeyhole, ShieldCheck, Sparkles, Target, Wallet } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Log every hustle win",
    description: "Capture babysitting, tutoring, resale, and odd-job money in a few taps.",
    icon: Wallet,
  },
  {
    num: "02",
    title: "Pick what comes next",
    description: "Choose a goal like a laptop, trip, or concert and watch progress stack up.",
    icon: Target,
  },
  {
    num: "03",
    title: "Keep your streak alive",
    description: "Small check-ins turn good money habits into something you can actually repeat.",
    icon: Sparkles,
  },
  {
    num: "04",
    title: "Ask when you're unsure",
    description: "Get clear, low-pressure help with spending, saving, and growing your money.",
    icon: BrainCircuit,
  },
];

const trustItems = [
  {
    title: "Privacy first",
    description: "Waitlist details stay simple. Privacy and terms are easy to find before families decide.",
    icon: LockKeyhole,
  },
  {
    title: "No gambling",
    description: "TeenCents is built around habits, goals, and learning, not betting, hype, or quick-money promises.",
    icon: ShieldCheck,
  },
  {
    title: "Educational AI",
    description: "Guidance is designed to explain choices in plain language, not pressure teens into decisions.",
    icon: GraduationCap,
  },
  {
    title: "Parent informed",
    description: "Teens take the initiative while parents get clearer language, context, and transparency.",
    icon: Eye,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="features" className="px-6 py-12 scroll-mt-28 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">
              <span className="brand-motif" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              How it works
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-[2.8rem]">
              From hustle dollar to next milestone.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
              Log what came in, decide what matters next, and get help when a money choice feels unclear.
            </p>
          </div>

          <div className="surface-card flow-trail overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
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
                  <div className="mt-4 money-trail-rail compact" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="mt-3 max-w-sm text-base leading-7 text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 surface-card coach-trail overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(63,104,142,0.06)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="p-8 sm:p-10">
              <div className="max-w-md">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">
                  <span className="brand-motif" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                  AI money coach
                </p>
                <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground sm:text-[2.85rem]">
                  Questions about your paycheck?
                  <br />
                  Ask TeenCents.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Get practical answers for what to save, what to spend, and what to do next.
                </p>
                <div className="mt-8 rounded-[1.35rem] border border-border/75 bg-secondary/45 px-5 py-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Good for</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/80">
                    Paychecks, split-the-paycheck decisions, savings goals, investing basics, and next-step money questions.
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
                    I made $140 this weekend. How much should I save?
                  </div>
                  <div className="max-w-[21rem] rounded-[1.5rem] border border-border/70 bg-white px-5 py-4 text-base leading-relaxed text-foreground shadow-[0_12px_28px_rgba(63,104,142,0.05)]">
                    Start with 20%, so about $28. If you are saving for something big, bump that a little higher this week.
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    Short answers first, with more context only when you want it.
                  </p>
                  <div className="money-trail-rail compact" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="for-parents" className="mt-6 surface-card rounded-[2rem] px-6 py-7 shadow-[0_20px_50px_rgba(63,104,142,0.06)] scroll-mt-28 sm:px-8 sm:py-8">
          <div className="grid gap-7 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div>
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-secondary/85">
                  <ShieldCheck className="h-7 w-7 text-primary" strokeWidth={1.8} />
                </span>
                <p className="font-display text-2xl font-bold leading-tight text-foreground">
                  Built for teens.
                  <br />
                  Clear for parents.
                </p>
              </div>
              <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
                TeenCents is designed for teen initiative with parent-friendly transparency around privacy, AI guidance, and learning goals.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
                <a href="/privacy-policy" className="rounded-full border border-border/80 bg-white/80 px-4 py-2 text-foreground/78 transition-colors hover:text-primary">
                  Read privacy
                </a>
                <a href="/terms" className="rounded-full border border-border/80 bg-white/80 px-4 py-2 text-foreground/78 transition-colors hover:text-primary">
                  View terms
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div key={item.title} className="rounded-[1.35rem] bg-white/74 p-5 shadow-[0_14px_35px_rgba(63,104,142,0.045)]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-secondary/85">
                      <item.icon className="h-5 w-5 text-accent" strokeWidth={1.8} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
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
