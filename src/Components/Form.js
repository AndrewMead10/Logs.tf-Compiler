import React, { Component } from "react";
import Scout from "../TFClasses/Scout";
import Soldier from "../TFClasses/Soldier";
import Pyro from "../TFClasses/Pyro";
import Demoman from "../TFClasses/Demoman";
import Heavy from "../TFClasses/Heavy";
import Engineer from "../TFClasses/Engineer";
import Medic from "../TFClasses/Medic";
import Sniper from "../TFClasses/Sniper";
import Spy from "../TFClasses/Spy";
import ProgressBar from "../../node_modules/react-bootstrap/ProgressBar";
import "../Style/looks.css";

const API1 = "http://logs.tf/api/v1/log?player=";
const API2 = "&limit=10000";
const API3 = "http://logs.tf/json/";
let scout = new Scout();
let soldier = new Soldier();
let pyro = new Pyro();
let demo = new Demoman();
let heavy = new Heavy();
let engie = new Engineer();
let med = new Medic();
let sniper = new Sniper();
let spy = new Spy();

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      now: 0,
      submit: false,
      done: false,
    };
  }

  handleSubmit(event) {
    let tempArray = [];
    let counter = 0;

    event.preventDefault();
    //Take in form data and get the id
    let fData = new FormData(event.target);
    let nums = fData.get("URL");
    nums = nums.slice(23, nums.length);
    //convert the id from steam64 to steamid3
    let steam = require("steamidconvert")();
    let id3 = steam.convertToNewFormat(steam.convertToText(nums));
    //fetch all logs and put match ids into array
    this.setState(
      {
        submit: true,
      },
      () => {
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
              let percent = (100 * i) / counter;
              this.setState({ now: percent.toFixed(1) });
              fetch(API3 + tempArray[i])
                .then((response2) => response2.json())
                .then((json2) => {
                  if (json2.players[id3].class_stats[0].type === "scout") {
                    scout.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "soldier") {
                    soldier.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "pyro") {
                    pyro.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "demoman") {
                    demo.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "heavy") {
                    heavy.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "engineer") {
                    engie.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "medic") {
                    med.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "sniper") {
                    sniper.insertInfo(json2, id3);
                  }
                  if (json2.players[id3].class_stats[0].type === "spy") {
                    spy.insertInfo(json2, id3);
                  }

                  //console.log(scout.damageOverLife);
                  //console.log(json2.players[id3].class_stats[0].type);
                });
              await this.sleep(200);
              //console.log(this.state.now);
            }
            this.setState({ done: true });
          });
      }
    );
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  render() {
    let userInput = " ";
    if (!this.state.submit) {
      userInput = (
        <div id="input">
          <form id="getURL" onSubmit={this.handleSubmit}>
            <label id="question">Enter your logs.tf profile:</label>
            <br />
            <input id="URL" name="URL" type="text"></input>
            <input id="send" type="submit"></input>
          </form>
        </div>
      );
    } else if (this.state.submit && !this.state.done) {
      userInput = (
        <progress id="file" max="100" value={this.state.now}></progress>
      );
    } else {
      userInput = (
        <div className="all-classes">
          <Scout {...scout} />
          <br />
          <Soldier {...soldier} />
          <br />
          <Pyro {...pyro} />
          <br />
          <Demoman {...demo} />
          <br />
          <Heavy {...heavy} />
          <br />
          <Engineer {...engie} />
          <br />
          <Medic {...med} />
          <br />
          <Sniper {...sniper} />
          <br />
          <Spy {...spy} />
          <br />
        </div>
      );
    }
    return userInput;
  }
}

export default Form;
