import React, { useEffect, useState } from 'react'
import $ from "jquery";
import AddEmployeeModel from './AddEmployeeModel';
import EditModel from '../EditModel';
import  moment from 'moment';



function AfterLogin() {
  
  const [ownerdata, setownerdata] = useState({OwnerId:null,Fname:null,Lname:null})

  useEffect(() => {
    $.ajax({
      url: "https://localhost:44388/api/ownerdata/OwnerByUsername?username=" + sessionStorage.getItem('OwnerLogin'),
      type: 'get',
      success: function (result) {
        setownerdata(result)
      },
      error: function () {
      }
    });

  }, [])


  const [data, setdata] = useState([])
  const [d, setd] = useState(false)

  const get = () => {
    $.ajax({
      url: "https://localhost:44388/api/employee/GetAllEmployee",
      type: 'get',
      success: function (result) {

        setdata(result)
        setd(false)
      },
      error: function () {

      }
    });
  }
  useEffect(() => {
    get();
  }, [d])

  const deletehandler = (index) => {
    $.ajax({

      url: "https://localhost:44388/api/employee/delete/" + index,
      type: 'delete',

      success: function (result) { get() },
      error: function () {
        alert("error");
      }
    });
  }

  return (
    <>
      <AddEmployeeModel fun={(e) => { setd(e); }} data={ownerdata.OwnerId} />

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Employee Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">DOB</th>
              <th scope="col">Owner Name</th>
              <th scope='col' className='bg-light'>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.filter(z => z.OwnerId === ownerdata.OwnerId).map((x, y) => {

              return (
                <tr key={y.toString() + "gdf"}>
                  <th scope="row">{y + 1}</th>
                  <td >{x.EmpId}</td>
                  <td className='text-uppercase'>{x.Fname}</td>
                  <td className='text-uppercase'>{x.Lname}</td>
                  <td >{moment(x.DOB).format("DD-MMMM-YYYY")}</td>
                  <td >{ownerdata.Fname+" "+ ownerdata.Lname}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button type="button" className="btn btn-outline-danger" onClick={() => { deletehandler(x.EmpId) }}>Delete</button>
                      <EditModel fun={(e) => { setd(e);}} data={x} />

                    </div>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}


export default AfterLogin;