 
myFunction = function() {
	var value = document.getElementById("firstInput").value;
	// var endOfWorld = endOfWorldTest();
	// alert (xLevel)

	if (endOfWorld = false) {
		alert("oh no");
	}

	else if (value === "up") {
		movement(value); 
	}

	else if (value==="right"){
		movement(value); 
	}

	else if (value === "down"){
		movement(value); 
	}

	else if (value=== "left"){
		movement(value);
	}

	else {
		alert("Try Entering Left, Right, Down or Up");
	}
	
}

//Create a new function to test for errors
//If x is too far then condition is true else it is false
//If y is too far then condition is true else it is false
// function endOfWorldTest(endOfWorld) {
var endOfWorld = function () {

if ((xLevel==2) && (xChange==1)){
	return false;
}

else if ((xLevel== 0) && (xChange== -1)){
	return false;
}

else  if ((yLevel== 2) && (yChange== 1)){
	return false;
}

else if ((yLevel== 0) && (yChange == -1)){
	return false;
}
else {
	return true;
}
}





// var tooMuch = function (changeX, changeY) {
    
//     if (changeY + yLevel == 1){
//         alert("TooFar");
//         return true;
//     } else {
//         return false;
//     }

// }

function movement(direction) {
// if (xLevel ===2) {
//    	TooMuch();
//    }
// else


//   if (yLevel ===2) {
//    	TooMuch();
//    }
//    else

	if (direction === "down") {
		clearBatman();
		yLevel++;
		moveBatman();
		
	}

	if (direction === "up") {
		clearBatman();
		yLevel--;
		moveBatman();

	}

	if (direction === "right") {
		clearBatman();
		xLevel++;
		moveBatman();	
		
	}
	if (direction === "left") {
		clearBatman();
		xLevel--;
		moveBatman();
	}

	
//////get y level for too much(); 
}
//////clean up arrow function 

function arrowfunction(e) {
	// alert("oh no yo")
	var e = event.keyCode;

    if (e == 40) { //down function
        movement("down")

    } else if (e == 37) { //left function
        clearBatman();
		xLevel--;
		moveBatman();
    } else if (e == 39) { //right function
       	clearBatman();
		xLevel++;
		moveBatman();
    } else if (e == 38) { //up function
        clearBatman();
		yLevel--;
		moveBatman();
    }

}

var endOfWorld = false;
var newImage = "";


var batMan = "<img src='images/funny-dog.jpg' class='img' alt='Batdog' id='batDog'>";
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

document.onkeydown= arrowfunction;

moveBatman();

//if down, right - change coordinates
