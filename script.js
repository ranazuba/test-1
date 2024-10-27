// Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const nameInput = document.getElementById('name-input');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const resultText = document.getElementById('result-text');
const restartButton = document.getElementById('restart-btn');

// Questions Array
const questions = [
    {
        question: "What is the shortcut key for 'Copy' in MS Word?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + A"],
        answer: "Ctrl + C"
    },
    {
        question: "What is the shortcut key for 'Paste' in MS Word?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"],
        answer: "Ctrl + V"
    },
    {
        question: "What is the shortcut key for 'Cut' in MS Word?",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Y"],
        answer: "Ctrl + X"
    },
    {
        question: "What is the shortcut key for 'Undo' in MS Word?",
        options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + S", "Ctrl + P"],
        answer: "Ctrl + Z"
    },
    {
        question: "What is the shortcut key for 'Save' in MS Word?",
        options: ["Ctrl + S", "Ctrl + N", "Ctrl + P", "Ctrl + Q"],
        answer: "Ctrl + S"
    },
    {
        question: "What is the shortcut key for 'Print' in MS Word?",
        options: ["Ctrl + P", "Ctrl + Q", "Ctrl + S", "Ctrl + R"],
        answer: "Ctrl + P"
    },
    {
        question: "What is the shortcut key for 'Select All' in MS Word?",
        options: ["Ctrl + A", "Ctrl + C", "Ctrl + D", "Ctrl + F"],
        answer: "Ctrl + A"
    },
    {
        question: "What is the shortcut key for 'Bold' in MS Word?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + H"],
        answer: "Ctrl + B"
    },
    {
        question: "What is the shortcut key for 'Italic' in MS Word?",
        options: ["Ctrl + I", "Ctrl + B", "Ctrl + U", "Ctrl + V"],
        answer: "Ctrl + I"
    },
    {
        question: "What is the shortcut key for 'Underline' in MS Word?",
        options: ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + N"],
        answer: "Ctrl + U"
    },
    {
        question: "What is the shortcut key for 'Find' in MS Word?",
        options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + E"],
        answer: "Ctrl + F"
    },
    {
        question: "What is the shortcut key for 'Replace' in MS Word?",
        options: ["Ctrl + H", "Ctrl + F", "Ctrl + Z", "Ctrl + P"],
        answer: "Ctrl + H"
    },
    {
        question: "What is the shortcut key for 'New Document' in MS Word?",
        options: ["Ctrl + N", "Ctrl + O", "Ctrl + S", "Ctrl + D"],
        answer: "Ctrl + N"
    },
    {
        question: "What is the shortcut key for 'Open Document' in MS Word?",
        options: ["Ctrl + O", "Ctrl + N", "Ctrl + P", "Ctrl + R"],
        answer: "Ctrl + O"
    },
    {
        question: "What is the shortcut key for 'Redo' in MS Word?",
        options: ["Ctrl + Y", "Ctrl + Z", "Ctrl + S", "Ctrl + Q"],
        answer: "Ctrl + Y"
    },
    {
        question: "What is the shortcut key for 'Insert Hyperlink' in MS Word?",
        options: ["Ctrl + K", "Ctrl + J", "Ctrl + L", "Ctrl + M"],
        answer: "Ctrl + K"
    },
    {
        question: "What is the shortcut key for 'Center Align' in MS Word?",
        options: ["Ctrl + E", "Ctrl + L", "Ctrl + R", "Ctrl + T"],
        answer: "Ctrl + E"
    },
    {
        question: "What is the shortcut key for 'Right Align' in MS Word?",
        options: ["Ctrl + R", "Ctrl + E", "Ctrl + L", "Ctrl + J"],
        answer: "Ctrl + R"
    },
    {
        question: "What is the shortcut key for 'Left Align' in MS Word?",
        options: ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J"],
        answer: "Ctrl + L"
    },
    {
        question: "What is the shortcut key for 'Strikethrough' in MS Word?",
        options: ["Ctrl + D", "Ctrl + T", "Ctrl + K", "Ctrl + M"],
        answer: "Ctrl + D"
    },
    {
        question: "What is the shortcut key for 'Create a bullet list' in MS Word?",
        options: ["Ctrl + Shift + L", "Ctrl + L", "Ctrl + B", "Ctrl + R"],
        answer: "Ctrl + Shift + L"
    },
    {
        question: "What is the shortcut key for 'Create a numbered list' in MS Word?",
        options: ["Ctrl + Shift + N", "Ctrl + 1", "Ctrl + 2", "Ctrl + 3"],
        answer: "Ctrl + Shift + N"
    },
    {
        question: "What is the shortcut key for 'Foot Note' in MS Word?",
        options: ["Ctrl+Alt+F", "Ctrl + Shift + Enter", "Ctrl + B", "Ctrl + U"],
        answer: "Ctrl + Enter"
    },
    {
        question: "What is the shortcut key for 'Zoom In' in MS Word?",
        options: ["Ctrl + +", "Ctrl + -", "Ctrl + 0", "Ctrl + Shift + +"],
        answer: "Ctrl + +"
    },
    {
        question: "What is the shortcut key for 'Zoom Out' in MS Word?",
        options: ["Ctrl + -", "Ctrl + +", "Ctrl + 0", "Ctrl + Shift + -"],
        answer: "Ctrl + -"
    }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;

// Start Quiz
startButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        score = 0;
        currentQuestionIndex = 0;
        showQuestion();
    } else {
        alert('Please enter your name!');
    }
});

// Show Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionDiv);
    });
}

// Select Option
function selectOption(selectedOption) {
    const question = questions[currentQuestionIndex];
    const correctOption = question.answer;

    const options = optionsContainer.children;

    for (let option of options) {
        option.classList.remove('correct', 'incorrect');
        if (option.textContent === correctOption) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption) {
            option.classList.add('incorrect');
        }
    }

    if (selectedOption === correctOption) {
        score++;
    }

    nextButton.style.display = 'block';
}

// Next Question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
});

// Show Result
function showResult() {
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    const name = nameInput.value;
    resultText.textContent = `${name}, your score is ${score} out of ${questions.length}.`;
}

// Restart Quiz
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    nameInput.value = '';
});
