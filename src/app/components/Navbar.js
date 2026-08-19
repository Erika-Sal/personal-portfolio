import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#top" className="brand-title">Erika Salvador</a>

      <div className="navbar-links">
        <ul>
          <li><a href="#work">projects</a></li>
          <li><a href="#experience">experience</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
