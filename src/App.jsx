import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-[100dvh]">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
