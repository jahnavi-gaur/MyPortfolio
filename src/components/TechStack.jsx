import React from 'react'
import TechCard from './TechCard';
import './TechStack.css'

const TechStack = () => {
    const techStack = [
        { name: "React" },
        { name: "Node.js" },
        { name: "Express" },
        { name: "MongoDB" },
        { name: "JavaScript" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "Tailwind" },
        { name: "CPP" },
        { name: "Git"}
    ]

    return (
        <div className="tech-container">

            <h1>My Tech Stack</h1>

            <div className="tech-grid">
                {
                    techStack.map((skill, index)=>{
                        return <TechCard skill={skill.name} key={index}/>
                    })
                }
            </div>

        </div>
    )
}

export default TechStack
