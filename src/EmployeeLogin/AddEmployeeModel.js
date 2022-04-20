import React, {  useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import $ from "jquery"
function AddEmployeeModel(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors } , setValue} = useForm();
    const onSubmit = (data) => {   
  console.log(data)
            $.ajax({
                
              url: "https://localhost:44388/api/employee/NewData",
              type: 'POST',
        data:data,
              success: function (result) {    props.fun(true) },
              error: function () {
                alert(false);
              }
            });
        setShow(false) 
   
       
          }
       
    return(
        <div className='container'>
            <Button className='px-3 py-2 btn btn-dark text-white my-3'  onClick={handleShow}>
                Add Employee
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label className="form-label">First Name</label>
                        {errors.Fname && <span className='text-danger ms-2'>This field is required</span>}
                        <input className='form-control mb-3' {...register("Fname", { required: true })} />
                     
                        <label className="form-label">Last Name</label>
                        {errors.Lname && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' {...register("Lname", { required: true })} />
                      
                        <label className="form-label">DOB</label>
                        {errors.DOB && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' type="date" {...register("DOB", { required: true })} />
                      
                        {/* <label className="form-label">Owner Id</label>
                        {errors.OwnerId && <span className='text-danger ms-2'>This field is required</span>}
                        <input type="number" className='form-control  mb-3' {...register("OwnerId", { required: true })} /> */}
                   
                        <div className='d-flex justify-content-center'>  
                          <Button className=' btn btn-primary mx-3 my-3' type="submit" onClick={()=>{setValue("OwnerId",props.data)}}>
                            Add Employee
                        </Button>
                        </div>
                        {/* <input type="submit" /> */}
                    </form>
                </Modal.Body>
               
            </Modal>
        </div>
    )
}

export default AddEmployeeModel