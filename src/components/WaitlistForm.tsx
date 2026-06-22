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
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit";
        try {
          const data = await response.json();
          if (data?.error) errorMessage = String(data.error);
        } catch {
          // keep default message when response body isn't json
        }
        throw new Error(errorMessage);
      }

      setSubmitted(true);
    } catch (error: any) {
      setSubmitError(error?.message || "Could not submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={cn("inline-flex items-center gap-2 rounded-2xl border border-cyan/20 bg-white/90 px-6 py-3.5 shadow-[0_14px_35px_rgba(63,104,142,0.08)] backdrop-blur-sm", className)}>
        <span className="font-semibold text-cyan">🎉 You're on the list!</span>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      {showToggle && (
        <div className="mb-4 flex max-w-[220px] items-center justify-center gap-1 rounded-2xl border border-border/80 bg-white/85 p-1 shadow-[0_10px_25px_rgba(63,104,142,0.06)] mx-auto">
          <button
            type="button"
            onClick={() => setRole("teen")}
            className={cn(
              "cursor-pointer rounded-xl px-4 py-1.5 text-sm font-medium transition-all",
              role === "teen"
                ? "bg-gradient-to-r from-cyan to-primary text-white shadow-[0_10px_20px_rgba(63,104,142,0.12)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            I'm a teen
          </button>
          <button
            type="button"
            onClick={() => setRole("parent")}
            className={cn(
              "cursor-pointer rounded-xl px-4 py-1.5 text-sm font-medium transition-all",
              role === "parent"
                ? "bg-gradient-to-r from-cyan to-primary text-white shadow-[0_10px_20px_rgba(63,104,142,0.12)]"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            I'm a parent
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit} className={cn("mx-auto flex flex-col items-center justify-center gap-3 sm:flex-row", compact ? "max-w-sm" : "max-w-md")}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className={cn(
            "w-full rounded-2xl border border-border/80 bg-white/90 text-foreground shadow-[0_12px_30px_rgba(63,104,142,0.06)] placeholder:text-muted-foreground transition-all focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:flex-1 font-body",
            compact ? "px-4 py-2.5 text-sm" : "px-5 py-3.5"
          )}
        />
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            "w-full rounded-2xl bg-gradient-to-r from-cyan to-primary font-display font-bold text-white shadow-[0_18px_35px_rgba(63,104,142,0.16)] transition-all hover:-translate-y-0.5 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
            compact ? "px-5 py-2.5 text-sm" : "px-8 py-3.5 text-base"
          )}
        >
          {submitting ? "Submitting..." : buttonText}
        </button>
      </form>
      {submitError && (
        <p className="mt-3 text-center text-sm text-destructive">{submitError}</p>
      )}
    </div>
  );
};

export default WaitlistForm;
