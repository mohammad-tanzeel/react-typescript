import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/login";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import UserList from "./screens/users";
import Registartion from "./screens/register";
import PersonScore from "./screens/PersonScoreForm";
// import Button from "./component/button";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registartion />} />
        <Route path="/sample-form" element={<PersonScore />} />
      </Routes>
    </div>
  );
}

export default App;
