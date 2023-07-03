import React from 'react'
import {AiOutlineInstagram,AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai'
function Footer() {
  return (
    <div className='footer-cont bg-black text-white  py-3 px-6 flex justify-between items-center'>
        <div className="left-cont">
            
            <h3 className='text-lg'>Sujal Kumar</h3>
        </div>
        <div className="right-cont flex">
            <h4>Follow me on </h4>
            <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer ml-2"><a href="https://www.instagram.com/_noya.san/" target='_blank'><AiOutlineInstagram size={25}/></a></div>
            <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://www.linkedin.com/in/sujalkumar" target='_blank'><AiOutlineLinkedin size={25}/></a></div>
            <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://github.com/Sujal-Kr" target='_blank'><AiFillGithub size={25}/></a></div>
        </div>  

    </div>
  )
}

export default Footer
