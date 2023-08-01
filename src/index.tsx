import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Routes } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Routes>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Routes>
  </React.StrictMode>,
  document.getElementById("root")
);
