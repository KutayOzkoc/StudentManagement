import React, {useState} from 'react';
import axios from "axios";


function CoronaScreen(props){
    const [covDate,setCovDate] = useState("");

    const fetchData = () => {
        return axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
            .then((response) =>{
                console.log(response.data[covDate].patients)
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
        </div>
    )

}
export default CoronaScreen

