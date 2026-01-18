import React from 'react'



function EmployeeTable({ employees, onEdit, onDelete }) {
  const print = () => window.print();
  console.log('EMP IS',employees)
    return (
      <>
        <br/><br></br>
        <h3>Employees list</h3>
        <div className="print-area">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Profile Image</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth (DOB)</th>
              <th>State</th>
              <th>Active / Inactive Toggle</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody >
            {employees.map((e,index) => (
              <tr key={e.id}>
                <td>{index+1}</td>
                <td>{e.image && <img src={e.image} width="40" />}</td>
                <td>{e.name}</td>
                <td>{e.gender}</td>
                <td>{e.dob}</td>
                <td>{e.state}</td>
                <td>{e.active ? "Yes" : "No"}</td>
                <td>
                
                  <button className='btn btn-primary' onClick={() => onEdit(e)}>Edit<i className="bi bi-pencil-square"></i></button>
                  <button className='btn btn-warning' onClick={() => onDelete(e.id)}>Delete<i className="bi bi-trash"></i></button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <button className='btn btn-success' onClick={print}>Print <i class="bi bi-printer"></i></button>
      </>
    );
  }
  export default EmployeeTable;
  
