import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { StudentEditModal } from './StudentEditModal';

export function StudentTable({ studentArray, setStudentArray }) {
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
                    <StudentEditModal value={value} index={index} studentArray={studentArray} setStudentArray={setStudentArray} />
                    {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                    <button className="btn" onClick={() => {
                      temp.splice(index, 1);
                      setStudentArray(temp);
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
