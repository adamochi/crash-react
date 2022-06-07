import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import React from "react";

function App() {
  const name = "adam";
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      {Header}
      <img src={logo} />
    </div>
  );
}

export default App;
