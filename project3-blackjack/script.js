/*---------------------------- PSEUDO CODE --------------------------------*/
// User goes first and draw two cards from the Shuffled Deck
// Game mode to decide whether Hit or Stand
// Switch over to Computer's turn. If the computer's draw is below 17, it has to hit.
// Players' scores are added up. Jack/Queen/King is 10. Aces is 11.
// Whoever is closer to 21 wins.

//-------------------------------------------------------------------------//

//---------------------------- DOM ----------------------------------------//
document.querySelector("#hit-button").disabled = true;
document.querySelector("#stand-button").disabled = true;
document.querySelector("#continue-button").disabled = true;
document.querySelector("#reset-button").disabled = true;
document.querySelector("#bet-button").disabled = true;

/*------------------------------------------------------------------------ */

// Function to make the 52-cards deck.
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["Hearts", "Diamond️", "Clubs️", "Spades️"];
  var emojis = ["♥️", "♦️", "♣️", "♠️"];

  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      let cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "Ace";
      } else if (cardName == 11) {
        cardName = "Jack";
      } else if (cardName == 12) {
        cardName = "Queen";
      } else if (cardName == 13) {
        cardName = "King";
      }

      // Create a new card with the current name, suit, and rank
      let card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        emojis: emojis[suitIndex],
        picture: `./images/cards/${cardName}_of_${currentSuit}.png`
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  for (
    let currentIndex = 0;
    currentIndex < cardDeck.length;
    currentIndex = currentIndex + 1
  ) {
    // Select a random index in the deck
    let randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    let randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    let currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cardDeck;
};

// Declare game modes for drawing initial two cards and hitting/standing
let gameMode = `waiting for username`;
console.log(`Current Mode: ${gameMode}`);
// Declare global variables
let userName = "";
let playerValue = "";
let dealerValue = "";
var playerBet = 0;
console.log(typeof playerBet);
// Initialise Player and Dealer Arrays to empty ones
let playerHands = [];
let dealerHands = [];
// Make getDeck and shuffledDeck a global variable so we can call it easily into the functions
var getDeck = makeDeck();
var shuffledDeck = shuffleCards(getDeck);

/*--------------------- HELPER FUNCTIONS  --------------------------- */

// Enter Username To Start The Game Function
var startGame = function (inputName) {
  if (inputName == "") {
    return `This isn't a valid name. Please input your username.`;
  } else if (inputName == Number(inputName)) {
    return `Invalid Username. Please enter characters only.`;
  } else {
    userName = inputName.charAt(0).toUpperCase() + inputName.slice(1);
    console.log(inputName);
    gameMode = "Bet Amount";
    button.disabled = true;
    betButton.disabled = false;
    console.log(`Game Mode: ${gameMode}`);
    return `Hello ${userName}! <br><br> Please place a bet amount (minimum 15 points).`;
  }
};

// Print Name and Suit of Cards Into A String
var printCards = function (card) {
  var cardOutput = ``;
  // Create a loop to iterate over the cards.length
  for (var i = 0; i < card.length; i += 1) {
    if (card[i].suit === `Hearts` || card[i].suit === `Diamonds`) {
      cardOutput += `<div id="redcard" class="card">${card[i].name}<br><span class="emojis"> ${card[i].emojis} </span></div>`;
    } else {
      cardOutput += `<div id="card" class="card">${card[i].name}<br><span class="emojis"> ${card[i].emojis} </span></div>`;
    }
  }
  cardOutput += `<br>`;
  return cardOutput;
};

var betPoints = function (inputBet) {
  if (isNaN(inputBet) || inputBet === "") {
    return `Invalid Bet Amount. Please enter the amount of points you wish to bet.`;
  } else if (inputBet < 15) {
    return `Please input a minimum bet amount of 15`;
  } else {
    playerBet = Number(inputBet);
    console.log(typeof inputBet);
    console.log(playerBet);
    gameMode = `Deal Cards`;
    betButton.disabled = true;
    button.disabled = false;
    return `You have placed a bet of ${playerBet} <br><br> Click the start button to play BlackJack!`;
  }
};

