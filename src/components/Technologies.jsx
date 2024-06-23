import React,{useEffect} from 'react'
import Marquee from "react-fast-marquee";
import { FaReact,FaNodeJs,FaBootstrap } from "react-icons/fa";
import { SiMongodb,SiExpress  } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Aos from 'aos';

const Technologies = () => {
  useEffect(() => {
    Aos.init({
      duration : "1000",
      delay : "200"
    })
  }, [])
  
  return (
    <>
    <div className='lg:mx-96 mt-10 relative overflow-hidden' data-aos="flip-up" data-aos-offset="-100">
        <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#060417] to-transparent pointer-events-none z-10'></div>
        <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#060417] to-transparent pointer-events-none z-10'></div>
      <Marquee className='flex'>
           <FaReact className='text-7xl text-cyan-400 mr-16'/>
           <FaBootstrap className='text-7xl text-purple-700 mr-16'/>
           <FaNodeJs className='text-7xl text-green-500 mr-16'/>
           <SiMongodb className='text-7xl text-green-500 mr-16'/>
           <SiExpress className='text-7xl mr-16'/>
           <RiTailwindCssFill className='text-7xl text-cyan-400 mr-16'/>
      </Marquee>
    </div>
      <div className='w-[85%] mx-auto pb-16 border-b-2 border-purple-900 border-opacity-20'></div>
    </>
  )
}

export default Technologies
