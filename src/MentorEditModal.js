import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export function MentorEditModal({ value, id, getMentorDataFunction }) {


  function mentorEdit(object){
    fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/MentorList/${id}`,
      {
        method : "PUT",
        body : JSON.stringify(object),
        headers : {"Content-Type" : "application/json"}
      }
    ).then(()=>getMentorDataFunction())
  }


  let tempMentorObject = { ...value };
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    mentorEdit(tempMentorObject);
  };
  return (
    <div>
      <button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#mentorModal${id}`}><FontAwesomeIcon icon={faPen} /></button>
      <div className="modal fade" id={`mentorModal${id}`} role="dialog">
        <div className="modal-dialog">
          <div className='modal-content'>
            <div className="modal-header">
              <h2>Edit Details</h2>
              <button type="button" className="close" data-bs-dismiss="modal">&times;</button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <label htmlFor="mentorName1" className="form-label">Mentor Name:</label>
                <input type="text" className="form-control mb-3" id="mentorName1" placeholder="Enter mentor name" name="mentorName1" onChange={(evt) => { tempMentorObject.name = evt.target.value; }} defaultValue={tempMentorObject.name}/>
                <label htmlFor="email1" className="form-label">Email:</label>
                <input type="email" className="form-control mb-3" id="email1" placeholder="Enter email" name="email" onBlur={(evt) => { tempMentorObject.email = evt.target.value; }}  defaultValue={tempMentorObject.email} />
                <label htmlFor="batchDetails1" className="form-label">Batch:</label>
                <input type="text" className="form-control mb-3" id="batchDetails1" placeholder="Enter batch number" name="batch" onBlur={(evt) => { tempMentorObject.batch = evt.target.value; }}  defaultValue={tempMentorObject.batch}/>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
