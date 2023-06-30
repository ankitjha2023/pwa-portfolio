import React from 'react'
import skills from '../api/skills'
const Skills = ({textColor,bgColor}) => {
  return (
    <section id="skills">
  <div className="container">
    <div className="row">
     
      {
         skills.map((skill)=>{
          return(
            <div className={`col-lg-4 py-3 text-center bg-${bgColor} text-${textColor}`} key={skill.id}>
       
          
            <i className={`fas fs-4 ${skill.icon} border p-3 rounded-circle`} />
            <h4 className="card-title mt-3">{skill.title}</h4>
            <p className="card-text mt-3">
             {skill.desc}
            </p>
          </div>
       
      
          )
         })
      }
      
     
    </div>
    
  </div>
</section>

  )
}

export default Skills
