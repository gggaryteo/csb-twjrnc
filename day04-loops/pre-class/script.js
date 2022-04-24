var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var simpleLoopMain = function (input) {
  var myOutputValue = "";
  var counter = 0;
  while (counter < input) {
    if (counter <= 6) {
      myOutputValue += "hello";
    }
    counter += 1;
  }
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  return myOutputValue;
};

/* 
Create nested loops in the loopWithinLoopMain function, where the outer loop runs 3 times and the inner loop runs 3 times per outer loop. 
Concatenate "hello" to myOutputValue in the inner loop. How many times do we see "hello"?
*/

var loopWithinLoopMain = function (input) {
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < input; outerCounter += 1) {
    console.log(`Outer Counter: ${outerCounter}`);
    for (var innerCounter = 0; innerCounter < 2; innerCounter += 1) {
      console.log(`Inner Counter: ${innerCounter}`);
      myOutputValue += " hello!";
    }
    myOutputValue += " Banana <br/>";
  }
  return myOutputValue;
};
// Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.

var infiniteLoopMain = function () {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "";
  for (var outerCounter = 0; outerCounter < Infinity; outerCounter += 1) {
    console.log(`Loop: ${myOutputValue}`);
    myOutputValue += `Infinite Tsukoyomi`;
  }
  return myOutputValue;
};
