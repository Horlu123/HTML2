var squares = document.querySelectorAll(".square");
var resetButton = document.getElementById("reset");

var xIsNext = true;

function markSquare(square) {
	if (square.textContent === "") {
		square.textContent = xIsNext ? "X" : "O";
		xIsNext = !xIsNext;
	}
}

function resetGame() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].textContent = "";
	}
	xIsNext = true;
}

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		markSquare(this);
	});
}

resetButton.addEventListener("click", function() {
	resetGame();
});
