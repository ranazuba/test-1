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
    { question: "What is the shortcut key for 'Copy' in MS Word?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + A", "Ctrl + C"], answer: "Ctrl + C" },
    { question: "What is the shortcut key for 'Paste' in MS Word?", options: ["Ctrl + C", "Ctrl + X", "Ctrl + Z", "Ctrl + V"], answer: "Ctrl + V" },
    { question: "What is the shortcut key for 'Cut' in MS Word?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Y", "Ctrl + X"], answer: "Ctrl + X" },
    { question: "What is the shortcut key for 'Undo' in MS Word?", options: ["Ctrl + Y", "Ctrl + S", "Ctrl + P", "Ctrl + Z"], answer: "Ctrl + Z" },
    { question: "What is the shortcut key for 'Save' in MS Word?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + Q", "Ctrl + S"], answer: "Ctrl + S" },
    { question: "What is the shortcut key for 'Print' in MS Word?", options: ["Ctrl + Q", "Ctrl + S", "Ctrl + R", "Ctrl + P"], answer: "Ctrl + P" },
    { question: "What is the shortcut key for 'Select All' in MS Word?", options: ["Ctrl + C", "Ctrl + D", "Ctrl + F", "Ctrl + A"], answer: "Ctrl + A" },
    { question: "What is the shortcut key for 'Bold' in MS Word?", options: ["Ctrl + I", "Ctrl + U", "Ctrl + H", "Ctrl + B"], answer: "Ctrl + B" },
    { question: "What is the shortcut key for 'Italic' in MS Word?", options: ["Ctrl + B", "Ctrl + U", "Ctrl + V", "Ctrl + I"], answer: "Ctrl + I" },
    { question: "What is the shortcut key for 'Underline' in MS Word?", options: ["Ctrl + B", "Ctrl + I", "Ctrl + N", "Ctrl + U"], answer: "Ctrl + U" },
    { question: "What is the shortcut key for 'Find' in MS Word?", options: ["Ctrl + H", "Ctrl + G", "Ctrl + E", "Ctrl + F"], answer: "Ctrl + F" },
    { question: "What is the shortcut key for 'Replace' in MS Word?", options: ["Ctrl + F", "Ctrl + Z", "Ctrl + P", "Ctrl + H"], answer: "Ctrl + H" },
    { question: "What is the shortcut key for 'New Document' in MS Word?", options: ["Ctrl + O", "Ctrl + S", "Ctrl + D", "Ctrl + N"], answer: "Ctrl + N" },
    { question: "What is the shortcut key for 'Open Document' in MS Word?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + R", "Ctrl + O"], answer: "Ctrl + O" },
    { question: "What is the shortcut key for 'Redo' in MS Word?", options: ["Ctrl + Z", "Ctrl + S", "Ctrl + Q", "Ctrl + Y"], answer: "Ctrl + Y" },
    { question: "What is the shortcut key for 'Insert Hyperlink' in MS Word?", options: ["Ctrl + J", "Ctrl + L", "Ctrl + M", "Ctrl + K"], answer: "Ctrl + K" },
    { question: "What is the shortcut key for 'Center Align' in MS Word?", options: ["Ctrl + L", "Ctrl + R", "Ctrl + T", "Ctrl + E"], answer: "Ctrl + E" },
    { question: "What is the shortcut key for 'Right Align' in MS Word?", options: ["Ctrl + E", "Ctrl + L", "Ctrl + J", "Ctrl + R"], answer: "Ctrl + R" },
    { question: "What is the shortcut key for 'Left Align' in MS Word?", options: ["Ctrl + R", "Ctrl + E", "Ctrl + J", "Ctrl + L"], answer: "Ctrl + L" },
    { question: "What is the shortcut key for 'Strikethrough' in MS Word?", options: ["Ctrl + T", "Ctrl + K", "Ctrl + M", "Ctrl + D"], answer: "Ctrl + D" },
    { question: "What is the shortcut key for 'Create a bullet list' in MS Word?", options: ["Ctrl + L", "Ctrl + B", "Ctrl + R", "Ctrl + Shift + L"], answer: "Ctrl + Shift + L" },
    { question: "What is the shortcut key for 'Create a numbered list' in MS Word?", options: ["Ctrl + 1", "Ctrl + 2", "Ctrl + 3", "Ctrl + Shift + N"], answer: "Ctrl + Shift + N" },
    { question: "What is the shortcut key for 'Foot Note' in MS Word?", options: ["Ctrl + Shift + Enter", "Ctrl + B", "Ctrl + U", "Ctrl + Alt + F"], answer: "Ctrl + Alt + F" },
    { question: "What is the shortcut key for 'Zoom In' in MS Word?", options: ["Ctrl + -", "Ctrl + 0", "Ctrl + Shift + +", "Ctrl + +"], answer: "Ctrl + +" },
    { question: "What is the shortcut key for 'Zoom Out' in MS Word?", options: ["Ctrl + +", "Ctrl + 0", "Ctrl + Shift + -", "Ctrl + -"], answer: "Ctrl + -" }
];

// Function to shuffle options for each question
function shuffleOptions(questions) {
    questions.forEach(question => {
        const { options, answer } = question;
        // Shuffle the options
        const shuffledOptions = options.sort(() => Math.random() - 0.5);
        // Ensure the correct answer is included
        if (!shuffledOptions.includes(answer)) {
            shuffledOptions.push(answer); // Add the answer if not present
        }
        // Shuffle again to mix it up
        question.options = shuffledOptions.sort(() => Math.random() - 0.5);
    });
}

// Shuffle the options
shuffleOptions(questions);

// Output the questions to verify the options are randomized
console.log(questions);


// Theory Questions Array
const theoryQuestions = [
    "Define the basic functions of a computer.",
    "Explain the differences between input and output devices.",
    "Describe the role of the CPU in a computer.",
    "What are the main types of computer memory?",
    "Explain the purpose of an operating system.",
    "What is the importance of computer networking?",
];
// Variables
let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;

// Start Quiz
startButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        score = 0;
        currentQuestionIndex = 0;
        optionSelected = false;
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
    optionSelected = false; // Reset selection state for each question

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(option, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    nextButton.style.display = 'none';
}

// Select Option
function selectOption(selectedOption, optionDiv) {
    if (optionSelected) return; // Prevent further selections

    const question = questions[currentQuestionIndex];
    const correctOption = question.answer;
    optionSelected = true; // Mark that an option has been selected

    // Mark options as correct or incorrect
    for (let option of optionsContainer.children) {
        option.classList.remove('correct', 'incorrect');
        if (option.textContent === correctOption) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
    }

    // Update score only if the selected option is correct
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
