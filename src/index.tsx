import React from 'react';
import { render } from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "toasted-notes/src/styles.css";

import rootReducer from "./store/rootReducer";
import { App } from "./App";
import "./styles/global.scss";


const store = configureStore({
  reducer: rootReducer
})

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

render(app, document.getElementById('root'));
