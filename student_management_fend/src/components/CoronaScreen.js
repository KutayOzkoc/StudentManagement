import React, {useState} from 'react';
import axios from "axios";


function CoronaScreen(props){
    const [covDate,setCovDate] = useState("");

    const fetchData = () => {
        return axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
            .then((response) =>{
                setCovDate(response.data);
            });}


    return (
        <div>

            <input className="w-33 p-3 mt-lg-3 d-inline-block"
                   type="text"
                   name="covDate"
                   value={covDate}
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
                                <td> {covDate.date}</td>
                                <td> {covDate.patients}</td>
                                <td> {covDate.deaths}</td>
                                <td> {covDate.totalRecoverd}</td>
                                <td> {covDate.totalDeaths}</td>
                            </tr>
                }
                </tbody>
            </table>
       </div>
    )

}
export default CoronaScreen

