import {
  Bell,
  BookOpen,
  HandCoins,
  House,
  IceCreamCone,
  Monitor,
  PawPrint,
  ShoppingBag,
  Target,
  UserRound,
  Wallet,
} from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const recentActivity = [
  {
    label: "Babysitting",
    date: "May 14",
    amount: "+$60.00",
    positive: true,
    icon: HandCoins,
    iconClassName: "text-primary",
    bgClassName: "from-primary/14 to-cyan/14",
  },
  {
    label: "Dog Walking",
    date: "May 12",
    amount: "+$25.00",
    positive: true,
    icon: PawPrint,
    iconClassName: "text-cyan",
    bgClassName: "from-cyan/14 to-emerald-100",
  },
  {
    label: "Target",
    date: "May 10",
    amount: "-$23.40",
    positive: false,
    icon: ShoppingBag,
    iconClassName: "text-accent",
    bgClassName: "from-accent/14 to-primary/10",
  },
  {
    label: "Ice Cream",
    date: "May 9",
    amount: "-$6.50",
    positive: false,
    icon: IceCreamCone,
    iconClassName: "text-amber-500",
    bgClassName: "from-amber-100 to-pink-100",
  },
];

const navItems = [
  { label: "Home", icon: House, active: true },
  { label: "Goals", icon: Target, active: false },
  { label: "Earn", icon: Wallet, active: false },
  { label: "Learn", icon: BookOpen, active: false },
  { label: "Profile", icon: UserRound, active: false },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-24 sm:pt-32">
      <div className="absolute inset-0 opacity-[0.07] geo-grid" />
      <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-[4%] top-20 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-accent/10 via-primary/8 to-cyan/12 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/88 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gradient-neon shadow-[0_10px_24px_rgba(63,104,142,0.06)] backdrop-blur-sm opacity-0 animate-fade-up">
            <span className="brand-motif" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>The money app for teens</span>
          </div>

          <h1 className="mt-7 font-display text-[2.9rem] font-bold leading-[0.92] tracking-[-0.05em] text-foreground opacity-0 animate-fade-up-delay-1 sm:text-[4.35rem] lg:text-[5.2rem]">
            <span className="block">Your first</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text text-transparent">$1,000</span>
            <span className="block">starts here.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up-delay-2 sm:text-[1.34rem] lg:mx-0 lg:max-w-lg">
            Track babysitting, tutoring, resale, and first paychecks. Save for what matters next. Build money confidence before adulthood.
          </p>

          <div className="mt-9 opacity-0 animate-fade-up-delay-3">
            <WaitlistForm showToggle buttonText="Join the Beta" className="lg:mx-0" />
            <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full px-1 py-1 pr-5 text-sm font-semibold text-foreground/84 transition-colors hover:text-foreground"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-white text-sm shadow-[0_10px_24px_rgba(63,104,142,0.06)]">
                  ▶
                </span>
                See how it works
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 text-left opacity-0 animate-fade-up-delay-3 sm:max-w-[34rem] sm:grid-cols-[auto_1fr] sm:items-start lg:max-w-[35rem]">
            <div className="rounded-[1.35rem] border border-border/75 bg-white/88 px-4 py-3 shadow-[0_12px_28px_rgba(63,104,142,0.05)] backdrop-blur-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Trusted early</p>
              <p className="mt-2 font-display text-2xl font-bold tracking-[-0.04em] text-foreground">4.9/5</p>
            </div>
            <div className="space-y-2 border-l border-border/80 pl-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground/82">Loved by 500+ teens starting with real money habits.</p>
              <p>Built for babysitting, tutoring, resale, dog walking, and creator cash.</p>
            </div>
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-up-delay-2">
          <div className="absolute left-1/2 top-14 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-accent/14 via-primary/8 to-cyan/14 blur-3xl" />
          <div className="relative mx-auto max-w-[27rem]">
            <div className="absolute inset-x-8 bottom-3 h-12 rounded-full bg-foreground/8 blur-2xl" />
            <div className="rounded-[2.9rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(245,249,255,0.88))] p-3 shadow-[0_32px_80px_rgba(63,104,142,0.14)] backdrop-blur-xl">
              <div className="rounded-[2.4rem] border border-border/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.99),rgba(246,249,255,0.97))] px-5 pb-5 pt-4">
                <div className="mx-auto mb-5 h-1.5 w-24 rounded-full bg-foreground/10" />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 via-primary/16 to-cyan/25 shadow-sm">
                      <UserRound className="h-5 w-5 text-foreground/75" strokeWidth={2} />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hey, Alex!</p>
                      <p className="text-sm text-muted-foreground">Let's build your future.</p>
                    </div>
                  </div>
                  <Bell className="h-4 w-4 text-foreground/35" strokeWidth={2} />
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.7rem] border border-border/70 bg-white/96 p-5 shadow-[0_14px_32px_rgba(63,104,142,0.06)]">
                    <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">Balance</p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <div>
                        <p className="font-display text-[2.25rem] font-bold leading-none text-foreground">$387.50</p>
                        <p className="mt-3 text-sm text-muted-foreground">This month</p>
                      </div>
                      <p className="text-base font-semibold text-cyan">+$84.20</p>
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-border/70 bg-white/96 p-5 shadow-[0_14px_32px_rgba(63,104,142,0.06)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">Goal</p>
                        <p className="mt-2 font-display text-[2rem] font-bold text-foreground">MacBook Air</p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-accent/12">
                        <Monitor className="h-6 w-6 text-primary" strokeWidth={1.9} />
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
                        <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-accent via-primary to-cyan" />
                      </div>
                      <span className="text-sm font-medium text-foreground/80">67%</span>
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-border/70 bg-white/96 p-5 shadow-[0_14px_32px_rgba(63,104,142,0.06)]">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">Recent activity</p>
                      <a href="#features" className="text-sm font-medium text-primary">
                        See all
                      </a>
                    </div>

                    <div className="space-y-3">
                      {recentActivity.map((item) => {
                        const Icon = item.icon;

                        return (
                          <div key={item.label} className="flex items-center justify-between gap-3 rounded-2xl px-1 py-1">
                            <div className="flex items-center gap-3">
                              <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br ${item.bgClassName}`}>
                                <Icon className={`h-4.5 w-4.5 ${item.iconClassName}`} strokeWidth={1.9} />
                              </span>
                              <div>
                                <p className="font-medium text-foreground">{item.label}</p>
                                <p className="text-sm text-muted-foreground">{item.date}</p>
                              </div>
                            </div>
                            <p className={`text-base font-semibold ${item.positive ? "text-cyan" : "text-red-500"}`}>
                              {item.amount}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-5 gap-2 rounded-[1.4rem] border border-border/70 bg-white/94 px-3 py-2 text-center text-[11px] text-muted-foreground">
                  {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.label} className="flex flex-col items-center gap-1 rounded-xl py-2">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-full ${item.active ? "text-accent" : "text-muted-foreground"}`}>
                          <Icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <span className={item.active ? "font-medium text-accent" : ""}>{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-[1.35rem] border border-border/60 bg-secondary/45 px-4 py-3">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Next milestone</p>
                      <p className="mt-1 font-medium text-foreground">Concert tickets fund</p>
                    </div>
                    <p className="font-display text-xl font-bold text-primary">$72 left</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
