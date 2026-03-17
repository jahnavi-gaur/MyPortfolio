import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuToggle(){
    setIsMenuOpen(prev => !prev)
  }

  function handleNavView(){
    setIsMenuOpen(prev => !prev)
  }

  function handleClick() {
    navigate("/contact#form")
  }

  return (
    <header>
      <section className='logo'>
        <h1>Jahnavi</h1>
      </section>

      <button className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </button>

      <nav className={isMenuOpen ? 'nav active' : 'nav'}>
        <ul>
          <li>
            <NavLink to={'/'} onClick={handleNavView}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} onClick={handleNavView}>About</NavLink>
          </li>
          <li>
            <NavLink to={'/projects'} onClick={handleNavView}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'} onClick={handleNavView}>Contact</NavLink>
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
