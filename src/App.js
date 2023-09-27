import React, { Fragment } from "react";
import Header from "./Components/Layout/header";
import Meals from "./Components/meals/Meals";
import Cart from "./Components/Cart/cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
