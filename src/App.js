import React, { Component } from "react";
import logo from "./cp_snakewater_mid1.jpg";
import "./App.css";
import Scout from "./Scout";

const API1 = "http://logs.tf/api/v1/log?player=";
const API2 = "&limit=10000";
const API3 = "http://logs.tf/json/";
//const proxyurl = "https://cors-anywhere.herokuapp.com/";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var tempArray = [],
      counter = 0;
    var scout = new Scout();

    event.preventDefault();
    //Take in form data and get the id
    var fData = new FormData(event.target);
    var nums = fData.get("URL");
    nums = nums.slice(23, nums.length);
    //convert the id from steam64 to steamid3
    var steam = require("steamidconvert")();
    var id3 = steam.convertToNewFormat(steam.convertToText(nums));
    //fetch all logs and put match ids into array
    fetch(API1 + nums + API2)
      .then((response) => response.json())
      .then((json) => {
        for (var i = 0; i < json.results; i++) {
          //console.log(json.logs[i].id);
          tempArray.push(json.logs[i].id);
          counter++;
        }
      })
      //extract relevant data from each individual log
      .then(async () => {
        for (var i = 0; i < counter; i++) {
          fetch(API3 + tempArray[i])
            .then((response2) => response2.json())
            .then((json2) => {
              //Scout
              if (json2.players[id3].class_stats[0].type === "scout") {
                scout.insertInfo(json2, id3);
                console.log(scout.damageOver);
              }

              //console.log(json2.players[id3].class_stats[0].type);
            });
          await this.sleep(200);
        }
      });
  }

  //Helper methods
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  length(obj) {
    return Object.keys(obj).length;
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
