 import React from 'react'
 import { useState , useEffect} from 'react';
 import axios from 'axios'

 
 const Projects = () => {


  const [dataList, setDataList] = useState([])

   useEffect(()=>{
 
     fetchList()
   }
   ,[])
 
 const fetchList = async()=>{
          const result = await axios.get('https://portfolio-backend-ptya.onrender.com/api/project')
       
        
          if(result?.data?.code==200){
            setDataList(result?.data?.data[0])
          }
          console.log(result,"asdf")
        }
        
   return (
    <>
    
 
 <div className="properties services pb-0 " style={{backgroundColor:"#daf0d5"}}>
        {/* <center><div className="ptitle"><p >Properties</p></div></center> */}
        <center><h1 className="mb-5"><span style={{color:"#002057"}}>Pro</span><span style={{color:"#940808", fontWeight:"500"}}>ject</span></h1></center>
        
        <div className="listingContainer">
          {dataList.map((data,index) => {
            return (
                <div className="propertyCard bg-warning-subtle mb-5" style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}} key={index} data-aos="fade-right" data-aos-duration="500">
                  <div className="imgContainer">
                    <img src={`http://localhost:3000/img/${data.pic}`}/> 
                  </div>
                  <div className="propertyInfo">
       
                  
                    <h3>{data?.title}</h3>
                    <p className="desc">{data?.description}</p>
                    <div className="facilities">
                   
                      <div className="bathrooms">
                        <span>

                        <button className="  mt-5  fs-3 buy" style={{backgroundColor:"#002057" , borderRadius:"10px"}}><a href={data?.view} target='_blank' className='text-decoration-none text-light'>View</a></button>
                        </span>
                       
                      </div>
                             <div className="bathrooms">
                             <span>

                        <button className="  mt-5  fs-3 buy" style={{backgroundColor:"#002057",borderRadius:"10px"}}><a href={data?.github} target='_blank' className='text-decoration-none text-light'>Github</a></button>
                        </span>
                       
                      </div>
                    
                    </div>
                  </div>
         
                </div>
            );
          })}
        </div>
      </div>

      
    </>
   )
 }
 
 export default Projects
 
 
 
