import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import AddItem from "./pages/AddItem";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/add">
          <AddItem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
