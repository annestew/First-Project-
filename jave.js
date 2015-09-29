
myFunction = function() {	
	var value = document.getElementById("firstInput").value;
	alert(value);
}


var batMan = "<img src='http://i.imgur.com/8SL7lsZ.png' class='img' alt='Batdog' id='batDog'>";
var xLevel = 2;
var yLevel = 0; 

var moveBatman = function () {
	document.getElementById(xLevel.toString() + yLevel.toString()).innerHTML=batMan;
}


moveBatman();
