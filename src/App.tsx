import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/add">
          <h1>Add items</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
