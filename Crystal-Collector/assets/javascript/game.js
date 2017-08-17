$(document).ready(function() {

	var crystalArray = [0, 0, 0, 0];
	var winCount = 0;
	var loseCount = 0;
	var targetScore = 0;
	var totalScore = 0;

	// Game reset
	function restart() {

		// initialize crystal points
		for (var i = 0; i < crystalArray.length; i++) {
			crystalArray[i] = Math.floor(Math.random() * 12) + 1;
			console.log(crystalArray[i]);
		}
		
		targetScore = Math.floor(Math.random() * 102) + 19;
		
		totalScore = 0;

		// update scores and counts
		$("#target-score").html(targetScore);

		$("#game-count").html("Wins: " + winCount + "<br>Losses: " + loseCount);

		$("#total-score").html(totalScore);
	};

	restart();

	// when crystal image is clicked
	$(".crystals").click( function() {

		//console.log($(this).attr("value"));

		// add the value of each crystal to totalScore
		totalScore += crystalArray[$(this).attr("value")];

		$("#total-score").html(totalScore);

		// when total score goes over target score
		if(totalScore > targetScore) {
			loseCount += 1;
			restart();
		}

		// when total score matches target score
		if(totalScore == targetScore) {
			winCount += 1;
			restart();
		}

	});

});