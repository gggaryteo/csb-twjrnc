// global scope
var globalVariable = 0;

var introScopeMain = function () {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

// Roll Dice Function

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "You Lose!";

  if (randomDiceNumber == input) {
    myOutputValue = "You Win!";
  }

  return myOutputValue;
};

/* Create a version of the dice game that tells the user what their previous dice roll was. */

// Global Variable for Storing Previous Dice Value
var previousDiceRoll = 0;

// Roll Dice function
var rollDice = function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  return diceNumber;
};

// Getting Previous Roll Dice Function

var previousDiceRollInfo = function () {
  if (previousDiceRoll == 0) {
    return `This is your first roll...`;
  }
  return `Your previous roll is ${previousDiceRoll}.`;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var getPreviousDiceRoll = previousDiceRollInfo();
  var randomDiceNumber = rollDice();
  previousDiceRoll = randomDiceNumber;
  console.log(randomDiceNumber);
  var myOutputValue = "";
  if (input == randomDiceNumber) {
    myOutputValue = `${getPreviousDiceRoll}. You rolled a ${randomDiceNumber}. Your guess is ${input}. You win!`;
  } else {
    myOutputValue = `${getPreviousDiceRoll}. You rolled a ${randomDiceNumber}. Your guess is ${input}. You lose!`;
  }
  return myOutputValue;
};

/* As the user continues to play the game, tell them what their current win / loss percentage is. */

// Declare global variables. Number of Wins and Losses, Total Number Wins and Losses, and the Winning Percentage Win/Total * 100%
var numWin = 0;
var numLoss = 0;
var totalGames = numWin + numLoss;
var numWinPercent = (numWin / totalGames) * 100;

// Roll Dice Function
var rollDice = function () {
  var diceNumber = Math.floor(Math.random() * 6 + 1);
  return diceNumber;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.

  // User input validation
  if (isNaN(input) || input < 0 || input > 6) {
    return `Your input is invalid. Please input a number between 0 through 6`;
  }
  //Generate Random Dice Number
  var randomDiceNumber = rollDice();
  console.log(`The random Dice Number generated is ${randomDiceNumber}`);
  var myOutputValue = "";
  // Winning Scenario Increment
  if (input == randomDiceNumber) {
    numWin += 1;
    totalGames += 1;
    numWinPercent = (numWin / totalGames) * 100;
    myOutputValue = `Your win percentage is ${numWinPercent.toFixed(
      2
    )}. Your roll is ${randomDiceNumber}. You guessed ${input}.`;
  } else {
    numLoss += 1;
    totalGames += 1;
    numWinPercent = (numWin / totalGames) * 100;
    myOutputValue = `Your win percentage is ${numWinPercent.toFixed(
      2
    )}. Your roll is ${randomDiceNumber}. Your guess is ${input}.`;
  }
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/* If the player guess is off-by-1 they win 1 point. If the player guess is exact they win 2 points. */

// Declare global variables
var offBy1Guest = 0;
var exactGuest = 0;

var guessingMain = function (userGuess) {
  // Genereate random dice number
  var randomDiceNumber = rollDice();
  console.log(`The random dice number is ${randomDiceNumber}`);
  // User input validation

  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "";
  // If the user guessed the dice number exactly:
  if (userGuess == randomDiceNumber) {
    myOutputValue = `You have rolled ${randomDiceNumber}. Your guess of ${userGuess} matches exactly. You earned yourself 2 points.`;
    console.log(`Rolled ${randomDiceNumber}, Guessed ${userGuess}`);
    exactGuest += 2;
  } else if (
    userGuess == randomDiceNumber - 1 ||
    userGuess == randomDiceNumber + 1
  ) {
    myOutputValue = `You have rolled ${randomDiceNumber}. Your guess of ${userGuess} is off by 1. You earned yourself 1 point.`;
    console.log(`Rolled ${randomDiceNumber}, Guessed ${userGuess}`);
    offBy1Guest += 1;
  } else {
    myOutputValue = `You have rolled ${randomDiceNumber}. Your guess is ${userGuess}. Try again next time.`;
    console.log(`Rolled ${randomDiceNumber}, Guessed ${userGuess}`);
  }
  return myOutputValue;
};

// Declare global variables
var totalPoints = 0;
var offBy4GuessAdvanced = 0;
var offBy3GuessAdvanced = 0;
var offBy2GuessAdvanced = 0;
var offBy1GuessAdvanced = 0;
var exactGuessAdvanced = 0;

var advancedGuessingMain = function (userGuess, diceNumber) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  totalPoints =
    offBy4GuessAdvanced +
    offBy3GuessAdvanced +
    offBy2GuessAdvanced +
    offBy1GuessAdvanced +
    exactGuessAdvanced;

  diceNumber = rollDice();
  console.log("Random Dice Number Generated ");
  console.log(diceNumber);
  var myOutputValue = "";
  if (userGuess == diceNumber) {
    exactGuessAdvanced += 5;
    totalPoints += 5;
    myOutputValue = `You've rolled ${diceNumber}. Your guess is ${userGuess}. You have earned yourself 5 points. Total Points: ${totalPoints}`;
  } else if (userGuess == diceNumber - 1 || userGuess == diceNumber + 1) {
    exactGuessAdvanced += 4;
    totalPoints += 4;
    myOutputValue = `You've rolled ${diceNumber}. Your guess is ${userGuess}. You have earned yourself 4 points. Total Points: ${totalPoints}`;
  } else if (userGuess == diceNumber - 2 || userGuess == diceNumber + 2) {
    exactGuessAdvanced += 3;
    totalPoints += 3;
    myOutputValue = `You've rolled ${diceNumber}. Your guess is ${userGuess}. You have earned yourself 3 points. Total Points: ${totalPoints}`;
  } else if (userGuess == diceNumber - 3 || userGuess == diceNumber + 3) {
    exactGuessAdvanced += 2;
    totalPoints += 2;
    myOutputValue = `You've rolled ${diceNumber}. Your guess is ${userGuess}. You have earned yourself 2 points. Total Points: ${totalPoints}`;
  } else if (userGuess == diceNumber - 4 || userGuess == diceNumber + 4) {
    exactGuessAdvanced += 1;
    totalPoints += 1;
    myOutputValue = `You've rolled ${diceNumber}. Your guess is ${userGuess}. You have earned yourself 1 points. Total Points: ${totalPoints}`;
  }
  return myOutputValue;
};

var followAlongMain = function (input) {
  // we set the initial state of mode
  var mode = "green";

  // depending on the input, we will toggle mode states between green/blue
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var mode = "green";

  // depending on the input, we will toggle mode states between green/blue
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  } else if (input == "redmode") {
    mode = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }
  if (mode == "red") {
    myOutputValue =
      "Your time is limited, so don't waste it living someone else's life.";
  }

  return myOutputValue;
};
