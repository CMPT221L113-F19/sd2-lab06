let express = require("express");
let playerCtlr = require("./controllers/playerController.js");

router = express.Router();

// route for the collection of all players
router.route("/players")
  .get(playerCtlr.listPlayers)
  .post(playerCtlr.createPlayer);

// route for an individual player
router.route("/players/:name")
  .get(playerCtlr.readPlayer)
  .patch(playerCtlr.updatePlayer)
  .delete(playerCtlr.deletePlayer);

module.exports = router; // needed in order to make sure that app.js can load the router object