import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import React, {useState} from "react";
import { MentorTable } from './MentorTable';
import { StudentTable } from './StudentTable';
import { MentorForm } from './MentorForm';
import { StudentForm } from './StudentForm';



function App() {

  const [studentArray,setStudentArray]=useState([]);

  function getStudentData(){
    fetch("https://62a97085ec36bf40bdb787b6.mockapi.io/StudentList/")
    .then((data)=>data.json())
    .then((studentData)=>setStudentArray(studentData));
  }

  const [mentorArray,setMentorArray]=useState([]);

  function getMentorData(){
    fetch("https://62a97085ec36bf40bdb787b6.mockapi.io/MentorList")
    .then((data)=>data.json())
    .then((mentorData)=>setMentorArray(mentorData));
  }

  return (
    <div className="App container-fluid">
      <div className="row pageWrapper">
        <div className = "col-md-3 formWrapper">
          <StudentForm getStudentDataFunction={getStudentData}/>
          <hr className='divider'/>
          <MentorForm getMentorDataFunction = {getMentorData} />
        </div>
        <div className = "col-md-7 offset-md-1 displayTableWrapper">
          <StudentTable studentArray = {studentArray} getStudentDataFunction={getStudentData}/>
          <MentorTable mentorArray={mentorArray} getMentorDataFunction = {getMentorData}/>
        </div>
      </div>
    </div>
  );
}

export default App;
