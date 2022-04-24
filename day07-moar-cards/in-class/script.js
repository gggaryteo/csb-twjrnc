var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[suitIndex];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
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
    var currentIndex = 0;
    currentIndex < cardDeck.length;
    currentIndex = currentIndex + 1
  ) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cardDeck;
};

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var randomDrawnCard = shuffledDeck.pop();
  return `You have drawn ${randomDrawnCard.name} of ${randomDrawnCard.suit}`;
};

// Low Card: the winner is the person with the lowest card.

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var userCard = shuffledDeck.pop();
  var computerCard = shuffledDeck.pop();
  var myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br> Computer drew: ${computerCard.name} of ${computerCard.suit} <br><br>`;
  // If the rank of user's card is a lower number than the computer's card, user wins.
  if (userCard.rank < computerCard.rank) {
    myOutputValue += `User wins!`;
  } else if (userCard.rank > computerCard.rank) {
    myOutputValue += `Computer wins!`;
  } else {
    myOutputValue += `This match ends in a draw!`;
  }
  return myOutputValue;
};

// Alter the Low Card game such that if any player draws a Queen, they win.

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var moarDeck = makeDeck();
  var shuffledDeck = shuffleCards(moarDeck);
  var userCard = shuffledDeck.pop();
  var computerCard = shuffledDeck.pop();
  var myOutputValue = `User drew: ${userCard.name} of ${userCard.suit} <br> Computer drew: ${computerCard.name} of ${computerCard.suit} <br><br>`;

  if (
    (userCard.rank < computerCard.rank && computerCard.rank !== 12) ||
    userCard.rank == 12
  ) {
    myOutputValue += `User wins!`;
  } else if (
    (computerCard.rank < userCard.rank && userCard.rank !== 12) ||
    computerCard.rank == 12
  ) {
    myOutputValue += `Computer wins!`;
  } else {
    myOutputValue += `This match ends in a draw!`;
  }
  return myOutputValue;
};

/* 
The player can input how many cards they want. The lowest of the player's cards is compared against the computer's 1 card. 
Show the player all the cards that they drew. Rules from above exercises continue to apply.
*/

// Create a helper function to convert name and suit of cards into a string
var generateCards = function (cards) {
  var genericOutput = ``;
  // Create a loop to iterate over the cards.length
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currentCard = cards[i];
    genericOutput += `${currentCard.name} of ${currentCard.suit},`;
  }
  var lastCard = cards[cards.length - 1];
  genericOutput += `${lastCard.name} of ${lastCard.suit}`;
  return genericOutput;
};

// Create a helper function if either card is Queen
var isCardQueen = function (card) {
  return card.rank == 12;
};

// Create a helper function to loop over the array if Card is Queen
var retrieveQueen = function (hand) {
  for (var i = 0; i < hand.length; i += 1) {
    var currentCard = hand[i];
    if (currentCard.rank == 12) {
      return true;
    }
  }
  return false;
};

var moarCardsLowCardHandsMain = function (input) {
  if (input == "") {
    return `Please enter a number of cards to draw.`;
  }
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var getDeck = makeDeck();
  console.log(getDeck);
  var shuffledDeck = shuffleCards(getDeck);
  console.log(shuffledDeck);
  // Computer will draw 1 card
  var computerCard = shuffledDeck.pop();
  console.log(`Computer Card: ${computerCard}`);
  // Define a variable for the number of Cards player can draw:
  var numberCardsToDraw = Number(input);
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numberCardsToDraw; i += 1) {
    var currentPlayerCard = shuffledDeck.pop();
    playerCards.push(currentPlayerCard);
    console.log(playerCards);
    if (currentPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currentPlayerCard.rank;
      var lowestPlayerCard = currentPlayerCard;
    }
  }
  var myOutputValue = `User drew: ${generateCards(
    playerCards
  )} <br><br> Computer drew: ${computerCard.name} of ${
    computerCard.suit
  }. <br><br> User lowest card is ${lowestPlayerCard.name} of ${
    lowestPlayerCard.suit
  }.`;

  var computerHasQueen = isCardQueen(computerCard);
  var userHasQueen = retrieveQueen(playerCards);
  if (computerHasQueen && !userHasQueen) {
    myOutputValue += `<br><br> Computer has Queen and User doesn't have Queen.`;
  } else if (userHasQueen && !computerHasQueen) {
    myOutputValue += `<br><br> User has Queen and Computer doesn't have Queen`;
  } else if (userHasQueen && computerHasQueen) {
    myOutputValue += `<br><br> Both have Queen in their hands.`;
  }

  if (
    computerCard.rank == lowestPlayerCard.rank ||
    (userHasQueen && computerHasQueen)
  ) {
    return `${myOutputValue} <br><br> This match ends in a draw.`;
  }
  if (
    (computerCard.rank < lowestPlayerCard.rank && !userHasQueen) ||
    computerHasQueen
  ) {
    return `${myOutputValue} <br><br> Computer wins.`;
  }
  if (
    (lowestPlayerCard.rank < computerCard.rank && !computerHasQueen) ||
    userHasQueen
  ) {
    return `${myOutputValue} <br><br> User wins.`;
  } else {
    return `${myOutputValue}. Opps something went wrong...`;
  }
};

