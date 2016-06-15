
$(document).ready(function(){	
	var randomNum = generateRandomNum();
  var guessCount = 0;
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
        compareNum(userGuess, randomNum);
        guessList(userGuess);
        guessCount++;
        $('#count').text(guessCount);
      } else {
        $("#userGuess").val("");
        alert("Please enter a number.");
      }
  		
  	})

});

// Compares numbers and gives feedback for each guess
function compareNum(user, random) {
  var difference = Math.abs(user - random);
  console.log(difference);
  if (difference >= 50) {
    $('#feedback').html('Ice Cold!');
    console.log('50');
  } else if (difference >= 30) {
    $('#feedback').html('Cold');
    console.log('30');
  } else if (difference >= 10) {
    $('#feedback').html('Warm');
    console.log('10');
  } else if (difference >= 1) {
    $('#feedback').html('Very HOT!');
  } else {
    $('#feedback').html('You got it!');
  }
}

//Function to restart everythin (newGame) 
function newGame() {
  guessCount = 0;
  generateRandomNum();

}

//Generate random number from 1-100
function generateRandomNum() {
  var number = Math.floor((Math.random() * 100) + 1); 
  return number;
}

// 
function guessList(user) {
  // add to the list of numbers
  $('#guessList').append('<li>' + user + '</li>');
}




