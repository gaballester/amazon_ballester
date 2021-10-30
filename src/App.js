import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Home";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/">
            <NavBar />
            <ItemListContainer exact/>
          </Route>
        </Switch>
      </Router>

    </div>)

    ;
}
export default App;
