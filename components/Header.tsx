"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), { ssr: false });

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="mx-auto mt-4 w-[min(96%,75rem)] rounded-2xl border border-border/80 bg-surface/92 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 text-sm font-semibold text-foreground">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface-alt shadow-sm">
              <Image src="/logo.png" alt="Michelle Hernandez logo" width={40} height={40} className="object-contain" priority />
            </span>
            <span className="hidden sm:inline">Michelle Hernandez, RBT</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-muted xl:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/18633496840"
              className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
            >
              Book a Call
            </a>
            <button
              type="button"
              className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-alt text-foreground xl:hidden"
              aria-label="Toggle menu"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-4 bg-current" />
              <span className="absolute block h-0.5 w-4 translate-y-1.5 bg-current" />
              <span className="absolute block h-0.5 w-4 -translate-y-1.5 bg-current" />
            </button>
            <ThemeToggle />
          </div>
        </div>

        {open && (
          <nav className="relative mt-3 overflow-hidden rounded-xl border border-border bg-surface-alt p-3 xl:hidden">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt=""
                width={220}
                height={220}
                aria-hidden="true"
                className="h-auto w-44 opacity-[0.18]"
              />
            </div>

            <div className="relative grid justify-items-center gap-2 text-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full rounded-lg px-3 py-2 text-center text-sm font-medium text-foreground transition hover:bg-surface"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}