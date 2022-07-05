import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function StudentEditModal({ value, id, getStudentDataFunction }) {

  function studentEdit(object){
    fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/StudentList/${id}`,
      {
        method : "PUT",
        body : JSON.stringify(object),
        headers : {"Content-Type" : "application/json"}
      }
    ).then(()=>getStudentDataFunction())
  }


  let tempStudentObject = { ...value };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    studentEdit(tempStudentObject);
  };
  return (
    <div>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#myModal${id}`}><FontAwesomeIcon icon={faPen} /></button>
      <div className="modal fade" id={`myModal${id}`} role="dialog">
        <div className="modal-dialog">
          <div className='modal-content'>
            <div className="modal-header">
              <h2>Edit Details</h2>
              <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <label htmlFor="studentName" className="form-label">Student Name:</label>
                <input type="text" className="form-control mb-3" id="studentName" placeholder="Enter student name" name="studentName" onBlur={(evt) => { tempStudentObject.name = evt.target.value; }} defaultValue={tempStudentObject.name} />
                <label htmlFor="batchDetails" className="form-label">Batch:</label>
                <input type="text" className="form-control mb-3" id="batchDetails" placeholder="Enter batch number" name="batch" onBlur={(evt) => { tempStudentObject.batch = evt.target.value; }} defaultValue={tempStudentObject.batch} />
                <label htmlFor="mentorDetails" className="form-label">Mentor:</label>
                <input type="text" className="form-control mb-3" id="mentorDetails" placeholder="Enter mentor name" name="mentorName" onBlur={(evt) => { tempStudentObject.mentor = evt.target.value; }} defaultValue={tempStudentObject.mentor} />
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
