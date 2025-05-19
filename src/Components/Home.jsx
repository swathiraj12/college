import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import Logo from '../images/logos.png'
import london from '../images/london.jpg'
import austria from '../images/austria.jpg'
import us from '../images/america.jpg'
import library from '../images/library.jpg'
import canteen from '../images/cantn.jpg'
import playground from '../images/playgroung.jpg'
import user1 from '../images/user1.jpg'
import user2 from '../images/user2.jpg'

const Home = () => {
  return (
    <>
    <div>
        {/* HEADER */}
        <section className='home-header'>
            <nav>
                <img src={Logo} alt='' width={150} height={150}/>
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
            <div className="text-box">
                <h1>World's University</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda unde accusantium, 
                   veritatis <br /> aspernatur architecto qui nostrum animi voluptatem <br /> dolorem voluptas ullam 
                   sequi impedit alias quidem? Nostrum sint perspiciatis error doloremque.</p>
                <a href="www.google.com" className="hero-btn" target='blank'>Visit Us To Know More</a>
            </div>
        </section>

        {/* COURSES */}
        <section className="course">
            <h1>Courses we Offer</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="course-col">
                    <h3>Intermediate</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati nesciunt facere, enim.</p>
                </div>
                <div className="course-col">
                    <h3>Degree</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati nesciunt facere, enim reprehenderit laudantium! Perferendis.</p>
                </div>
                <div className="course-col">
                    <h3>Post Graduation</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, consequuntur rem? Tempore id qui, sed, beatae aliquid tempora obcaecati.</p>
                </div>
            </div>
        </section>

        {/* CAMPUS */}
        <section className="campus">
            <h1>Our Global Campus</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="campus-col">
                    <img src={london} alt=''/>
                    <div className="layer">
                        <h3>LONDON</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={austria} alt=''/>
                    <div className="layer">
                        <h3>AUSTRIA</h3>
                    </div>
                </div>
                <div className="campus-col">
                    <img src={us} alt=''/>
                    <div className="layer">
                        <h3>AMERICA</h3>
                    </div>
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

        {/* TESTIMONIALS */}
        <section className="testimonials">
            <h1>What Our Students Say</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="row">
                <div className="testimonial-col">
                    <img src={user1} alt=''/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum quibusdam totam nulla repudiandae? Corporis aliquid, ab assumenda commodi officia, vel sed sequi, tempora velit repellat eum totam. Nihil, corporis.</p>
                        <h3>Merideth Grey</h3>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-regular fa-star" />
                    </div>
                </div>
                <div className="testimonial-col">
                    <img src={user2} alt=''/>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eum quibusdam totam nulla repudiandae? Corporis aliquid, ab assumenda commodi officia, vel sed sequi, tempora velit repellat eum totam. Nihil, corporis.</p>
                        <h3>Derek Shepard</h3>
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star-half-stroke" />
                    </div>
                </div>
            </div>
        </section>

        {/* CONTACT-US */}
        <section className="contact-us">
            <h1>Enroll For Our Various Online Courses <br/> Anywhere From The World</h1>
            <a href='www.contact.com'>CONTACT US</a>
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
    </>
  )
}

export default Home