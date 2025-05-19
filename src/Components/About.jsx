import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';
import logo from '../images/logos.png'
import about from '../images/abt2.jpg'

const About = () => {
  return (
    <div>
      {/* SUB-HEADER */}
      <section className="about-sub-header">
        <nav>
          <img src={logo} alt='' width={150} height={150}/>
          <div className="nav-links">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/about'>ABOUT</Link></li>
            <li><Link to='/course'>COURSE</Link></li>
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to='/contact'>CONTACT</Link></li>
            </ul>
          </div>
        </nav>
        <h1>About Us</h1>
      </section>

      {/* ABOUT-US */}
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <img src={about} alt=''/>
          </div>
          <div className="about-col">
            <h1>We Are The World's Largest <br/> University</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Pariatur harum eaque veritatis tempora magnam <br /> obcaecati sit quibusdam fugit vitae enim <br /> dolorem expedita, voluptate maiores <br /> quaerat veniam provident! Cum, <br /> similique error.</p>
            <br/><br/><a href="www.google.com" className="explore">EXPLORE NOW</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="footer">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium omnis sint quae. Reprehenderit cum officia in odit omnis eum deleniti voluptatum facere libero, error distinctio excepturi minus ducimus dicta?</p>
            <div className="icons">
            <a href="https://www.facebook.com/"><ion-icon name="logo-facebook" /></a>
            <a href="https://www.instagram.com/"><ion-icon name="logo-instagram" /></a>
            <a href="https://twitter.com"><ion-icon name="logo-twitter" /></a>
            <a href="https://www.google.com/ "><ion-icon name="logo-google" /></a>
            <a href="https://www.skype.com/en/"><ion-icon name="logo-skype" /></a>
            </div>
        </section>
    </div>
  )
}

export default About