import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoresProvider } from "./stores/StoresProvider";

ReactDOM.render(
  <React.StrictMode>
    <StoresProvider>
      <App />
    </StoresProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
