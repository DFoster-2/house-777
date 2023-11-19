//this whole thing was made by xander

let text = document.getElementById("scorecounter")
let scoreamtctr = document.getElementById("scoreamountcounter")
let bca = document.getElementById("bca")
let bcaf = document.getElementById("bcaf")

let thing = 0
let scoreamount = 1
let cost = 10
let costoffive = 70

function test() {
  console.log("y");
  thing = thing + scoreamount;
  console.log(thing)
  update()
}
function scoreplusplus() {
  if (thing >= cost) {
    scoreamount++;
    thing = thing - cost;
    console.log("score++")
    buyca(1)
    update()
  }
}
function scoreplusfive() {
  if (thing >= costoffive) {
    scoreamount = scoreamount + 5;
    thing = thing - costoffive;
    console.log("score+5")
    buyca(5)
    update()
  }
}
function buyca(amount) {
  cost = (cost + 15) * amount;
  update()
  costoffive = cost*5
}
function update() {
  let text = document.getElementById("scorecounter")
  let scoreamtctr = document.getElementById("scoreamountcounter")
  let bca = document.getElementById("bca")
  let bcaf = document.getElementById("bcaf")
  text.innerHTML = "Score: " + thing;
  scoreamtctr.innerHTML = "Click amount: " + scoreamount;
  bca.innerHTML = "Buy 1 click amount for " + cost + " score"
  bcaf.innerHTML = "Buy 5 click amount for " + costoffive + " score"
}
//up to here
