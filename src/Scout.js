var damageOver = 0;

export default class Scout {
  get DamageOver() {
    return this.damageOver;
  }
  constructor() {
    this.insertInfo = this.insertInfo.bind(this);
  }
  insertInfo(json2, id3) {
    console.log(damageOver);
    damageOver = damageOver + json2.players[id3].class_stats[0].dmg;
    console.log(damageOver);
    if (Object.keys(json2.players).length === 12) {
      this.damage6s++;
    } else if (Object.keys(json2.players).length === 18) {
      this.damageHL++;
    }
    //kills
    this.lifeKills = this.lifeKills + json2.players[id3].class_stats[0].kills;
    if (Object.keys(json2.players).length === 12) {
      this.kills6s++;
    } else if (Object.keys(json2.players).length === 18) {
      this.killsHL++;
    }
    //assists
    this.lifeAssists =
      this.lifeAssists + json2.players[id3].class_stats[0].assists;
    if (Object.keys(json2.players).length === 12) {
      this.assists6s++;
    } else if (Object.keys(json2.players).length === 18) {
      this.assistsHL++;
    }
    //deaths
    this.lifeDeaths =
      this.lifeDeaths + json2.players[id3].class_stats[0].deaths;
    if (Object.keys(json2.players).length === 12) {
      this.deaths6s++;
    } else if (Object.keys(json2.players).length === 18) {
      this.deathsHL++;
    }
    //dpm
    this.dpmOver =
      this.dpmOver +
      json2.players[id3].class_stats[0].dmg /
        (json2.players[id3].class_stats[0].total_time / 60);
    if (Object.keys(json2.players).length === 12) {
      this.dpm6s =
        this.dpm6s +
        json2.players[id3].class_stats[0].dmg /
          (json2.players[id3].class_stats[0].total_time / 60);
    } else if (Object.keys(json2.players).length === 18) {
      this.dpmHL =
        this.dpmHL +
        json2.players[id3].class_stats[0].dmg /
          (json2.players[id3].class_stats[0].total_time / 60);
    }
    //Add wins losses ties
    if (json2.teams[json2.players[id3].team] === "Red") {
      if (
        //wins
        json2.teams[json2.players[id3].team].score > json2.teams.Blue.score
      ) {
        this.winsOverall++;
        if (Object.keys(json2.players).length === 12) {
          this.wins6s++;
        } else if (Object.keys(json2.players).length === 18) {
          this.winsHL++;
        }
        //losses
      } else if (
        json2.teams[json2.players[id3].team].score < json2.teams.Blue.score
      ) {
        this.lossesOverall++;
        if (Object.keys(json2.players).length === 12) {
          this.losses6s++;
        } else if (Object.keys(json2.players).length === 18) {
          this.lossesHL++;
        }
        //ties
      } else {
        this.tiesOver++;
        if (Object.keys(json2.players).length === 12) {
          this.ties6s++;
        } else if (Object.keys(json2.players).length === 18) {
          this.tiesHL++;
        }
      }
    }
    if (Object.keys(json2.players).length === 12) {
      this.sixes++;
    } else if (Object.keys(json2.players).length === 18) {
      this.hl++;
    }
  }
}
