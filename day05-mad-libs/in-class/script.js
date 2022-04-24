/* 
When the Basics Starter Code app loads, the user can input 1 adjective at a time to store in the app. 
Store the user-inputted adjectives in a global array variable.
When the user inputs the word "create" the app completes the Mad Lib with a random word from the user-inputted adjectives array 
and outputs the completed Mad Lib in the grey box.
*/

// Declare global variable (Game Mode)
// Create an array for adjectives to be stored
// Create different Game Modes: Key In Adjective and Create Mode
// If mode = adjective, please input adjectives
// If mode = create, random word will be generated to outputs the MadLib sentence
// Create Random Index Function for the Adjectives from the Array

// Default mode to Provide Adjectives First
var gameMode = "Provide Adjectives";
var adjectives = [];

var generateMadLib = function () {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  var randomAdjectives = adjectives[randomIndex];
  return `WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjectives} wife.`;
};

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input == `adjectives`) {
    gameMode = `Provide Adjectives`;
    return `You have switched to Adjective Game Mode. Your list of adjectives is: ${adjectives}`;
  }

  if (input == `create`) {
    gameMode = `Create`;
    return `You have switched to create mode`;
  }

  if (gameMode == `Provide Adjectives`) {
    if (input == ``) {
      return `Please input adjectives.`;
    } else {
      adjectives.push(input);
      return `You have added ${input} to the list of adjectives. Type 'create' to generate MadLib.`;
    }
  }

  if (gameMode == `Create`) {
    return generateMadLib();
  }

  return `There's an error!`;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  if (input == `adjectives`) {
    gameMode = `Provide Adjectives`;
    return `You have switched to Adjective Game Mode. Your list of adjectives is: ${adjectives}`;
  }

  if (input == `create`) {
    gameMode = `Create`;
    return `You have switched to create mode`;
  }

  if (gameMode == `Provide Adjectives`) {
    if (input == ``) {
      return `Please input adjectives.`;
    } else {
      adjectives.push(input);
      return `You have added ${input} to the list of adjectives. Type 'create' to generate MadLib.`;
    }
  }

  if (gameMode == `Create`) {
    return generateMadLib();
  }

  return `There's an error!`;
};

/* 
When the Basics Starter Code app loads, the user can input 1 or more adjectives to store in the app with each Submit. 
To input more than 1 word for each Submit, the user would give each word separated by a space, e.g., "green nice silly". 
We can use JavaScript's string split method to split the input string into an array of substrings.
*/

// Define Different Game Modes (Input, Create)
// Set Input as default Game Mode
var multipleWordMode = "input";
console.log(`Game Mode: ${multipleWordMode}`);
// Declare global array
var multipleWordArray = [];
// Split Input String Into Array of Substrings Function
var parseInputWords = function (inputString) {
  return inputString.split(` `);
};

var generateMadLibMultiple = function () {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * multipleWordArray.length);
  var randomAdjectives = multipleWordArray[randomIndex];
  return `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjectives} wife.`;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  // If input is `input`, set mode to `input` and show list of adjectives to user
  if (input == `input`) {
    multipleWordMode = `input`;
    return `You have switched to input mode. Enter a list of adjectives separated by a space each or type create to switch to create mode.`;
  }
  // If input is `create`, set mode to `create` and press submit to generate Madlib
  if (input == `create`) {
    multipleWordMode = `create`;
    return `You have switched to Create Mode. Press submit to generate MadLib.`;
  }
  // If mode is `create`, generate madlib from the list of adjectives randomly.
  if (multipleWordMode == `create`) {
    var randomAdj = generateMadLibMultiple();
    return randomAdj;
  }
  // If mode is `input`, use the split function and push all relevant input words to the global array.
  if (multipleWordMode == `input`) {
    if (input.trim() == " ") {
      return `Please input adjectives separated by a space to fill in MadLib.`;
    } else {
      var inputWords = parseInputWords(input);
      var counter = 0;

      while (counter < inputWords.length) {
        multipleWordArray.push(inputWords[counter]);
        console.log(`Words In Array: ${multipleWordArray}`);
        counter += 1;
      }
      var outputMessage = `You have added ${inputWords.join(
        `,`
      )} to the list of adjectives. Type 'create' to switch to create mode.`;
      return outputMessage;
    }
  }
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "TEST";
  return myOutputValue;
};
