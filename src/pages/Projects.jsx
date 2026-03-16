import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className='project-grid'>
        {
          projects.map((project)=>(
            <ProjectCard project={project} />
          ))
        }
      </div>
  )
}

export default Projects
