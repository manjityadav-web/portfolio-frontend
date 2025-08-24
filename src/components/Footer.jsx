// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className=" text-light pt-4" style={{backgroundColor:"#002057"}}>
      <hr className='text-light'/>
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About / Name */}
          <div className="col-md-4 mb-3">
            <h5>Manjit Yadav</h5>
            <p>Full-Stack Developer specializing in MERN Stack</p>
            
          </div>
          {/* Navigation Links */}
          <div className="col-md-4 mb-3">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li><a href="#projects" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="#skills" className="text-light text-decoration-none">Skills</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          {/* Social & Contact */}
          <div className="col-md-4 mb-3">
            <h6>Connect with Me</h6>
            <a href="https://www.linkedin.com/in/manjit-yadav-6876b4324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-light me-3">
              <FaLinkedin className="fs-3  t-hover" style={{color: "#0a66c2"}} />
            </a>
          
            <a href="https://github.com/manjityadav-web" className="text-light">
              <FaGithub  className="email ps-3  t-hover"  style={{color: "#fff"}}/>
            </a>
            <p>Email: manjityadav9986@gmail.com</p>
            <p>Mobile No: 9628337556</p>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center pb-3">
          &copy; {new Date().getFullYear()} Manjit Yadav • All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;