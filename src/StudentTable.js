import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { StudentEditModal } from './StudentEditModal';
import { useState, useEffect } from "react";

export function StudentTable({ studentArray,getStudentDataFunction }) {

  
  useEffect(()=>{
    getStudentDataFunction();
  },[]);


  const styles = { textAlign: "center" };
  let temp = [...studentArray];
  return (
    <div>
      <h3>Student's Table</h3>
      <div className='table-responsive studentTable'>
        <table style={styles} className="table table-reponsive table-bordered table-hover table-success">
          <thead className="thead thead-dark">
            <tr>
              <th scope="col" className="col-1">S.no</th>
              <th scope="col" className="col-3">Student</th>
              <th scope="col" className="col-3">Batch</th>
              <th scope="col" className="col-3">Mentor</th>
              <th className="col-2"></th>
            </tr>
          </thead>
          <tbody>
            {studentArray.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.batch}</td>
                  <td>{value.mentor}</td>
                  <td>
                    <StudentEditModal value={value} id={value.id} getStudentDataFunction={getStudentDataFunction}/>
                    <button className="btn" onClick={() => {
                      fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/StudentList/${value.id}`,{method : "DELETE"})
                      .then(()=>getStudentDataFunction())
                    }}><FontAwesomeIcon icon={faTrash} /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
