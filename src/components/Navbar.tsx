import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Why TeenCents", href: "#why-teencents" },
  { label: "Features", href: "#features" },
  { label: "For Parents", href: "#for-parents" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="font-display text-xl font-bold tracking-tight sm:text-2xl">
          <span className="text-gradient-neon">TeenCents</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <span className="hidden rounded-full border border-border bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground/80 shadow-[0_8px_24px_rgba(63,104,142,0.08)] sm:inline-flex">
            teencents.ai
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
