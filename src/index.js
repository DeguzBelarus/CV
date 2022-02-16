import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe/AboutMe";
import Hobbies from "./pages/Hobbies/Hobbies";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
