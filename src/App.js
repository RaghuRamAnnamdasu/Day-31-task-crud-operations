import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import React, {useState} from "react";
import { MentorTable } from './MentorTable';
import { StudentTable } from './StudentTable';
import { MentorForm } from './MentorForm';
import { StudentForm } from './StudentForm';



function App() {
  const [studentArray,setStudentArray]=useState([{name: "Raghu", batch: 34, mentor: "Raghav"},  {name: "Pravallika", batch: 34, mentor: "Raghav"}]);
  const [mentorArray,setMentorArray]=useState([{name: "Raghav", email: "raghav@gmail.com", batch: 34}]);
  return (
    <div className="App container-fluid">
      <div className="row pageWrapper"> 
        <div className = "col-md-3 formWrapper">
          <StudentForm studentArray = {studentArray} setStudentArray={setStudentArray}/>
          <hr className='divider'/>
          <MentorForm mentorArray = {mentorArray} setMentorArray={setMentorArray}/>
        </div>
        <div className = "col-md-7 offset-md-1 displayTableWrapper">
          <StudentTable studentArray={studentArray} setStudentArray={setStudentArray}/>
          <MentorTable mentorArray={mentorArray}setMentorArray={setMentorArray}/>
        </div>
      </div>
    </div>
  );
}

export default App;
