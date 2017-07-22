// Global

var wins = 0;
var losses = 0;
$("#wins").text(wins);
$("#losses").text(losses);
var totalscore = 0;
var randomarray = [Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2)];
var min = 0;
for (i = 0; i < randomarray.length; i++) {
	min += randomarray[i];
}

// generate target score

var target = Math.floor(Math.random() *30 + min + 10);
$("#targetnumber").text(target);

// attach value attribute for reference

var crystalname = []
for (i = 1; i < randomarray.length + 1; i++) {
	crystalname.push("#crystal" + i);
}
for (i = 0; i < randomarray.length; i++) {
	$(crystalname[i]).attr("value", i);
}

// score update

$(".crystal").on("click", function() {
	totalscore += randomarray[$(this).attr("value")];
	$("#totalscore").text(totalscore);
	if (totalscore === target) {
		$("#result").html("You won! Press any key to play again.");
		wins += 1;
		$("#wins").text(wins);
		reset();
	}

	else if (totalscore > target) {
		$("#result").html("You lost...press any key to try again.");
		losses += 1;
		$("#losses").text(losses);
		reset();
	}
})

function reset() {
	document.onkeyup = function (event) {
		randomarray = [Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2), Math.floor(Math.random() * 8 + 2)];
		totalscore = 0;
		$("#totalscore").empty();
		target = Math.floor(Math.random() *30 + min + 10);
		$("#targetnumber").text(target);
		$("#result").empty();
	}


}