import { useState } from "react";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  showToggle?: boolean;
  className?: string;
  buttonText?: string;
  compact?: boolean;
}

const WaitlistForm = ({ showToggle = false, className, buttonText = "Join the waitlist", compact = false }: WaitlistFormProps) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"teen" | "parent">("teen");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm", className)}>
        <span className="text-primary font-semibold">🎉 You're on the list!</span>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {showToggle && (
        <div className="flex items-center justify-center gap-1 mb-4 p-1 rounded-xl bg-secondary/60 border border-border max-w-[220px] mx-auto">
          <button
            type="button"
            onClick={() => setRole("teen")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
              role === "teen" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            I'm a teen
          </button>
          <button
            type="button"
            onClick={() => setRole("parent")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer",
              role === "parent" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            I'm a parent
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className={cn("flex flex-col sm:flex-row items-center justify-center gap-3", compact ? "max-w-sm" : "max-w-md", "mx-auto")}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={cn(
            "w-full sm:flex-1 rounded-xl bg-secondary/80 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-body",
            compact ? "px-4 py-2.5 text-sm" : "px-5 py-3.5"
          )}
        />
        <button
          type="submit"
          className={cn(
            "w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-display font-bold hover:brightness-110 transition-all animate-pulse-glow cursor-pointer",
            compact ? "px-5 py-2.5 text-sm" : "px-8 py-3.5 text-base"
          )}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
