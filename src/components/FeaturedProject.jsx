import React from 'react'
import ProjectCard from './ProjectCard'
import './css/FeaturedProject.css'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

const HomeProject = () => {
  
  const featuredProjects = projects.slice(0,3)

  const navigate = useNavigate()

  return (
    <div className='home-projects'>
      <h1>Featured Projects</h1>
      <div className='project-grid'>
        {
          featuredProjects.map((project)=>(
            <ProjectCard project={project} />
          ))
        }
      </div>
      <button className='viewAll-btn' onClick={()=>navigate('/projects')}>View All Projects →</button>
    </div>
  )
}

export default HomeProject
