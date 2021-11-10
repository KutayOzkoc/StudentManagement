import React, {Component, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {nanoid} from 'nanoid';
import axios from "axios";


const URL = 'http://localhost:8080/api/v1/students';
function AddStudent(props){

    const [students,setStudents] = useState(data);
    const [addStudent,setAddStudentData] = useState({
        firstname:"",
        lastname:"",
        email:"",
    })
    const history = useHistory();
    useEffect(()=>{
    },[])

    const backButton = async ()=>{
        await history.push({
            pathname:`/`,
        })
    }
    const handleAddFormChange = (event) =>{
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addStudent};
        newFormData[fieldName] = fieldValue;
        setAddStudentData(newFormData);
    }
    const handleAddButton =(event) =>{
        event.preventDefault();
        const newStudent = {
            id: nanoid(),
            firstname:addStudent.firstname,
            lastname:addStudent.lastname,
            email:addStudent.email,
        }
        const newStudents = [...students,newStudent];
    }

    return(

        <div className = "container">
            <button onClick={backButton}>Back to the main screen</button>
        <form onSubmit={handleAddButton}>
            <div class="form-group">
                <label> Firstname </label>
                <input class="w-50 p-3"
                       type="text"
                       class="form-control"
                       id="firstname"
                       onChange={handleAddFormChange}
                       placeholder="Enter your first name... " />
            </div>
            <div className="form-group">
                <label> Lastname </label>
                <input class="w-50 p-3"
                       type="text"
                       className="form-control"
                       id="lastname"
                       onChange={handleAddFormChange}
                       placeholder="Enter your last name... "/>
            </div>
            <div className="form-group">
                <label> email </label>
                <input className="w-50 p-3"
                       type="text"
                       className="form-control"
                       id="email"
                       onChange={handleAddFormChange}
                       placeholder="Enter your email... "/>
            </div>
            <button type="submit" className="btn btn-primary mt-lg-2">Submit</button>
        </form>
        </div>
    )
}

export default AddStudent