import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <Header />
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-96 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
    </div>
  );
}
