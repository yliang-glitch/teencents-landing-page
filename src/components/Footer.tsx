import { Instagram, Twitter } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-border bg-card/40 px-6 pb-8 pt-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card mb-12 rounded-[2rem] p-8 shadow-[0_22px_60px_rgba(63,104,142,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Join the beta</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Ready to build your financial future?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Join the waitlist and be the first to know when TeenCents launches.
              </p>
            </div>

            <div>
              <WaitlistForm showToggle buttonText="Join beta" className="lg:mx-0" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <a href="/" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient-neon">TeenCents</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">teencents.ai</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Helping teens track hustle income, save with purpose, and build money confidence early.
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
              Launch updates, product news, and early TeenCents moments.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.2 8.2 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="X">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
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
