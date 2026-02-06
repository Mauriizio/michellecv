import Image from "next/image";

const testimonials = [
  {
    quote: "Michelle has been incredibly patient and organized with our son. We finally have routines that work at home.",
    author: "Emily R.",
  },
  {
    quote: "Communication is excellent. We always know what was practiced and how to reinforce progress during the week.",
    author: "David M.",
  },
  {
    quote: "Her calm approach reduced daily stress and improved our child’s confidence in social situations.",
    author: "Sophia L.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell px-6 py-10 text-center sm:px-10 lg:px-12 lg:text-left">
      <div className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Testimonials</p>
        <h2 className="text-3xl font-semibold text-foreground">What families are saying</h2>
        <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted lg:mx-0">
          Trusted by parents who value compassionate care, structure, and measurable progress.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.quote} className="lift-hover shine-hover rounded-2xl border border-border bg-surface-alt p-6 text-left">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-surface">
                <Image src="/logo.png" alt="Client avatar" fill className="object-cover" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">“{item.quote}”</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted">{item.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
