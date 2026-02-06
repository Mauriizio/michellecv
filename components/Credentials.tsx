const credentials = [
  {
    title: "Licensed Psychologist",
    code: "PSY-XXXX-2026",
    description: "Clinical and behavioral foundations for child-centered intervention planning.",
  },
  {
    title: "Registered Behavior Technician (RBT)",
    code: "RBT Certification",
    description: "Evidence-based ABA implementation aligned with treatment goals and supervision.",
  },
  {
    title: "Professional Practice License",
    code: "License #ToBeAdded",
    description: "Active professional license credential supporting safe and compliant service delivery.",
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="space-y-3 text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Credentials</p>
        <h2 className="text-3xl font-semibold text-foreground">Professional titles and licenses</h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted lg:mx-0">
          A transparent presentation of clinical and professional credentials that reinforces trust for families.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {credentials.map((item) => (
          <article key={item.title} className="lift-hover shine-hover rounded-2xl border border-border bg-surface-alt p-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{item.code}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
