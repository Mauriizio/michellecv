export default function About() {
  return (
    <section
      id="about"
      className="rounded-3xl border border-border bg-surface px-6 py-10 shadow-sm sm:px-10 lg:px-12"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            About Michelle
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            A calm, trusted partner for your family
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Michelle is a Registered Behavior Technician with experience
            supporting children at different developmental stages. She designs
            safe, structured environments where every child feels understood
            and valued.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Families describe her sessions as warm, organized, and focused on
            practical gains that make daily routines easier.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-surface-alt p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground">
            Core focuses
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>• Emotional regulation and calming strategies</li>
            <li>• Daily living skills and routines</li>
            <li>• Positive reinforcement and behavior plans</li>
            <li>• Coordination with clinical supervisors</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
