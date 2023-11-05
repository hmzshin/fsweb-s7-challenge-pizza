import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/order" exact>
          <OrderPage />
        </Route>
        <Route path="/success" exact>
          <SuccessPage />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
