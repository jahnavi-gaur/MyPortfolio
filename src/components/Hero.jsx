import React from 'react'
import { NavLink } from 'react-router-dom'
import profile from '../assets/profile.png'
import '../components/css/Hero.css'
import { ReactTyped } from 'react-typed'

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <h1>Hi, I'm Jahnavi Gaur</h1>
                <h2>
                    I am a{" "}
                    <ReactTyped
                        strings={["React Developer", "Web Developer", "MERN Developer", "Full Stack Developer"]}
                        typeSpeed={40}
                        backSpeed={30}
                        backDelay={1500}
                        loop
                        showCursor={true}
                        cursorChar="|"
                    />
                </h2>

                <p>MERN Stack Developer with a passion for building scalable web applications and intuitive user experiences.
                    Skilled in React, Node.js, Express, and MongoDB, and always eager to learn new technologies.
                </p>
                <div className='hero-btns'>
                    <NavLink to='/projects'>
                        <button className='view-work-btn'>View My Work</button>
                    </NavLink>

                    <NavLink to='/contact'>
                        <button className='contact-me-btn'>Contect Me</button>
                    </NavLink>
                </div>
            </div>

            <div className='hero-img'>
                <img src={profile} alt="jahnavi-img"></img>
            </div>
        </div>
    )
}

export default Hero
