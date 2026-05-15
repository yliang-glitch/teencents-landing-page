const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <a
          href="/"
          className="inline-flex mb-8 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          ← Back to home
        </a>

        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          TeenCents privacy policy document.
        </p>

        <div className="surface-card rounded-2xl p-6 border border-border/70">
          <p className="text-sm text-muted-foreground mb-4">
            Open the full policy document:
          </p>
          <a
            href="/TeenCents_Privacy_Policy.docx?v=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-primary text-primary-foreground font-semibold px-5 py-3 hover:brightness-110 transition"
          >
            View Privacy Policy
          </a>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
