import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-12 overflow-hidden border-t border-border bg-gradient-to-b from-surface-alt to-surface text-foreground">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-44 w-44 opacity-[0.08] sm:h-56 sm:w-56">
          <Image src="/logo.png" alt="Michelle logo background" fill className="object-contain" />
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12">
        <div className="text-center lg:text-left">
          <p className="text-base font-semibold">Michelle Hernandez, RBT</p>
          <p className="mt-1 text-sm text-muted">ABA Therapy Services · Miami, Florida</p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted lg:max-w-none">
            Compassionate, structured ABA support focused on meaningful progress for children and families.
          </p>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Quick links</p>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href="#services" className="transition hover:text-primary">Services</a>
            <a href="#credentials" className="transition hover:text-primary">Credentials</a>
            <a href="#testimonials" className="transition hover:text-primary">Testimonials</a>
            <a href="#contact" className="transition hover:text-primary">Contact</a>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Legal</p>
          <div className="mt-3 flex flex-col items-center gap-2 lg:items-start">
            <Link href="/privacy" className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60">
              Privacy Policy
            </Link>
            <p className="text-xs text-muted">© 2026 Michelle Hernandez. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
