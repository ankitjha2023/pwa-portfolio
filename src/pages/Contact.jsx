import React from "react"

const Contact = ({textColor}) => {
  
  return (
    <section id='contact'>
      <div className='container'>

        <div className="row">
         
          <div className="col-lg-6 mx-auto">


            <form method='post' action='https://formspree.io/f/xvonkggg'>
             <h1 className='text-center fw-bold mb-3'>Contact Me</h1>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-5"
                  id="name"
                  name="name"
                  required
                  autoComplete="off"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-5"
                  id="email"
                  name="email"
                  required
                  autoComplete="off"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3 ">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="form-control rounded-5"
                  autoComplete="off"
                  placeholder="Send me a message"
                  required
                />
              </div>
              <center> <button type="submit" className={`btn btn-${textColor} rounded-5`}>
                Submit
              </button></center>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact