// script.js

let currentQuestion = 0;
let score = 0;
const totalQuestions = 5; // Updated total number of questions

const questions = [
    {
        question: 'What is the correct syntax for creating a list in Python?',
        hint: 'Lists are enclosed in square brackets and items are separated by commas.',
        answer: 'list = [item1, item2, item3]'
    },
    {
        question: 'How do you define a variable in Python?',
        hint: 'You assign a value to a variable using the `=` operator.',
        answer: 'variable_name = value'
    },
    {
        question: 'How do you write a `for` loop in Python to iterate over a list?',
        hint: 'Use `for` followed by a variable name and `in`, then specify the list to iterate over.',
        answer: 'for item in list:'
    },
    {
        question: 'What is the output of `print(2**3)` in Python?',
        hint: 'This operator is used for exponentiation.',
        answer: '8'
    },
    {
        question: 'How do you handle exceptions in Python?',
        hint: 'Use `try` and `except` to catch and handle errors.',
        answer: 'try:\n    # code\nexcept Exception as e:\n    # handle exception'
    }
];

// DOM Elements
const questionText = document.getElementById("question");
const codeInput = document.getElementById("codeInput");
const message = document.getElementById("message");
const tracker = document.getElementById("tracker");
const scoreDisplay = document.getElementById("score");

document.getElementById("submitBtn").addEventListener("click", checkAnswer);
document.getElementById("hintBtn").addEventListener("click", showHint);
document.getElementById("nextQuestion").addEventListener("click", nextQuestion);
document.getElementById("backButton").addEventListener("click", prevQuestion);

function checkAnswer() {
    const userInput = codeInput.value.trim();
    const correctAnswer = questions[currentQuestion].answer;
    // Simple answer check (in a real application, you'd want a more robust checking method)
    if (userInput === correctAnswer) {
        message.textContent = "Correct!";
        message.style.color = "green";
        score += 10;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        message.textContent = "Incorrect. Try again!";
        message.style.color = "red";
    }
}

function showHint() {
    const hint = questions[currentQuestion].hint;
    message.textContent = hint;
    message.style.color = "blue";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        updateQuestion();
    } else {
        alert(`Quiz completed! Your final score is ${score}`);
        // You might want to reset or redirect here
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
    }
}

function updateQuestion() {
    questionText.textContent = `${currentQuestion + 1}. ${questions[currentQuestion].question}`;
    tracker.textContent = `Question: ${currentQuestion + 1}/${totalQuestions}`;
    codeInput.value = ""; // Clear previous input
}

