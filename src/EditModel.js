import React, {  useState } from 'react'
import { Button,  Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import $ from "jquery"
function EditModel(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const onSubmit = (data) => {   
         

            $.ajax({
                
              url: "https://localhost:44388/api/employee/Update",
              type: 'PUT',
        data:data,
              success: function (result) {   props.fun(true) },
              error: function () {
                alert(false);
              }
            });
        setShow(false) 
    
       
           }
       
    return(
        <div className='container'>
            <button className="btn btn-outline-secondary"  onClick={handleShow}>
                Edit
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                    {/* <label className="form-label">Employee Id</label>
                      
                        <input className='form-control mb-3' value={props.data.EmpId} {...register("EmpId")}  disabled/> */}
                        <label className="form-label">First Name</label>
                        {errors.Fname && <span className='text-danger ms-2'>This field is required</span>}
                        <input className='form-control mb-3' defaultValue={props.data.Fname} {...register("Fname", { required: true })} />
                     
                        <label className="form-label">Last Name</label>
                        {errors.Lname && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' defaultValue={props.data.Lname} {...register("Lname", { required: true })} />
                      
                        <label className="form-label">DOB</label>
                        {errors.DOB && <span className='text-danger ms-2 '>This field is required</span>}
                        <input className='form-control  mb-3' type="date" defaultValue={props.data.DOB} {...register("DOB", { required: true })} />
                      
                        <div className='d-flex justify-content-center'>  
                          <Button className=' btn btn-primary mx-3 my-3' type="submit" onClick={()=>{setValue("EmpId", props.data.EmpId)}}>
                            Update
                        </Button>
                        </div>
                        {/* <input type="submit" /> */}
                    </form>
                </Modal.Body>
               
            </Modal>
        </div>
    )
}

export default EditModel