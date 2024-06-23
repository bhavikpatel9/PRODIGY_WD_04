import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {

  return (
    <>
        <Navbar/>
        <Hero id="home"/>
        <Skills id="skills"/>
        <Projects id="projects"/>
        <AboutMe id="aboutme"/>
        <Contact id="contact"/>
        <Footer/>
    </>
  )
}

export default App
