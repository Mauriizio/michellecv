import Image from "next/image";

const highlights = ["Home-based sessions", "Parent collaboration", "Measured progress"];

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-4 py-5 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute -top-14 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative grid items-center gap-5 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="order-2 space-y-3.5 text-center sm:space-y-6 lg:order-1 lg:text-left">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-secondary sm:text-xs sm:tracking-[0.3em]">
            ABA Therapy · Miami, Florida
          </p>
          <h1 className="font-display text-[1.75rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Professional, compassionate ABA support for children and families.
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted sm:text-lg lg:mx-0">
            Evidence-based, family-centered support designed around each child’s strengths, routine, and long-term
            goals.
          </p>
          <p className="text-sm font-semibold text-foreground sm:text-base">Bilingual support: English & Spanish.</p>

          <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-center sm:justify-center sm:gap-3 lg:justify-start">
            <a
              href="https://wa.me/18633496840"
              className="shine-hover inline-flex items-center justify-center rounded-full bg-primary px-3.5 py-2.5 text-[0.72rem] font-semibold text-primary-foreground sm:min-w-52 sm:px-6 sm:py-3 sm:text-sm"
            >
              Request Consultation
            </a>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface-alt px-3.5 py-2.5 text-[0.72rem] font-semibold text-foreground transition hover:bg-surface sm:min-w-52 sm:px-6 sm:py-3 sm:text-sm"
            >
              Read Parent Reviews
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-1.5 text-[0.62rem] text-muted sm:grid sm:grid-cols-3 sm:gap-2 sm:text-xs lg:justify-start lg:text-[0.82rem]">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex min-h-7 max-w-[9.25rem] items-center justify-center rounded-full border border-border/80 bg-surface-alt/95 px-2 py-1 text-center text-[0.56rem] leading-tight text-foreground opacity-100 transition hover:border-secondary/60 hover:bg-surface sm:min-h-0 sm:max-w-none sm:px-2.5 sm:py-1.5 sm:text-xs lg:px-3 lg:py-1.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[19rem] sm:max-w-[24rem] lg:order-2 lg:max-w-none">
          <div className="overflow-hidden rounded-[1.8rem] border border-border bg-surface-alt p-2.5">
            <div className="relative h-[15rem] overflow-hidden rounded-[1.2rem] sm:h-[18rem]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/portada.png')" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
            </div>

            <div className="relative -mt-16 px-3 pb-3 sm:-mt-20 sm:px-4 sm:pb-4">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-surface bg-surface shadow-lg sm:h-40 sm:w-40">
                <Image
                  src="/perfil2.png"
                  alt="Michelle Hernandez, RBT"
                  width={160}
                  height={160}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-3 rounded-2xl border border-border/80 bg-surface/75 px-3 py-2 text-center backdrop-blur">
                <p className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-secondary sm:text-xs">
                  Registered Behavior Technician
                </p>
                <p className="mt-1 text-[0.65rem] leading-snug text-foreground sm:text-sm">
                  Focused on emotional regulation, communication skills, and family-centered routines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}