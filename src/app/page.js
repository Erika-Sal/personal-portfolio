import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import ProjectAccordion from './components/ProjectAccordion'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import './styles/sections.css'

export default function Home() {
  return (
    <>
      <Navbar />

      <div id="top">
        <Hero />
      </div>

      <section id="work">
        <FeaturedProject />
        <ProjectAccordion />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="about">
        <Skills />
        <Gallery />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
