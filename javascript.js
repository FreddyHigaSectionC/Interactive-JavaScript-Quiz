// Create a variable that contains all questions

const question = [
    {
        question: "What is the capital of Denmark?",
        answers: [
            { text: "Islamabad", correct: false },
            { text: "Moscow", correct: false },
            { text: "Copenhagen", correct: true },
            { text: "Lima", correct: false },
        ]
    },
    {
        question: "What is the capital of Papua New Guinea?",
        answers: [
            { text: "Port Moresby", correct: true },
            { text: "Luxembourg", correct: false },
            { text: "Hanoi", correct: false },
            { text: "San Marino", correct: false },
        ]
    },
    {
        question: "What is the capital of Finland?",
        answers: [
            { text: "Seoul", correct: false },
            { text: "Dhaka", correct: false },
            { text: "Nursultan", correct: false },
            { text: "Helsinki", correct: true },
        ]
    },
    {
        question: "What is the capital of Romania?",
        answers: [
            { text: "Basseterre", correct: false },
            { text: "Bucharest", correct: true },
            { text: "Monrovia", correct: false },
            { text: "Dili", correct: false },
        ]
    },
    {
        question: "What is the capital of Lesotho?",
        answers: [
            { text: "Maseru", correct: true },
            { text: "Dublin", correct: false },
            { text: "Yaren district", correct: false },
            { text: "Bujumbura", correct: false },
        ]
    },
    {
        question: "What is the capital of North Macedonia?",
        answers: [
            { text: "Skopje", correct: true },
            { text: "Lome", correct: false },
            { text: "Santiago", correct: false },
            { text: "Kingston", correct: false },
        ]
    },
    {
        question: "What is the capital of Azerbaijan?",
        answers: [
            { text: "Banjul", correct: false },
            { text: "Stockholm", correct: false },
            { text: "Baku", correct: true },
            { text: "Victoria", correct: false },
        ]
    },
    {
        question: "What is the capital of East Timor?",
        answers: [
            { text: "Panama City", correct: false },
            { text: "Rome", correct: false },
            { text: "Dili", correct: true },
            { text: "Kigali", correct: false },
        ]
    },
    {
        question: "What is the capital of Zimbabwe?",
        answers: [
            { text: "Bern", correct: false },
            { text: "Harare", correct: true },
            { text: "Zagreb", correct: false },
            { text: "Kinshasha", correct: false },
        ]
    },
    {
        question: "What is the capital of Tuvalu?",
        answers: [
            { text: "Tallinn", correct: false },
            { text: "Daker", correct: false },
            { text: "Havana", correct: false },
            { text: "Funafuti", correct: true },
        ]
    }
];

// Create variables for each id in the HTML

const login = document.getElementById("login");
const playNow = document.getElementById("playNow");
const container = document.getElementsByClassName("container");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const progressText = document.getElementById("progressText")
const progressBarFull = document.getElementById("progressBarFull");
const MAX_QUESTIONS = 10

document.getElementById("container").style.display = "none"
playNow.addEventListener("click", playQuiz);

// Create function for fake authentication

function playQuiz() {
    document.getElementById("login").style.display = "none";
    document.getElementById("container").style.display = "block"
    document.getElementById("playNow").disabled = true;
}

let currentQuestionIndex = 0;
let score = 0;

// Create function to start the quiz

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    progressBarFull.style.width = `${(currentQuestionIndex + 1 / MAX_QUESTIONS) * 100}%`
}

// Create function to show all questions

function showQuestion() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    progressText.innerHTML = `Question ${questionNo} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionNo / MAX_QUESTIONS) * 100}%`

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("Btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Create function to reset the quiz

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Create function to check if the question is correct or incorrect

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Create function to show score at the end of the quiz

function showScore() {
    resetState();
    questionElement.className = "result";
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Create a function so that the next button appears after each question

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();