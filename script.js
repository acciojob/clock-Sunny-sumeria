//your JS code here. If required.

let displayTimer = document.getElementById('timer');

let currentDate = new Date();

setInterval(function () {

	currentDate = new Date();

	displayTimer.innerHTML = currentDate.toLocaleString()
	
},1000);