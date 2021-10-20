import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>)

    ;
}
export default App;
