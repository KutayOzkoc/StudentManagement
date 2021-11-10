import './App.css';
import StudentComponent from '../src/components/StudentComponent.js'
import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddStudent from '../src/components/AddStudent';
import UpdateStudent from "./components/UpdateStudent";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={StudentComponent}/>
                    <Route exact path="/create-student"  component={AddStudent}/>
                    <Route exact path="/update-student/:id"  component={UpdateStudent}/>
                </Switch>
        </div>
        </BrowserRouter>
    );
}

export default App;
