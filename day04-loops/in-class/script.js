/* Use loops to create an app that draws emojis into the grey box
The user will enter a number of characters to display on the screen.
For example, if the user enters 4 they will see 4 emojis:
*/

var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var counter = 0;
  var myOutputValue = ``;
  while (counter < input) {
    myOutputValue = `😊👍` + myOutputValue;
    counter += 1;
  }
  return myOutputValue;
};

/* 
The user will enter the dimensions of a square to display on the screen.
Use a loop within a loop and the <br> HTML tag in your output to create the square.
For example, if the user enters 4 they will see 4 rows & 4 columns:
*/
var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var rowCounter = 0;
  var myOutputValue = "";

  while (rowCounter < input) {
    console.log(`Row Counter: ${rowCounter}`);
    var columnCounter = 0;
    while (columnCounter < input) {
      console.log(`Column Counter: ${columnCounter}`);
      myOutputValue += "❤";
      columnCounter += 1;
    }
    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var rowCounter = 0;
  var myOutputValue = "";

  while (rowCounter < input) {
    console.log(`Row Counter: ${rowCounter}`);
    var columnCounter = 0;
    while (columnCounter <= rowCounter) {
      console.log(`Column Counter: ${columnCounter}`);
      myOutputValue += "❤";
      columnCounter += 1;
    }
    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

/* Without Repeat Function. Printing one by one.*/

// var emojiOutlineSquareMain = function (input) {
//   var rowCounter = 0;
//   var myOutputValue = "";
//   while (rowCounter < input) {
//     if (rowCounter === 0 || rowCounter === input - 1) {
//       console.log(`Row Counter: ${rowCounter}`);
//       var columnCounter = 0;
//       while (columnCounter < input) {
//         console.log(`Column Counter: ${columnCounter}`);
//         myOutputValue += "❤";
//         columnCounter += 1;
//       }
//     } else {
//       console.log(`Row Counter: ${rowCounter}`);
//       var columnCounter = 0;
//       while (columnCounter < input) {
//         console.log(`Column Counter: ${columnCounter}`);
//         if (columnCounter === 0 || columnCounter === input - 1) {
//           myOutputValue += "❤";
//         } else {
//           myOutputValue += "✌";
//         }
//         columnCounter += 1;
//       }
//     }
//     myOutputValue += "<br>";
//     rowCounter += 1;
//   }
//   return myOutputValue;
// };

/* With repeat function */

var emojiOutlineSquareMain = function (input) {
  var rowCounter = 1;
  var myOutputValue = "";

  while (rowCounter <= input) {
    console.log(typeof input);
    console.log(typeof rowCounter);
    console.log(`Row Counter: ${rowCounter}`);
    if (rowCounter === 1 || rowCounter === Number(input)) {
      myOutputValue += "❤".repeat(input);
    } else {
      myOutputValue += "❤" + "✌".repeat(input - 2) + "❤";
    }
    myOutputValue += "<br>";
    rowCounter += 1;
  }
  return myOutputValue;
};

// Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
// App doesn't allow even numbers input because it will not produce a centre emoji (modulo operator)

var emojiCenterSquareMain = function (input) {
  var myOutputValue = "";
  if (input % 2 != 1) {
    return `Please enter an odd number for the application to work.`;
  }

  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

/* 
Create a dice-guessing game with a variable number of dice rolls determined by the user.
The game will have 2 modes.
In the 1st mode, the user will enter the number of dice they wish to roll.
In the 2nd mode, the user will enter a guess that will apply to all dice rolls. 
For example, if the user has chosen to roll 2 dice in Mode 1 and guesses 4 in Mode 2, that guess of 4 will apply to both Dice 1 and Dice 2.
After the user guesses, the program will run a loop where the number of iterations is the number of dice rolls from Mode 1. 
Each loop iteration will roll a dice and verify if the user has won.
If the user guesses correctly for any of the dice rolls, the user wins.
The game keeps track of and outputs the overall win-loss record.
*/

// 1st) User Enters Number of Dice They Wish to Roll
// 2nd) User Guess the Number That Applies to All Dice Roll

var gameMode = "Enter Number of Dices";
console.log(`Current Game Mode: ${gameMode}`);

// Declare Global Variables
// Single Round
var numDice;
var hasUserWon = false;
var diceRolls = [];

// Multiple Rounds
var numUserWins = 0;
var totalRoundsPlayed = 0;

// Create a Dice Roll Function
var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  // If user types in the number of dices, switch game mode to guess mode.
  if (gameMode == "Enter Number of Dices") {
    numDice = Number(input);
    gameMode = "Enter Guess Now";
    return `You have chosen to roll ${numDice} dice. Please enter a single guess for all of the dice.`;
  }

  // GUESS MODE: Declare User Guess as a variable
  var userGuess = Number(input);
  // Initialise diceRolls array to store the number of dice rolls for the round
  diceRolls = [];
  hasUserWon = false;
  totalRoundsPlayed += 1;
  // Create a loop whereby the number of iterations is the number of dice the user wish to roll
  for (var i = 0; i < numDice; i += 1) {
    var diceRoll = rollDice();
    diceRolls.push(diceRoll);
    if (userGuess == diceRoll) {
      hasUserWon = true;
    }
  }

  // If user won, increase the Number of Wins Variable
  if (hasUserWon) {
    numUserWins += 1;
  }

  // Reset Game Mode After User Has Won
  gameMode = "Enter Number of Dices";

  var numLosses = totalRoundsPlayed - numUserWins;
  var genericOutput = `You guessed ${userGuess} and Bot Lewis rolled ${diceRolls}.`;
  var winLossOutput = `
    Wins: ${numUserWins} <br>
    Losses: ${numLosses} <br><br>
    Please enter your desired number of dice to start again.
  `;
  // If user has won, output win message.
  if (hasUserWon) {
    return `${genericOutput} <br><br> You win! <br><br> ${winLossOutput}`;
  }
  // If user has not won, output lose message.
  return `${genericOutput} <br><br> You lose. <br><br> ${winLossOutput}`;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};
