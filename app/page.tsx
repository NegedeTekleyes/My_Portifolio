import About from "@/components/About";
import Contact from "@/components/Contact";
import Experince from "@/components/Experince";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero/>
      <About/>
      <Contact/>
      <Experince/>
      <Projects/>
      <Skills/>
    </main>
  )
}