/* Player model will represent a player in our game
  it will have the following attributes:
  - name (a String)
  - x coordinate (an integer)
  - y coordinate (an integer)
  - ...
*/

function Player(name) {
  this.name = name;
  this.x = 0;
  this.y = 0;
  // include other attributes here
}

exports = {
  Player: Player,
  players: {
    "Alice": new Player("Alice"),
    "Bob":   new Player("Bob"),
    "Carol": new Player("Carol")
  }
}

// players["Alice"]
// players["Dave"] = new Player("Dave")
