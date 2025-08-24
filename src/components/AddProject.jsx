import React from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddProject = () => {

    const location = useLocation();



   
  const {register, handleSubmit, reset, formState:{errors}} = useForm({    // resolver:yupResolver(propertySchema) 
  })

   const addProject = async(data)=>{
    const formData = new FormData();
    formData.append('title',data?.title);
     formData.append('view', data?.view);
    formData.append('github', data?.github);
        formData.append('pic', data?.pic[0]);
    formData.append('description', data?.description);
    
    

     const response = await axios.post('https://portfolio-backend-ptya.onrender.com/api/add-project', formData, {
            headers: {
        'Content-Type': 'multipart/form-data' 
      }
    })
    if (response?.data?.code == 200) {
      Swal.fire({
        title: "Add Project",
        text: response?.data?.message,
        icon: "success"
      })
      reset()
    } else {
      Swal.fire({
        title: "Add Project",
        text: response?.data?.message,
        icon: "error"
      })
    }

}

  return (
    <>
             
         <div className="container my-5">
        <h2 className="text-center">Add Project</h2>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="form-box">
              <form onSubmit={handleSubmit((d) =>addProject(d))}>
              
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Title</label>
                    <div className="input-group">
                    
                      <input {...register('title')} type="text" className="form-control" placeholder="Project Name." />
                    </div>
                    {errors?.title && <p className='text-danger'>{errors?.title?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                
                      <input {...register('description')} type="text" className="form-control" placeholder="Description" />
                    </div>
                    {errors?.description && <p className='text-danger'>{errors?.description?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Live View</label>
                    <div className="input-group">
                
                      <input {...register('view')} type="url" className="form-control" placeholder="Project Url" />
                    </div>
                    {errors?.view && <p className='text-danger'>{errors?.view?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Github Code</label>
                    <div className="input-group">
                
                      <input {...register('github')} type="url" className="form-control" placeholder="Github Url" />
                    </div>
                    {errors?.github && <p className='text-danger'>{errors?.github?.message}</p>}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Image</label>
                    <div className="input-group">
                      <input {...register('pic')} type="file" className="form-control" />
                    </div>
                    {errors?.pic && <p className='text-danger'>{errors?.pic?.message}</p>}
                  </div>

                  <div className="text-center mt-4">
                    <input type="submit" className="btn  px-5 btn-login" value="Add" /> 
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddProject
