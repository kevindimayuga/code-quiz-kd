// Variables for elements
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("final-score");
var gameOverEl = document.getElementById("game-over");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizBtn = document.getElementById("start-btn");
var startQuizEl = document.getElementById("home-page");
var highScoreContainer = document.getElementById("highScore-container");
var highScoreEl = document.getElementById("highScore-page");
var highScoreInitials = document.getElementById("initials");
var highScoreDisplayName = document.getElementById("highScore-initials");
var gameOverBtn = document.getElementById("gameOver-btns");
var submitScoreBtn = document.getElementById("submit-score");
var highScoreDisplayScore = document.getElementById("highScore-result");

// Variables for quiz buttons
var btnA = document.getElementById("a");
var btnB = document.getElementById("b");
var btnC = document.getElementById("c");
var btnD = document.getElementById("d");

// Quiz question object
var quizQuestions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "42",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"},
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Oriented Model",
    choiceC: "Desktop Ordered Mode",
    choiceD: "Digital Original Mapping",
    correctAnswer: "a"},
   {
    question: "What is used primarily to add styling to a web application?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "JavaScript",
    choiceD: "mySQL",
    correctAnswer: "b"},
    {
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    question: "What does www stand for?",
    choiceA: "World Weather Watch",
    choiceB: "Wonderful World of Windows",
    choiceC: "World Wide Web",
    choiceD: "WorldWide Writers",
    correctAnswer: "c"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},
        
    ];
