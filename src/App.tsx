import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom";
import { ActualStateType } from 'store/rootReducer';

import { ErrorTemplate } from "./pages/ErrorTemplate/ErrorTemplate"
import { Home } from "./pages/Home/Home";

export const App = () => {
  const itemsAmount = useSelector((state: ActualStateType) => state.items).length;

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {
            itemsAmount > 12 ? <Redirect to="/complex-items"/>: <Home />
          }
        </Route>
        <Route path="/complex-items">
          {
            itemsAmount <= 12 ? <Redirect to="/" /> : <ErrorTemplate
              message="Vending machine can't load more than 3 rows of items"
              instructions="Please, edit the store, so that you should go home"
            />

          }
        </Route>
      </Switch>
    </Router>
  );
}
