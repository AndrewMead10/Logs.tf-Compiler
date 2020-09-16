import React, { Component } from "react";

export default class Scout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      lifeExpand: false,
      sixesExpand: false,
      hlExpand: false,
    };
    if (this.props) {
      this.damageOver = this.props.damageOver;
      this.damage6s = this.props.damage6s;
      this.damageHL = this.props.damageHL;
      this.lifeKills = this.props.lifeKills;
      this.kills6s = this.props.kills6s;
      this.killsHL = this.props.killsHL;
      this.lifeAssists = this.props.lifeAssists;
      this.assists6s = this.props.assists6s;
      this.assistsHL = this.props.assistsHL;
      this.lifeDeaths = this.props.lifeDeaths;
      this.deaths6s = this.props.deaths6s;
      this.deathsHL = this.props.deathsHL;
      this.dpmOver = this.props.dpmOver;
      this.dpm6s = this.props.dpm6s;
      this.dpmHL = this.props.dpmHL;
      this.winsOverall = this.props.winsOverall;
      this.wins6s = this.props.wins6s;
      this.winsHL = this.props.winsHL;
      this.lossesOverall = this.props.lossesOverall;
      this.losses6s = this.props.losses6s;
      this.lossesHL = this.props.lossesHL;
      this.tiesOver = this.props.tiesOver;
      this.ties6s = this.props.ties6s;
      this.tiesHL = this.props.tiesHL;
      this.sixes = this.props.sixes;
      this.hl = this.props.hl;
      this.games = this.props.games;
      this.capsLife = this.props.capsLife;
      this.caps6s = this.props.caps6s;
      this.capsHL = this.props.capsHL;
      this.shotsOver = this.props.shotsOver;
      this.shots6s = this.props.shots6s;
      this.shotsHL = this.props.shotsHL;
      this.hitsOver = this.props.hitsOver;
      this.hits6s = this.props.hits6s;
      this.hitsHL = this.props.hitsHL;
    } else {
      this.insertInfo = this.insertInfo.bind(this);
      this.damageOver = 0;
      this.damage6s = 0;
      this.damageHL = 0;
      this.lifeKills = 0;
      this.kills6s = 0;
      this.killsHL = 0;
      this.lifeAssists = 0;
      this.assists6s = 0;
      this.assistsHL = 0;
      this.lifeDeaths = 0;
      this.deaths6s = 0;
      this.deathsHL = 0;
      this.dpmOver = 0;
      this.dpm6s = 0;
      this.dpmHL = 0;
      this.winsOverall = 0;
      this.wins6s = 0;
      this.winsHL = 0;
      this.lossesOverall = 0;
      this.losses6s = 0;
      this.lossesHL = 0;
      this.tiesOver = 0;
      this.ties6s = 0;
      this.tiesHL = 0;
      this.sixes = 0;
      this.hl = 0;
      this.games = 0;
      this.capsLife = 0;
      this.caps6s = 0;
      this.capsHL = 0;
      this.shotsOver = 0;
      this.shots6s = 0;
      this.shotsHL = 0;
      this.hitsOver = 0;
      this.hits6s = 0;
      this.hitsHL = 0;
    }
  }

  render() {
    let display = [];
    display.push(
      <button type="button" onClick={this.toggleExpander} id="toggler">
        Scout
      </button>
    );
    if (this.state.expanded) {
      display.splice(
        1,
        1,
        <div className="show" key="1">
          <table>
            <tbody>
              <tr className="gamemodes">
                <th id="dark-col">Lifetime</th>
                <th id="dark-col"></th>
                <th id="dark-col" className="games">
                  {this.games} Games
                </th>
                <th id="light-col">Sixes</th>
                <th id="light-col"></th>
                <th id="light-col" className="games">
                  {this.sixes} Games
                </th>
                <th id="dark-col">Highlander</th>
                <th id="dark-col"></th>
                <th id="dark-col" className="games">
                  {this.hl} Games
                </th>
              </tr>
              <tr className="headers">
                <td>Wins</td>
                <td>Losses</td>
                <td>Ties</td>
                <td>Wins</td>
                <td>Losses</td>
                <td>Ties</td>
                <td>Wins</td>
                <td>Losses</td>
                <td>Ties</td>
              </tr>
              <tr className="info">
                <td>{this.winsOverall}</td>
                <td>{this.lossesOverall}</td>
                <td>{this.tiesOver}</td>
                <td>{this.wins6s}</td>
                <td>{this.losses6s}</td>
                <td>{this.ties6s}</td>
                <td>{this.winsHL}</td>
                <td>{this.lossesHL}</td>
                <td>{this.tiesHL}</td>
              </tr>
              <tr className="headers">
                <td>Kills</td>
                <td>Assists</td>
                <td>Deaths</td>
                <td>Kills</td>
                <td>Assists</td>
                <td>Deaths</td>
                <td>Kills</td>
                <td>Assists</td>
                <td>Deaths</td>
              </tr>
              <tr className="info">
                <td>{nwc(this.lifeKills)}</td>
                <td>{nwc(this.lifeAssists)}</td>
                <td>{nwc(this.lifeDeaths)}</td>
                <td>{nwc(this.kills6s)}</td>
                <td>{nwc(this.assists6s)}</td>
                <td>{nwc(this.deaths6s)}</td>
                <td>{nwc(this.killsHL)}</td>
                <td>{nwc(this.assistsHL)}</td>
                <td>{nwc(this.deathsHL)}</td>
              </tr>
              <tr className="headers">
                <td>Damage</td>
                <td>DPM</td>
                <td>K/D</td>
                <td>Damage</td>
                <td>DPM</td>
                <td>K/D</td>
                <td>Damage</td>
                <td>DPM</td>
                <td>K/D</td>
              </tr>
              <tr className="info">
                <td>{nwc(this.damageOver)}</td>
                <td>{parseInt(this.dpmOver / this.games)}</td>
                <td>{(this.lifeKills / this.lifeDeaths).toFixed(2)}</td>
                <td>{nwc(this.damage6s)}</td>
                <td>{parseInt(this.dpm6s / this.sixes)}</td>
                <td>{(this.kills6s / this.deaths6s).toFixed(2)}</td>
                <td>{nwc(this.damageHL)}</td>
                <td>{parseInt(this.dpmHL / this.hl)}</td>
                <td>{(this.killsHL / this.deathsHL).toFixed(2)}</td>
              </tr>
              <tr className="headers">
                <td>KA/D</td>
                <td>Accuracy</td>
                <td>Captures</td>
                <td>KA/D</td>
                <td>Accuracy</td>
                <td>Captures</td>
                <td>KA/D</td>
                <td>Accuracy</td>
                <td>Captures</td>
              </tr>
              <tr className="info">
                <td>
                  {(
                    (this.lifeKills + this.lifeAssists) /
                    this.lifeDeaths
                  ).toFixed(2)}
                </td>

                <td>{parseInt((this.hitsOver / this.shotsOver) * 100)}%</td>
                <td>{this.capsLife}</td>
                <td>
                  {((this.kills6s + this.assists6s) / this.deaths6s).toFixed(2)}
                </td>
                <td>{parseInt((this.hits6s / this.shots6s) * 100)}%</td>
                <td>{this.caps6s}</td>
                <td>
                  {((this.killsHL + this.assistsHL) / this.deathsHL).toFixed(2)}
                </td>
                <td>{parseInt((this.hitsHL / this.shotsHL) * 100)}%</td>
                <td>{this.capsHL}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
    return display;
  }
  toggleExpander = (e) => {
    this.setState({ expanded: !this.state.expanded });
  };
  expandLife = (e) => {
    this.setState({ expandLife: !this.state.expandLife });
  };
  expandSixes = (e) => {
    this.setState({ expandSixes: !this.state.expandSixes });
  };
  expandHighlander = (e) => {
    this.setState({ expandHighlander: !this.state.expandHighlander });
  };

  insertInfo(json2, id3) {
    this.games++;
    this.damageOver = this.damageOver + json2.players[id3].class_stats[0].dmg;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.damage6s += json2.players[id3].class_stats[0].dmg;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.damageHL += json2.players[id3].class_stats[0].dmg;
    }
    //kills
    this.lifeKills = this.lifeKills + json2.players[id3].class_stats[0].kills;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.kills6s += json2.players[id3].class_stats[0].kills;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.killsHL += json2.players[id3].class_stats[0].kills;
    }
    //assists
    this.lifeAssists =
      this.lifeAssists + json2.players[id3].class_stats[0].assists;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.assists6s += json2.players[id3].class_stats[0].assists;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.assistsHL += json2.players[id3].class_stats[0].assists;
    }
    //deaths
    this.lifeDeaths =
      this.lifeDeaths + json2.players[id3].class_stats[0].deaths;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.deaths6s += json2.players[id3].class_stats[0].deaths;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.deathsHL += json2.players[id3].class_stats[0].deaths;
    }
    //dpm
    //remember to divide by number of games when you go to display

    this.dpmOver += json2.players[id3].dapm;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.dpm6s += json2.players[id3].dapm;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.dpmHL += json2.players[id3].dapm;
    }
    //Add wins losses ties for when the player is on red team
    if (json2.teams[json2.players[id3].team] === "Red") {
      console.log("hi");
      if (
        //wins
        json2.teams[json2.players[id3].team].score > json2.teams.Blue.score
      ) {
        this.winsOverall++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.wins6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.winsHL++;
        }
        //losses
      } else if (
        json2.teams[json2.players[id3].team].score < json2.teams.Blue.score
      ) {
        this.lossesOverall++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.losses6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.lossesHL++;
        }
        //ties
      } else {
        this.tiesOver++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.ties6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.tiesHL++;
        }
      }
    } else {
      //Add wins losses ties for when the player is on blue team
      if (
        //wins
        json2.teams[json2.players[id3].team].score > json2.teams.Red.score
      ) {
        this.winsOverall++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.wins6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.winsHL++;
        }
        //losses
      } else if (
        json2.teams[json2.players[id3].team].score < json2.teams.Red.score
      ) {
        this.lossesOverall++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.losses6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.lossesHL++;
        }
        //ties
      } else {
        this.tiesOver++;
        if (
          Object.keys(json2.players).length === 12 ||
          Object.keys(json2.players).length === 13
        ) {
          this.ties6s++;
        } else if (
          Object.keys(json2.players).length === 18 ||
          Object.keys(json2.players).length === 19
        ) {
          this.tiesHL++;
        }
      }
    }
    //gamemode
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.sixes++;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.hl++;
    }
    //captures
    this.capsLife += json2.players[id3].cpc;
    if (
      Object.keys(json2.players).length === 12 ||
      Object.keys(json2.players).length === 13
    ) {
      this.caps6s += json2.players[id3].cpc;
    } else if (
      Object.keys(json2.players).length === 18 ||
      Object.keys(json2.players).length === 19
    ) {
      this.capsHL += json2.players[id3].cpc;
    }
    //shots taken
    if (json2.players[id3].class_stats[0].weapon["scattergun"] != null) {
      this.shotsOver +=
        json2.players[id3].class_stats[0].weapon["scattergun"].shots;
      if (
        Object.keys(json2.players).length === 12 ||
        Object.keys(json2.players).length === 13
      ) {
        this.shots6s +=
          json2.players[id3].class_stats[0].weapon["scattergun"].shots;
      } else if (
        Object.keys(json2.players).length === 18 ||
        Object.keys(json2.players).length === 19
      ) {
        this.shotsHL +=
          json2.players[id3].class_stats[0].weapon["scattergun"].shots;
      }
    }
    //number of shots hit
    if (json2.players[id3].class_stats[0].weapon["scattergun"] != null) {
      this.hitsOver +=
        json2.players[id3].class_stats[0].weapon["scattergun"].hits;
      if (
        Object.keys(json2.players).length === 12 ||
        Object.keys(json2.players).length === 13
      ) {
        this.hits6s +=
          json2.players[id3].class_stats[0].weapon["scattergun"].hits;
      } else if (
        Object.keys(json2.players).length === 18 ||
        Object.keys(json2.players).length === 19
      ) {
        this.hitsHL +=
          json2.players[id3].class_stats[0].weapon["scattergun"].hits;
      }
    }
  }
}

function nwc(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
