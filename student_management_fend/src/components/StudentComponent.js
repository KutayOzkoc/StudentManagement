import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';


const URL = 'http://localhost:8080/api/v1/students';

function StudentComponent(props) {
    const [students, setStudents] = useState([])
    const history = useHistory();
    useEffect(() => {
        console.log("1")
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setStudents(response.data)
    }

    const handleAddStudent = async ()=>{
        await history.push({
            pathname:`/create-student`,
        })
    }

    const removeData = (id) => {
        axios.delete(`${URL}/${id}`).then(res => {
            const del = students.filter(student => id !== student.id)
            setStudents(del)
        })
    }


    return (
        <div>
            <h1 className="text-center"> Student List</h1>
            <button type="button" className="btn btn-success" onClick={handleAddStudent}>Add Student</button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <td> Student Id</td>
                    <td> Student First Name</td>
                    <td> Student Last Name</td>
                    <td> Student Email Id</td>
                    <td> Edit </td>
                    <td> Delete </td>
                </tr>
                </thead>
                <tbody>
                {
                    students.map(
                        student =>
                            <tr key={student.id}>
                                <td> {student.id}</td>
                                <td> {student.firstname}</td>
                                <td> {student.lastname}</td>
                                <td> {student.email}</td>
                                <td>
                                    <button type="button" className="btn btn-info">Edit</button>
                                </td>
                                <td className='opration'>
                                    <button type="button" className="btn btn-danger" onClick={() => removeData(student.id)}>Delete</button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default StudentComponent