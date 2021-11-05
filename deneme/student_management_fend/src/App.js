import './App.css';
import StudentComponent from '../src/components/StudentComponent.js'
import React from 'react';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import AddStudent from '../src/components/AddStudent';

function App() {
    return (
        <div className="App">
          <Router>
              <Routes>
                  <Route path="/" exact={true} component={StudentComponent}/>
                  <Route path="/create-student" exact={true} component={AddStudent}/>
              </Routes>
          </Router>
        </div>
    );
}

export default App;
