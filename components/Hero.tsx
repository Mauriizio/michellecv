import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white px-6 py-14 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 sm:px-10">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <div className="max-w-2xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">
          ABA Therapy • Miami, FL
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Michelle Hernandez, RBT
        </h1>
        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Compassionate, evidence-based support for children and families.
          Michelle partners with parents to build everyday skills that help kids
          feel confident, calm, and ready to thrive at home and school.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/18633496840"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-500"
          >
            Contact via WhatsApp
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}