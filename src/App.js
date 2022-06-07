import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "adam";
  return (
    <div className="container">
      <h1>Hello {name}</h1>
      <img src={logo} />
    </div>
  );
}

export default App;
