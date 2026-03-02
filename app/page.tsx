import About from "@/components/About";
import Contact from "@/components/Contact";
import Credentials from "@/components/Credentials";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlayfulShowcase from "@/components/PlayfulShowcase";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute -left-40 top-6 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-[30%] h-[30rem] w-[30rem] rounded-full bg-secondary/15 blur-[140px]" />
      <div className="pointer-events-none absolute left-10 top-[58%] h-52 w-52 rounded-full bg-pink-400/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-12 top-[70%] h-56 w-56 rounded-full bg-amber-300/20 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-[85%] h-48 w-48 -translate-x-1/2 rounded-full bg-sky-400/20 blur-[95px]" />
      <div className="pointer-events-none absolute left-1/3 top-[18%] h-44 w-44 -translate-x-1/2 rounded-full bg-violet-400/15 blur-[95px]" />
      <div className="pointer-events-none absolute right-[6%] top-[52%] h-64 w-64 rounded-full bg-fuchsia-400/15 blur-[115px]" />
      <div className="pointer-events-none absolute left-[8%] top-[78%] h-44 w-44 rounded-full bg-emerald-300/20 blur-[90px]" />
      <div className="pointer-events-none absolute right-1/3 top-[88%] h-40 w-40 rounded-full bg-indigo-300/20 blur-[85px]" />
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
      <WhatsAppFloat />
    </div>
  );
}