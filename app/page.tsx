import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12 sm:px-10 lg:px-12">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