/* 
Implement a nice-looking output for Low Card. 
Use a helper function to display each card nicely with emoji (♠️, ♥️, etc.). Try to avoid repeating code if possible.
*/

// Convert The Word Representation of Suits into the respective Emojis

var convertSuitToEmoji = function (suitWord) {
  if (suitWord == `spades`) {
    return `♠️`;
  }
  if (suitWord == `hearts`) {
    return `♥️`;
  }
  if (suitWord == `clubs`) {
    return `♣️`;
  }
  if (suitWord == `diamonds`) {
    return `♦️`;
  }
  return `Invalid Suit`;
};

var generateCardStringRepresentation = function (card) {
  return `${card.name} of ${convertSuitToEmoji(card.suit)}`;
};

var generateCardsWithEmojis = function (cards) {
  var genericOutput = ``;
  // Create a loop to iterate over the cards.length
  for (var i = 0; i < cards.length - 1; i += 1) {
    var currentCard = cards[i];
    genericOutput += `${generateCardStringRepresentation(currentCard)}, `;
  }
  var lastCard = cards[cards.length - 1];
  genericOutput += `${generateCardStringRepresentation(lastCard)}`;
  return genericOutput;
};

// Create a helper function if either card is Queen
var isCardQueen = function (card) {
  return card.rank == 12;
};

// Create a helper function to loop over the array if Card is Queen
var retrieveQueen = function (hand) {
  for (var i = 0; i < hand.length; i += 1) {
    var currentCard = hand[i];
    if (currentCard.rank == 12) {
      return true;
    }
  }
  return false;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  if (input == "") {
    return `Please enter a number of cards to draw.`;
  }
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var getDeck = makeDeck();
  console.log(getDeck);
  var shuffledDeck = shuffleCards(getDeck);
  console.log(shuffledDeck);
  // Computer will draw 1 card
  var computerCard = shuffledDeck.pop();
  console.log(`Computer Card: ${computerCard}`);
  // Define a variable for the number of Cards player can draw:
  var numberCardsToDraw = Number(input);
  var lowestPlayerCardRank = 14;
  var playerCards = [];
  for (var i = 0; i < numberCardsToDraw; i += 1) {
    var currentPlayerCard = shuffledDeck.pop();
    playerCards.push(currentPlayerCard);
    console.log(playerCards);
    if (currentPlayerCard.rank < lowestPlayerCardRank) {
      lowestPlayerCardRank = currentPlayerCard.rank;
      var lowestPlayerCard = currentPlayerCard;
    }
  }
  var myOutputValue = `User drew: ${generateCardsWithEmojis(
    playerCards
  )} <br><br> Computer drew: ${generateCardStringRepresentation(
    computerCard
  )}. <br><br> User lowest card is ${generateCardStringRepresentation(
    lowestPlayerCard
  )}`;

  var computerHasQueen = isCardQueen(computerCard);
  var userHasQueen = retrieveQueen(playerCards);
  if (computerHasQueen && !userHasQueen) {
    myOutputValue += `<br><br> Computer has Queen and User doesn't have Queen.`;
  } else if (userHasQueen && !computerHasQueen) {
    myOutputValue += `<br><br> User has Queen and Computer doesn't have Queen`;
  } else if (userHasQueen && computerHasQueen) {
    myOutputValue += `<br><br> Both have Queen in their hands.`;
  }

  if (
    computerCard.rank == lowestPlayerCard.rank ||
    (userHasQueen && computerHasQueen)
  ) {
    return `${myOutputValue} <br><br> This match ends in a draw.`;
  }
  if (
    (computerCard.rank < lowestPlayerCard.rank && !userHasQueen) ||
    computerHasQueen
  ) {
    return `${myOutputValue} <br><br> Computer wins.`;
  }
  if (
    (lowestPlayerCard.rank < computerCard.rank && !computerHasQueen) ||
    userHasQueen
  ) {
    return `${myOutputValue} <br><br> User wins.`;
  } else {
    return `${myOutputValue}. Opps something went wrong...`;
  }
};

/* Update our latest Low Card implementation with the following twist. 
At the beginning of the game, pick (but do not draw) a random card in the deck to be the Wild Card. 
If either player draws the Wild Card, that player automatically wins. */

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
