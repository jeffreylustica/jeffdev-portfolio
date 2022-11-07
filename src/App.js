import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Featured from './sections/Featured'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import Contact from './sections/Contact'
import useHeroObserver from './hooks/useHeroObserver'
import Footer from './sections/Footer'

export default function App() {
    const {ref, isElVisible} = useHeroObserver({rootMargin: "-480px 0px 0px 0px"}, {once: false})

    return (
      <>
        <Header isElVisible={isElVisible} />
        <Hero ref = {ref}/>
        <Featured />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
        <Footer />
      </>
    )
}

