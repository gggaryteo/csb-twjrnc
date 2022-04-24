/* 
Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", 
the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.
*/

// State global variables
var currentGameMode = "nameMode";
console.log(`Game Mode: ${currentGameMode}`);
var userName = "";
var prevWinner = "";
var numUserWins = 0;
var numComputerWins = 0;
var numOfTies = 0;
var totalGamesPlayed = 0;
var winPercentage = (numUserWins / totalGamesPlayed) * 100;
var losePercentage = (numComputerWins / totalGamesPlayed) * 100;

// Make Output Strings Messages a constant

const winMessage = `You emerged victorious! Care to go for another round?`;
const loseMessage = `You lost. Don't lose hope. Try again?`;
const drawMessage = `This match ends in a draw!`;
const modeMessage = `Welcome to the world of ✌✋✊. <br><br> Type "normal" for Normal Scissors Paper Stone <br> Type "reverse" for Reverse Scissors Paper Stone`;
const spsMessage = `You are now in normal mode. Enter scissors ✂️, paper 📄, or stone 🗿 only to get started. `;
const reverseMessage = `You have entered the Mirror Dimension. Everything is in reverse now ◀️◀️`;
const invalidMessage = `This is an invalid input. Please enter scissors ✂️, paper 📄, or stone 🗿 only.`;

// Assign scissors, paper, stone to a value respectively.
// Randomize the output given by the computer by creating a helper function with Math.random
// Computer outputs scissors, paper, or stone at random.
var generateRandomInteger = function () {
  return Math.floor(Math.random() * 3 + 1);
};

var generatePaperScissorsStone = function () {
  var randomSignByComputer = generateRandomInteger();
  console.log(`Computer generated sign is ${randomSignByComputer}`);
  if (randomSignByComputer == 1) {
    return `scissors`;
  }
  if (randomSignByComputer == 2) {
    return `paper`;
  } else {
    return `stone`;
  }
};

// Create a Username function
var initialUsername = function (inputName) {
  userName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  currentGameMode = "choiceMode";
  console.log(`Game Mode: ${currentGameMode}`);
  return `Hello ${userName}! <br><br> ${modeMessage}`;
};

// Create a helper function for different game modes (1 for SPS, 2 for MJP)
var initChoiceOfGame = function (input) {
  if (input != `normal` && input != `reverse`) {
    return `You have entered an invalid game mode. Please choose either 'normal' or 'reverse'`;
  } else if (input == `normal`) {
    currentGameMode = `SPS`;
    console.log(`Game Mode: ${currentGameMode}`);
    return `${spsMessage}`;
  } else {
    currentGameMode = `REVERSE`;
    console.log(`Game Mode: ${currentGameMode}`);
    return `${reverseMessage}`;
  }
};

// Refactoring Code: Game Stats

var generateGameStats = function () {
  // Make this a helper function to print the statistics of the game
  return `Total Games Played: ${totalGamesPlayed}<br>
  Wins: ${numUserWins} (${winPercentage.toFixed(2)}%)<br>
  Loss: ${numComputerWins} (${losePercentage.toFixed(2)}%)<br>
  Ties: ${numOfTies}`;
};

