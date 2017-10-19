$(document).ready(function(){
/* TO DO LIST
- HTML
	-div multiple choice q buttons x
		each has a name,id,value x
	-How do I add the question? is this in javascript? how??

- JAVASCRIPT
	- Write 3 multiple choice questions x
		-Create a function to load all questions x
	- Call a function to read in question and output them to screen
*/
var image = document.getElementById("image");
var text ="<h1> Roaring '20s Basic Trivia</h1>"
var div1=

function loadQuestions(){
	document.getElementById("questions").innerHTML="<body>"
} 

var questions = [
	{
		question1: 'The Great Gatsby is a novel from what year?',
		answer1: "1925",
		answer2: "1927",
		answer3: "1954."
	},
	{
		question2: 'The Great Gatsby was written by who?',
		answer1: "Ernest Hemingway",
		answer2: "F.Scott Fitzgerald,"
		answer3: "Maya Angelou."
	},
	{
		question3: 'The 1920s era are also known as what?',
		answer1: "roaring 20s",
		answer2: "prohibition era",
		answer3: "the decade of oh lala."
	},
];

$('#start-button').on('click', function(){
	for(let i = 0; i < questions.length;i++){
		var $question = $("<input type='radio' name='separate_name' value='someValue'>" + questions[i].question1 + "</input>")
		var $answers = $("<h4>" + questions[i].answer1 + "</h4>");
		$("#questions").append($question);
		$("#questions").append($answers);

		// <input type="radio" name="gender" value="male"> Male<br>


	}
});



/* - JQUERY
	- select a multiple choice per question ?
	 		-make on click button for the radio buttons?
 	JQuery Button Function */
// $("#start-button").on("click", function (){
// 	console.log(button);
 });

 // JQuery object for button
 // console.log(this);

 /* - TIMERS
	-setIntervalMethod x
 	-setTimeOutMethod, when do you use this?
 	- create countdown timer x
	THE TIMER 
 Our stopwatch object */
 var stopwatch = {
	time:0,
 	reset: function () {
 		stopwatch.time = 0;
 	},
 	start: function(){
 	//DONE: use setInterval to start the count here and set the clock to running.
 	if (!clockRunning) {
 		intervalId = setInterval(stopwatch.count, 1000);
		clockRunning = true
 		}
 	},
 	stop: function (){
 		//use clearInterval to stop the count here
 		if (distance < 0) {
    clearInterval(x);
    document.getElementById("display").innerHTML = "TIME'S UP BUDDY";
  }
}, 1000);
 	},
 	recordLap: function() {
 		var converted = stopwatch.timeConverter(stopwatch.time);
 		console.log(converted);
 		// use this variable to show the converted time
 		$("#display").text(converted);
 	},

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
	 ie. start button, countdown timer with questions, results page? */


/* 		radio buttons html
		True
		<input type="radio" name="questions" value=""> </br>
		False
		<input type="radio" name="questions" value="">
