import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoresProvider } from "./stores/StoresProvider";

ReactDOM.render(
  <StoresProvider>
    <App />
  </StoresProvider>,
  document.getElementById("root")
);
