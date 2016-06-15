
$(document).ready(function(){	
	var randomNum = enerateRandomNum();
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
  		if(/*Not a number*/) 
  		getUserInput();
  	})

});

//function tracks the state of the game
function game() {
	//Track how many guesses
	//Extra: Keep track of guesses	
}

//Function to restart everythin (newGame) 
function newGame() {


}

//Generate random number from 1-100
function generateRandomNum() {

}
//Giving feedback for each guess - too hot, too cold - Should appear in div#feedback
function giveFeedback() {

}

//Get input from user and verify it is a number
function getUserInput() {	
	var userGuess = parseInt($("#userGuess").val());
	if(isNaN(userGuess)) {
		$("#userGuess").val("");
		alert("Please enter a number.");
	} else {
		return userGuess;
	}
}


