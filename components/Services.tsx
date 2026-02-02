const services = [
  {
    title: "In-home ABA sessions",
    description:
      "Structured, play-based therapy plans tailored to your child’s goals and family routines.",
  },
  {
    title: "Parent coaching",
    description:
      "Hands-on guidance for caregivers to reinforce skills and promote calm, consistent progress.",
  },
  {
    title: "Social & communication skills",
    description:
      "Support for language building, turn-taking, and positive peer interactions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
          Services
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Personalized ABA support for every stage
        </h2>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Sessions are designed to fit your child’s strengths while respecting
          your family’s schedule. Every plan is aligned with clinical goals and
          focuses on measurable progress.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
