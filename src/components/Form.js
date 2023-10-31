import React from "react";

export default function Form() {
  return (
    <div className="form" >
     <div className="h1"><h1>Employee Information</h1></div>
      <div className="container">
        <div className="namecon">
          <p>Employee Name</p>
          <input type="text" id="name" placeholder="Entre your name" />
        </div>
        <div className="idcon">
          <p>Employee ID</p>
          <input type="number" id="id" placeholder="Entre your id" />
        </div>
        <div className="phonecon">
          <p>Employee Phone</p>
          <input type="number" id="phone" placeholder="Entre your phone" />
        </div>
        <div className="addresscon">
          <p>Employee Address</p>
          <textarea name="" id="address" cols="94" rows="10"></textarea>
        </div>
        <div className="departmentcon">
          <p>Select your Department</p>
          <select id="department">
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
          <input type="checkbox" name=""  id="working" />
          <span>WORKING</span>
        </div>
        <div className="button">
          <button
            className="btn alert"
            onClick={() => {
              const name = document.getElementById("name").value;
              const id = document.getElementById("id").value;
              const phone = document.getElementById("phone").value;
              const address = document.getElementById("address").value;
              const department = document.getElementById("department").value;
              let working = (document.getElementById("working").checked) ? "You are working" : "You are not working" ;
              alert(`
               Your Name : ${name}
               Your Id : ${id}
               Your phone : ${phone}
               Your address : ${address}
               Your department : ${department}
               Your working status : ${working 
               } `);}}
          > ALERT</button>
          <button className="btn save" onClick={()=>{
            document.getElementById('table').innerHTML += ` Hello <br/>`
          }}>SAVE</button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <table id="table">
        <tr >
            <th>S.No.</th>
            <th>NAME</th>
            <th>ID</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
            <th>Working Status</th>
            <th>ACTION</th>
        </tr>
        <tr id="tr" >
            <td>1</td>
            <td>Abdullah</td>
            <td>1401</td>
            <td>03144644174</td>
            <td>Lahore</td>
            <td>Working</td>
            <td> <button className="delete">Delete</button><button className="edit">Update</button></td>
        </tr> 

      </table>
    </div>
  );
}
