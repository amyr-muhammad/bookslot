import { useState } from 'react'
import Navabar from './components/navbar'
import Hero from './components/hero'
import HowItWorks from './components/howItWorks/HowItWorks'
import PageBuilder from './components/pageBuilder/PageBuilder'
import Footer from './components/footer'

function App() {

  return (
    <>
        <Navabar />
        <Hero />
        <HowItWorks />
        <PageBuilder />
        <Footer />
    </>

  )
}

export default App
