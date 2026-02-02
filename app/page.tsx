import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-[var(--background)]">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-500/20" />
      <div className="pointer-events-none absolute right-0 top-80 h-80 w-80 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/20" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 py-12 sm:px-10 lg:px-12">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
