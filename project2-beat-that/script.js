/* 
1) There are 2 players and players take turns.

2) When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.

3) The player picks the order of the dice they want. For example, if they wanted the number 63, 
they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.

4) After both players have rolled and chosen dice order, the player with the higher combined number wins.
*/

// Declare global variables
var playerOneDiceOne = "";
var playerOneDiceTwo = "";
var playerTwoDiceOne = "";
var playerTwoDiceTwo = "";
var userWon = "";
// Assign variables for player 1 and 2 combined numbers
var playerOneCombinedNum = "";
var playerTwoCombinedNum = "";
// Assign arrays for player 1 and 2
var playerOneScore = [];
var playerTwoScore = [];
// Game Mode
var gameMode = "Dice Player 1";
console.log(`Starting Game Mode: ${gameMode}`);

// HELPER FUNCTIONS

// User input Validation
function isUserInputValid(input) {
  if (isNaN(input) || input == "") {
    return `This is not a number. Please select 1 or 2 for order of the dice.`;
  } else if (input != 1 || input != 2) {
    return `You didn't enter 1 or 2. Please select either one for the game to continue.`;
  }
}

// Dice Roll Function
function diceRoll() {
  var randomInteger = Math.floor(Math.random() * 6) + 1;
  return randomInteger;
}

// Function for Combined Dice Function - If user choose input 1, combine dice 1 value to dice 2 value, base 10.
// If user choose input 2, combine dice 1 value to dice 2 value, base 10.

function chooseDiceOneFirst(diceOne, diceTwo) {
  var combinedNumber = diceOne * 10 + diceTwo;
  console.log(`Combined Number: ${combinedNumber}`);
  console.log(typeof combinedNumber);
  return combinedNumber;
}

function chooseDiceTwoFirst(diceOne, diceTwo) {
  var combinedNumber = diceTwo * 10 + diceOne;
  console.log(typeof combinedNumber);
  console.log(`Combined Number: ${combinedNumber}`);
  return combinedNumber;
}

// Function for Player 1 Dice Roll (Game Mode Dice Roll For Player 1)
function playerOneDiceRoll() {
  playerOneDiceOne = diceRoll();
  playerOneDiceTwo = diceRoll();
  gameMode = "Choose Order Player 1";
  return `🎲 <b> Hola Player 1 </b> 🎲 <br><br> First Roll: ${playerOneDiceOne} <br> Second Roll: ${playerOneDiceTwo} <br><br> Please choose the order of your dice by selecting 1 or 2`;
}

// Function for Player 2 Dice Roll (Game Mode Dice Roll for Player 2)
function playerTwoDiceRoll() {
  playerTwoDiceOne = diceRoll();
  playerTwoDiceTwo = diceRoll();
  gameMode = "Choose Order Player 2";
  return `🎲 <b> Hola Player 2 </b> 🎲 <br><br> First Roll: ${playerTwoDiceOne} <br> Second Roll: ${playerTwoDiceTwo}. <br><br> Please choose the order of your dice by selecting 1 or 2`;
}

// Function for Player 1 To Choose Order of Die
function chooseOrderPlayer1(input) {
  // If user chose 1 first
  if (input == 1) {
    playerOneCombinedNum = chooseDiceOneFirst(
      playerOneDiceOne,
      playerOneDiceTwo
    );
    gameMode = `Dice Player 2`;
    // push combined number into Player 1's array
    playerOneScore.push(playerOneCombinedNum);
    console.log(`Player 1 Array: ${playerOneScore}`);
    return `Wow Player 1! <br><br> Your combined number is ${playerOneCombinedNum}. <br><br> Now, it is Player 2's turn. Press submit to roll the die.`;
  } else if (input == 2) {
    playerOneCombinedNum = chooseDiceTwoFirst(
      playerOneDiceOne,
      playerOneDiceTwo
    );
    gameMode = `Dice Player 2`;
    // push combined number into Player 1's array
    playerOneScore.push(playerOneCombinedNum);
    console.log(`Player 1 Array: ${playerOneScore}`);
    return `Wow Player 1! <br><br> Your combined number is ${playerOneCombinedNum}. <br><br> Now, it is Player 2's turn. Press submit to roll the die.`;
  } else {
    return isUserInputValid(input);
  }
}

// Function for Player 2 To Choose Order of Die
function chooseOrderPlayer2(input) {
  // If user chose 1 first
  if (input == `1`) {
    playerTwoCombinedNum = chooseDiceOneFirst(
      playerTwoDiceOne,
      playerTwoDiceTwo
    );
    gameMode = `score`;
    // push combined number into Player 1's array
    playerTwoScore.push(playerTwoCombinedNum);
    console.log(`Player 2 Array: ${playerTwoScore}`);
    return `Wow Player 2! <br><br> Your combined number is ${playerTwoCombinedNum}. <br><br> Press submit to find out who has won the game!`;
  } else if (input == `2`) {
    playerTwoCombinedNum = chooseDiceTwoFirst(
      playerTwoDiceOne,
      playerTwoDiceTwo
    );
    gameMode = `score`;
    // push combined number into Player 1's array
    playerTwoScore.push(playerTwoCombinedNum);
    console.log(`Player 2 Array: ${playerTwoScore}`);
    return `Wow Player 2! <br><br> Your combined number is ${playerTwoCombinedNum}. <br><br> Press submit to find out who has won the game!`;
  } else {
    return isUserInputValid(input);
  }
}

