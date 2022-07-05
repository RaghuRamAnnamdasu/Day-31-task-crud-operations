import React from "react";

export function MentorForm({ getMentorDataFunction}) {

  function mentorAddition(object){
    fetch(`https://62a97085ec36bf40bdb787b6.mockapi.io/MentorList/`,
      {
        method : "POST",
        body : JSON.stringify(object),
        headers : {"Content-Type":"application/json"}
      }
    ).then(()=>getMentorDataFunction());
  }


  var tempMentorObject = {};
  const handleSubmit = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    mentorAddition(tempMentorObject);
  };
  return (
    <div className="row mentorFieldWrapper">
      <div className="mentorFieldHeader">Mentor's Form</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mentorName" className="form-label">Mentor Name:</label>
        <input type="text" className="form-control mb-3" id="mentorName" placeholder="Enter mentor name" name="mentorName" onBlur={(evt) => { tempMentorObject.name = evt.target.value; }} required />
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control mb-3" id="email" placeholder="Enter email" name="email" onBlur={(evt) => { tempMentorObject.email = evt.target.value; }} required />
        <label htmlFor="batchDetails" className="form-label">Batch:</label>
        <input type="text" className="form-control mb-3" id="batchDetails" placeholder="Enter batch number" name="batch" onBlur={(evt) => { tempMentorObject.batch = evt.target.value; }} required />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div> 
  );
}
