import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({textColor}) => {
  return (
    <section id='home'>
      <div className="container">
        <div className="row ">
          <div className="col-lg-6">
            <img src="/home.webp" alt="home" className='img-fluid'/>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h2 className='display-5'>Hello I'm Ankit Jha</h2>
            <p className='fs-5'>I am a frontend Developer </p>
            <div className="d-flex gap-2 " id='home-btn'>
              <a href="/resume.jpg" target='_blank'><button className={`btn btn-${textColor}`}>My Resume</button></a>
             <Link to="/about"> <button className={`btn btn-outline-${textColor}`}>Read More</button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
