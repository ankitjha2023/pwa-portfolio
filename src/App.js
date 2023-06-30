import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { useState } from "react"
import "./App.css"
const  App = () => {
  const [iconClass,setIconClass] = useState("sun")
  const [bgColor,setBgColor] = useState("light")
  const [textColor,setTextColor] = useState("dark")
  const toggleIcon = () =>{
    if(iconClass==="sun"){
      setIconClass("moon")
      setBgColor("dark")
      setTextColor("light")
    }else{
      setIconClass("sun")
      setBgColor("light")
      setTextColor("dark")
    }
  }
return(
  <div className={`App bg-${bgColor} text-${textColor}`}>
    <BrowserRouter>
  <Header iconClass={iconClass} onClick={toggleIcon} textColor={textColor}/>
  <Routes>
    <Route exact path="/" element={<Home textColor={textColor}/>} />
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/skills" element={<Skills textColor={textColor} bgColor={bgColor}/>}/>
    <Route exact path="/projects" element={<Projects/>}/>
    <Route exact path="/contact" element={<Contact textColor={textColor}/>}/>
  </Routes>
  <Footer textColor={textColor}/>
  </BrowserRouter>
  </div>
)

}
export default App