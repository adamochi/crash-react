import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./components/Header";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Tasks from "./components/Tasks";


function App() {
  const name = "adamochi";
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://kit.fontawesome.com/a7199961f0.js" 
    script.crossorigin="anonymous"
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
    
    <div className={style.App_header}>
    <div className={style.nav_bar}>
    <span><i class="fa-brands fa-github-alt"></i> Source</span>
    </div>
      <h1>Hello {name}</h1>
      <Header />
      <Tasks />
      <div className={style.low_go}>
        <img src={logo} className={style.App_logo} alt="logo" />
      </div>
    </div>
    </>
  );
}

export default App;
