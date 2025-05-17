import React from 'react'
import { Link } from 'react-router-dom';
import './Blog.css'

const Blog = () => {
  return (
    <div>

      {/* SUB-HEADER */}
      <section className="sub-header">
        <nav>
          <img src='./imagesilogos.png' alt='' width={150} height={150}/>
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
        <h1>Our Certificate & Online Programs For 2024</h1>
      </section>

      {/* BLOG */}
      <section className="blog">
        <div className="row">
          <div className="blog-left">
            <img src='./images/blg2.jpg' alt=''/>
            <h2>Our Certificate & Online Programs For 2024</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea atque labore aliquam. 
              Dolorem sunt autem ducimus hic reiciendis tempore cupiditate minima accusantium veritatis 
              quas enim rerum, nulla expedita totam!</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo expedita porro eveniet 
             deleniti quibusdam vel beatae ullam, mollitia accusantium? Qui, eligendi minima voluptas
             quasi consectetur hic. Maiores explicabo vel dolor! Lorem ipsum dolor, sit amet consectetur 
             adipisicing elit. Consectetur labore reprehenderit inventore, voluptatibus sequi ducimus 
             harum minima ad dicta, placeat voluptate, sapiente quos dolorem reiciendis distinctio 
             necessitatibus nulla? Pariatur, reprehenderit.</p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus dolores, sint cumque 
             quisquam magnam minus eos, cupiditate, neque deleniti ullam molestias dolorem nulla harum
             vero expedita adipisci consectetur rem aspernatur.</p>
           <br />
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam molestiae sequi 
             veritatis rerum provident quisquam ad magni, voluptates culpa laudantium voluptas 
             voluptatibus natus officiis ducimus explicabo tempora doloremque iusto? Lorem ipsum 
             dolor sit amet consectetur, adipisicing elit. Qui cumque possimus excepturi, porro 
             repellendus dolorum quaerat tempora explicabo modi libero reiciendis ex sequi nostrum 
             dolores esse sunt placeat quis maiores.</p>
           <br />
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus fugit voluptatibus
             facilis aliquam voluptatem iste, labore nam quas, perferendis error necessitatibus
             cumque animi dignissimos quibusdam ut ducimus totam voluptates distinctio.</p>
           <br />
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis a ut incidunt
             nam commodi est reiciendis quia suscipit numquam saepe expedita, voluptas atque
             quis voluptatum! Quos officiis sint non et?</p>
             <div className="com-box">
              <h3>Leave a Comment</h3>
              <form className="com-form">
                <input type='text' placeholder='Enter your Name'/>
                <input type='email' placeholder='Enter your email'/>
                <textarea rows={5} placeholder='Your Comment' defaultValue={""}/>
                <button type='submit' className='button'>POST COMMENT</button>
              </form>
             </div>
          </div>
          <div className="blog-right">
            <h3>Course Categories</h3>
            <div>
              <span>MERN Stack</span>
              <span>23</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>30</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>31</span>
            </div>
            <div>
              <span>Python</span>
              <span>18</span>
            </div>
            <div>
              <span>Java</span>
              <span>16</span>
            </div>
            <div>
              <span>Web Designing</span>
              <span>40</span>
            </div>
            <div>
              <span>MERN Stack</span>
              <span>23</span>
            </div>
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

export default Blog