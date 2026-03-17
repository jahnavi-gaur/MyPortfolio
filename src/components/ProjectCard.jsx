import React from 'react'
import reactLogo from "../assets/skillLogos/react.png"
import './css/ProjectCard.css'

const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
      <img src={reactLogo} alt='' />
      <h3>{project.title}</h3>
      <p>{project.tech}</p>
      <div className='project-btn'>
        <button>Github</button>
        <button>Live</button>
      </div>
    </div>
  )
}

export default ProjectCard
