import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./components/Header";
import React from "react";

function App() {
  const name = "adam";
  return (
    <div className={styles.App_header}>
      <h1>Hello {name}</h1>
      {Header}
      <img src={logo} className={styles.App - logo} alt="logo" />
    </div>
  );
}

export default App;
