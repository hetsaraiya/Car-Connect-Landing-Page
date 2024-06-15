import React from 'react'

const Navbar = () => {
  return (
    <div><header>
    <div className="container flex-row" data-aos="zoom-in" data-aos-duration="2000">
      <div className="headerlogo">
        <img src='/img/Picsart_24-01-05_21-28-53-808.png' alt="" />
      </div>
      <nav>
        <ul className="header__menu flex-row">
          <li><a href="#HOME">HOME </a></li>
          <li><a href="#projects">ABOUT </a></li>
          <li><a href="#services">SERVICES </a></li>
          <li><a href="#">RIDE/DRIVE </a></li>
          <li><a href="#contact">CONTACT </a></li>
          <li><a href="#testimonial">TESTIMONIALS</a></li>
          <li><a href="#id">TEAM</a></li>
        </ul>
      </nav>
      <div className="right flex-center">
        <a href="/animated-login-form-main/animated-login-form-main/index.html" className="btn btn-secondary">Login/Signup</a>
        <div className="menu-btn">
          <i className="fas fa-bar"></i>
        </div>

      </div>
    </div>
  </header></div>
  )
}

export default Navbar