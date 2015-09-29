
myFunction = function() {

	var value = document.getElementById("firstInput").value;

	 
	if (value === "down") {
		clearBatman();
		yLevel++;
		moveBatman();
		
	}

	if (value === "up") {
		clearBatman();
		yLevel--;
		moveBatman();

	}

	if (value === "right") {
		clearBatman();
		xLevel++;
		moveBatman();	
		
	}
	if (value === "left") {
		clearBatman();
		xLevel--;
		moveBatman();
	}

   if (xLevel === 3) {
   	TooMuch();

   }
	
}


var newImage = "";


var batMan = "<img src='http://i.imgur.com/8SL7lsZ.png' class='img' alt='Batdog' id='batDog'>";
var xLevel = 0;
var yLevel = 0; 

var moveBatman = function () {
	document.getElementById(xLevel.toString() + yLevel.toString()).innerHTML=batMan;

}
var clearBatman = function () {
	document.getElementById(xLevel.toString() + yLevel.toString()).innerHTML=newImage;
}
var TooMuch = function() {
	alert("Move Back To Where You Came From");
}

moveBatman();

//if down, right - change coordinates
