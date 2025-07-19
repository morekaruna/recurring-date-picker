import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecurrenceProvider } from "./context/RecurrenceContext";
import "./styles/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecurrenceProvider>
      <App />
    </RecurrenceProvider>
  </React.StrictMode>
);
