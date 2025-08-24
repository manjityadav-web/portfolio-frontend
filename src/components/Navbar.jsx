// client/src/components/Navbar.jsx

import React, { useEffect } from "react";

import {Link, NavLink} from 'react-router-dom'




const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  sticky-top" style={{backgroundColor:"white"}}>
      <div className="container fs-4">
        
         <p className="text-dark fs-3 ">@msdevelopment</p> 
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
             <li className="nav-item">
            <NavLink className={"nav-link t-hover text-dark"} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className={"nav-link t-hover text-dark"} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link t-hover text-dark" to="/skills">Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link t-hover text-dark" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link t-hover text-dark" to="/contact">Contact</NavLink>
            </li>
              <li className="nav-item">
              {/* <NavLink to="" className="btn btn-outline-info m-2 me-5 ms-5 t-hover">Resume</NavLink> */}
              <a href="/resume.pdf"  target="_blank" className="btn btn-outline-dark m-2 me-5 ms-5 t-hover">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;