/* TO DO LIST
- HTML
	-div multiple choice q buttons
		each has a name,id,value
	- write down multiple choice questions in body
- JAVASCRIPT
	- Write 3 multiple choice questions x
		-Create a function to load all questions x
		-Do I have to create 3 arrays with 4 string for the 3 questions? Do I need to loop and do if else statements?
	- Call a function to read in question and output them to screen
*/
function loadQuestions(){
	document.getElementById("questions").innerHTML="<h1>"+ question1 + question2 + question3 + question4
} // 

// MAKE arrays with question answer properties, assign it in the correct answer property
var question1 = ["A","B","C","D"]; <!--HOW DO YOU ADD VALUE TO THE VARIABLE AND STRINGS, can you do that?-->
var length = question1.length
console.log(length);
// if click on B, increment correct answer by 1 else if click on A,C,D increment wrong answer by1

// for (var i=0; i < question1.length; i+=+){
	console.log(question1[i]);
	}
var question2 = ["A","B","C","D"];
var length = question1.length
console.log(length);
// if click on D, increment correct answer by 1 else if click on A,B,C, increment wrong answer by1

for (var i=0; i<question2.length; i+=+){
	console.log(question2[i]);
}

var question3 = ["A","B","C","D"]; 
var length = question3.length
console.log(length);

for (var i=0; i<question3.length; i+=+){
	console.log(question3[i]);
}
// if click on A, increment correct answer by 1 else if click on B,C,D increment wrong answer by1

/*
	- 3 different types of buttons
		- start button
		- multiple choice answers buttons, 12 total>
		- done button is responsible for checking correct answers. How do we do this?
- JQUERY
	- select a multiple choice per question x3 or x12 buttons?
		-make on click button, do I make 4 buttons for each question 
		 or is there a way to loop this?
	JQuery Button Function */
#$("#button").on("click", function ()){
	console.log(button);
});
// JQuery object for button
console.log(this);
});
		
- TIMERS
	-setIntervalMethod x
	-setTimeOutMethod, when do you use this?
	- create countdown timer x
	THE TIMER
Our stopwatch object */
var stopwatch = {
	time:0,
	lap: 1,
	reset: function () {
		stopwatch.time = 0;
	},
	start: function(){
	//DONE: use setInterval to start the count here and set the clock to running.
	if (!clockRunning) {
		intervalId = setInterval(stopwatch.count, 1000);
		clockRunning = true
	},
	stop: function (){
		//use clearInterval to stop the count here
	},
	recordLap: function() {
	var converted = stopwatch.timeConverter(stopwatch.time);
	console.log(converted);
	// use this variable to show the converted time
	$("#display").text(converted);

	timeConverter: function(t){
		var minutes = Math.floor(t/60);
		var seconds = t - (minutes = 60);
		if (seconds < 10){
			seconds = "0" + seconds;
		}
		if (minutes === 0){
			minutes = "00";
		}else if (minutes < 10){
			minutes = "0" + minutes;
		}
		return minutes + ":" + seconds;
	}
};

/*
- CSS
	-text-align: left
	-position: relative
-- Other QUESTIONS:
	- How to make page reveal # of correct questions answered right/wrong
	without making an alert??
	- what is document.getElementById?
	- How is dom manipulated to different layout structure through out game
	 ie. start button, countdown timer with questions, results page?

