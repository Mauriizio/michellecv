import Image from "next/image";

const highlights = ["Home-based sessions", "Parent collaboration", "Measured progress"];

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute -top-14 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="relative order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
          <div className="lift-hover overflow-hidden rounded-[1.8rem] border border-border bg-surface-alt p-3">
            <div className="relative h-[21rem] overflow-hidden rounded-[1.3rem] sm:h-[23rem]">
              <Image src="/mano.png" alt="Michelle Hernandez, RBT" fill className="object-contain transition duration-500 hover:scale-105" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-border/80 bg-surface/50 px-4 py-3 text-center backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Registered Behavior Technician</p>
            <p className="mt-1 text-sm text-black rounded-xl bg-surface/30">Focused on emotional regulation, communication skills, and family-centered routines.</p>
          </div>
        </div>

        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">ABA Therapy · Miami, Florida</p>
          <h1 className="font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Professional, compassionate ABA support for children and families.
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
            Michelle Hernandez is a Registered Behavior Technician delivering evidence-based interventions designed around
            each child’s routine, strengths, and long-term developmental goals.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="https://wa.me/18633496840"
              className="shine-hover inline-flex min-w-52 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request Consultation
            </a>
            <a
              href="#testimonials"
              className="inline-flex min-w-52 items-center justify-center rounded-full border border-border bg-surface-alt px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface"
            >
              Read Parent Reviews
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2.5 text-sm text-muted sm:grid-cols-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-border bg-surface-alt px-3 py-2 text-center transition hover:border-primary/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
