import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./Home";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import CustomProvider from "../src/Context/CartContext"
import CartMessage from "./Components/Cart/CartMessage"

function App() {
  return (
    <div className="app">
      <BrowserRouter>

        <CustomProvider>

          <NavBar />

          <Switch>

            <Route exact path="/" component={ItemListContainer}  />
            <Route path="/cart" component={Cart} />
            <Route path="/itemDetail/:id" component={ItemDetailContainer} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/CartMessage/:orderId" component={CartMessage} />

          </Switch>

        </CustomProvider>

      </BrowserRouter>

    </div>)

    ;
}
export default App;
