import Navbar from "@/components/Navbar";
import SignalTrace from "@/components/SignalTrace";
import Hero from "@/components/Hero";
import SIHSection from "@/components/SIHSection";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import MarqueeSection from "@/components/MarqueeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <SignalTrace />
      <Navbar />
      <Hero />
      <div className="h-24 md:h-32 w-full bg-[var(--bg)] border-b border-[var(--surface-border)]"></div>
      <SIHSection />
      <About />
      <Achievement />
      <Projects />
      <Skills />
      <Timeline />
      <MarqueeSection />
      <Contact />
      <Footer />
    </main>
  );
}
