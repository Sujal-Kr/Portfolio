import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './Project.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import { pro_data } from '../Projects/index'

function Project() {
  const navigate=useNavigate()
  const [project,setProject] =useState(null)
  let data=pro_data
  
  useEffect(()=>{
    aos.init()
    setProject(data)
  },[])
  

  const handleChange =(arg)=>{
    if(arg==="all"){
      setProject(data)
      return
    }
    let temp=data.filter((item)=>{return item.type===arg})
    setProject(temp)
  }
  const handleLink=(item)=>{
    navigate(`/portfolio/${item.id}`,{state:item})
    // window.open(project[index].link,"_blank")
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
          project===null?<>loading</>:
          project.map((item,index)=>(
            <div className="project w-80  p-3 relative overflow-hidden" key={index} onClick={()=>handleLink(item)} data-aos="fade-up" data-aos-duration="2000" >
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
