import Image from "next/image";

const tags = ["Sensory play", "Language games", "Positive reinforcement", "Group interaction"];

export default function PlayfulShowcase() {
  return (
    <section id="playful" className="section-shell-soft playful-gradient relative overflow-hidden px-6 py-10 sm:px-10 lg:px-12">
      <div className="pointer-events-none absolute -left-8 top-12 h-20 w-20 rounded-full bg-[var(--accent-coral)]/45 blur-xl" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[var(--accent-yellow)]/50 blur-lg float-badge" />
      <div className="pointer-events-none absolute bottom-8 right-16 h-14 w-14 rounded-full bg-[var(--accent-sky)]/45 blur-lg float-badge" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Child-centered experience</p>
          <h2 className="text-3xl font-semibold text-foreground">A colorful, engaging environment for growth</h2>
          <p className="text-base leading-relaxed text-muted">
            This section is designed for playful visuals: moments of guided learning, social activities, and joyful
            interactions that show children feeling safe, active, and motivated.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border/70 bg-surface/80 px-4 py-2 text-xs font-semibold text-foreground lift-hover">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <figure className="lift-hover overflow-hidden rounded-[1.6rem] border border-border/70 bg-surface/90 p-3">
          <div className="relative h-[21rem] overflow-hidden rounded-[1.2rem]">
            <Image
              src="/michelle-hero-placeholder.svg"
              alt="Children playing in a colorful learning setting"
              fill
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
