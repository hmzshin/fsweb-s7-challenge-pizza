import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";
import { useState } from "react";

const Main = () => {
  const [orderDetails, setOrderDetails] = useState();
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/order" exact>
          <OrderPage setOrderDetails={setOrderDetails} />
        </Route>
        <Route path="/success" exact>
          <SuccessPage orderDetails={orderDetails} />
        </Route>
      </Switch>
    </>
  );
};

export default Main;
