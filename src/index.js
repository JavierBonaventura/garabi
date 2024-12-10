import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import wapp from "../src/images/Desktop/whatsapp.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <a
      href="https://api.whatsapp.com/send?phone=541130254376"
      target="_blank"
      className="fixed right-10 bottom-10 z-40"
    >
      <img
        src={wapp}
        className="w-16 hover:scale-110 transition-all ease-in-out duration-300"
      ></img>
    </a>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