var displayPoints = function () {
  return `🔥 You have <b> ${playerBet} <b> in your balance left. 🔥`;
};

// Function to draw one card
var drawOneCard = function () {
  return shuffledDeck.pop();
};

// Function to deal two cards to both player and dealer
// Afterwards, evaluate whether is there a BlackJack.
var giveTwoCards = function () {
  // Use a loop function to deal two cards to player and dealer
  for (let i = 0; i < 2; i++) {
    var cardOne = drawOneCard();
    playerHands.push(cardOne);
    var cardTwo = drawOneCard();
    dealerHands.push(cardTwo);
    console.log(`Player Hands: ${printCards(playerHands)}`);
    console.log(`Dealer Hands: ${printCards(dealerHands)}`);
  }
  var myOutputValue = `${userName} drew: <br> ${printCards(
    playerHands
  )} <br> Dealer drew: <br> ${printCards(dealerHands)} <br><br>`;
  var playerBlackJack = didPlayerBlackJack(playerHands);
  var dealerBlackJack = didPlayerBlackJack(dealerHands);
  // Both player and dealer have blackjack -> tie
  if ((playerBlackJack == true) & (dealerBlackJack == true)) {
    myOutputValue += `It's a Blackjack Tie~`;
    button.disabled = true;
    resetButton.disabled = false;
  }
  // Player has blackjack and dealer has no blackjack -> player wins, dealer loses
  else if ((playerBlackJack == true) & (dealerBlackJack == false)) {
    playerBet += 15;
    myOutputValue += `Amazing luck! You have won by blackjack! <br><hr><div id="points"> Added 15 to your balance! ${displayPoints()}</div><hr><br>`;
    button.disabled = true;
    resetButton.disabled = false;
  }
  // Dealer has blackjack and player has no blackjack -> player loses, dealer wins
  else if ((playerBlackJack == false) & (dealerBlackJack == true)) {
    playerBet -= 15;
    myOutputValue += `Aww shucks! Dealer has won by blackjack! <br><hr><div id="points"> Lost 15 to your balance! ${displayPoints()}</div><hr><br>`;
    button.disabled = true;
    resetButton.disabled = false;
  }
  // if no blackjack for both, game continues to hit/stand/
  else {
    myOutputValue += `There isn't any blackjack. Game continues on! <br><br> Do you want to hit or stand? `;
    hit.disabled = false;
    stand.disabled = false;
    button.disabled = true;
    gameMode = `Player Hits`;
  }
  return myOutputValue;
};

// didPlayerBlackJack function to check if the Player or Dealer has gotten blackjack based off their two cards
var didPlayerBlackJack = function (handArray) {
  // Check player using array[0] and array[1]
  let cardOne = handArray[0];
  let cardTwo = handArray[1];
  // Set Blackjack condition to false first.
  var isBlackJack = false;
  // Blackjack conditions: 1st Card -> Ace 2nd Card -> Jack/Queen/King
  // 1st Card -> Jack/Queen/King 2nd Card -> Ace
  if (
    (cardOne.name == `Ace` && cardTwo.rank >= 10) ||
    (cardOne.rank >= 10 && cardTwo.name == `Ace`)
  ) {
    // If both cards' value totalled 21, set blackjack condition to true.
    hit.disabled = true;
    stand.disabled = true;
    contButton.disabled = false;
    isBlackJack = true;
  }
  return isBlackJack;
};

