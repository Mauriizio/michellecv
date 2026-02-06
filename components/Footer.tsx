export default function Footer() {
  return (
    <footer className="mx-auto mt-8 w-full max-w-6xl px-6 pb-10 sm:px-10 lg:px-12">
      <div className="section-shell flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">Michelle Hernandez, RBT</p>
          <p className="mt-1 text-sm text-muted">ABA Therapy Services · Miami, Florida</p>
          <p className="mt-2 text-xs text-muted">© 2026 Michelle Hernandez. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a href="#services" className="rounded-full border border-border bg-surface-alt px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60">
            Services
          </a>
          <a href="#credentials" className="rounded-full border border-border bg-surface-alt px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60">
            Credentials
          </a>
          <a href="#contact" className="shine-hover rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
