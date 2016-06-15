$(document).ready(function(){	
  var randomNum = generateRandomNum();
  var guessCount = 0;
  var prevUserGuess = 0;

	/*--- Display information modal box ---*/
	$(".what").click(function(){
  	$(".overlay").fadeIn(1000);

	});
	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

  	//Event listener for user input
  	$("form").submit(function() {
  		event.preventDefault(); //Stops page from reloading
  		var userGuess = parseInt($("#userGuess").val());
      // determines if input is a number
      // if so runs the comparison
      if (!(isNaN(userGuess))) {
        // function to track all guesses
        guessList(userGuess);
        // if its the first guess, runs the initial compare
      	if(guessCount == 0) {
        	compareNumFirst(userGuess, randomNum);
      	} else { // if its not the first guess, compares to previous number
      		compareNumRest(userGuess, prevUserGuess, randomNum);
      	}
        // sets the number of guesses
        guessCount++;
        $("#count").text(guessCount);
        // clears the input field
        $("#userGuess").val("");
        // logs the guess as the "previous" guess
        prevUserGuess = userGuess;
      } else { // if not a number, prompts to enter a number
        $("#userGuess").val("");
        alert("Please enter a number.");
      }
  		
  	});
    // listens for new game request
  	$(".new").click(function() {
      // completely resets the game
  		guessCount = newGame();
  	});

});

// Compares the initial guess and gives feedback
function compareNumFirst(user, random) {
  var difference = Math.abs(user - random);
  // determines how hot/cold the number is 
  if (difference >= 50) {
    $("#feedback").text("Ice Cold!");
  } else if (difference >= 30) {
    $("#feedback").text("Cold");
  } else if (difference >= 10) {
    $("#feedback").text("Warm");
    $("#guessList li").last().addClass('warmer');
  } else if (difference >= 1) {
    $("#feedback").text("Very HOT!");
    $("#guessList li").last().addClass('warmer');
  } else {
    $("#feedback").text("You got it!");
    $("#guessList li").last().addClass('winner');
  }
}
// Compares the rest of the guess and gives feedback based off the previous guess
function compareNumRest(currentNum, oldNum, randNum) {
    var currentDiff = Math.abs(currentNum - randNum);
    var oldNewDiff = Math.abs(oldNum - randNum);
    if (currentDiff == 0) {
      $("#feedback").text("You got it!");
      $("#guessList li").last().addClass('winner');
    } else if (currentDiff > oldNewDiff) {
      $("#feedback").text("Colder");
    } else if (currentDiff < oldNewDiff) {
      $("#feedback").text("Warmer");
      $("#guessList li").last().addClass('warmer');
    } else {
      $("#feedback").text("No change");
    }
}

//Function to restart everything (newGame) 
function newGame() {
  var count = 0;
  generateRandomNum();
  $("#guessList").empty();
  $("#count").text(count);
  $("#userGuess").val("");
  $("#feedback").text("Make your Guess!");
  $("#guessRange").remove();
  return count;
}

//Generate random number from 1-100
function generateRandomNum() {
  // prompts for a ceiling number
  while (true) {
    var input = parseInt(prompt("Pick a number, any number!"))
    if (input > 1) {
      break;
    }
  } // generates random number from 1 to input
  var number = Math.floor((Math.random() * input) + 1); 
  // adds a header telling them the range
  $("header").append("<h3 id='guessRange'>Guess a number between 1 and " + input);
  $("#maxNum").text(input);
  return number;
}

// 
function guessList(user) {
  // add to the list of numbers
  $("#guessList").append("<li>" + user + "</li>");
}




