import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css'
import logo from '../images/logos.png'

const Contact = () => {
  return (
    <div>

      {/* SUB-HEADER */}
      <section className="contact-sub-header">
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
        <h1>Contact Us</h1>
      </section>

      {/* CONTACT US */}
      <section className="location">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6872164482384!2d-1.2570928235142602!3d51.75704287187104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1747642074180!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
            <i className="fa-solid fa-house" />
            <span>
              <h5>Washington Square</h5>
              <p>United Kingdom</p>
            </span>
            </div>
            <div>
            <i className="fa-solid fa-phone" />
            <span>
              <h5>242525</h5>
              <p>Monday to Saturday, 9.30am to 6.30pm</p>
            </span>
            </div>
            <div>
            <i className="fa-solid fa-envelope" />
            <span>
              <h5>oxforduniversity@gmail.com</h5>
              <p>Email Us Your Query</p>
            </span>
            </div>
          </div>
          <div className="contact-col">
            <form>
              <input type="text" placeholder='Enter Your Name' required/>
              <input type="email" placeholder='Enter email Address' required/>
              <input type="text" placeholder='Enter Your Subject' required/>
              <textarea rows={8} placeholder='Message' required defaultValue={""}/>
              <button type='submit' className='button'>Send Message</button>
            </form>
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

export default Contact