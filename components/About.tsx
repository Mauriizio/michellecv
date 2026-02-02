export default function About() {
  return (
    <section id="about" className="grid gap-8 md:grid-cols-2 md:items-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
          About Michelle
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          A calm, supportive partner for your family
        </h2>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Michelle is a Registered Behavior Technician with experience supporting
          children across developmental stages. She creates safe, structured
          environments that help kids feel understood and empowered.
        </p>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Families describe her sessions as warm, organized, and focused on
          practical wins that make daily routines easier for parents and kids
          alike.
        </p>
      </div>
      <div className="rounded-3xl border border-teal-100 bg-teal-50 p-8 text-slate-700 shadow-sm dark:border-teal-900/40 dark:bg-teal-950/30 dark:text-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Areas of focus
        </h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li>• Emotional regulation and coping strategies</li>
          <li>• Daily living skills and routines</li>
          <li>• Positive reinforcement and behavior planning</li>
          <li>• Collaboration with clinical supervisors</li>
        </ul>
      </div>
    </section>
  );
}