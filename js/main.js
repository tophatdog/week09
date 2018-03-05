// my array of question and answers
var questions = [
	{
		question: "Are there 27 or 26 letters in the alphabet",
		answer: 26
	},
	{
		question: "How many colors in a rainbow",
		answer: 7
	},
	{
		question: "What is the color of pikachu?",
		answer: "yellow"
	},
	{
		question: "What is the biggest bone in the body?",
		answer: "femur"
	},
	{
		question: "what is the largest freshwater lake in the US ",
		answer: "Lake superior"
	},
	{
		question: "what does the term piano mean",
		answer: "to be played sofly"
	},
	{
		question: "What is sushi traditionally wrapped in?",
		answer: "seaweed"
	},

];


for(var i = 0; i < questions.length; i++) {
	var question = questions[i].question;
	var el = document.getElementById('question' + [i]);
	el.textContent = question;
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(var i = 0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var guess = document.getElementById('answer' + [i]).value;
		var questionSpot = document.getElementById('question' + [i]);

		if(answer == guess) {
			questionSpot.className = 'correct';
			correct++;
		} else {
			questionSpot.className = 'incorrect';
			incorrect++;
		};
	};

	// update correct and incorrect values
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
}
