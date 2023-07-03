import React from 'react'
import {AiFillGithub,AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
import { useState } from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function Contact() {
    const [name,setName] = useState('')
    const [mail,setMail] = useState('')
    const [msg,setMsg] = useState('')
    
    const handleSubmit = () => {
        toast.success('message sent!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined
          })
    }
  return (
    <div className='contact-cont px-4' id='contact_id'>
      <div className="heading-cont lg:px-36">
        <h5 className='text-xl'>Get in Touch</h5>
        <h3 className='text-3xl text-violet-600'>Contact Us</h3>
      </div>
      <div className="contact-wrapper lg:flex lg:justify-center  my-20">
        <div className="form-cont lg:w-[30%] bg-slate-50 px-4 py-8 shadow-lg">
            <div className="name-cont my-4 flex flex-col-reverse ">
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="fname"  className="block w-full rounded-md border-0 py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-violet-600  sm:text-sm sm:leading-6"  placeholder="Jhon Doe"/>
                <label htmlFor="fname">Full Name</label>
            </div>
            <div className="mail-cont  my-4 flex flex-col-reverse">
                <input value={mail} onChange={(e)=>setMail(e.target.value)} type="mail" name="mail"  className="block w-full rounded-md border-0 py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-violet-600  sm:text-sm sm:leading-6" placeholder="user@xyz.com"/>
                <label  htmlFor="mail" >Email</label>
            </div>
            <div className="msg-cont my-4 flex flex-col-reverse">
                <textarea  name="msg" value={msg} onChange={(e)=>setMsg(e.target.value)} className="block w-full rounded-md border-0 py-1.5 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:outline-violet-600 sm:text-sm sm:leading-6" placeholder="Your message"/>
                <label htmlFor="msg">Message</label>
            </div>
            <div className="btn-cont">
                <button onClick={handleSubmit} className='btn text-lg px-4 py-1 my-2 border-solid border-violet-600 border-2 shadow-sm  hover:bg-violet-600 hover:text-white duration-300'>Send Message</button>
            </div>
        </div>
        <div className="address-cont bg-violet-600 text-white px-4 py-8 lg:w-[20%] shadow-lg">
            <div className="loc-cont">
                <h3 className='text-xl text-black'>Address</h3>
                <h5>Gaya Bihar,India</h5>
            </div>
            <div className="phone-cont">
                <h3 className='text-xl text-black'>Phone</h3>
                <h5>+91 8271243130</h5>
            </div>
            <div className="email-cont">
                <h3 className='text-xl text-black'>Email</h3>
                <h5>sunnykumarcms45@gmail.com</h5>
            </div>
            <div className="social-icons flex my-3 ">
                <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://www.instagram.com/_noya.san/" target='_blank'><AiOutlineInstagram size={30}/></a></div>
                <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://www.linkedin.com/in/sujalkumar" target='_blank'><AiOutlineLinkedin size={30}/></a></div>
                <div className="social hover:-translate-y-1 transition-all duration-[0.3s] cursor-pointer"><a href="https://github.com/Sujal-Kr" target='_blank'><AiFillGithub size={30}/></a></div>
            </div>
            <ToastContainer/>
        </div>
      </div>
    </div>
  )
}

export default Contact
