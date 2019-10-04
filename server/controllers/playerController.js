let player = require("../models/player.js");

exports.listPlayers = (req, res) => {
  console.log("get a list of all players");
  res.send(player.players);
};

exports.createPlayer = (req, res) => {
  console.log("create a single player");
  if (req.body) {
    if (req.body.name) {
      // create a new player instance
      let p = new player.Player(req.body.name);
      // insert the new player into my collection
      player.players[p.name] = p;
      // send a response back
      res.status(201).send(p);
    } else {
      // body content did not contain a name attribute
      res.status(400).send("Must specify the player name");
    }
  } else {
    // request did not have a body
    res.status(400).send("Missing player data");
  }
};
  
exports.readPlayer = (req, res) => {
  console.log("get a single player");
  if (req.params.name) {
    let p = player.players[req.params.name];
    if (p) { // check that player p is defined
      res.send(p);
    } else {
      res.status(404).send("Player " + req.params.name + " not found");
    }
  } else {
    // handle client error
    res.status(400).send("Missing player name");
  }
};

exports.updatePlayer = (req, res) => {
  console.log("update a single player");
};

exports.deletePlayer = (req, res) => {
  console.log("deleting a single player");
};