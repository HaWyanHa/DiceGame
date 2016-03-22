var gameStart = new Date();
var gameReallyStart = Date.now();

var day = gameStart.getDate();
var month = gameStart.getMonth()+1;
var year = gameStart.getFullYear();
var hour = gameStart.getHours();
var minute = gameStart.getMinutes();

document.getElementById("start_time").innerHTML = "Game Started " + year + "-" + month + "-" + day + " at " + hour + ":" + minute;

var pushTry = 0;

var game = {
	date: 10,
	rounds: [],
	roll: function roll() {
		var dice1 = Math.ceil(Math.random() * 6);
		var dice2 = Math.floor((Math.random() *6) +1);
		var gamePush = Date.now();

		document.getElementById("left-eye").innerHTML = dice1;
		document.getElementById("right-die").innerHTML = dice2;

		if ((dice1 + dice2 === 7) || (dice1 + dice2 === 11)){
			document.getElementById("winagain").innerHTML = "Winner!";
			var winTime = parseInt((gamePush - gameReallyStart)/1000);

			var winTry = pushTry + 1;

			document.getElementById("tries").innerHTML = "It took you " + winTry + " tries and " + winTime + " seconds";
			gameReallyStart = new Date();
			pushTry = 0;
		} else {
			document.getElementById("winagain").innerHTML = "Try Again!";
			pushTry = pushTry + 1;
			document.getElementById("tries").innerHTML = "And try it like you mean it!";
		}
	}
}


var btn = document.getElementById("rolldice");

btn.addEventListener("click", function(){
	game.roll();

})