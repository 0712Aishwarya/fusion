import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' // ✅ This line is needed!
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Services from './components/Services'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'


function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Router>
      <Header />
      <HeroSection />
      <Home />
      <Services />
      <About/>

      <Contact />
      <Footer />
    </Router>
  )
}

export default App;
