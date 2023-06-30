import React from 'react'
import {Link} from "react-router-dom"
import links from '../api/links'
import { useState } from 'react'
const Header = ({iconClass, onClick,textColor}) => {
  const [menu,setMenu] = useState("bars")  
  
  const toggleMenu = () =>{
    if(menu==="bars"){
      setMenu("xmark")
    }else{
      setMenu("bars")
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
    <div className="container">
      
        <img src="/logo192.png" alt="logo" className='img-fluid rounded-circle border' width={70} />
     
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
       <i className={`fa-solid fa-${menu} text-${textColor} fs-4`}></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
         {
          links.map((link)=>{
            return (
              <li className="nav-item" key={link.path}>
              <Link className={`nav-link fs-5 text-${textColor}`} to={link.path}>
                {link.name}
              </Link>
            </li>
            )
          })
         }
          
         
        </ul>
      <i className={`fa-solid fa-${iconClass} fs-5`} onClick={onClick}></i>
      </div>
    </div>
  </nav>
    </header>
  
  )
}

export default Header
