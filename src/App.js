import logo from "./logo.svg";
import style from "./App.module.css";
import Header from "./components/Header";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const name = "adamochi";
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/a7199961f0.js";
    script.crossorigin = "anonymous";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <>
      <div className={style.nav_bar}>
        <a target="_blank" href="https://github.com/adamochi">
          <span>
            <i class="fa-brands fa-github-alt fa-shake"></i> Source
          </span>
        </a>
      </div>
      <div className={style.App_header}>
        <h1>Hello {name}</h1>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No Tasks To Show"
        )}

        <div className={style.low_go}>
          <img src={logo} className={style.App_logo} alt="logo" />
        </div>
      </div>
    </>
  );
}

export default App;
