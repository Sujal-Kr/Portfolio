import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'exact element={<>
            <Navbar/>
            <Home/>
            <About/>
            <Services/> 
            <Project/>
            <Contact/>
            <Footer/>
          </>}>
          </Route>
          <Route path='/portfolio/:id' exact element={<Portfolio/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
