const services = [
  {
    title: "In-home ABA sessions",
    description:
      "Structured, engaging plans tailored to your child's goals and family routine.",
  },
  {
    title: "Parent coaching",
    description:
      "Practical guidance to reinforce skills and keep progress consistent.",
  },
  {
    title: "Social skills and communication",
    description:
      "Support with language, turn-taking, and positive peer relationships.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="rounded-3xl border border-border bg-surface px-6 py-10 shadow-sm sm:px-10 lg:px-12"
    >
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
          Services
        </p>
        <h2 className="text-2xl font-semibold text-foreground">
          Personalized ABA support at every stage
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Sessions are designed around your child's strengths and respect your
          family schedule. Each plan aligns with clinical goals and measurable
          outcomes.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-border bg-surface-alt p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
