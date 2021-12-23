function countdownTimer() {
    var count = 60;
    var interval = setInterval(function(){
      document.getElementById('timer').innerHTML=count;
      count--;
      if (count === 0){
        clearInterval(interval);
        document.getElementById('timer').innerHTML='Time\'s Up!';
      }
    }, 1000);
}

window.addEventListener("load", countdownTimer);

function quizQuestions() {
  var questionOne = {
    question: "Fill in the Blank: _____ was known as the first computer programmer.",
    choices: ["a.) Albert Einstein", "b.) Albert Schweitzer", "c.) Arnold Schwarzenegger", "d.) Ada Lovelace"],
    correctAnswer: 3
  }

  var questionTwo = {
    question: "Fill in the Blank: A plaque at a Alan Turning statue reads 'Father of ______, mathematician, logician, wartime codebreaker, victim of prejudice.'",
    choices: ["a.) Cambridge Calculus", "b.) commie diets", "c.) computer science", "d.) company dress codes"],
    correctAnswer: 2
  }

  var questionThree = {
    question: "Fill in the Blank: John Von Neumann wrote the 23 pages long ____ program for the EDVAC in ink.",
    choices: ["a.) sorting", "b.) reducing", "c.) mapping", "d.) 12-Step"],
    correctAnswer: 0
  }

  var questionFour = {
    question: "Fill in the Blank: Margaret Hamilton is one of the three people credited for coining the term “______”",
    choices: ["a.) software engineering", "b.) softcore corn", "c.) photographic memory", "d.) Semiconductor memory"],
    correctAnswer: 0
  }

  var questionFive = {
    question: "Which field of study did Evelyn Boyd Granville *not* work in.",
    choices: ["a.) celestial mechanics", "b.) trajectory computation", "c.) digital computer techniques", "d.) office management"],
    correctAnswer: 3
  }


}

function grader() {

}

function highScoreBoard() {

}