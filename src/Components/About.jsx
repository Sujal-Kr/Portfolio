import React,{useEffect} from 'react'
import pic from '../assets/pic.webp'
import {BsDownload} from 'react-icons/bs'
import resume from '../Resume/sujal.pdf'
import './About.css'
import aos from 'aos'
import 'aos/dist/aos.css'
function About() {
    useEffect(()=>{
        aos.init()
    })
  return (
    <div className='about-cont grid grid-cols-1 my-12 gap-16 md:grid-cols-2 lg:px-20 sm:px-2' id='about_id' >
        <div className="image-cont px-10 flex justify-center " >
            <img src={pic} alt="My image " className='my-image lg:h-3/4 sm:object-cover ' data-aos="fade-down" data-aos-durtation="2000"/>
        </div>
        <div className="bio-cont px-4 ">
            <h3 className='text-3xl text-violet-600'>About Me</h3>
            <p className="content my-4">A self-motivated frontend developer with experience in building responsive and interactive user interfaces using React. Skilled in HTML, CSS, JavaScript, and web development best practices. Completed internships at Refresh Infra Tech and Digi Soul Tech, gaining experience in collaborating with teams to develop web applications.</p>
            <div className="skills-cont my-8">
                <div className="skill">
                    <h4 className='text-xl'>Html</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-full before:bg-violet-600 "></div>
                </div>

                <div className="skill">
                    <h4 className='text-xl'>Css</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-full before:bg-violet-600 "></div>
                </div>

                <div className="skill">
                    <h4 className='text-xl'>JavaScript</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-[90%] before:bg-violet-600 "></div>
                </div>

                <div className="skill">
                    <h4 className='text-xl'>React</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-[95%]  before:bg-violet-600 "></div>
                </div>

                <div className="skill">
                    <h4 className='text-xl'>Java</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-[95%] before:bg-violet-600 "></div>
                </div>

                <div className="skill">
                    <h4 className='text-xl'>Postgres</h4>
                    <div className="progress-bar h-2 bg-slate-200  my-2 relative before:absolute before:h-2 before:w-[80%] before:bg-violet-600 "></div>
                </div>
            </div>
            <div className="btn-cont">
                <a href={resume} download="resume" target='_blank'>
                <button className='text-lg px-4 py-1 my-8 border-solid border-violet-600 border-2 shadow-sm hover:bg-violet-600 hover:text-white duration-300 flex items-center gap-1' ><BsDownload/><span>Resume</span></button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About
