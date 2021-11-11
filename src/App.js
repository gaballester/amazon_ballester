import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Home";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CustomProvider from "../src/Context/CartContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <CustomProvider>

          <NavBar />

          <Switch>

            <Route path="/" component={ItemListContainer} exact />
            <Route path="/cart" component={Cart} />
            <Route path="/itemDetail/:id" component={ItemDetailContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />

          </Switch>

        </CustomProvider>

      </BrowserRouter>

    </div>)

    ;
}
export default App;
