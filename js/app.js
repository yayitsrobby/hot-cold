
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
      // if so, runs the comparison
      if (!(isNaN(userGuess))) {
      	if(guessCount == 0) {
        	compareNumFirst(userGuess, randomNum);
      	} else {
      		compareNumRest(userGuess, prevUserGuess, randomNum);
      	}
        guessList(userGuess);
        guessCount++;
        $("#count").text(guessCount);
        $("#userGuess").val("");
        prevUserGuess = userGuess;
      } else {
        $("#userGuess").val("");
        alert("Please enter a number.");
      }
  		
  	});

  	$(".new").click(function() {
  		guessCount = newGame();
  		console.log("after newGame()" + guessCount);
  	});

});

// Compares numbers and gives feedback for each guess
function compareNumFirst(user, random) {
  var difference = Math.abs(user - random);

  if (difference >= 50) {
    $("#feedback").text("Ice Cold!");
  } else if (difference >= 30) {
    $("#feedback").text("Cold");
  } else if (difference >= 10) {
    $("#feedback").text("Warm");
  } else if (difference >= 1) {
    $("#feedback").text("Very HOT!");
  } else {
    $("#feedback").text("You got it!");
  }
}

//Function to restart everythin (newGame) 
function newGame() {
  var count = 0;
  generateRandomNum();
  $("#guessList").empty();
  $("#count").text(count);
  $("#userGuess").val("");
  $("#feedback").text("Make your Guess!");
  return count;
}

//Generate random number from 1-100
function generateRandomNum() {
  var number = Math.floor((Math.random() * 100) + 1); 
  return number;
}

// 
function guessList(user) {
  // add to the list of numbers
  $("#guessList").append("<li>" + user + "</li>");
}

function compareNumRest(currentNum, oldNum, randNum) {

	  var currentDiff = Math.abs(currentNum - randNum);
	  var oldNewDiff = Math.abs(oldNum - randNum);
	  if (currentDiff == 0) {
	    $("#feedback").text("You got it!");
	  } else if (currentDiff > oldNewDiff) {
	    $("#feedback").text("Colder");
	  } else if (currentDiff < oldNewDiff) {
	    $("#feedback").text("Warmer");
	  } else {
	    $("#feedback").text("No change");
	  }
}


