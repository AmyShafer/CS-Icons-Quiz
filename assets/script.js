var start = document.getElementById("start");
//var outOfTime = document.getElementById("stop");

function countdownTimer() {
  var clock = document.getElementById('timer');
  var count = 60;
  var interval = setInterval(function(){
    clock.innerHTML = count;
    count--;
    if (count === 0){
      clearInterval(interval);
      clock.innerHTML = 'Time\'s Up!';
    }
  }, 1000);
}

function startQuiz() {
  countdownTimer();
  var points = localStorage.setItem("correct", 0);
  var instructionsVanish = document.getElementById("instructions");
  instructionsVanish.style.display = "none";
  var quizAppears = document.getElementById("cs-icons-quiz");
  quizAppears.style.display = "block";

  displayQuizQuestions(allQuestions, 0);
}

var allQuestions = [
    // Question One
    {
        question: "Fill in the Blank: _________ is known as the first computer programmer.",
        choices: ["a.) Albert Einstein", "b.) Albert Schweitzer", "c.) Arnold Schwarzenegger", "d.) Ada Lovelace"],
        correctAnswer: "d.) Ada Lovelace"
    },
    // Question Two
    {
        question: "Fill in the Blank: A plaque at a Alan Turning statue reads 'Father of ______, mathematician, logician, wartime codebreaker, victim of prejudice.\'",
        choices: ["a.) Cambridge Calculus", "b.) commie diets", "c.) computer science", "d.) company dress codes"],
        correctAnswer: "c.) computer science"
    },
    // Question Three
    {
        question: "Fill in the Blank: John Von Neumann wrote the 23 pages long ____ program for the EDVAC in ink.",
        choices: ["a.) sorting", "b.) reducing", "c.) mapping", "d.) 12-Step"],
        correctAnswer: "a.) sorting"
    },
    // Question Four
    {
        question: "Fill in the Blank: Margaret Hamilton is one of the three people credited for coining the term “______\”",
        choices: ["a.) software engineering", "b.) softcore corn", "c.) photographic memory", "d.) Semiconductor memory"],
        correctAnswer: "a.) software engineering"
    },
    // Question Five
    {
        question: "Which field of study did Evelyn Boyd Granville *not* work in.",
        choices: ["a.) celestial mechanics", "b.) trajectory computation", "c.) digital computer techniques", "d.) office management"],
        correctAnswer: "d.) office management"
    }
]

function displayQuizQuestions(questionArray, number) {
  var quizQuestions = document.getElementById("quiz-question");
  var currentQuestion = questionArray[number]["question"];
  quizQuestions.innerHTML = currentQuestion;
  
  multipleChoices(allQuestions, number);
}

function multipleChoices (questionArray, number) {
  var quizChoices = document.getElementById("multiple-choice");
  var correctAnswer = questionArray[number]["correctAnswer"];
  var answered = localStorage.setItem("questionNumber", number);
  quizChoices.innerHTML = choiceLi;

   // loop through the multiple choices
   for (var i = 0; i < 4; i++) {
    var currentOption = questionArray[number]["choices"][i];
    var choiceLi = document.createElement("li");
    choiceLi.addEventListener("click", function(event) {
      var userAnswer = event.target.innerHTML;
      checkAnswer(userAnswer, correctAnswer);
    });
      
    choiceLi.innerHTML = currentOption;  
    quizChoices.appendChild(choiceLi);
  }
}

function checkAnswer(actualAnswer, expectedAnswer) {
  var choices = document.getElementById("multiple-choice");
  var resultAppears = document.getElementById("result");
  var clock = document.getElementById('timer');
  var nextQuestion = parseInt(localStorage.getItem("questionNumber")) + 1;
  //var correctAnswer = localStorage.getItem();
  
  for (var i = 0; i < 5; i++) {
    if (actualAnswer === expectedAnswer) {
      resultAppears.innerHTML = "Correct!"
      resultAppears.style.color = "#00985C";
      resultAppears.style.display = "block";
    } else {
      resultAppears.innerHTML = "Incorrect!"
      console.log("Incorrect!");
      resultAppears.style.display = "block";
    }
    displayQuizQuestions(allQuestions, i); 
  }
  choices.style.display = "none";
  resultAppears.style.display = "none";
  scoreQuiz();
}

function scoreQuiz() {
  var revealScore = document.getElementById("cs-icons-quiz");
  var userScore = document.getElementById("quiz-question");
  var finalScore = document.getElementById("score");
  var remainingTime = document.getElementById('timer').innerHTML;

  finalScore.innerHTML = remainingTime;
  revealScore.appendChild(finalScore);
}

    
start.addEventListener("click", startQuiz);
//outOfTime.addEventListener("message", )
