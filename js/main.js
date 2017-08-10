// declaring possible fortune outcomes
var fortunes = [
  "Somebody will mistaken you for a homeless person and put R2 in your hand",
  "The barista will burn your coffee thus ruining your entire morning",
  "You will notice your first grey hair this evening",
  "A bee will fly into your cooldrink engulfing you in feelings of death, wastage and despair",
  "Somebody wants to give you a kitten",
  "Don't eat lettuce today as it will negatively effect your chakra alignment",
  "You will receive a call from a call centre selling you life insurance",
  "A seagull will shit on your shoulder, bestowing upon you good luck"] ;

// makes the fortune appear once the button is clicked
function readFortune() {
	var fortune = cheese() 
	document.getElementById("fortune").innerHTML = fortune
	document.getElementById("stop").disabled = true;
}

// chooses a fortune at random to be displayed
function cheese() {
	var randomNumber = Math.floor(Math.random() * fortunes.length);
	console.log("random number" + randomNumber);
	return fortunes[randomNumber];
}

// makes the second button generate a new fortune infinitely
function reset() {
	var fortune = cheese() 
	document.getElementById("fortune").innerHTML = fortune
}
