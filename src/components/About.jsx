
import '../App.css'


import './Abouts.css'

const About = () => {


 
  return (
    <div className="container-fluid my-0" id="about" style={{backgroundColor:"#eae3e3ff"}}>
 
      <center className='pt-5'><h2 style={{color:"#002057"}}>About <span style={{color:"#940808", fontWeight:"500"}}>Me</span></h2></center> 
     <center><hr className=" text-dark ab" style={{fontWeight:"700"}}/></center> 
      <div className="row">
        <div className="col-2"></div>
        <div className="col-md-4  d-flex align-items-center justify-content-center pt-5" data-aos="fade-right" data-aos-duration="500">
         <img src="m.jpg" className="img-fluid im w-50 rounded-5 h-75"/>
        </div>
        
        <div className="col-md-5 mt-5 mb-5 d-flex align-items-center justify-content-center cnt pe-5 direction-column ps-5 t-hover" data-aos="fade-left" data-aos-duration="500">
        
          <p className="text-dark fs-5"> 
            I'm Manjit Yadav, a passionate Computer Science student pursuing a Diploma from Government Polytechnic Roorkee baheri Bareilly. Currently, I’m exploring the MERN stack to become a full-stack developer. I believe in continuous learning and love solving real-world problems through code. Apart from coding, I enjoy playing cricket and exploring tech innovations. I'm always eager to collaborate on exciting projects and grow as a developer.
            <br /> <br />
             {/* <p> */}
              <span className='fs-2' style={{color:"#002057"}}>Quali<span style={{color:"#940808", fontWeight:"500"}}>fication :</span> </span>
             {/* <ul> */}
              <li>Hight School - 2021</li>
              <li>Intermediate - 2023</li>
              <li>Diploma (CSE) - (2023-2026)</li>

              <br />

               <a href="/resume.pdf" download target="_blank" className="btn m-2 me-5 ms-5 t-hover" style={{outline:" 3px solid #002057", color:"#002057"}}>Download Resume</a>
             {/* </ul> */}
             {/* </p> */}
        </p>
        
        </div>
        

        <div className="col-1"></div>
      </div>

    </div>
  );
};

export default About;