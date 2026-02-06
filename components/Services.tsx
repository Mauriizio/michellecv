const services = [
  {
    title: "In-home ABA sessions",
    description:
      "Structured one-on-one intervention in the child’s natural environment to reinforce practical daily skills.",
  },
  {
    title: "Parent training and coaching",
    description:
      "Clear and actionable guidance that empowers families to support consistency outside formal sessions.",
  },
  {
    title: "Communication and social goals",
    description:
      "Programs focused on language growth, emotional expression, and positive peer interaction.",
  },
  {
    title: "Clinical coordination",
    description:
      "Collaborative implementation aligned with supervising clinicians and measurable treatment plans.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="space-y-3 text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Services</p>
        <h2 className="text-3xl font-semibold text-foreground">A modern ABA experience built around outcomes</h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted lg:mx-0">
          Every plan is customized to real family needs, with progress tracking, calm structure, and communication you
          can trust.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="lift-hover group rounded-2xl border border-border bg-surface-alt p-6 text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-foreground transition group-hover:text-primary">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
