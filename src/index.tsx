import React from "react";
import ReactDOM from "react-dom/client";
import App from "./apps/App";
import "./styles/style.css";
import reportWebVitals from "./etc/reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
