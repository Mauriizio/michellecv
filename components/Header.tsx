import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold tracking-wide text-foreground"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-border bg-surface shadow-sm">
            <Image
              src="/logo.png"
              alt="Michelle Hernández logo"
              width={50}
              height={50}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="hidden sm:inline">Michelle Hernández, RBT</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/18633496840"
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition hover:brightness-110 sm:inline-flex"
          >
            WhatsApp
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
