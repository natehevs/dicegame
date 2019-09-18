//BUILD A DICE GAME
//Play a dice game
	//start rolling dice for the 7 rounds
		//first round is to chose character name
		//second round is to be entered into tournament
		//third- 7th round is tournament rolls
			//if number chosen is not called you continue to next round and select new number
		//otherwise...
			//rolled your number means you lose
		//unless its the last round
			//if number is rolled in last round it means you win
	//result display

function runGame() {
	//runs game
	let input = prompt("Please select a number 0-9 to be given a name!");
	let playerName = randomName[input];
	console.log (playerName);

	// let continuePlaying = runChanceRound();
	// // if(continuePlaying === true){

	// // }
}
function runChanceRound(){
	let input = prompt("Are you ready to roll? Please choose number 1-4 for chance to enter tournament. If your number matches the roll you are entered!");
	let roll2 = randomWholeNum(4);
	if (roll2 === input) {
		alert("Congrats!!! You have entered the tournament for a chance to win $1,000,000!");
		// return true;
	}
	else {
		alert("Sorry, but you have not been chosen for the tournament.");
		// return false;
	}
	console.log(roll2);
}

function runFirstRound() {
	input = prompt("Choose a number between 1-20 for the FIRST round of the tournament. If your number is not picked you move on to next round.");
	let roll3 = randomWholeNum(20);
	//if a 20 is rolled, the user jumps ahead to the final round instantly
	if (roll3 === 20) {
		alert("Skip to FINAL Round!");
	}
	else if (roll3 !== input) {
		alert("Congrats, you've advanced to round 2!");
	}
	else {
		alert("I'm sorry but you've lost. Please leave the game.");
	}
	console.log(roll3);
}

function runSecondRound() {
	input = prompt("Choose a number between 1-16 for the SECOND round of the tournament. If your number is not picked you move on to next round.");
	let roll4 = randomWholeNum(16);
	//if a 13 is rolled, the user loses instantly even if they didn't choose 13
	if (roll4 === 13) {
		alert("MUHAHAHA you have rolled a 13! You LOSE!!! Please leave the game.");
	}
	else if (roll4 !== input) {
		alert("Congrats, you've advanced to round 2!");
	}
	else {
		alert("I'm sorry but you've lost. Please leave the game.");
	}
	console.log(roll4);
}

function runThirdRound() {
	input = prompt("Choose a number between 1-12 for the THIRD round of the tournament. If your number is not picked you move on to next round.");
	let roll5 = randomWholeNum(12);
	if (roll5 === input) {
		alert("I'm sorry but you've lost. Please leave the game.");
	}
	else {
		alert("Congrats, you've advanced to round 4!");
	}
	console.log(roll5);
}

function runFourthRound() {
	input = prompt("Choose a number between 1-8 for the FOURTH round of the tournament. If your number is not picked you move on to next round.");
	let roll6 = randomWholeNum(8);
	if (roll6 === input) {
		alert("I'm sorry but you've lost. Please leave the game.");
	}
	else {
		alert("Congrats, you've advanced to THE FINAL ROUND!");
	}
	console.log(roll6);
}

function runFifthRound() {
	input = prompt("Choose a number between 1-6 for the FINAL round of the tournament. If your number IS picked YOU WIN the tournament!!!")
	let roll7 = randomWholeNum(6);
	if (roll7 === input) {
		alert("Congrats! YOU WON $1,000,000!!!")
	}
	else {
		alert(" I'm sorry but you've lost. Nice try!")
	}
	console.log(roll7);
}

let randomName = [
		"Joe",
		"Frank",
		"Arnold",
		"Tony",
		"Charles",
		"Guy",
		"Robert",
		"Ed",
		"John",
		"Dave"
		];

function randomWholeNum(numberOfSides) {
	return Math.floor(Math.random() * numberOfSides) + 1;

}

runGame();
runChanceRound();
runFirstRound();
runSecondRound();
runThirdRound();
runFourthRound();
runFifthRound();