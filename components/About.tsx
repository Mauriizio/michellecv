import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-shell px-6 py-10 sm:px-10 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">About Michelle</p>
          <h2 className="text-3xl font-semibold text-foreground">Trusted care with clinical structure</h2>
          <p className="text-base leading-relaxed text-muted">
            Michelle combines empathy and discipline to create safe learning environments where children develop
            confidence and practical independence.
          </p>
          <p className="text-base leading-relaxed text-muted">
            Families value her clear communication, predictable session flow, and commitment to meaningful improvements
            in daily routines.
          </p>
          <ul className="mx-auto w-fit space-y-2 text-left text-sm text-muted lg:mx-0">
            <li>• Emotional regulation and behavior support</li>
            <li>• Daily living routines and independence goals</li>
            <li>• Positive reinforcement with measurable milestones</li>
          </ul>
        </div>

        <figure className="lift-hover overflow-hidden rounded-[1.8rem] border border-border bg-surface-alt p-3">
          <div className="relative h-[22rem] overflow-hidden rounded-[1.25rem]">
            <Image
              src="/perfil.png"
              alt="Michelle working in a child-centered therapy environment"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
