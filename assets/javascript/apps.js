$(document).ready(function(){
var image = document.getElementById("image");
var text ="<h1> Roaring '20s Basic Trivia</h1>";
var div1=

function loadQuestions(){
	var radioButton;
	document.getElementById("quiz").innerHTML="";
	console.log(radioButton);
	for(var i =0; i < quiz[currentQuestion]["choices"].length; i++){
		radioButton = document.createElement("input");
		radioButton.type = "radio";
		radioButton.name= "quiz"+currentQuestion;
		radioButton.id="choices"+ (i+1);
		if (radioAnswer[currentQuestion] === i)
		{
			radioButton.checked= true;
		}
	radioButton.value = quiz[currentQuestion]["choices"][i];
	}
} 
//console.log(loadQuestions); for some reason this gives me an error message in console

var quiz = [
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

];

$('#start-button').on('click', function(){
	for(let i = 0; i < quiz.length;i++){
		var question = $("<input type='radio' name='separate_name' value='someValue'>" + quiz[i] + "</input>")
		var answers = $("<h3>" + quiz[i] + "</h3>");
		$("#quiz").append($quiz);
		$("#quiz").append($answers);
		console.log(start-button);

		// <input type="radio" name="gender" value="male"> Male<br>
	}
});

$('#done-button').on('click', function(){
	for(let i = 0; i < quiz.length;i++){
	}
//		console.log(done-button);
	
// WRITE showScore function()
var answers= {
	"one": "a",
	"two": "b"
}
	quizCount = answers.length;
	correct = 0;
	incorrect = 0;
	for (i=0; i<quizCount; i++) {
		if(useranswers[i] === answers [i])
			correct++;
		else
			incorrect++;
		}
	})
});

//Timer
var count = 60, timer = setInterval(function () {
    $(".display").html(count--);
    if (count === 0) clearInterval(timer);
        }, 1000);

