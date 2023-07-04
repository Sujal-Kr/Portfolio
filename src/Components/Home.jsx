import React,{useEffect} from 'react'
import './Home.css'
import { Link } from 'react-scroll'
import profile from '../assets/profile.png'
import {AiOutlineInstagram,AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai'
import aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    aos.init()
  })

  return (
    <div className='home-cont h-screen  px-4 flex-col sm md:flex-row md:pl-32 flex justify-center items-center relative  ' id='home'>
      <div className="content"> 
        <h3 className='text-3xl lg:text-4xl'>Hi There!</h3>
        <h1 className='text-5xl lg:text-6xl typed-out'>I am a <span className='text-violet-600 '>Developer</span></h1>
        <h3 className='text-3xl lg:text-4xl'>I make the complex simple.</h3>
        <div className="btn-cont  "></div>
            <button className='text-lg px-4 py-1 my-8 border-solid border-violet-600 border-2 shadow-sm  hover:bg-violet-600 hover:text-white duration-300'>
              <Link to='contact_id'spy={true} smooth={true} offset={-100} duration={100}>Hire Me</Link>
            </button>
      </div>
      <div className="porfile-bg lg:w-[50%] relative bg-violet-600 " data-aos="fade-up"  data-aos-duration="1000">
          <img src={profile} alt="" className='' />
      </div>
      <div className="social-cont flex absolute bottom-8 left-4  md:flex-col ">
        <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://www.instagram.com/_noya.san/" target='_blank'><AiOutlineInstagram size={30}/></a></div>
        <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://www.linkedin.com/in/sujalkumar" target='_blank'><AiOutlineLinkedin size={30}/></a></div>
        <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://github.com/Sujal-Kr" target='_blank'><AiFillGithub size={30}/></a></div>
      </div>
    </div>
  )
}

export default Home
