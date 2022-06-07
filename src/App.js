import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./components/Header";
import React from "react";
import PropTypes from "prop-types";
import Tasks from "./components/Tasks";

function App() {
  const name = "adam";
  return (
    <div className={style.App_header}>
      <h1>Hello {name}</h1>
      <Header />
      <Tasks />
      <div className={style.low_go}>
        <img src={logo} className={style.App - logo} alt="logo" />
      </div>
    </div>
  );
}

export default App;
