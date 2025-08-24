
import React, { useEffect } from "react";




const Skills = () => {
  return (
    <div className="container-fluid my-0  p-5" id="skills" style={{backgroundColor:"#f7f7f7"}}>
      
      <center><h2 style={{color:"#002057"}}>My <span style={{color:"#940808", fontWeight:"500"}}>Skills</span></h2></center>  
       <center><hr className=" text-dark ab"/></center> 
      <div className="row">
        {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'C' , 'React.js' , 'Express.js' , 'Node.js','MongoDB'].map((skill, i) => (
          <div className="col-md-4" key={i} data-aos="fade-up" data-aos-duration="500">
            <div className="card my-2 t-hover">
              <div className="card-body text-center" style={{backgroundColor:"#eae3e3ff"}}>
                <h5>{skill}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;