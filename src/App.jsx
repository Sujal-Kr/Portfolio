import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/> 
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
