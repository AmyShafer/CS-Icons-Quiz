var start = document.getElementById("start");

function countdownTimer() {
    var count = 60;
    var interval = setInterval(function(){
      document.getElementById('timer').innerHTML = count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('timer').innerHTML = 'Time\'s Up!';
      }
    }, 1000);
}

function startQuiz() {
  countdownTimer();
  var instructionsVanish = document.getElementById("instructions");
  instructionsVanish.style.display = "none";
  var quizAppears = document.getElementById("cs-icons-quiz");
  quizAppears.style.display = "block";

  displayQuizQuestions(allQuestions);
}

var allQuestions = [
    // Question One
    {
        question: "Fill in the Blank: _________ is known as the first computer programmer.",
        choices: ["a.) Albert Einstein", "b.) Albert Schweitzer", "c.) Arnold Schwarzenegger", "d.) Ada Lovelace"],
        correctAnswer: 3
    },
    // Question Two
    {
        question: "Fill in the Blank: A plaque at a Alan Turning statue reads 'Father of ______, mathematician, logician, wartime codebreaker, victim of prejudice.\'",
        choices: ["a.) Cambridge Calculus", "b.) commie diets", "c.) computer science", "d.) company dress codes"],
        correctAnswer: 2
    },
    // Question Three
    {
        question: "Fill in the Blank: John Von Neumann wrote the 23 pages long ____ program for the EDVAC in ink.",
        choices: ["a.) sorting", "b.) reducing", "c.) mapping", "d.) 12-Step"],
        correctAnswer: 0
    },
    // Question Four
    {
        question: "Fill in the Blank: Margaret Hamilton is one of the three people credited for coining the term “______\”",
        choices: ["a.) software engineering", "b.) softcore corn", "c.) photographic memory", "d.) Semiconductor memory"],
        correctAnswer: 0
    },
    // Question Five
    {
        question: "Which field of study did Evelyn Boyd Granville *not* work in.",
        choices: ["a.) celestial mechanics", "b.) trajectory computation", "c.) digital computer techniques", "d.) office management"],
        correctAnswer: 3
    }
]

function displayQuizQuestions(questionArray) {
  var quizQuestions = document.getElementById("quiz-question");
  var quizChoices = document.getElementById("multiple-choice");

  for (var i = 0; i < questionArray.length; i++) {
    var currentQuestion = questionArray[i]["question"];
    quizQuestions.innerHTML = currentQuestion;
    // loop through the multiple choices
    for (var j = 0; j < questionArray[i]["choices"][j].length; j++) {
      var currentOption = questionArray[i]["choices"][j];
      var choiceLi = document.createElement("li");
      choiceLi.innerHTML = currentOption;  
      quizChoices.appendChild(choiceLi);
    }
     
  }
}

    
start.addEventListener("click", startQuiz);
