// OBJECT CREATION
// ==============================================================================

var game = {
	win : 0,
	lose : 0,
	guess_left : 9,
	guess_done : [],
	guessed : false,
	letters : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	answer : "",

	update_board : function() {
		document.querySelector("#win").innerHTML = "Wins: " + game.win;
		document.querySelector("#lose").innerHTML = "Losses: " + game.lose;
		document.querySelector("#guess_left").innerHTML = "Guesses Left: " + game.guess_left;
		document.querySelector("#guess_done").innerHTML = "Your Guesses so far: " + game.guess_done;
	},

	reset_board : function() {
		game.guess_left = 9;
		game.guess_done = [];
		if (game.guessed) {
			game.win++;
		}
		else {
			game.lose++;
		}
		game.guessed = false;
		game.answer = game.choose_letter();
		//console.log(game.answer);
	},

	choose_letter : function() {
		return game.letters[Math.floor(Math.random() * game.letters.length)];
	}
};


// MAIN PROCESS
// ==============================================================================

game.answer = game.choose_letter();
//console.log(game.answer);

document.onkeyup = function(event) {

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	//when user gets it right
	if (userInput === game.answer) {
		game.guessed = true;
		game.reset_board();
		game.update_board();
	}
	//when user misses the answer
	else {
		game.guess_left--;
		game.guess_done.push(userInput);
		//when all 9 guesses are used
		if (game.guess_left == 0) {
			game.reset_board();
		}
		game.update_board();
	}

};



