import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="mx-auto mt-4 flex w-[min(96%,75rem)] items-center justify-between rounded-2xl border border-border/80 bg-surface/90 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
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
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
