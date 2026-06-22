import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl sm:text-2xl font-bold tracking-tight">
          <span className="text-gradient-neon">TeenCents</span>
        </a>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex text-xs text-muted-foreground font-medium tracking-wider uppercase">
            Earn. Save. Grow.
          </span>
          <ThemeToggle />
          <span className="inline-flex px-3 py-1 rounded-full bg-white/80 border border-border text-[11px] font-semibold tracking-wide uppercase shadow-[0_8px_24px_rgba(63,104,142,0.08)]">
            teencents.ai
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
