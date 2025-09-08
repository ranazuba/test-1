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
    { question: "1. What is the shortcut key for 'Copy' in MS Word?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + A", "Ctrl + C"], answer: "Ctrl + C" },
    { question: "2. What is the shortcut key for 'Paste' in MS Word?", options: ["Ctrl + C", "Ctrl + X", "Ctrl + Z", "Ctrl + V"], answer: "Ctrl + V" },
    { question: "3. What is the shortcut key for 'Cut' in MS Word?", options: ["Ctrl + C", "Ctrl + V", "Ctrl + Y", "Ctrl + X"], answer: "Ctrl + X" },
    { question: "4. What is the shortcut key for 'Undo' in MS Word?", options: ["Ctrl + Y", "Ctrl + S", "Ctrl + P", "Ctrl + Z"], answer: "Ctrl + Z" },
    { question: "5. What is the shortcut key for 'Save' in MS Word?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + Q", "Ctrl + S"], answer: "Ctrl + S" },
    { question: "6. What is the shortcut key for 'Print' in MS Word?", options: ["Ctrl + Q", "Ctrl + S", "Ctrl + R", "Ctrl + P"], answer: "Ctrl + P" },
    { question: "7. What would happen if all computers stopped working?", options: ["Life would be harder", "life will be easier", "Nothing would change", "Everything stop working"], answer: "Life would be harder" },
    { question: "8. What do you call a person who uses a Computer?", options: ["User", "Programmer", "Engineer", "Employee"], answer: "User" },
    { question: "9. What is the shortcut key for 'Italic' in MS Word?", options: ["Ctrl + B", "Ctrl + U", "Ctrl + V", "Ctrl + I"], answer: "Ctrl + I" },
    { question: "10. What is the shortcut key for 'Underline' in MS Word?", options: ["Ctrl + B", "Ctrl + I", "Ctrl + N", "Ctrl + U"], answer: "Ctrl + U" },
    { question: "11. What is the shortcut key for 'Find' in MS Word?", options: ["Ctrl + H", "Ctrl + G", "Ctrl + E", "Ctrl + F"], answer: "Ctrl + F" },
    { question: "12. What is the shortcut key for 'Replace' in MS Word?", options: ["Ctrl + F", "Ctrl + Z", "Ctrl + P", "Ctrl + H"], answer: "Ctrl + H" },
    { question: "13. What is the shortcut key for 'New Document' in MS Word?", options: ["Ctrl + O", "Ctrl + S", "Ctrl + D", "Ctrl + N"], answer: "Ctrl + N" },
    { question: "14. What is the shortcut key for 'Open Document' in MS Word?", options: ["Ctrl + N", "Ctrl + P", "Ctrl + R", "Ctrl + O"], answer: "Ctrl + O" },
    { question: "15. What is the shortcut key for 'Redo' in MS Word?", options: ["Ctrl + Z", "Ctrl + S", "Ctrl + Q", "Ctrl + Y"], answer: "Ctrl + Y" },
    { question: "16. What is the shortcut key for 'Increase Font Size' in MS Word?", options: ["Ctrl + {", "Ctrl + }", "Ctrl + <", "Ctrl + >"], answer: "Ctrl + }" },
    { question: "17. What is the shortcut key for 'Center Align' in MS Word?", options: ["Ctrl + L", "Ctrl + R", "Ctrl + T", "Ctrl + E"], answer: "Ctrl + E" },
    { question: "18. Ms Word is used for?", options: ["Creating Document", "Creating Image", "Creating Information", "None of These"], answer: "Creating Document" },
    { question: "19. What is the shortcut key for 'Left Align' in MS Word?", options: ["Ctrl + R", "Ctrl + E", "Ctrl + J", "Ctrl + L"], answer: "Ctrl + L" },
    { question: "20. What is the shortcut key for 'EndNote' in MS Word?", options: ["Ctrl + Alt + F", "Ctrl + F", "Ctrl + Alt + D", "Ctrl + D"], answer: "Ctrl + Alt + D" },
    { question: "21. What is the shortcut key for 'Create a bullet list' in MS Word?", options: ["Ctrl + L", "Ctrl + B", "Ctrl + R", "Ctrl + Shift + L"], answer: "Ctrl + Shift + L" },
    { question: "22. What is the shortcut key for 'Close Word File ?", options: ["Alt + F4", "Ctrl + f4", "Ctrl + W", "Ctrl + Shift + C"], answer: "Ctrl + W" },
    { question: "23. What is the shortcut key for 'Foot Note' in MS Word?", options: ["Ctrl + Shift + Enter", "Ctrl + B", "Ctrl + U", "Ctrl + Alt + F"], answer: "Ctrl + Alt + F" },
    { question: "24. What is the shortcut key for 'SuperScript' in MS Word?", options: ["Ctrl + Shift++", "Ctrl ++", "Ctrl + Shift + -", "Ctl+Alt ++"], answer: "Ctrl + Shift++" },
    { question: "25. Blue line in Ms Word is?", options: ["Common Mistake", "Grammer Mistake", "Spelling Mistake", "Natural Mistake"], answer: "Common Mistake" },
    { question: "26. What is the Extension Of Ms Word ?", options: [".doxc", ".docix", ".dcox", ".docx"], answer: ".docx" },
    { question: "27. In Which Tab Water Marks is found?", options: ["Insert", "Design", "Layout", "Draw"], answer: "Design" },
    { question: "28. Where is 'Ruler' Option is Found?", options: ["Review", "View", "Insert", "Reference"], answer: "View" },
    { question: "29. Total Pages of Your Ms Word Notes?", options: ["30", "31", "32", "33"], answer: "32" },
    { question: "30. Can Computer Think Like a Humman?", options: ["yes", "No", "Maybe", "both yes and No"], answer: "No" }
];
// Shuffle options
function shuffleOptions(questions) {
    questions.forEach(question => {
        const shuffled = question.options.sort(() => Math.random() - 0.5);
        if (!shuffled.includes(question.answer)) shuffled.push(question.answer);
        question.options = shuffled.sort(() => Math.random() - 0.5);
    });
}
shuffleOptions(questions);

