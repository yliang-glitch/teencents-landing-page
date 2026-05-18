import { Instagram, Twitter } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="font-display text-2xl font-bold tracking-tight">
              <span className="text-gradient-neon">TeenCents</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">teencents.ai</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              The money app for teens building habits, confidence, and independence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="/privacy-policy" className="text-sm text-foreground/70 hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">Terms</a></li>
              <li><a href="mailto:hello@teencents.ai" className="text-sm text-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Footer waitlist */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Stay in the loop</h4>
            <WaitlistForm compact buttonText="Join" showToggle />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} teencents.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* TikTok (custom SVG since lucide doesn't have it) */}
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.2 8.2 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
