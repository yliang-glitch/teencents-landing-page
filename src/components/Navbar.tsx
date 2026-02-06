const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-gradient-neon">Kashly</span>
        </a>
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          teencents.ai
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
