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
    correctAnswer: "c"
},
{
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Oriented Model",
    choiceC: "Desktop Ordered Mode",
    choiceD: "Digital Original Mapping",
    correctAnswer: "a"
},
{
    question: "What is used primarily to add styling to a web application?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "JavaScript",
    choiceD: "mySQL",
    correctAnswer: "b"
},
{
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"
},
{
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"
},
{
    question: "What does www stand for?",
    choiceA: "World Weather Watch",
    choiceB: "Wonderful World of Windows",
    choiceC: "World Wide Web",
    choiceD: "WorldWide Writers",
    correctAnswer: "c"
},
{
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"
},

];

// Additional variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;


// This function will loop through the object array containing the quiz questions to generate the questions and answers.
function generateQuizQuestion() {
    gameOverEl.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    btnA.innerHTML = currentQuestion.choiceA;
    btnB.innerHTML = currentQuestion.choiceB;
    btnC.innerHTML = currentQuestion.choiceC;
    btnD.innerHTML = currentQuestion.choiceD;
};

// This function will start the timer, hide the start button on the home page, and displays the first quiz question.
function startQuiz() {
    gameOverEl.style.display = "none";
    startQuizEl.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizBody.style.display = "block";
}
// This function will show the game over page screen that will display the user's score after completing the quiz or if the timer reaches zero
function showScore() {
    quizBody.style.display = "none"
    gameOverEl.style.display = "flex";
    clearInterval(timerInterval);
    highScoreInitials.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// This function will listen for a click on the submit button, once clicked, it will run the function highScore to save and stringify the array of high scores that were saved in localStorage
// This function will also add the newest user's initials and score into the array in localStorage
// This function will also run the function that will show the high scores of previous quiz takers
submitScoreBtn.addEventListener("click", function highScore() {


    if (highScoreInitials.value === "") {
        alert("Initials cannot be blank");
        return false;
    } else {
        var savedHighScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
        var currentUser = highScoreInitials.value.trim();
        var currentHighScore = {
            name: currentUser,
            score: score
        };

        gameOverEl.style.display = "none";
        highScoreContainer.style.display = "flex";
        highScoreEl.style.display = "block";
        gameOverBtn.style.display = "flex";

        savedHighScores.push(currentHighScore);
        localStorage.setItem("savedHighScores", JSON.stringify(savedHighScores));
        generateHighScores();

    }

});

// This function will clear the list of high scores and generate a new high score list from localStorage
function generateHighScores() {
    highScoreDisplayName.innerHTML = "";
    highScoreDisplayScore.innerHTML = "";
    var highScores = JSON.parse(localStorage.getItem("savedHighScores")) || [];
    for (i = 0; i < highScores.length; i++) {
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highScores[i].name;
        newScoreSpan.textContent = highScores[i].score;
        highScoreDisplayName.appendChild(newNameSpan);
        highScoreDisplayScore.appendChild(newScoreSpan);
    }
}

// This function will display the high scores page and hide all other elements on the page 
function showHighScore() {
    startQuizEl.style.display = "none"
    gameOverEl.style.display = "none";
    highScoreContainer.style.display = "flex";
    highScoreEl.style.display = "block";
    gameOverBtn.style.display = "flex";

    generateHighScores();
}

// This function will clear localStorage of all previous high scores and user initials from the high score board
function clearScore() {
    window.localStorage.clear();
    highScoreDisplayName.textContent = "";
    highScoreDisplayScore.textContent = "";
}

// This function will set all variables back to their original values and show the home page to allow user to play again or click high score button
function replayQuiz() {
    highScoreContainer.style.display = "none";
    gameOverEl.style.display = "none";
    startQuizEl.style.display = "flex";
    timeLeft = 76;
    score = 0;
    currentQuestionIndex = 0;
}

// This function will check the user's answer to each question
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;

    if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
        score++;
        alert("That Is Correct!");
        currentQuestionIndex++;
        generateQuizQuestion();
        // This will display to the user that the answer is correct
    } else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
        alert("That Is Incorrect.")
        currentQuestionIndex++;
        generateQuizQuestion();
        //This will display to the user that the answer is incorrect
    } else {
        showScore();
    }
}

// This button will begin the quiz for the user
startQuizBtn.addEventListener("click", startQuiz);