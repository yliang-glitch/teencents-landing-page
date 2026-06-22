const navItems = [
  { label: "Why TeenCents", href: "#why-teencents" },
  { label: "Features", href: "#features" },
  { label: "For Parents", href: "#for-parents" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/84 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(240,247,255,0.9))] shadow-[0_12px_28px_rgba(63,104,142,0.08)]">
            <span className="bg-gradient-to-r from-primary via-accent to-cyan bg-clip-text font-display text-xl font-bold text-transparent">TC</span>
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-[0.08em] text-foreground sm:text-2xl">
            TeenCents
          </span>
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-base font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#about"
            className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-gradient-to-r from-accent via-primary to-cyan px-6 py-3 font-display text-sm font-bold text-white shadow-[0_18px_40px_rgba(99,102,241,0.18)] transition-all hover:-translate-y-0.5 hover:brightness-105"
          >
            Join the Beta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
