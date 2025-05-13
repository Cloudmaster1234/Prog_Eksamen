// her laver jeg et arrya til at gemme spillere i
let players = []
// her sætter jeg hvems tur det er
let currentPlayer = 0
// her sætter jeg spillet status til wait
let state = "wait"
// sætter vi sidste slag til null som betyder at der ikke er slået med terningen endu
let sidsteSlag = null
// her laver jeg et tomt string til at gemme beskeder i
let beskedTekst = ""
// her laver jeg en variable til mine spøgsmål og sætter den til null da der ikke er et spørgsmål endnu
let valgtSpørgsmål = null
// her sætter jeg hvormange felter der er i spillet
const FELTER_TOTAL = 26
// her laver jeg en størrelse til mine spiller boxes
const boxSize = 120


// her connecter vi til MQTT serveren over websockets
const client = mqtt.connect("wss://mqtt.nextservices.dk")

// når vi er connected til serveren skriver vi det i konsollen og abonnerer på "Matador"
client.on("connect", function () {
  console.log("MQTT connected!")
  client.subscribe("Matador", function (err) {
    if (!err) console.log("Subscribed to topic: Matador")
  })
})

// her lytter vi på beskeder fra MQTT – vi tjekker om vi venter på et terningkast
client.on("message", function (topic, message) {
  if (topic === "Matador" && state === "waitingForDice") {
    const slag = parseInt(message.toString())
    receiveDice(slag)
  }
})


// her opsætter vi canvas og starter spillet
function setup() {
  // laver et canvas der fylder hele vinduet ved hjælp af windowWidth og windowHeight
  createCanvas(windowWidth, windowHeight)
  // køre createPlayer funktionen 4 gange og gemmer dem i players arrayet
  createPlayers(4)
  // her laver jeg de forskælige knapper der bliver brugt i spillet
  createUIButtons()
  // her køre jeg newTurn funktionen som starter spillet ved at gøre det til næste spillers tur
  newTurn()
}

function draw() {
  // her laver jeg en baggrundsfarve
  background(220)
  // her laver jeg en box til de 4 spillere i arrayet Players
  drawPlayerBox(players[0], 20, 20)
  drawPlayerBox(players[1], width - boxSize - 20, 20)
  drawPlayerBox(players[2], 20, height - boxSize - 20)
  drawPlayerBox(players[3], width - boxSize - 20, height - boxSize - 20)

  // her sætter jeg størrelsen på teksten
  textSize(24)
  // her sætter jeg hvor teksten skal være
  textAlign(CENTER, BOTTOM)
  // her sætter jeg at teksten skal være beskedTekst
  text(beskedTekst, width / 2, height - 40)
}


// her laver jeg en spiller og sætter dens id, navn, kredit og position
function createPlayer(id) {
  return {
    id,
    name: `Player ${id}`,
    credit: 1000,
    position: 0,
    ownedFields: [],
  };
}

// her laver jeg en funktion der køre createPlayer funktionen et antal gange og gemmer dem i players arrayet
function createPlayers(count) {
  players = []
  for (let i = 1; i <= count; i++) {
    players.push(createPlayer(i))
  }
}


// her starter vi en ny tur og viser besked og knap til at slå med terningen
function newTurn() {
  const p = players[currentPlayer]
  sidsteSlag = null
  //her bruger jeg template literals til at lave en string med spillerens navn hvor jeg bare kan
  //sætte variabler ind i teksten
  beskedTekst = `${p.name}, det er din tur. Tryk for at slå med terningen.`
  state = "ready"
  showButton(slåKnap)
  hideButton(købKnap)
  hideButton(skipKnap)
}

// når vi modtager et terningkast opdaterer vi position og viser om feltet er ledigt
function receiveDice(slag) {
  const player = players[currentPlayer]
  //her bruger jeg mudulo til at sikre at spilleren ikke kan komme uden for brættet
  //hvis spilleren slår mere end der er felter på brættet
  player.position = (player.position + slag) % FELTER_TOTAL
  sidsteSlag = slag
  //her bruger jeg template literals til at lave en string med spillerens navn hvor jeg bare kan
  //sætte variabler ind i teksten
  beskedTekst = `${player.name} slog ${slag} og landede på felt ${player.position}`

  //her tjekker jeg om feltet er ledigt
  //hvis det er ledigt så kan spilleren købe det
  //ellers skal spilleren betale leje
  //hvis spilleren ejer feltet så skal de ikke betale leje
  if (isFieldFree(player.position)) {
    if(board[player.position].owner == player.id){
      // du ejer selv grunden
      beskedTekst = `${player.name}, du ejer allerede ${board[player.position].name}`
      endTurn()
    }else{
      // du kan købe grunden
      state = "awaitingBuyDecision"
      showButton(købKnap)
      showButton(skipKnap)
      hideButton(slåKnap)
      beskedTekst = `${player.name}, du landede på. ${board[player.position].name}`
    }
  } else {
    // du skal leje
    state = "payingRent"
    rent()
  }
}

// her køber spilleren feltet hvis de har råd
function buy() {
  const player = players[currentPlayer]
  const felt = player.position
  // tjækker jeg om spilleren har råd til at købe feltet
  if(player.credit > board[felt].price){
    player.credit -= getFieldPrice(felt)
    board[felt].owner = player.id
    beskedTekst = `${player.name} købte felt ${felt} for ${getFieldPrice(felt)}`
    endTurn()
  //hvis spiller ikke har råd slut runden
  }else{
    beskedTekst = `${player.name} har ikke råd til felt ${board[player.position].name}`
    endTurn();
  }
}

