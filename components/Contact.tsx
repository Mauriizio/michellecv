export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-border bg-surface px-6 py-10 shadow-sm sm:px-10 lg:px-12"
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Ready to talk about your child's goals?
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Send a message to check availability, coordinate schedules, or ask
            questions. Michelle replies quickly with clear communication.
          </p>
          <div className="rounded-2xl border border-border bg-surface-alt px-4 py-3 text-sm text-muted">
            Serving families in Miami, Florida and surrounding areas.
          </div>
        </div>
        <form className="space-y-4 rounded-3xl border border-border bg-surface-alt p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Full name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Phone number
            </label>
            <input
              type="tel"
              placeholder="+1 (305) 555-1234"
              className="w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              How can we help?
            </label>
            <textarea
              rows={4}
              placeholder="Share a brief summary of your needs"
              className="w-full resize-none rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
          >
            Send inquiry
          </button>
          <a
            href="https://wa.me/18633496840"
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
          >
            Prefer WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
