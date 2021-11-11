import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";


function CoronaScreen(props){
    const [covDate,setCovDate] = useState([]);
    const [date,setDate] = useState("");
    const [patients,setPatients] = useState("");
    const [deaths,setDeaths] = useState("");
    const [recoverd,setRecoverd] = useState("");
    const [totalDeaths,setTotalDeaths] = useState("");
    const history = useHistory();

    const backButton = async ()=>{
        await history.push({
            pathname:`/`,
        })
    }

    const fetchData = () => {
        return axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
            .then((response) =>{
                setDate(response.data[covDate].date);
                setPatients(response.data[covDate].patients);
                setDeaths(response.data[covDate].deaths);
                setRecoverd(response.data[covDate].totalRecovered);
                setTotalDeaths(response.data[covDate].totalDeaths);
            });}
    return (
        <div>
            <button onClick={backButton} className="btn btn-warning mt-lg-2 mb-2">Back to the main screen</button>
            <input className="w-33 p-3 mt-lg-3 d-inline-block"
                   type="text"
                   name="covDate"
                   onChange={(e)=>{setCovDate(e.target.value)}}
                   placeholder="Tarih değerini giriniz (örn: 10/10/2020)" />
            <button onClick={fetchData} className="btn btn-primary mt-lg-2 ml-2 d-inline-block"> DATA BUTTON</button>

            <table className="table table-striped">
                <thead>
                <tr>
                    <td> DATE </td>
                    <td> CASES </td>
                    <td> DEATHS (DAILY) </td>
                    <td> RECOVEREDS </td>
                    <td> TOTAL DEATHS </td>
                </tr>
                </thead>
                <tbody>
                {
                    <tr>
                        <td> {date}</td>
                        <td> {patients}</td>
                        <td> {deaths}</td>
                        <td> {recoverd}</td>
                        <td> {totalDeaths}</td>
                    </tr>
                }
                </tbody>
            </table>
       </div>
    )

}
export default CoronaScreen

