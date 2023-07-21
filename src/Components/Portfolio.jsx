import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {BsChevronDoubleLeft} from 'react-icons/bs'
import {GiCheckMark} from 'react-icons/gi'
import {IoIosArrowBack} from 'react-icons/io'
import {IoIosArrowForward} from 'react-icons/io'
import { pro_data } from '../Projects'
function Portfolio() {
  const navigate=useNavigate()
  const data=pro_data
  const [project,setProject] = useState(null)
  const item=useLocation()
  const {id}=item.state
  const [curr,setCurr] = useState(id)
  useEffect(()=>{
    setProject(data[curr])
  },[curr])
  const handleHome=()=>{
    navigate('/')
  }
  const handelPrev=()=>{
    if(curr===0)return
    let count=curr
    count--
    setCurr(count)
    
  }
  const handleNext=()=>{
    let count=curr
    count++
    count%=6
    setCurr(count)
  }
 
  
  return (
    <div className='portfolio-cont py-20 px-4 lg:px-40 md:px-20 sm:px-10 relative '>
      <div onClick={handleHome} className="text-3xl absolute top-5 md:left-5 left-2 hover:text-white hover:bg-violet-300 rounded-[50%] duration-300 ease-linear  p-2">
        <BsChevronDoubleLeft/>
      </div>
      <h1 className='lg:text-5xl text-2xl pl-1 border-l-4 border-violet-600'>My Projects</h1>
     {
      project===null?<div className='grid md:grid-cols-2 my-4 gap-8'>
        <div className="bg-slate-100 h-[60vh] rounded-sm  animate-pulse"></div>
        <div className="">
          <h1 className=' bg-slate-100 h-8 max-w-xs rounded-sm'></h1>
          <p className='bg-slate-100 h-3 mt-12  rounded-lg'></p>
          <p className='bg-slate-100 h-3 my-4  rounded-lg'></p>
          <p className='bg-slate-100 h-3 my-4  rounded-lg'></p>
          <p className='bg-slate-100 h-3 my-4  rounded-lg'></p>
          <p className='bg-slate-100 h-3 my-4  rounded-lg'></p>
          <p className='bg-slate-100 h-3 my-4 max-w-md rounded-sm'></p>
        </div>
      </div>:
      <div className='grid grid-cols-1 py-10 md:grid-cols-2 gap-8 '>
        <div className="img-cont lg:p-4">
          <img src={project.image} alt="" className='drop-shadow-lg'/>
        </div>
        <div className="">
          <h3 className='text-3xl  border-b-2 border-solid border-violet-600 pb-2'>{project.title}</h3>
          <p className='max-w-md text-lg my-2'>{project.desc}</p>
          <h4 className='text-xl text-violet-600'>Key Features</h4>
             {
              project.bullets.map((point,index)=>(
                <li key={index} className='list-none flex items-center gap-2'><GiCheckMark color='#7c3aed'/>{point}</li>
              ))
             }
          <button className='text-lg px-4 py-1 my-8 border-solid border-violet-600 border-2 shadow-sm  hover:bg-violet-600 hover:text-white duration-300'><Link to={project.link} target='_blank'>Visit Site</Link></button>
        <div className="action-cont flex text-3xl gap-3 ">
          <div onClick={handelPrev} className="hover:bg-violet-400  hover:text-white rounded-full p-1 group ease-linear duration-300">
            <IoIosArrowBack   className='  cursor-pointer'/>
          </div>
          <div onClick={handleNext} className='hover:bg-violet-400  hover:text-white rounded-full p-1 group ease-linear duration-300'>
            <IoIosArrowForward  className='  cursor-pointer' />
          </div>
        </div>
        </div>
      </div>
     }
    </div>
  )
}

export default Portfolio
