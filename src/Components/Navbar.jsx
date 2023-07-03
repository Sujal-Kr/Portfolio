import React,{useState}from 'react'
import {FaHamburger} from 'react-icons/fa'
import { Link } from 'react-scroll'
import {MdClose} from 'react-icons/md'
import './Navbar.css'
function Navbar() {
  const [mode,setMode]=useState(false)
  return (
    <div className='flex items-center justify-between p-3  lg:px-12 lg:py-4 fixed top-0 left-0 w-full bg-white z-20 '>
      <div className="logo-cont text-violet-700">
        <h1 className='text-3xl'>PortFolio</h1>
      </div>

      <div className={mode===false?"navlist flex gap-8 ":"navlist flex gap-8 active"}>
        
        <div className="cursor-pointer font-extrabold active:text-violet-600 hover:text-violet-600 text-xl Home">
          <Link to='home' spy={true} smooth={true} offset={0} duration={100} onClick={()=>setMode(false)}>Home</Link>
        </div>
        <div className="cursor-pointer font-extrabold active:text-violet-600 hover:text-violet-600 text-xl about">
          <Link to='about_id'spy={true} smooth={true} offset={-100} duration={100} onClick={()=>setMode(false)}>About</Link>
        </div>
        <div className="cursor-pointer font-extrabold active:text-violet-600 hover:text-violet-600 text-xl service_nav">
          <Link to='service_id' spy={true} smooth={true} offset={-100} duration={100} onClick={()=>setMode(false)}>Service</Link>
        </div>
        <div className="cursor-pointer font-extrabold active:text-violet-600 hover:text-violet-600 text-xl project_nav">
          <Link to='project_id'spy={true} smooth={true} offset={100} duration={100} onClick={()=>setMode(false)}>Portfolio</Link>
        </div>
        <div className="cursor-pointer font-extrabold active:text-violet-600 hover:text-violet-600 text-xl contact">
          <Link to='contact_id' spy={true} smooth={true} offset={-100} duration={100} onClick={()=>setMode(false)}>Contact</Link>
        </div>
        <div className="close-cont md:hidden  absolute top-8 right-8 border-none "onClick={()=>setMode(!mode)}>

          <MdClose size={30}/>
        </div>
      </div>
      <div className="menu-bar md:hidden" >
      
        <FaHamburger color="#7c3aed" size={25} onClick={()=>setMode(!mode)}/>
      </div>
    </div>
  )
}

export default Navbar
