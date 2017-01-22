/**
 * Created By Akash Rastogi
 */

var upTimer = 0;
var downTimer = 0;
var timerTarget = 0;

var upInterval, downInterval;

function countUpTimerStart(){
	var type = document.getElementById("upStart").innerHTML;
	
	if(type == "Start" && upTimer < timerTarget){
		document.getElementById("upStart").innerHTML = "Pause";
		
		upInterval = setInterval(function(){
			if(upTimer < timerTarget)
				setTimers(++upTimer, "up");
			else
				document.getElementById("upStart").disabled = true;
		}, 1000);
	}	 
	else {
		document.getElementById("upStart").innerHTML = "Start";
		clearInterval(upInterval);
	}
}

function countDownTimerStart(){
	var type = document.getElementById("downStart").innerHTML;
	
	if(type == "Start" && downTimer > 0){
		document.getElementById("downStart").innerHTML = "Pause";
		
		downInterval = setInterval(function(){
			if(downTimer > 0)
				setTimers(--downTimer, "down");
			else
				document.getElementById("downStart").disabled = true;
		}, 1000);
	}	 
	else {
		document.getElementById("downStart").innerHTML = "Start";
		clearInterval(downInterval);
	}
}

function resetTimers(type){
	if(type == "up"){
		document.getElementById("upStart").disabled = false;
		document.getElementById("upStart").innerHTML = "Start";
		upTimer = 0;
		clearInterval(upInterval);
		setTimers(0, "up");
	}
	
	else{
		document.getElementById("downStart").disabled = false;
		document.getElementById("downStart").innerHTML = "Start";
		downTimer = timerTarget;
		clearInterval(downInterval);
		setTimers(timerTarget, "down");
	}
}

function setTimers(time, type) {
	if(type == "initial"){
		timerTarget = document.getElementById("countTarget").value;
		time = timerTarget;
		downTimer = timerTarget;
		resetTimers("up");
		resetTimers("down")
	}
	
	var days = Math.floor(time/86400);
    var hours = Math.floor((time%86400)/3600);
    var minutes = Math.floor(((time%86400)%3600)/60);
    var seconds = Math.floor(((time%86400)%3600)%60);
    
    var timeValue = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    
    if(type === "up")
    	document.getElementById("upTimerValue").innerHTML = timeValue;
    else
    	document.getElementById("downTimerValue").innerHTML = timeValue;
}