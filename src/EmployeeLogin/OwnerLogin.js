
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import $ from "jquery"
import { useForm } from "react-hook-form";

function OwnerLogin() {
  let navigate = useNavigate();
const [errorr, seterrorr] = useState(false)

// let location = useLocation();

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = (data) => { 
  

  
    $.ajax({ 
      url: "https://localhost:44388/api/ownerdata/Authentication",
      type: 'POST',
      data:data,
      success: function (result) {  
      if(result===true)
      {
        navigate("/Employee", {state:{LoginOwnerId:data.Username, LoginIn:"true"}})
        sessionStorage.setItem("OwnerLogin", data.Username);
      }
      else
      {
seterrorr(true)
      }
      
      },
      error: function () {
       console.log("get error")
      }
    });
}

  


  return (
   <>
  
<div className="container">


<div className="row">

<div className="col-lg-5 m-auto">

<div className="h3 d-flex justify-content-center m-3">Owner Login</div>
<form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label">User Name</label>
                        {errors.UserName && <span className='text-danger ms-2'>This field is required</span>}
                        <input className='form-control mb-3' {...register("Username", { required: true })} />
                     
                        <label className="form-label">Password</label>
                        {errors.Password && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' {...register("Password", { required: true })} />
                      
                     
                        <div className='d-flex justify-content-center'>  
                          <button className='btn btn-success px-2 py-1 me-2' type="submit" >
                            Login
                        </button>
                        <Link className="btn btn-warning px-2 py-1" to="/Registration" role="button">Create Account</Link>
                        </div>
                     
                    </form>
                    {errorr===true && <span className='text-danger'>Wrong Input</span>}
</div>


</div>


</div>
</>
  )
}

export default OwnerLogin;