import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom';

const URL = 'http://localhost:8080/api/v1/students';

function StudentComponent(props) {

    const [playing, setPlaying] = useState(false);

    const HEIGHT = 500;
    const WIDTH = 500;

    const startVideo = () => {
        setPlaying(true);
        navigator.getUserMedia(
            {
                video: true,
            },
            (stream) => {
                let video = document.getElementsByClassName('app__videoFeed')[0];
                if (video) {
                    video.srcObject = stream;
                }
            },
            (err) => console.error(err)
        );
    };

    const stopVideo = () => {
        setPlaying(false);
        let video = document.getElementsByClassName('app__videoFeed')[0];
        video.srcObject.getTracks()[0].stop();
    };

    const [students, setStudents] = useState([])
    const history = useHistory();
    useEffect(() => {
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

    const handleUpdateStudent = async (student,id)=>{
        await history.push({
            pathname:'/update-student' +"/"+ student.id,
            state:{id:id,firstname:student.firstname, lastname: student.lastname, email: student.email}
        })
    }

    const CoronaScreen = async ()=>{
        await history.push({
            pathname:'/corona-screen'
        })
    }

    const RandomNameGenerator = async ()=>{
        await history.push({
            pathname:'/random-gen'
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
                <video
                    height={HEIGHT-150}
                    width={WIDTH-150}
                    muted
                    autoPlay
                    className="app__videoFeed container-fluid d-flex justify-content-center mt-2 mb-2"
                ></video>
            <div className="app__input">
                {playing ? (
                    <button onClick={stopVideo} className="container-fluid d-flex justify-content-center btn btn-danger w-50 mt-2">Stop</button>
                ) : (
                    <button onClick={startVideo} className="container-fluid d-flex justify-content-center btn btn-outline-primary w-50 mt-2">Start</button>
                )}
            </div>
            <button type="button" className="btn btn-danger d-inline-block mt-lg-2"  style={{"margin-left":"20px"}} onClick={CoronaScreen}>Corona Screen</button>
            <button type="button" className="btn btn-danger d-inline-block mt-lg-2"  style={{"margin-left":"20px"}} onClick={RandomNameGenerator}>Random Name Generator Page</button>
            <button type="button" className="btn btn-success d-inline-block mt-lg-2 " style={{"margin-left":"20px"}}  onClick={handleAddStudent}>Add Student</button>
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
                                <td className='operation'>
                                    <button type="button" className="btn btn-info" onClick={()=>handleUpdateStudent(student,student.id)}>Edit</button>
                                </td>
                                <td className='operation'>
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