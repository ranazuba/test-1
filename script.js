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
  { "question": "1. What is the file extension of PowerPoint files?", "options": [".pptx", ".docx", ".xlsx", ".txt"], "answer": ".pptx" },
  { "question": "2. What shortcut creates a new slide in PowerPoint?", "options": ["Ctrl + M", "Ctrl + N", "Shift + M", "Ctrl + S"], "answer": "Ctrl + M" },
  { "question": "3. Which shortcut starts the slideshow from the beginning?", "options": ["F5", "Shift + F5", "Ctrl + S", "Alt + F5"], "answer": "F5" },
  { "question": "4. What shortcut deletes a slide in PowerPoint?", "options": ["Delete + Backspace", "Ctrl + D", "Alt + Delete", "Ctrl + Backspace"], "answer": "Delete + Backspace" },
  { "question": "5. What is the shortcut to increase font size?", "options": ["Ctrl + Shift + >", "Ctrl + >", "Shift + >", "Alt + >"], "answer": "Ctrl + Shift + >" },
  { "question": "6. What is the shortcut to decrease font size?", "options": ["Ctrl + Shift + <", "Alt + <", "Ctrl + <", "Shift + <"], "answer": "Ctrl + Shift + <" },
  { "question": "7. Which transition is commonly used in PowerPoint?", "options": ["Shred", "Zoom", "Slide", "Snap"], "answer": "Shred" },
  { "question": "8. Which key shows the current slide in full screen?", "options": ["Shift + F5", "F11", "F8", "Alt + F5"], "answer": "Shift + F5" },
  { "question": "9. What is the shortcut to go to the first slide?", "options": ["Ctrl + Home", "Home", "Alt + Home", "Shift + Home"], "answer": "Ctrl + Home" },
  { "question": "10. What shortcut returns to the last slide?", "options": ["Ctrl + End", "Alt + End", "Shift + End", "Ctrl + Down"], "answer": "Ctrl + End" },
  { "question": "11. How to preview the current slide?", "options": ["Shift + F5", "Alt + P", "Ctrl + F5", "F11"], "answer": "Shift + F5" },
  { "question": "12. What shortcut groups selected items?", "options": ["Ctrl + G", "Ctrl + Shift + G", "Alt + G", "Ctrl + Alt + G"], "answer": "Ctrl + G" },
  { "question": "13. What shortcut ungroups items?", "options": ["Ctrl + Shift + G", "Ctrl + U", "Alt + U", "Ctrl + G"], "answer": "Ctrl + Shift + G" },
  { "question": "14. Which key makes the screen black during a slideshow?", "options": ["B", "K", "Ctrl + B", "Alt + B"], "answer": "B" },
  { "question": "15. Which key makes the screen white during a slideshow?", "options": ["W", "Ctrl + W", "Alt + W", "Shift + W"], "answer": "W" },
  { "question": "16. What is the shortcut to erase pen drawings?", "options": ["E", "Ctrl + E", "Shift + E", "Alt + E"], "answer": "E" },
  { "question": "17. What shortcut turns off the pen tool?", "options": ["ESC", "Ctrl + ESC", "Alt + ESC", "F8"], "answer": "ESC" },
  { "question": "18. What shortcut changes pen to pointer?", "options": ["Ctrl + A", "Ctrl + P", "Alt + A", "Shift + A"], "answer": "Ctrl + A" },
  { "question": "19. What key restarts or pauses an automatic show?", "options": ["S", "P", "Shift + S", "Ctrl + S"], "answer": "S" },
  { "question": "20. How do you go to the previous slide during a show?", "options": ["P", "Ctrl + Left", "Page Up", "Backspace"], "answer": "P" },
  { "question": "21. What takes you to the first slide during a slideshow?", "options": ["1 + Enter", "Ctrl + Home", "Shift + 1", "Alt + 1"], "answer": "1 + Enter" },
  { "question": "22. What is a famous transition in PowerPoint?", "options": ["Vortex", "Zoom", "Push", "Cut"], "answer": "Vortex" },
  { "question": "23. What tool is used for slide background styling?", "options": ["Background Styles", "Fill Tool", "Format Brush", "Slide Master"], "answer": "Background Styles" },
  { "question": "24. Which shortcut formats superscript text?", "options": ["Ctrl + =", "Ctrl + +", "Alt + =", "Ctrl + Shift + ="], "answer": "Ctrl + =" },
  { "question": "25. Which shortcut formats subscript text?", "options": ["Ctrl + Shift + +", "Ctrl + +", "Alt + Shift + +", "Ctrl + Alt + Shift"], "answer": "Ctrl + Shift + +" },
  { "question": "26. What shows or hides the gridlines?", "options": ["Shift + F9", "Ctrl + G", "Alt + F9", "Ctrl + F9"], "answer": "Shift + F9" },
  { "question": "27. What key combination shows the design tab?", "options": ["Ctrl + D", "Alt + G", "Ctrl + T", "Alt + D"], "answer": "Alt + G" },
  { "question": "28. Which option adjusts timing in animations?", "options": ["Timing", "Speed", "Duration", "Delay"], "answer": "Timing" },
  { "question": "29. What is used to fill slide backgrounds?", "options": ["Fill Effect", "Background Color", "Gradient Tool", "Brush Tool"], "answer": "Fill Effect" },
  { "question": "30. What transition creates a sparkly effect?", "options": ["Glitter", "Shimmer", "Flash", "Fade"], "answer": "Glitter" }
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
