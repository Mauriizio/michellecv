import Image from "next/image";

const highlights = ["Home-based sessions", "Parent collaboration", "Measured progress"];

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-6 py-12 sm:px-10 lg:px-12">
      <div className="pointer-events-none absolute -top-14 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">ABA Therapy · Miami, Florida</p>
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Professional, compassionate ABA support for children and families.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Michelle Hernandez is a Registered Behavior Technician delivering evidence-based interventions designed around
            each child’s routine, strengths, and long-term developmental goals.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/18633496840"
              className="shine-hover inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request Consultation
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface-alt px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
            >
              Read Parent Reviews
            </a>
          </div>

          <div className="flex flex-wrap gap-2.5 text-sm text-muted">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-border bg-surface-alt px-4 py-2 transition hover:border-primary/60">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="lift-hover overflow-hidden rounded-[1.8rem] border border-border bg-surface-alt p-3">
            <div className="relative h-[24rem] overflow-hidden rounded-[1.3rem]">
              <Image src="/perfil.png" alt="Michelle Hernandez, RBT" fill className="object-cover transition duration-500 hover:scale-105" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/80 bg-surface/92 px-4 py-3 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Registered Behavior Technician</p>
            <p className="mt-1 text-sm text-muted">Focused on emotional regulation, communication skills, and family-centered routines.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
