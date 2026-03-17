import React from 'react'
import profileImg from '../assets/profile.png'
import './css/AboutIntro.css'

const AboutIntro = () => {
    return (
        <div className='about-intro'>
            <div className='intro-img'>
                <img src={profileImg} alt='profile-img' />
            </div>
            <div className='my-intro'>
                <p>
                    Hi, I'm Jahnavi, a passionate MERN Stack Developer who enjoys building modern and responsive web applications. I love turning ideas into real products by writing clean code and focusing on great user experiences.
                    I have experience working with technologies like React, Node.js, Express, and MongoDB to build full-stack applications. I'm always eager to learn new tools, improve my problem-solving skills, and create efficient solutions that deliver real value to users.
                </p>
            </div>
        </div>
    )
}

export default AboutIntro
