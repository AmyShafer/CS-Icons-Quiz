var start = document.getElementById("start");
var outOfTime = document.getElementById("out-of-time");
var highScorePage = document.getElementById("winners-list");
var clear = document.getElementById("clear");
var count = 60;

function countdownTimer(str) {
  var clock = document.getElementById('timer');
  var quizQuestions = document.getElementById("quiz-question");
  var quizChoices = document.getElementById("multiple-choice");
  var resultAppears = document.getElementById("result");
  var countdown = setInterval(function(){
    clock.innerHTML = count;
    // if the player wins  
    if (str === "off") {
      clock.innerHTML = "Winner!";
      count;
    } 
    // if the player runs out of time
    if (count === 0) {
      clearInterval(countdown);
      clock.innerHTML = 'Time\'s Up!';
      outOfTime.style.display = "block";
      quizQuestions.style.display = "none";
      quizChoices.style.display = "none";
      resultAppears.style.display = "none";
    } else {
      count--;
    }

  }, 1000);
}

function startQuiz() {
  countdownTimer("on");
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
        question: "Fill in the Blank: A plaque at a Alan Turing statue reads 'Father of ______, mathematician, logician, wartime codebreaker, victim of prejudice.\'",
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
  // edge case for the end of the quiz
  if (number > 4) {
    countdownTimer("off");
    scoreQuiz();
  }

  var quizQuestions = document.getElementById("quiz-question");
  var currentQuestion = questionArray[number]["question"];
  quizQuestions.innerHTML = currentQuestion;
  
  multipleChoices(allQuestions, number);
}

function multipleChoices (questionArray, number) {
  var quizChoices = document.getElementById("multiple-choice");
  var correctAnswer = questionArray[number]["correctAnswer"];
  var answered = localStorage.setItem("questionNumber", number);
  var choiceLi = "";
  quizChoices.innerHTML = choiceLi;

   // loop through the multiple choices
   for (var i = 0; i < 4; i++) {
    var currentOption = questionArray[number]["choices"][i];
    choiceLi = document.createElement("li");
    choiceLi.addEventListener("click", function(event) {
      var userAnswer = event.target.innerHTML;
      checkAnswer(userAnswer, correctAnswer);
    });
    
    choiceLi.innerHTML = currentOption;  
    quizChoices.appendChild(choiceLi);
  }
}

function checkAnswer(actualAnswer, expectedAnswer) {
  var resultAppears = document.getElementById("result");
  var nextQuestion = parseInt(localStorage.getItem("questionNumber")) + 1;
  
    if (actualAnswer === expectedAnswer) {
      resultAppears.innerHTML = "Correct!"
      resultAppears.style.color = "#00985C";
      resultAppears.style.display = "block";
    } else {
      resultAppears.innerHTML = "Incorrect!"
      count = count - 10;
      resultAppears.style.color = "#98003C";
      resultAppears.style.display = "block";
    }
    displayQuizQuestions(allQuestions, nextQuestion); 
}

function scoreQuiz() {
  var noMoreQuestions = document.getElementById("cs-icons-quiz");
  var quizCompleted = document.getElementById("quiz-completed");
  var score = document.getElementById("score");
  var player = document.getElementById("player");
  var remainingTime = document.getElementById('timer').innerHTML;
  localStorage.setItem("score", remainingTime);
  localStorage.setItem("player", player);

  noMoreQuestions.style.display = "none"; 
  quizCompleted.style.display = "block";

  score.innerHTML = remainingTime;
}

function highScores() {
  var winnersList = document.getElementById("winners-list");
  var recordScore = localStorage.getItem("score");
  var recordPlayer = localStorage.getItem("player");
  var playerLi = "";
  winnersList.innerHTML = playerLi;
  playerLi = document.createElement("li");

  //recordPlayer = recordPlayer.toUpperCase();

  playerLi.innerHTML = recordScore + " " + recordPlayer;
  winnersList.appendChild(playerLi);
}

function clearScores() {
  var players = document.querySelector("ol");
  localStorage.clear();

  players.style.display = "none";
}

if (start) {
  start.addEventListener("click", startQuiz);
}

if (highScorePage) {  
  highScorePage.onload = highScores();
}

if (clear) {
  clear.addEventListener("click", clearScores);
}
