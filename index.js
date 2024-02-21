// Generate a random number between 1 and 6 for Player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "images/dice" + randomNumber1 + ".png";

// Set the source attribute of Player 1's image
document.querySelector(".img1").setAttribute("src", randomImageSource1);

// Generate a random number between 1 and 6 for Player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// Set the source attribute of Player 2's image
document.querySelector(".img2").setAttribute("src", randomImageSource2);

// Determine and display the winner
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 wins!";
} else {
    heading.textContent = "It's a draw!";
}
