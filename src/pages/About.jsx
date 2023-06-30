import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div className="container">
     
      <div className="row">
        <div className="col-lg-4 d-flex align-items-center justify-content-center p-3 ">
          <img src="/logo512.png" className="img-fluid" alt="logo" />
        </div>
        <div className="col-lg-8 p-3">
          <h2 className='fs-1 fw-bold'>About Me</h2>
          <p>
          Hey there, I'm Ankit Jha. I'm a BCA student currently living in Bhagalpur, India. I have always been passionate about technology and have a strong interest in programming and software development. I am constantly looking for ways to improve my skills and stay up-to-date with the latest technologies. 
            
          </p>
          <div className="row mt-3">
            <div className="col-md-6">
              <ul>
                <li>Name: Ankit Jha</li>
                <li>Age: 21</li>
                <li>Occupation: Web Developer</li>
              </ul>
            </div>
            
          </div>
          <div className="row mt-3">
            <p>
              
            In my free time, I enjoy tinkering with new software and technologies, as well as staying active through sports and outdoor activities. I am excited to use my skills and knowledge to make a positive impact in the field of computer science and am always open to new opportunities and challenges. Thank you for visiting my portfolio website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default About
