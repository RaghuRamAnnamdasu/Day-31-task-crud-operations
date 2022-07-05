import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { MentorEditModal } from './MentorEditModal';

export function MentorTable({ mentorArray, setMentorArray }) {
  const styles = { textAlign: "center" };
  let temp1 = [...mentorArray];
  return (
    <div>
      <h3>Mentor's Table</h3>
      <div className='table-responsive mentorTable'>
        <table style={styles} className="table table-bordered table-hover table-success">
          <thead>
            <tr>
              <th scope="col" className="col-1">S.no</th>
              <th scope="col" className="col-3">Mentor</th>
              <th scope="col" className="col-3">Email</th>
              <th scope="col" className="col-3">Batch</th>
              <th className="col-2"></th>
            </tr>
          </thead> 
          <tbody>
            {mentorArray.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.batch}</td>
                  <td>
                    <MentorEditModal value={value} index={index} mentorArray={mentorArray} setMentorArray={setMentorArray}/>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
                    <button className="btn" onClick={() => {
                      temp1.splice(index, 1);
                      setMentorArray(temp1);
                    }}><FontAwesomeIcon icon={faTrash} />
                    </button>
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
