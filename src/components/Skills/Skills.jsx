import React,{useState,useEffect} from 'react'
import './Skills.css'
import SkillCard from './SkillCard/SkillCard'
import { SKILLS } from "../../utils/data"
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
import Technologies from '../Technologies'
import AOS from 'aos';


const Skills = ({id}) => {
    useEffect(() => {
        AOS.init({
            offset : -10
        });
      }, [])
    // console.log(SKILLS[1].icon);
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

    const handleSelectSkill = (data) =>{
        setSelectedSkill(data)
    }
  return (
    <>
    <div className=' mx-5 lg:mx-10 pt-6' id={id}>
<section className='skills-container'>
    <h5 className='mt-20 mb-12 text-center text-4xl' data-aos="zoom-in">Technical Proficiency</h5>

    <div className='skills-content'>
        <div className='skills' data-aos="flip-right" data-aos-duration="1500">
            {SKILLS.map((item) => 
                (
                    <SkillCard
                        key={item.title}
                        iconUrl={item.icon}
                        title={item.title}
                        isActive={selectedSkill.title === item.title}
                        onClick={()=>{handleSelectSkill(item)}}
                    />
               )
            )}
        </div>

        <div className='skills-info'  data-aos="flip-left" data-aos-duration="1500">
            <SkillsInfoCard heading={selectedSkill.title} skills={selectedSkill.skills}/>
        </div>
    </div>

    </section>
    </div>
    <Technologies/>
    </>
    
  )
}

export default Skills
