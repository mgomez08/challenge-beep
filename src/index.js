import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BeepApp from "./BeepApp";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BeepApp />
  </React.StrictMode>
);
