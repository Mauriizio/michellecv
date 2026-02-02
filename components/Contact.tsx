export default function Contact() {
  return (
    <section
      id="contact"
      className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Ready to talk about your child’s goals?
          </h2>
          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Send a quick WhatsApp message to check availability, discuss
            scheduling, or ask about next steps. Michelle replies promptly and
            keeps communication simple.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/18633496840"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500"
          >
            Message on WhatsApp
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Serving families across Miami, Florida.
          </p>
        </div>
      </div>
    </section>
  );
}