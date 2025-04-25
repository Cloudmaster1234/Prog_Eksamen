let players = []
//hvis tur det er 
let currentPlayer = 0
//state skal holde øje med hvad der sker lige nu i spillet 
let state = "new turn"
//den div der skal vise beskeder 
let infoDiv

function setup() {
  noCanvas()
  infoDiv = select('#message')
  for (let i = 0; i < 4; i++) {
    let p = createPlayer(i+1)
    players.push(p)
  }
  background(220)
  interface()
  buyButton()
  newTurn()
}

function newTurn(){
  console.log("Det er nu " + players[currentPlayer].name + "'s tur")
  state = "dice"
  showText('Det er nu ' + players[currentPlayer].name + "'s tur til at slå med terningen")
  //SEND MQTT BESKED OM AT DER SKAL SLÅS MED TERNINGEN 
}

function showText(t){
  infoDiv.html(t)
}

function createPlayer(id) {
  let player = {
    name: "Player " + id,
    credit: 1000,
    position: 0,
    id: id,
  }
  return player  
}
function interface() {
}


function Buttons() {
  createButton('Buy')
  .position(100, 100)

}