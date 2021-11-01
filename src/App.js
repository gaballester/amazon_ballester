import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Home";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <NavBar />

      <Switch>

        <Route path="/" component={ItemListContainer} exact/>
        <Route path="/itemDetail/:id" component={ItemDetailContainer} />
        
      </Switch>


    </BrowserRouter>

    </div>)

    ;
}
export default App;
