import React from 'react'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import './css/Project.css'

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <p>Here are some of the projects I’ve built while learning and working with the MERN stack.
Each project reflects my focus on writing clean code, building responsive interfaces, and solving real-world problems. These projects demonstrate my hands-on experience in building full-stack web applications using the MERN stack, focusing on performance, scalability, and user experience.</p>
      <div className='project-grid'>
        {
          projects.map((project)=>(
            <ProjectCard project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
