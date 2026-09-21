import WaitlistForm from "./WaitlistForm";

const Footer = () => {
  return (
    <footer id="about" className="px-6 pb-10 pt-8 scroll-mt-28 sm:pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card footer-trail overflow-hidden rounded-[2rem] px-8 py-8 shadow-[0_20px_50px_rgba(63,104,142,0.06)] sm:px-10 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gradient-neon">
                <span className="brand-motif" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                Join the waitlist
              </p>
              <p className="mt-4 font-display text-[2.15rem] font-bold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[2.75rem]">
                Ready to stack your first $1,000?
              </p>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                Join the waitlist for the app that helps teens track hustle money, save toward real goals, and learn as they go.
              </p>
              <div className="mt-6 money-trail-rail" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div>
              <WaitlistForm compact showToggle buttonText="Join the Beta" className="max-w-none lg:mx-0" />
              <p className="mt-4 text-sm text-muted-foreground">No spam. Ever. We respect your inbox.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="/" className="font-display text-2xl font-bold tracking-tight uppercase">
              <span className="text-gradient-neon">TeenCents</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">teencents.ai</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Helping teens track hustle income, save for real goals, and build money confidence before adulthood.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-foreground/70 transition-colors hover:text-primary">About</a></li>
              <li><a href="/privacy-policy" className="text-sm text-foreground/70 transition-colors hover:text-primary">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-foreground/70 transition-colors hover:text-primary">Terms</a></li>
              <li><a href="mailto:info@teencents.ai" className="text-sm text-foreground/70 transition-colors hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Follow along</h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Launch updates, product news, and early TeenCents moments. Social channels are coming soon.
            </p>
            <a href="mailto:info@teencents.ai" className="inline-flex rounded-full border border-border/80 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground/78 transition-colors hover:text-primary">
              Email TeenCents
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} teencents.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
