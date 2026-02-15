import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";
import Hero from "@/components/sections/hero/Hero";
import Portifolio from "@/components/sections/portifolio/Portifolio";
import Resume from "@/components/sections/resume/Resume";
import Services from "@/components/sections/services/Services";


export default function HomePage() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Resume />
    <Portifolio />
    <Contact />
    </>
  )
}