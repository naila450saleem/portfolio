import React from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor />
      <Navbar />

      

      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}
