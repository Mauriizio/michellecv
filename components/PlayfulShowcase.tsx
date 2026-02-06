"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const tags = ["Sensory Play", "Language Games", "Positive Reinforcement", "Social Skills"];

const gallery = [
  { src: "/clase1.png", alt: "Play-based ABA activity with children" },
  { src: "/motriz2.png", alt: "Michelle guiding a child-centered session" },
  { src: "/ia1.png", alt: "Professional ABA environment and materials" },
];

export default function PlayfulShowcase() {
  const [index, setIndex] = useState(0);
  const current = useMemo(() => gallery[index], [index]);

  const prev = () => setIndex((value) => (value === 0 ? gallery.length - 1 : value - 1));
  const next = () => setIndex((value) => (value === gallery.length - 1 ? 0 : value + 1));

  return (
    <section id="playful" className="section-shell-soft playful-gradient relative overflow-hidden px-6 py-10 text-center sm:px-10 lg:px-12 lg:text-left">
      <div className="pointer-events-none absolute -left-8 top-12 h-20 w-20 rounded-full bg-[var(--accent-coral)]/45 blur-xl" />
      <div className="pointer-events-none absolute right-6 top-6 h-16 w-16 rounded-full bg-[var(--accent-yellow)]/50 blur-lg float-badge" />
      <div className="pointer-events-none absolute bottom-8 right-16 h-14 w-14 rounded-full bg-[var(--accent-sky)]/45 blur-lg float-badge" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Playful Learning Moments</p>
          <h2 className="text-3xl font-semibold text-foreground">Warm, colorful sessions children enjoy</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted lg:mx-0">
            Through structured play, guided communication activities, and positive routines, children stay engaged while
            building real-life skills with confidence.
          </p>
          <div className="grid grid-cols-2 justify-center gap-2 sm:inline-grid sm:grid-cols-4 lg:flex lg:flex-wrap lg:justify-start">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border/70 bg-surface/85 px-3 py-1.5 text-[11px] font-semibold text-foreground lift-hover">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <figure className="lift-hover overflow-hidden rounded-3xl border border-border/70 bg-surface/92 p-2.5">
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80 lg:h-[24rem]">
            <Image key={current.src} src={current.src} alt={current.alt} fill className="object-cover transition duration-500" />
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60"
            >
              ← Prev
            </button>
            
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60"
            >
              Next →
            </button>
          </div>
        </figure>
      </div>
    </section>
  );
}
