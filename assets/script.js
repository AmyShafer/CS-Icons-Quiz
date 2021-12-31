var start = document.getElementById("start");
//var outOfTime = document.getElementById("stop");
var highScorePage = document.getElementById("initialSubmit");

function countdownTimer(str) {
  var clock = document.getElementById('timer');
  var count = 60;
  var countdown = setInterval(function(){
    clock.innerHTML = count;
    if (str === "off") {
      //clearInterval(countdown);
      clock.innerHTML = "Winner!";
      count;
    } 
    if (count === 0) {
      clearInterval(countdown);
      clock.innerHTML = 'Time\'s Up!';
    } else {
      count--;
    }

  }, 1000);
}

function startQuiz() {
  countdownTimer();
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
  var clock = document.getElementById('timer');
  var nextQuestion = parseInt(localStorage.getItem("questionNumber")) + 1;
  
    if (actualAnswer === expectedAnswer) {
      resultAppears.innerHTML = "Correct!"
      resultAppears.style.color = "#00985C";
      resultAppears.style.display = "block";
    } else {
      resultAppears.innerHTML = "Incorrect!"
      resultAppears.style.color = "#98003C";
      resultAppears.style.display = "block";
    }
    displayQuizQuestions(allQuestions, nextQuestion); 
}

function scoreQuiz() {
  var noMoreQuestions = document.getElementById("cs-icons-quiz");
  var quizCompleted = document.getElementById("quiz-completed");
  var score = document.getElementById("score");
  var remainingTime = document.getElementById('timer').innerHTML;

  noMoreQuestions.style.display = "none"; 
  quizCompleted.style.display = "block";

  score.innerHTML = remainingTime;
}

function highScores() {
  var playerScore = document.getElementByTagName("span").value;
  var playerInitials = document.getElementById("highScore").value;
  var winnersList = document.getElementById("winners-list");
  var recordScore = localStorage.setItem("playerScore", playerScore);
  var recordPlayer = localStorage.setItem("playerInitials", playerInitials);
  var playerLi = "";

  playerLi.innerHTML = localStorage.getItem(recordScore), localStorage.getItem(ecordPlayer);  
  winnersList.appendChild(playerLi);
}
    
start.addEventListener("click", startQuiz);
//outOfTime.addEventListener("message", )
highScorePage.addEventListener("click", highScores);
