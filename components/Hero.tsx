import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-12 shadow-lg sm:px-10 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            ABA Therapy • Miami, Florida
          </p>
          <div className="space-y-3">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Michelle Hernández, RBT
            </h1>
            <p className="text-base leading-relaxed text-muted sm:hidden">
              Calm, evidence-based ABA support for children and families.
            </p>
            <p className="hidden text-lg leading-relaxed text-muted sm:block">
              Warm, evidence-based support for children and families. Michelle
              partners with parents to build daily skills through calm routines
              and measurable progress.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="https://wa.me/18633496840"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
            >
              WhatsApp to Book
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-alt"
            >
              View Services
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-muted lg:justify-start">
            <span className="rounded-full bg-surface-alt/80 px-3 py-1 text-xs font-medium text-muted">
              In-home support
            </span>
            <span className="rounded-full bg-surface-alt/80 px-3 py-1 text-xs font-medium text-muted">
              Ongoing communication
            </span>
            <span className="rounded-full bg-surface-alt/80 px-3 py-1 text-xs font-medium text-muted">
              Positive approach
            </span>
          </div>
        </div>
        <div className="order-1 relative lg:order-2">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-surface to-secondary/15 p-6 shadow-sm">
            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-surface">
              <div className="relative h-44 w-full sm:h-48">
                <Image
                  src="/rbt.png"
                  alt="RBT credential"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2 text-center">
              <p className="text-sm font-semibold text-foreground">
                Verified RBT registration
              </p>
              <p className="text-sm text-muted">
                Specialist in early behavior support and family routines.
              </p>
            </div>
          </div>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="rounded-full border border-white/70 bg-surface p-1 shadow-lg">
              <div className="relative h-28 w-28 overflow-hidden rounded-full bg-surface-alt sm:h-32 sm:w-32">
                <Image
                  src="/perfil.png"
                  alt="Profile photo of Michelle Hernández"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
