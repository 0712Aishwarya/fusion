import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Services from './components/Services'
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <Home/>
      <Services/>
      <Contact/>

      <Footer/>

    </>
  )
}

export default App
