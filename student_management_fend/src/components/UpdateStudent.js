import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";



const URL = 'http://localhost:8080/api/v1/students';
function UpdateStudent(props){

    const[firstname,setFirstname] = useState("");
    const[lastname,setLastname] = useState("");
    const[email,setEmail] = useState("");

    const history = useHistory();

    useEffect(()=>{
    },[])

    const backButton = async ()=>{
        await history.push({
            pathname:`/`,
        })
    }
    function UpdateData(){
        let data = {firstname,lastname,email}
        fetch(URL,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((resp)=>{
            resp.json().then((result)=>{
                console.warn("result",result);
            })
        })
    }

    return(
`
        <div className = "container">
            <button onClick={backButton}>Back to the main screen</button>
            <form>
                <label> Firstname </label>
                <input className="w-50 p-3"
                       type="text"
                       name="firstname"
                       value={firstname}
                       onChange={(e)=>{setFirstname(e.target.value)}}
                       placeholder="Enter your first name... " />
                <label> Lastname </label>
                <input className="w-50 p-3"
                       type="text"
                       name="lastname"
                       value={lastname}
                       onChange={(e)=>{setLastname(e.target.value)}}
                       placeholder="Enter your last name... "/>
                <label> email </label>
                <input className="w-50 p-3"
                       type="text"
                       name="email"
                       value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       placeholder="Enter your email... "/>
                <button type="submit" className="btn btn-primary mt-lg-2" onClick={saveData}>Submit</button>
            </form>
        </div>
 `   )
}

export default UpdateStudent