// Refactoring Code: Scissors Paper Stone Game Logic
var playSPS = function (userName, userGuess) {
  var userGuess = userGuess.toLowerCase();

  // Computer generated Scissors Paper Stone
  var computerObject = generatePaperScissorsStone();
  console.log(`Computer generated sign is ${computerObject}`);
  var genericOutput = `Hi ${userName}, you have chosen ${userGuess}. <br> Bot Lewis picked ${computerObject}.`;

  // Human wins Bot Computer Scenario
  if (
    (userGuess == `scissors` && computerObject == `paper`) ||
    (userGuess == `paper` && computerObject == `stone`) ||
    (userGuess == `stone` && computerObject == `scissors`)
  ) {
    numUserWins++;
    console.log(`User Wins: ${numUserWins}`);
    genericOutput += `<br><br> ${winMessage} <br> <br>`;
  }
  // Human Draws Against Bot Computer in Normal Mode Scenario
  else if (userGuess == computerObject) {
    numUserWins;
    numComputerWins;
    numOfTies++;
    genericOutput += `<br><br> ${drawMessage} <br><br>`;
  }
  // Human Loses Against Bot Computer in Normal Mode Scenario
  else if (
    (userGuess == `paper` && computerObject == `scissors`) ||
    (userGuess == `stone` && computerObject == `paper`) ||
    (userGuess == `scissors` && computerObject == `stone`)
  ) {
    numComputerWins++;
    console.log(`Computer Wins: ${numComputerWins}`);
    genericOutput += `<br><br> ${loseMessage} <br> <br>`;
  } else if (userGuess == `reverse`) {
    currentGameMode = `REVERSE`;
    return `${reverseMessage}`;
  }
  // User Input Validation
  else {
    return `Please type in scissors, paper, or stone to play :)`;
  }

  totalGamesPlayed++;
  console.log(`Total Games: ${totalGamesPlayed}`);
  winPercentage = (numUserWins / totalGamesPlayed) * 100;
  losePercentage = (numComputerWins / totalGamesPlayed) * 100;

  return genericOutput + generateGameStats();
};

// Game Logic: Reverse Scissors Paper Stone

var playReverseSps = function (userName, userGuess) {
  // Computer generated Scissors Paper Stone
  var computerObject = generatePaperScissorsStone();
  console.log(`Computer generated sign is ${computerObject}`);
  var genericOutput = `Hi ${userName}, you have chosen ${userGuess}. <br> Bot Lewis picked ${computerObject}.`;

  // Human wins Bot Computer in a Reverse Scenario
  if (
    (userGuess == `paper` && computerObject == `scissors`) ||
    (userGuess == `stone` && computerObject == `paper`) ||
    (userGuess == `scissors` && computerObject == `stone`)
  ) {
    numUserWins++;
    console.log(`User Wins: ${numUserWins}`);
    genericOutput += `<br><br> ${winMessage} <br> <br>`;
  }
  // Human Draws Against Bot Computer in a Reverse Scenario
  else if (userGuess == computerObject) {
    numUserWins;
    numComputerWins;
    numOfTies++;
    genericOutput += `<br><br> ${drawMessage} <br><br>`;
  }
  // Human Loses Against Bot Computer in a Reverse Scenario
  else if (
    (userGuess == `scissors` && computerObject == `paper`) ||
    (userGuess == `paper` && computerObject == `stone`) ||
    (userGuess == `stone` && computerObject == `scissors`)
  ) {
    numComputerWins++;
    console.log(`Computer Wins: ${numComputerWins}`);
    genericOutput += `<br><br> ${loseMessage} <br> <br>`;
  } else if (userGuess == `normal`) {
    currentGameMode = `SPS`;
    return `${spsMessage}`;
  }
  // User Input Validation
  else {
    return `Please type in scissors, paper, or stone to play :)`;
  }

  totalGamesPlayed++;
  console.log(`Total Games: ${totalGamesPlayed}`);
  winPercentage = (numUserWins / totalGamesPlayed) * 100;
  losePercentage = (numComputerWins / totalGamesPlayed) * 100;

  return genericOutput + generateGameStats();
};

// Game Logic: Muk-Jii-Paa

var main = function (input) {
  // Set to name mode first
  if (currentGameMode == `nameMode`) {
    return initialUsername(input);
    // Set to Scissors, Paper, Stone Mode If User Chose Normal
  }
  var myOutputValue = "";
  // After user enters their username, they will be presented with two Game Modes (Normal SPS, or Reverse SPS)
  if (currentGameMode == `choiceMode`) {
    myOutputValue = initChoiceOfGame(input);
    // Call upon the helper function to determine which mode the user chooses.
    // If user inputs normal or reverse, update currentGameMode variable to `normal` or `reverse` respectively.
  } else if (currentGameMode == `SPS`) {
    console.log(`Current Game Mode: ${currentGameMode}`);
    myOutputValue = playSPS(userName, input);
    // Set to Reverse Mode if User Chose Reverse
  } else if (currentGameMode == `REVERSE`) {
    console.log(`Current Game Mode: ${currentGameMode}`);
    myOutputValue = playReverseSps(userName, input);
  }
  return myOutputValue;
};
