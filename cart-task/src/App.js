import React, { useState } from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Checkout from "./components/Checkout";

export default function App() {
  const [checkoutTotal, setCheckoutTotal] = useState();

  return (
    <Router>
      <Route path="/" exact>
        <Cart setCheckoutTotal={setCheckoutTotal} />
      </Route>
      <Route path="/checkout">
        <Checkout checkoutTotal={checkoutTotal} />
      </Route>
    </Router>
  );
}
