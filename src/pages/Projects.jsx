import React from 'react'

const Projects = () => {
  return (
    <section id='projects'>
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-6 mx-auto p-4 border rounded shadow text-center">
            <img src="/project.png" alt="project" className='img-fluid' loading='lazy'/>
            <p className='fs-5'>All of my Projects are available here <i className='fa-solid fa-arrow-down'></i></p>
            <a href='https://ankitjha-portfolio.netlify.app/projects' target='_blank' className="btn btn-outline-primary" rel="noopener noreferrer">View Project</a>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Projects
