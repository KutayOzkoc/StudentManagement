import "./App.css";
import StudentComponent from "../src/components/StudentComponent.js";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddStudent from "../src/components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import CoronaScreen from "./components/CoronaScreen";

function App() {
  return (
    <BrowserRouter>
      <div class="collapse" id="navbarToggleExternalContent ">
        <div class="bg-dark p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark ">
        <div class="container-fluid d-flex justify-content-center">
          <h2 class="text-white p-2 ">Student Management</h2>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={StudentComponent} />
        <Route exact path="/create-student" component={AddStudent} />
        <Route exact path="/update-student/:id" component={UpdateStudent} />
          <Route exact path="/corona-screen/" component={CoronaScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
