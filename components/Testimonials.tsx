const testimonials = [
  {
    quote:
      "Michelle has been incredibly patient and organized with our son. We now have routines that actually work at home.",
    author: "Parent of 6-year-old client",
  },
  {
    quote:
      "The communication is excellent. We always know what was practiced and how to support progress during the week.",
    author: "Parent in Miami, FL",
  },
  {
    quote:
      "Her calm approach helped reduce daily stress and improved our child’s confidence in social settings.",
    author: "Family testimonial",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Testimonials</p>
        <h2 className="text-3xl font-semibold text-foreground">What families are saying</h2>
        <p className="max-w-3xl text-base leading-relaxed text-muted">
          Positive outcomes are built through consistency, trust, and close parent collaboration.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.quote}
            className="lift-hover shine-hover rounded-2xl border border-border bg-surface-alt p-6"
          >
            <p className="text-sm leading-relaxed text-foreground/90">“{item.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted">{item.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
