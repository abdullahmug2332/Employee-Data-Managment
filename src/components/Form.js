import React from "react";
import { useState } from "react";

export default function Form() {
  const [inputdata, setinputdata] = useState({
    name: "",
    id: "",
    phone: "",
    address: "",
    department: "",
    workingstatus: false
  })
  const [inputarr, setinputarr] = useState([])

  let { name, id, phone, address, department, workingstatus } = inputdata;
  function adddata() {
    console.log(inputarr);
    setinputarr([...inputarr, { name, id, phone, address, department, workingstatus }])
    setinputdata({ name: "", id: "", phone: "", address: "", department: "", workingstatus: "" })
  }

  function changehandle(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setinputdata({
      ...inputdata,
      [e.target.name]: value
    });
  }


  
  function deleteRow(index) {
    const updatedInputArr = [...inputarr];
    updatedInputArr.splice(index,1);
    setinputarr(updatedInputArr);
  }

  return (
    <div className="form" >
      <div className="h1"><h1>Employee Information</h1></div>
      <div className="container">
        <div className="namecon">
          <p>Employee Name</p>
          <input type="text" name="name" autoComplete='off' value={inputdata.name} onChange={changehandle} id="name" placeholder="Entre your name" />
        </div>
        <div className="idcon">
          <p>Employee ID</p>
          <input type="number" name="id" autoComplete='off' value={inputdata.id} onChange={changehandle} id="id" placeholder="Entre your id" />
        </div>
        <div className="phonecon">
          <p>Employee Phone</p>
          <input type="number" name="phone" autoComplete='off' value={inputdata.phone} onChange={changehandle} id="phone" placeholder="Entre your phone" />
        </div>
        <div className="addresscon">
          <p>Employee Address</p>
          <textarea name="address" autoComplete='off' value={inputdata.address} onChange={changehandle} id="address" cols="94" rows="10"></textarea>
        </div>
        <div className="departmentcon" >
          <p>Select your Department</p>
          <select id="department" name="department" autoComplete='off' value={inputdata.department} onChange={changehandle}>
            <option value="Not selected">----------Select your department----------</option>
            <option value="COMPUTER SCIENCE">COMPUTER SCIENCE</option>
            <option value="ELECTRICAL SCIENCE">ELECTRICAL SCIENCE</option>
            <option value="BIOTECHNOLOGY">BIOTECHNOLOGY</option>
            <option value="INFORMATION TECHNOLOGY">
              INFORMATION TECHNOLOGY
            </option>
          </select>
        </div>
        <div className="working">
          <input type="checkbox" name="workingstatus" autoComplete='off' checked={inputdata.workingstatus} onChange={changehandle} id="working" />
          <label htmlFor="working">WORKING</label>
        </div>

        <div className="button">
          <button className="btn save" onClick={adddata}>SAVE</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <table id="table">
        <tbody>
          <tr >
            <th>NAME</th>
            <th>ID</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>DEPARTMENT</th>
            <th>Working Status</th>
            <th>Action</th>

          </tr>
          {
            inputarr.map(
              (info, ind) => {
                return (
                  <tr key={ind}>
                    <td>{info.name}</td>
                    <td>{info.id}</td>
                    <td>{info.phone}</td>
                    <td>{info.address}</td>
                    <td>{info.department}</td>
                    <td>{info.workingstatus ? "Working" : "Not Working"}</td>
                    <td>
                  <button onClick={() => deleteRow(ind)} className="delete">Delete</button>
                </td>
                  </tr>
                )
              }
            )
          }

        </tbody>
      </table>
    </div>
  );
} 