// Compare total Value between Player and Dealer's Hands
var getTotalValueInHands = function (handArray) {
  var totalValue = 0;
  var aceCounter = 0;
  // loop through the arrays and sum the total value of the cards
  for (let i = 0; i < handArray.length; i += 1) {
    let currentCard = handArray[i];
    if (
      currentCard.name == "Jack" ||
      currentCard.name == "Queen" ||
      currentCard.name == "King"
    ) {
      totalValue += 10;
    }
    // ace will be assigned a value of 11
    else if (currentCard.name == "Ace") {
      totalValue += 11;
      aceCounter += 1;
    } else {
      totalValue += currentCard.rank;
    }
  }
  let i = 0;
  while (i < aceCounter) {
    if (totalValue > 21) {
      totalValue -= 10;
    }
    i++;
  }
  return totalValue;
};

// Function to generate Extra Card (Player clicks `Hit` Button)
var generateExtraCard = function (input) {
  gameMode = `Player Hits`;
  var extraCard = drawOneCard();
  playerHands.push(extraCard);
  playerValue = getTotalValueInHands(playerHands);
};

// Function for when Player Hits
// Player Can Hit When Value of All Cards < 20
// Hit will be disabled when the value of all cards = 21
// If the value of all cards goes > 21, busted, player has to click `Stand`

var playerHit = function () {
  var myOutputMessage = ``;
  if (playerValue <= 20) {
    myOutputMessage += `You drew another card successfully. <br><br> Your current cards are: ${printCards(
      playerHands
    )} <br> Current Value: ${playerValue} <br><br> Do you want to hit or stand?`;
  } else if (playerValue == 21) {
    myOutputMessage += `Wow, you drew another card and your total value is 21. <br><br> Your current cards are: ${printCards(
      playerHands
    )} <br><br> Press stand to continue`;
    hit.disabled = true;
  } else {
    myOutputMessage += `Oh no! You went over 21 and you have busted. <br><br> Your current cards are: ${printCards(
      playerHands
    )} <br> Current Value: ${playerValue}. <br><br> Press stand to continue`;
    hit.disabled = true;
  }
  return myOutputMessage;
};

// Function for dealer to Hit/Stand automatically
// Function for Dealer Hit/Stand
// Dealer will only Hit or Stand after player has inputted 'Stand'.
// Dealer will stand if the total value >= 17
// Dealer will hit if the card is less than 16
// Update Game Mode to Announce Winner once dealer has hit/stand.
var dealerHitOrStand = function () {
  hit.disabled = true;
  stand.disabled = true;
  contButton.disabled = false;
  dealerValue = getTotalValueInHands(dealerHands);
  while (dealerValue < 16) {
    dealerHands.push(shuffledDeck.pop());
    dealerValue = getTotalValueInHands(dealerHands);
  }
  return `Dealer drew: ${printCards(dealerHands)}`;
};
/*--------------------------------------- OLD CODE---------------------------------------- */
// var playerHitStand = function (input) {
//   let myOutputValue = "";
//   // If user inputs `Hit`, draw another card and push it into the playerHands Array
//   if (input == `hit`) {
//     playerHands.push(shuffledDeck.pop());
//     console.log(playerHands);
//     myOutputValue += `You drew another card. <br><br> Player Hands: ${printCards(
//       playerHands
//     )} <br> Dealer Hands: ${printCards(
//       dealerHands
//     )}. <br><br> Do you want to Hit or Stand?`;
//   }
//   // If user inputs `Stand`, do not draw a card
//   else if (input == `stand`) {
//     gameMode = `Dealer Hit or Stand`;
//     console.log(`Current mode: ${gameMode}`);
//     return `You have chosen to stand. Now let's see what's installed for the dealer.`;
//   }
//   // User input validation
//   else {
//     return `That's an invalid choice. Type either 'Hit' or 'Stand' for the game to continue on.`;
//   }
//   return myOutputValue;
// };

// var dealerHitStand = function (input) {
//   let dealerTotalHandValue = getTotalValueInHands(dealerHands);
//   if (dealerTotalHandValue < 16) {
//     dealerHands.push(shuffledDeck.pop());
//     dealerTotalHandValue = getTotalValueInHands(dealerHands);
//   }
//   gameMode = `Announce Winner`;
//   return `Player Hands: ${printCards(
//     playerHands
//   )} <br> Dealer Hands: ${printCards(
//     dealerHands
//   )} <br><br> Press submit to see who won!`;
// };
/*--------------------------------------- OLD CODE---------------------------------------- */

