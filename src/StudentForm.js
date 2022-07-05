import React from "react";

export function StudentForm({ studentArray, setStudentArray }) {
  var tempStudentObject = {};
  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    setStudentArray([...studentArray, tempStudentObject]);
  };

  return (
    <div className="row studentFieldWrapper">
      <div className="studentFieldHeader">Student's Form</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentName" className="form-label">Student Name:</label>
        <input type="text" className="form-control mb-3" id="studentName" placeholder="Enter student name" name="studentName" onBlur={(evt) => { tempStudentObject.name = evt.target.value; }} required />
        <label htmlFor="batchDetails" className="form-label">Batch:</label>
        <input type="text" className="form-control mb-3" id="batchDetails" placeholder="Enter batch number" name="batch" onBlur={(evt) => { tempStudentObject.batch = evt.target.value; }} required />
        <label htmlFor="mentorDetails" className="form-label">Mentor:</label>
        <input type="text" className="form-control mb-3" id="mentorDetails" placeholder="Enter mentor name" name="mentorName" onBlur={(evt) => { tempStudentObject.mentor = evt.target.value; }} required />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> 
    </div>
  );
}
