import Image from "next/image";

const highlights = ["Home-based sessions", "Parent collaboration", "Measured progress"];

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden px-4 py-5 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
      <div className="pointer-events-none absolute -top-14 right-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative grid items-center gap-4 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="relative order-1 mx-auto w-full max-w-[17rem] sm:max-w-sm lg:order-2 lg:max-w-none">
          <div className="lift-hover overflow-hidden rounded-[1.5rem] border border-border bg-surface-alt p-2.5 sm:rounded-[1.8rem] sm:p-3">
            <div className="relative h-[13rem] overflow-hidden rounded-[1.1rem] sm:h-[23rem] sm:rounded-[1.3rem]">
              <Image src="/mano.png" alt="Michelle Hernandez, RBT" fill className="object-contain transition duration-500 hover:scale-105" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border/80 bg-surface/60 px-3 py-2 text-center backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:px-4 sm:py-3">
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-secondary sm:text-xs sm:tracking-[0.2em]">Registered Behavior Technician</p>
            <p className="mt-1 rounded-lg bg-surface/30 px-1.5 py-1 text-[0.72rem] leading-snug text-black sm:rounded-xl sm:text-sm">Focused on emotional regulation, communication skills, and family-centered routines.</p>
          </div>
        </div>

        <div className="order-2 space-y-3.5 text-center sm:space-y-6 lg:order-1 lg:text-left">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-secondary sm:text-xs sm:tracking-[0.3em]">ABA Therapy · Miami, Florida</p>
          <h1 className="font-display text-[1.75rem] leading-[1.1] font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Professional, compassionate ABA support for children and families.
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted sm:text-lg lg:mx-0">
            Evidence-based, family-centered support designed around each child’s strengths, routine, and long-term goals.
          </p>

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

          <div className="flex flex-wrap justify-center gap-1.5 text-[0.68rem] text-muted sm:grid sm:grid-cols-3 sm:gap-2.5 sm:text-sm lg:justify-start">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-secondary/25 bg-secondary/10 px-2.5 py-1 text-center transition hover:border-primary/60 sm:border-border sm:bg-surface-alt sm:px-3 sm:py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