// Function to determine which Player has a higher Combined Number
// From Stack Overflow:  var highScore = Math.max.apply(Math, scores); - gives the highest score
// var scoreIndex = scores.indexOf(highScore); - gives the location of the highest score
// var bestStudent = names[scoreIndex]; - gets the name at the same location
function highScore(playerOneCombinedNum, playerTwoCombinedNum) {
  var userWon = Math.max(playerOneCombinedNum, playerTwoCombinedNum);
  return userWon;
}

// Function to output who has won
function announceWinner() {
  // restart the game by resetting the game mode to default
  gameMode = `Dice Player 1`;
  if (playerOneCombinedNum == userWon) {
    return `Player 1: ${playerOneCombinedNum} <br> Player 2: ${playerTwoCombinedNum} <br><br> Congratulations Player 1, you have won!`;
  } else if (playerTwoCombinedNum == userWon) {
    return `Player 1: ${playerOneCombinedNum} <br> Player 2: ${playerTwoCombinedNum} <br><br> Congratulations Player 2, you have won!`;
  } else if (playerOneCombinedNum == playerTwoCombinedNum) {
    return `Player 1: ${playerOneCombinedNum} <br> Player 2: ${playerTwoCombinedNum} <br><br>. This match ends with a draw.`;
  }
}

/* 
Keep score for each player. The score is the running sum of all numbers that player has generated so far.
This means there is no permanent winner, only a temporary leader.
When outputting game results in the output box, also output a leaderboard that lists the 2 players and their scores in decreasing order.
*/

// Function to Keep Track of Score and Output Who Is Leading The Game
function totalScore() {
  gameMode = `Dice Player 1`;
  var sumOfPlayerOne = 0;
  console.log(typeof sumOfPlayerOne);
  var sumOfPlayerTwo = 0;
  console.log(typeof sumOfPlayerTwo);
  // Add up the scores of both player 1 and 2 by looping through their arrays
  for (var i = 0; i < playerOneScore.length; i += 1) {
    sumOfPlayerOne += playerOneScore[i];
    console.log(`The total Score for Player 1: ${sumOfPlayerOne}`);
  }
  for (var x = 0; x < playerTwoScore.length; x += 1) {
    sumOfPlayerTwo += playerTwoScore[x];
    console.log(`The total Score for Player 2: ${sumOfPlayerTwo}`);
  }
  let difference = Math.abs(sumOfPlayerOne - sumOfPlayerTwo);
  // Comparison between the sum of player 1 and 2.
  if (sumOfPlayerOne > sumOfPlayerTwo) {
    return `Amazing Player 1, you're leading by a difference of ${difference}. <br><br><b>Leaderboard</b><br><br> Player 1: ${sumOfPlayerOne} <br> Player 2: ${sumOfPlayerTwo} <br><br> Press submit to play again!`;
  } else if (sumOfPlayerTwo > sumOfPlayerOne) {
    return `Amazing Player 2, you're leading by a difference of ${difference}. <br><br><b>Leaderboard</b><br><br> Player 1: ${sumOfPlayerOne} <br> Player 2: ${sumOfPlayerTwo} <br><br> Press submit to play again!`;
  } else if (sumOfPlayerOne == sumOfPlayerTwo) {
    return `Both of you are going at each others' throat. <br><br><b>Leaderboard</b><br><br> Player 1: ${sumOfPlayerOne} <br> Player 2: ${sumOfPlayerTwo} <br><br> Play again and determine the winner.`;
  }
}

// MAIN FUNCTION
var main = function (input) {
  var myOutputValue = "";
  // Starting Game Mode is Player 1's Turn to Roll Dice
  if (gameMode == `Dice Player 1`) {
    myOutputValue = playerOneDiceRoll();
    // Next Game Mode is to Choose Order of Die for Player 1
  } else if (gameMode == `Choose Order Player 1`) {
    console.log(`Next Game Mode: ${gameMode}`);
    myOutputValue = chooseOrderPlayer1(input);
    // Switch to Player 2
  } else if (gameMode == `Dice Player 2`) {
    console.log(`Next Game Mode: ${gameMode}`);
    myOutputValue = playerTwoDiceRoll();
    // Choose Order Of Die for Player 2
  } else if (gameMode == `Choose Order Player 2`) {
    console.log(`Next Game Mode: ${gameMode}`);
    myOutputValue = chooseOrderPlayer2(input);
    // Announce Winner of the Game
  } else if (gameMode == `determine who won`) {
    console.log(`Next Game Mode: ${gameMode}`);
    userWon = highScore(playerOneCombinedNum, playerTwoCombinedNum);
    myOutputValue = announceWinner();
  } else if (gameMode == `score`) {
    console.log(`Next Game Mode: ${gameMode}`);
    myOutputValue = totalScore();
  }
  return myOutputValue;
};
