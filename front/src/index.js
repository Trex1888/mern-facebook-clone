import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { StateProvider } from "./StateProvider";
import "./styles/index.css";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
