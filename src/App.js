import React from "react";
import logo from "./cp_snakewater_mid1.jpg";
import "./App.css";
import Form from "./Components/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form />
      </header>
    </div>
  );
}

export default App;