// Variables
let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;
let timerInterval;
let timeRemaining = 600;

// Show Question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    optionSelected = false;

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
    if (optionSelected) return;

    const question = questions[currentQuestionIndex];
    question.selectedOption = selectedOption;
    optionSelected = true;

    Array.from(optionsContainer.children).forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
        if (opt.textContent === question.answer) {
            opt.classList.add('correct');
        } else {
            opt.classList.add('incorrect');
        }
    });

    if (selectedOption === question.answer) score++;

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
        startTimer();
    } else {
        alert('Please enter your name!');
    }
});

// Restart
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
    nameInput.value = '';
    clearInterval(timerInterval);
    document.getElementById('timer').textContent = 'Time Remaining: 10:00';
});

// Timer
function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

// Stop Timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Show Result
function showResult() {
    stopTimer();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    resultScreen.innerHTML = '';

    const name = nameInput.value;
    const heading = document.createElement('h2');
    heading.textContent = `${name}, your score is ${score} out of ${questions.length}`;
    heading.style.marginBottom = '20px';
    resultScreen.appendChild(heading);

    const attemptsList = document.createElement('ul');
    attemptsList.classList.add('attempts-list');

    questions.forEach((question, index) => {
        const attemptItem = document.createElement('li');
        attemptItem.classList.add('attempt-item');
        const isCorrect = question.selectedOption === question.answer;

        attemptItem.innerHTML = `
            <strong>Q${index + 1}: ${question.question}</strong><br>
            <span class="${isCorrect ? 'correct' : 'incorrect'}">
                Your Answer: ${question.selectedOption || 'Not Answered'}<br>
                ${!isCorrect ? `Correct Answer: ${question.answer}` : ''}
            </span>
        `;
        attemptsList.appendChild(attemptItem);
    });

    resultScreen.appendChild(attemptsList);

    const downloadImageButton = document.createElement('button');
    downloadImageButton.textContent = "Download Result";
    downloadImageButton.onclick = downloadResultAsImage;
    downloadImageButton.classList.add('download-btn');
    resultScreen.appendChild(downloadImageButton);
}

// Download result as image
function downloadResultAsImage() {
    const resultElement = document.getElementById('result-screen');
    html2canvas(resultElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${nameInput.value}_quiz_result.png`;
        link.click();
    });
}

// Optional: Uncomment if you want to redirect to theory.html
// function goToTheory() {
//     window.location.href = "theory.html";
// }
