$(document).ready(function(){
var image = document.getElementById("image");
var text ="<h1> Roaring '20s Basic Trivia</h1>";
var div1=

function loadQuestions(){
	var radioButton;
	document.getElementById("questions").innerHTML="";
	for(var i =0; i < quiz[currentQuestion]["choices"].length; i++){
		radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name= "quiz"+currentQuestion;
		radioButton.id="choice"+ (i+1);
		if (radioAnswer[currentQuestion] === i)
		{
			radioButton.checked= true;
		}
	radioButton.value = quiz[currentQuestion]["choices"][i];
	}
} 
console.log(loadQuestions);

var questions = [
	{
		question1: "The Great Gatsby is a novel from what year?",
		answer1: "1925",
		answer2: "1927",
		answer3: "1954."
	},
	{
		question2: "The Great Gatsby was written by who?",
		answer1: "Ernest Hemingway",
		answer2: "F.Scott Fitzgerald",
		answer3: "Maya Angelou."
	},
	{
		question3: "The 1920s era are also known as what?",
		answer1: "roaring 20s",
		answer2: "prohibition era",
		answer3: "the decade of oh lala."
	},
console.log(questions)
];

$('#start-button').on('click', function(){
	for(let i = 0; i < questions.length;i++){
		var $question = $("<input type='radio' name='separate_name' value='someValue'>" + questions[i].question1 + "</input>")
		var $answers = $("<h4>" + questions[i].answer1 + "</h4>");
		$("#questions").append($question);
		$("#questions").append($answers);
		console.log(start-button);

		// <input type="radio" name="gender" value="male"> Male<br>
	}
});

$('#done-button').on('click', function(){
	// for(let i = 0; i < questions.length;i++){
		console.log(done-button);
	
// WRITE showScore function()	
	questionCount = answers.length;
	correct = 0;
	incorrect = 0;
	for (i=0; i<questionCount; i++) {
		if(useranswers[i] === answers [i])
			correct++;
		else
			incorrect++;
		}
	})
});

// TIMERS
$("#display").text("00:00");
// $("#display").text(converted);

setTimeOut(timeUp, 1000);
var limit = 1000;
var intervals = 0;
var totalTime = new Date ();
var startTime = new Date ();

 var stopwatch = {
	time:0,
 	reset: function () {
 		stopwatch.time = 0;
 		console.log(stopwatch);
 	},
 	start: function(){
 		if (!clockRunning) {
	 		intervalId = setInterval(stopwatch.count, 1000);
			clockRunning = true
 		}
 		console.log(clockRunning);
 	}
};


/* 
function run() {
	intervalId = setInterval(decrement, 1000);

 
	stop: function (){
 		//use clearInterval to stop the count here
 		if (distance < 0) {
    clearInterval(x);
    document.getElementById("display").innerHTML = "TIME'S UP BUDDY";
  } 1000
	



It says this function below is an unexpected identifier...WHYYYYYY
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
 	},
};

 		radio buttons html
		True
		<input type="radio" name="questions" value=""> </br>
		False
		<input type="radio" name="questions" value="">

*/