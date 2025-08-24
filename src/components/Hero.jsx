

import './Hero.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";


const Hero = () => {

  return (
    <>

      <div className=" text-white text-center p-5" data-aos="fade-up" data-aos-duration="500" style={{backgroundColor:"#f7f7f7"}}>

        <div className="row hero-row">

          <div className="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column order-2 order-md-1">

               <h1 className="head-height text-primary"><strong><span style={{color:"#002057"}}>Hi There</span></strong></h1>
            <h1 className="head-height"><strong><span style={{color:"#002057"}}>I'm </span><span style={{color:"#ff7b00"}}>Manjit Yadav</span></strong></h1>
            <p className="lead para-height" style={{color:"#940808", fontWeight:"500"}}>
              <Typewriter
                words={[' MERN Stack Developer ',  'Passionate about Web Development']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                delaySpeed={70}
              // delaySpeed={1000}
              />
            </p>
            {/* <p className="para2-height">Currently learning MERN stack to build powerful full-stack applications. Let’s build something amazing together!</p> */}
            <div>
              <a href="/projects" className="btn  m-2 t-hover" style={{backgroundColor:"#002057", color:"white"}}>View Projects</a>
              <a href="/contact" className="btn m-2  t-hover" style={{backgroundColor:"#002057", color:"white"}}>Contact Me</a>
            </div>
            <div>


              <a href="https://www.linkedin.com/in/manjit-yadav-6876b4324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" style={{ textDecoration: "none" }}> <FaLinkedin className="fs-3  t-hover" style={{ backgroundColor:"" , color: "" }} /></a>

              <a href="https://github.com/manjityadav-web" target="_blank" style={{ textDecoration: "none" }}> <FaGithub className="email ps-3 fs-1 t-hover" style={{ color: "black", fontSize: "50px" }} /></a>
              <a href="mailto:manjityadav9986@gmail.com" target="_blank" style={{ textDecoration: "none" }}> <MdEmail className="email ps-3  t-hover" style={{ color: "#0f75d1", fontSize: "50px" }} />
              </a>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center order-1 order-md-2">
            <img src="m.jpg" className="img-fluid rounded-5 mb-5 abc mt-5" style={{ width: "350px", height: "400px" }} />
            {/* <img src="dp.png" className="img-fluid radius mb-5 abc" style={{ maxWidth: "100%", height: "auto", boxShadow: "0 0 10px 5px aqua" }} /> */}
          </div>
        </div>

        <hr className='text-light' />
      </div>


      <About />
      <Skills />
      <Projects />
      <Contact />

    </>
  );
};

export default Hero;