var announceWinner = function (input) {
  let playerValue = getTotalValueInHands(playerHands);
  let dealerValue = getTotalValueInHands(dealerHands);
  let myMessage = `${userName}'s Hands: ${printCards(
    playerHands
  )} <br> Dealer Hands: ${printCards(dealerHands)} <br><br>`;
  // Tie Scenario
  if (playerValue == dealerValue || (playerValue > 21 && dealerValue > 21)) {
    myMessage += `This match is a tie! <br><br> Total Player Hand Value: ${playerValue} <br> Total Dealer Hand Value: ${dealerValue} <br><hr><div id="points"> ${displayPoints()}</div><hr> Press continue to play another turn or reset the game.`;
    resetButton.disabled = false;
  }
  // Win Scenario
  else if (
    playerValue <= 21 &&
    (playerValue > dealerValue || dealerValue > 21)
  ) {
    playerBet += 10;
    console.log(typeof playerBet);
    myMessage += `You have won! <br><br> Total Player Hand Value: ${playerValue} <br> Total Dealer Hand Value: ${dealerValue} <br><hr><div id="points"> Added 10 to your balance! ${displayPoints()}</div><hr> Press continue to play another turn`;
    resetButton.disabled = false;
  }
  // Lose Scenario
  else if (
    dealerValue <= 21 &&
    (dealerValue > playerValue || playerValue > 21)
  ) {
    playerBet -= 10;
    myMessage += `You have lost... <br><br> Total Player Hand Value: ${playerValue} <br> Total Dealer Hand Value: ${dealerValue} <br><hr><div id="points"> Lost 10 to your balance! ${displayPoints()}</div><hr> Press continue to play another turn`;
    resetButton.disabled = false;
  }
  return myMessage;
};

// Function to continue the Game once a round is over -> When Player Clicks the Continue Button
var continueGame = function (input) {
  if (shuffledDeck.length < 9) {
    gameMode = `No Cards Left`;
    return `You've ended the game as there aren't any cards left 😔. <br><br>  ${displayPoints()} <br><br> Please press "Reset" to reshuffle the deck of cards and play again.`;
  } else if (playerBet < 15) {
    gameMode = `No Points Left`;
    return `You do not have enough points left to continue 😔. <br><br> Please press "Reset" if you would like to play again.`;
  } else {
    gameMode = `Deal Cards`;
    dealerHands = [];
    playerHands = [];
    playerValue = [];
    dealerValue = [];
    playerBet;
  }
};

/*--------------------- MAIN FUNCTION  --------------------------- */

var main = function (input) {
  var myOutputValue = ``;
  if (gameMode == `waiting for username`) {
    myOutputValue = startGame(input);
  } else if (gameMode == `Bet Amount`) {
    console.log(input);
    myOutputValue = betPoints(input);
  }
  // Player will draw 2 cards first.
  else if (gameMode == `Deal Cards`) {
    console.log(`Current Mode: ${gameMode}`);
    myOutputValue = giveTwoCards();
  }
  // If there isn't any blackjack, player can either choose to hit or stand.
  else if (gameMode == `Player Hits`) {
    myOutputValue = playerHit();
  }
  // If player Stands, go to game mode `Announce Winner`.
  else if (gameMode == `Announce Winner`) {
    // Dealer can automatically choose to hit or stand with certain conditions set in place
    dealerHitOrStand();
    // Announce who has won
    myOutputValue = announceWinner();
  } else if (gameMode == `No Cards Left`) {
    myOutputValue = continueGame();
  } else if (gameMode == `No Points Left`) {
    myOutputValue = continueGame();
  }
  return myOutputValue;
};
