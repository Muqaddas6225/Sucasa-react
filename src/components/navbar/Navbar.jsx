import React from 'react'
import {logo} from '../../assets/index'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
    <section className="header">
      <div className="container">       
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
            <img src={logo} alt='logo' />
              <button type="button" className="login" >Login</button>
            </div>
          </nav>       
        </div>
      </section> 
    </div>
  )
}

export default Navbar