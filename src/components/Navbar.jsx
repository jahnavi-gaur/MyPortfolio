import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()

    function handleClick(){
        navigate("/contact")
    }
    
  return (
    <header>
      <section className='logo'>
        <h1>Jahnavi</h1>
      </section>
      <nav>
        <ul>
            <li>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/projects'}>Projects</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
            <li>
                <button onClick={handleClick}>Hire Me</button>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
