import React from 'react'
import AboutIntro from '../components/AboutIntro'
import AboutSkills from '../components/AboutSkills'
import AboutJourney from '../components/AboutJourney'
import './css/About.css'

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <section className='intro'>
        <AboutIntro />
      </section>
      <section className='skills'>
        <AboutSkills />
      </section>
      <section className='journey'>
        <AboutJourney />
      </section>
    </div>
  )
}

export default About
