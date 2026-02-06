import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlayfulShowcase from "@/components/PlayfulShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-40 top-6 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[30%] h-[30rem] w-[30rem] rounded-full bg-secondary/15 blur-[140px]" />
      <Header />
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-2 pt-8 sm:px-10 lg:px-12 lg:pt-10">
        <Hero />
        <Services />
        <About />
        <Credentials />
        <PlayfulShowcase />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