// her springer spilleren over og turen går videre
function skip() {
  beskedTekst = `${players[currentPlayer].name} sprang over.`
  endTurn()
}

// hvis feltet er ejet, starter vi quiz’en
function rent() {
  const spiller = players[currentPlayer]
  const ejer = board[spiller.position].owner
  beskedTekst = `${spiller.name} skal lave quiz`
  quiz(spiller)
}

// her vælger vi et tilfældigt spørgsmål og viser det
function quiz(spiller) {
  valgtSpørgsmål = random(board[spiller.position].quiz)
  console.log(valgtSpørgsmål)
  beskedTekst = `${spiller.name} skal svare på spørgsmålet: ${valgtSpørgsmål.q}`
  hideButton(slåKnap)
  showButton(trueKnap)
  showButton(falseKnap)
}

// her slutter vi turen og skjuler alle knapper
function endTurn() {
  hideButton(købKnap)
  hideButton(skipKnap)
  hideButton(trueKnap)
  hideButton(falseKnap)
  currentPlayer = (currentPlayer + 1) % players.length
  state = "wait"
  setTimeout(() => newTurn(), 3000)
}


// her tjekker vi om et felt er frit
function isFieldFree(position) {
  // spilleren står nu på position feltet 
  // hvad hedder det?
  console.log(board[position].name) 
  if(board[position].owner == 0){
    return true
  }else{
    return false
  }
}

// her finder vi ejeren af feltet
function findOwner(position) {
  return board[position].owner
}

// her henter vi prisen på feltet
function getFieldPrice(position) {
  return board[position].price 
}

// her henter vi lejen på feltet
function getRent(position) {
  return board[position].rent
}


// her laver vi knapperne til brugerfladen
let slåKnap, købKnap, skipKnap

function createUIButtons() {
  slåKnap = createButton("Slå med terningen")
  slåKnap.position((width - slåKnap.width)/2, (height - slåKnap.height)/2)
  slåKnap.mousePressed(function() {
    beskedTekst = "Venter på terning..."
    client.publish("Matador", "start")
    //skal sende besked til mqtt server så jeg kan modtage et tal
    setTimeout(() => state = "waitingForDice", 1000)
  });

  // her laver jeg knappen til at købe feltet
  købKnap = createButton("Køb feltet")
  // her sætter jeg knappen til at være i midten af skærmen
  købKnap.position(((width - købKnap.width)/2)-100, (height - købKnap.height)/2)
  // her beder jeg den om at køre buy funktionen når den bliver trykket på
  // og skjuler knappen
  købKnap.mousePressed(buy)
  købKnap.hide()

  // her laver jeg knappen til at springe over
  skipKnap = createButton("Spring over")
  // her sætter jeg knappen til at være i midten af skærmen
  skipKnap.position(((width - skipKnap.width)/2)+100, (height - skipKnap.height)/2)
  // her beder jeg den om at køre skip funktionen når den bliver trykket på
  // og skjuler knappen
  skipKnap.mousePressed(skip)
  skipKnap.hide()

  // her laver jeg true knappen
  trueKnap = createButton("True")
  // her sætter jeg knappen til at være i midten af skærmen
  trueKnap.position(((width - trueKnap.width)/2)-100, (height - trueKnap.height)/2)
  // her beder jeg den om at køre et if/else statement når den bliver trykket på
  trueKnap.mousePressed(function() {
    // hvis spilleren svarer rigtigt så slutter turen
    if(valgtSpørgsmål.a == true){
      beskedTekst = `${players[currentPlayer].name} svarede rigtigt`
      endTurn()
    }else{
      // hvis spilleren svarer forkert så skal de betale leje
      beskedTekst = `${players[currentPlayer].name} svarede forkert`
      players[currentPlayer].credit -= getRent(players[currentPlayer].position)
      // og ejeren får lejen
      players[board[players[currentPlayer].position].owner - 1].credit += getRent(players[currentPlayer].position)
      endTurn()
    }
  })
  trueKnap.hide()

  // her laver jeg false knappen
  falseKnap = createButton("False")
  // her sætter jeg knappen til at være i midten af skærmen
  falseKnap.position(((width - falseKnap.width)/2)+100, (height - falseKnap.height)/2)
  // her beder jeg den om at køre et if/else statement når den bliver trykket på
  falseKnap.mousePressed(function() {
    // hvis spilleren svarer rigtig så slutter turen
    if(valgtSpørgsmål.a == false){
      beskedTekst = `${players[currentPlayer].name} svarede rigtigt`
      endTurn()
    }else{
      // hvis spilleren svarer forkert så skal de betale leje
      beskedTekst = `${players[currentPlayer].name} svarede forkert`
      players[currentPlayer].credit -= getRent(players[currentPlayer].position)
      // og ejeren får lejen
      players[board[players[currentPlayer].position].owner - 1].credit += getRent(players[currentPlayer].position)
      endTurn()
    }
  })
  falseKnap.hide()
}

// her viser vi en knap
function showButton(btn) {
  btn.show()
}

// her skjuler vi en knap
function hideButton(btn) {
  btn.hide()
}

// her tegner vi en spillerbox med navn, felt og kredit
function drawPlayerBox(player, x, y) {
  fill(currentPlayer === player.id - 1 ? "#ffcc00" : 200)
  stroke(0)
  rect(x, y, boxSize, boxSize, 10)

  fill(0)
  textSize(16)
  textAlign(LEFT, TOP)
  text(`${player.name}\nFelt: ${player.position}\nKredit: ${player.credit}`, x + 10, y + 10)
}
