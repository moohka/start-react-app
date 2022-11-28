import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./styles/style.css";
import reportWebVitals from "./etc/reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
