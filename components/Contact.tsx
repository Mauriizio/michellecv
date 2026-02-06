export default function Contact() {
  return (
    <section id="contact" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Contact</p>
          <h2 className="text-3xl font-semibold text-foreground">Let’s discuss your child’s therapy goals</h2>
          <p className="text-base leading-relaxed text-muted">
            Reach out to ask about availability, treatment fit, or next steps. Michelle responds quickly with clear
            guidance and scheduling options.
          </p>
          <a
            href="https://wa.me/18633496840"
            className="shine-hover inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Message on WhatsApp
          </a>
          <div className="rounded-2xl border border-border bg-surface-alt px-4 py-3 text-sm text-muted">
            In-person support across Miami and nearby areas.
          </div>
        </div>

        <form className="space-y-4 rounded-3xl border border-border bg-surface-alt p-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Full name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Phone number</label>
            <input
              type="tel"
              placeholder="+1 (305) 555-1234"
              className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">How can we help?</label>
            <textarea
              rows={4}
              placeholder="Share a short summary of your needs"
              className="w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90"
          >
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
