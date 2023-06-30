import React from 'react'
import icons from '../api/SocialMedia'
const Footer = ({textColor}) => {
  return (
    <footer>
      <div className="container-fluid pt-lg-3">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center justify-content-center gap-3">
            {
              icons.map((icon)=>{
                return (
                  <a key={icon.id} href={icon.url} className={`fs-5 text-${textColor}`} target='_blank'><i className={icon.class}></i></a>
                )
              })
            }
          </div>
          <div className="col-lg-6 align-items-center justify-content-center text-center">
            <p>Designed and developed by Ankit Jha</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
