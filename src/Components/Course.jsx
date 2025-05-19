import React from 'react'
import { Link } from 'react-router-dom';
import './Course.css'
import logo from '../images/logos.png'
import library from '../images/library.jpg'
import canteen from '../images/cantn.jpg'
import playground from '../images/playgroung.jpg'

const Course = () => {
  return (
    <div>

      {/* SUB-HEADER */}
      <section className="course-sub-header">
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
        <h1>Our Courses</h1>
      </section>

      {/* COURSES */}
      <section className="course">
            <h1>Courses we Offer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati nesciunt facere, enim reprehenderit laudantium! Perferendis temporibus minus ab consectetur rerum.</p>
                </div>
                <div className="course-col">
                    <h3>Degree</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati nesciunt facere, enim reprehenderit laudantium! Perferendis temporibus minus ab consectetur rerum.</p>
                </div>
                <div className="course-col">
                    <h3>Post Graduation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati nesciunt facere, enim reprehenderit laudantium! Perferendis temporibus minus ab consectetur rerum.</p>
                </div>
            </div>
        </section>

        {/* FACILITIES */}
        <seaction className="facility">
            <h1>Our Facilities</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="facility-col">
                    <img src={library} alt=''/>
                    <h3>World Class Library</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="facility-col">
                    <img src={canteen} alt=''/>
                    <h3>Tasty and Hygenic Canteen</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="facility-col">
                    <img src={playground} alt=''/>
                    <h3>Largest Playground</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </seaction>

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

export default Course