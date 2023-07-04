import React,{useState,useEffect} from 'react'
import rest from '../assets/rest.svg'
import shop from '../assets/shopping.svg'
import hospital from '../assets/hospital.svg'
import company from '../assets/company.svg'
import insta from '../assets/insta.svg'
import resume from '../assets/resume.svg'
import './Project.css'
import aos from 'aos'
import 'aos/dist/aos.css'
function Project() {
  useEffect(()=>{
    aos.init()
  })
  let data=[{title:"Canteen Website",desc:"Online Canteen Manangement System.Both FrontEnd and BackEnd Integrated",image:rest,type:"personal",link:"https://wondrous-strudel-7a7820.netlify.app/"},{title:"Resume Builder",desc:"Classic Example of Redux Toolkit and Firebase Integration",image:resume,type:"personal"},{title:"Instagram Clone",desc:"Instagram Reels clone with the use of firebase, redux and intersection API",image:insta,type:"personal",link:"https://clever-horse-896f5b.netlify.app/login"},{title:"It Firm Webstite",desc:"A React based Website for DigiSoulTech Pvt Ltd.",image:company,type:"client",link:"https://649551f249d2ee037b95c69f--bright-strudel-6aa0d1.netlify.app/"},{title:"Shopping Cart",desc:"Redux Toolkit",image:shop,type:"personal",link:"https://legendary-halva-2b0e8f.netlify.app/"},{title:"Hospital Website",desc:"Developed a React Website for Shre Ganesh Eye Hospital",image:hospital,type:"client",link:"https://poetic-pasca-1d56bc.netlify.app/"}]


  const [project,setProject] =useState(data)
  const handleChange =(arg)=>{
    if(arg==="all"){
      setProject(data)
      return
    }
    let temp=data.filter((item)=>{return item.type===arg})
    setProject(temp)
  }
  const handleLink=(index)=>{
    window.open(project[index].link,"_blank")
  }
  return (
    
    <div className='project-cont py-40 px-4 ' id='project_id'>
      <div className="heading-cont pb-8 lg:px-36">
        <h5 className='text-xl'>My</h5>
        <h3 className='text-3xl text-violet-600'>Latest Projects</h3>
      </div>
      <p className='md:max-w-lg lg:mx-36'>Explore my project section to discover how I've successfully translated ideas into tangible solutions, pushing the boundaries of creativity and problem-solving.</p>
      <div className="tab-cont lg:mx-36 flex gap-8 mt-8 border-solid ">
        <button className='lg:text-3xl text-lg hover:text-violet-600 focus:text-violet-600' onClick={()=>handleChange("all")}>All</button>
        <button className='lg:text-3xl text-lg hover:text-violet-600 focus:text-violet-600' onClick={()=>handleChange("personal")}>Personal</button>
        <button className='lg:text-3xl text-lg hover:text-violet-600 focus:text-violet-600' onClick={()=>handleChange("client")}>Client</button>
      </div>
      <div className="project-list  flex flex-wrap gap-1 justify-center  my-12 sm:px-4 lg:px-40 ">
        {
          project.map((item,index)=>(
            <div className="project w-80  p-3 relative overflow-hidden" key={index}onClick={()=>handleLink(index)} data-aos="zoom-in" data-aos-duration="2000" >
              <img src={item.image} alt="" />
              <div className="desc absolute h-full w-full top-0 left-0 flex justify-center items-center flex-col ">
                <h4 className='text-2xl text-white'>{item.title}</h4>
                <p className='text-center px-1 text-white'>{item.desc}</p>
              </div>
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Project
