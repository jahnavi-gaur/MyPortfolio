import React from 'react'
import Hero from '../components/Hero'
import './css/Home.css'
import TechStack from '../components/TechStack'
import FeaturedProject from '../components/FeaturedProject'

const Home = () => {
    return (
        <div className='home'>
            <section className="hero">
                <Hero />
            </section>
            <section className="tech">
                <TechStack />
            </section>
            <section className="projects">
                <FeaturedProject />
            </section>
        </div>
    )
}

export default Home
