
 // Player 1 Dice Roll
 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource1 = "dice" + randomNumber1 + ".png";
 var image1 = document.querySelectorAll("img")[0];
 image1.setAttribute("src", randomImageSource1);

 // Player 2 Dice Roll
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 var randomImageSource2 = "dice" + randomNumber2 + ".png";
 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src", randomImageSource2);

 // Determine Winner
 if (randomNumber1 > randomNumber2) {
     document.querySelector("h1").innerHTML = "you wins!✨";
 } else if (randomNumber1 < randomNumber2) {
     document.querySelector("h1").innerHTML = "Device wins!✨";
 } else {
     document.querySelector("h1").innerHTML = "Draw!";
 }

 // Refresh page function
 function refreshPage() {
     location.reload();
 }
