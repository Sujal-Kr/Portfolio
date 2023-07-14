import React,{useEffect} from 'react'
import {AiOutlineMobile} from 'react-icons/ai'
import {DiCodeBadge} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import './Service.css'
import aos from 'aos'
import 'aos/dist/aos.css'
function Services() {
  useEffect(()=>{
    aos.init()
  })
  return (
    <div className='services-cont px-4 pt-8 ' id='service_id'>

      <div className="heading-cont pb-12">
        <h5 className='text-xl  lg:pl-36 '>Area of </h5>
        <h3 className='text-3xl lg:pl-36 text-violet-600'>My Services</h3>
      </div>
      <div className="service-list  gap-8 grid my-12 lg:px-32">

        <div className="service    px-5 py-4  " data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">
            
            <div className="icon-cont">
              <DiReact size={50} color='#7c3aed'/>
            </div>
            <h3 className='text-2xl my-1'>Web Development</h3>
            <p>Web development refers to the process of building websites and web applications. It involves a combination of programming, design,   and other technical skills to create functional and interactive websites. </p>
        </div>
        <div className="service    px-5 py-4  " data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">
            <div className="icon-cont">
              <AiOutlineMobile size={50} color='#7c3aed'/>
            </div>
            <h3 className='text-2xl my-1 '>Responsiveness</h3>
            <p>Responsive design creates websites that adapt to different screen sizes and devices, ensuring accessibility and usability across various resolutions for an optimal user experience and improved engagement.</p>
        </div>
        <div className="service    px-5 py-4  " data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
            <div className="icon-cont ">
              <DiCodeBadge size={50} color='#7c3aed'/>  
            </div>
            <h3 className='text-2xl my-1'>Web Design</h3>
            <p>Web design refers to the visual and aesthetic aspect of creating websites. It involves designing the layout, color scheme, typography, and graphical elements of a website to create an appealing and  engaging ui. </p>
        </div>
      </div>
    </div>
  )
}

export default Services
