import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navabar from './components/navbar'
import Hero from './components/hero'
import HowItWorks from './components/howItWorks/HowItWorks'
import PageBuilder from './components/pageBuilder/PageBuilder'
import Footer from './components/footer'
import Shared from "./components/shared"

const Home = () => (
  <>
    <Navabar />
    <Hero />
    <HowItWorks />
    <PageBuilder />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview" element={<Shared />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App