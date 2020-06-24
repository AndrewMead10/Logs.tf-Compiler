import React, { Component } from "react";
import logo from "./cp_snakewater_mid1.jpg";
import "./App.css";

const API1 = "http://logs.tf/api/v1/log?player=";
const API2 = "&limit=10000";
const API3 = "logs.tf/json";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      ids: [],
      total: 0,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    var fData = new FormData(event.target);
    var nums = fData.get("URL");
    nums = nums.slice(23, nums.length);
    var steam = require("steamidconvert")();
    var id3 = steam.convertToNewFormat(steam.convertToText(nums));
    fetch(API1 + nums + API2)
      .then((response) => response.json())
      .then((json) => {
        for (var i = 0; i < json.results; i++) {
          console.log(json.logs[i].id);
          return fetch(API3 + json.logs[i].id)
            .then((response2) => response2.json())
            .then((json2) => {
              if (json2.players[id3].class_stats[0].type == "medic") {
                console.log("medic");
              }
            });
        }
      });
  }

  render() {
    return (
      <div id="form">
        <form id="URL" onSubmit={this.handleSubmit}>
          <label>Enter your logs.tf profile:</label>
          <input id="URL" name="URL" type="text"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

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
