import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import './css/Contact.css'

const Contact = () => {
  return (
    <div className='contactPage'>
      <h1>Contact Me</h1>
      <div className='contactContainer'>
        <section className='contactInfo'>
          <ContactInfo />
        </section>
        <section className='contactForm' id='form'>
          <ContactForm />
        </section>
      </div>
    </div>
  )
}

export default Contact
