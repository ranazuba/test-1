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
    { "question": "1. What is the shortcut to Auto Save in InPage?", "options": ["Alt + F11", "Ctrl + S", "Ctrl + F11", "Alt + S"], "answer": "Alt + F11" },
    { "question": "2. What is the shortcut to select all in InPage?", "options": ["Ctrl + A", "Ctrl + Alt + A", "Alt + A", "Ctrl + Shift + A"], "answer": "Ctrl + A" },
    { "question": "3. What shortcut increases font size?", "options": ["Ctrl + F10", "Ctrl + +", "Ctrl + Shift + >", "Alt + F10"], "answer": "Ctrl + F10" },
    { "question": "4. What shortcut decreases font size?", "options": ["Ctrl + F9", "Alt + F9", "Ctrl + Shift + <", "Ctrl + -"], "answer": "Ctrl + F9" },
    { "question": "5. Which key increases word spacing?", "options": ["Ctrl + F5", "Alt + F5", "Ctrl + Shift + 5", "Ctrl + 5"], "answer": "Ctrl + F5" },
    { "question": "6. Which key decreases word spacing?", "options": ["Ctrl + F6", "Alt + F6", "Ctrl + Shift + F6", "Ctrl + Alt + 6"], "answer": "Ctrl + F6" },
    { "question": "7. Shortcut for increasing line spacing?", "options": ["Ctrl + Shift + F5", "Ctrl + F5", "Alt + Shift + F5", "Ctrl + Alt + F5"], "answer": "Ctrl + Shift + F5" },
    { "question": "8. Shortcut for decreasing line spacing?", "options": ["Ctrl + Shift + F6", "Ctrl + F6", "Alt + Shift + F6", "Ctrl + Alt + F6"], "answer": "Ctrl + Shift + F6" },
    { "question": "9. Move to the right in InPage?", "options": ["Ctrl + Alt + R", "Ctrl + R", "Alt + R", "Ctrl + Shift + R"], "answer": "Ctrl + Alt + R" },
    { "question": "10. Move to the left in InPage?", "options": ["Ctrl + Alt + L", "Ctrl + L", "Alt + L", "Ctrl + Shift + L"], "answer": "Ctrl + Alt + L" },
    { "question": "11. Move to center in InPage?", "options": ["Ctrl + Alt + C", "Ctrl + C", "Alt + C", "Ctrl + Shift + C"], "answer": "Ctrl + Alt + C" },
    { "question": "12. How to make text justified?", "options": ["Ctrl + Alt + J", "Ctrl + J", "Alt + J", "Ctrl + Shift + J"], "answer": "Ctrl + Alt + J" },
    { "question": "13. Move text up in InPage?", "options": ["Ctrl + F7", "Alt + F7", "Ctrl + Shift + F7", "Ctrl + 7"], "answer": "Ctrl + F7" },
    { "question": "14. Move text down?", "options": ["Ctrl + F8", "Alt + F8", "Ctrl + Shift + F8", "Ctrl + 8"], "answer": "Ctrl + F8" },
    { "question": "15. Shortcut for bold text?", "options": ["Ctrl + B", "Alt + B", "Ctrl + Shift + B", "Ctrl + Alt + B"], "answer": "Ctrl + B" },
    { "question": "16. Shortcut for italic text?", "options": ["Ctrl + I", "Alt + I", "Ctrl + Shift + I", "Ctrl + Alt + I"], "answer": "Ctrl + I" },
    { "question": "17. Skew text increase?", "options": ["Ctrl + Shift + F7", "Ctrl + F7", "Alt + F7", "Ctrl + Alt + F7"], "answer": "Ctrl + Shift + F7" },
    { "question": "18. Skew text decrease?", "options": ["Ctrl + Shift + F8", "Ctrl + F8", "Alt + F8", "Ctrl + Alt + F8"], "answer": "Ctrl + Shift + F8" },
    { "question": "19. Create new page?", "options": ["Alt + Insert", "Ctrl + N", "Shift + Insert", "Ctrl + Insert"], "answer": "Alt + Insert" },
    { "question": "20. Delete a page?", "options": ["Alt + Delete", "Ctrl + Delete", "Shift + Delete", "Ctrl + Alt + Delete"], "answer": "Alt + Delete" },
    { "question": "21. Shortcut to go to next page?", "options": ["Alt + Page Down", "Ctrl + Down", "Page Down", "Shift + Page Down"], "answer": "Alt + Page Down" },
    { "question": "22. Shortcut to go to previous page?", "options": ["Alt + Page Up", "Ctrl + Up", "Page Up", "Shift + Page Up"], "answer": "Alt + Page Up" },
    { "question": "23. Shortcut to go to first page?", "options": ["Alt + Home", "Ctrl + Home", "Home", "Shift + Home"], "answer": "Alt + Home" },
    { "question": "24. Shortcut to go to last page?", "options": ["Alt + End", "Ctrl + End", "End", "Shift + End"], "answer": "Alt + End" },
    { "question": "25. Group items in InPage?", "options": ["Ctrl + Alt + G", "Ctrl + G", "Alt + G", "Ctrl + Shift + G"], "answer": "Ctrl + Alt + G" },
    { "question": "26. Ungroup items?", "options": ["Ctrl + Alt + U", "Ctrl + U", "Alt + U", "Ctrl + Shift + U"], "answer": "Ctrl + Alt + U" },
    { "question": "27. Toggle typing language?", "options": ["Ctrl + Space", "Alt + Shift", "Ctrl + Shift + Space", "Alt + Space"], "answer": "Ctrl + Space" },
    { "question": "28. Export a text file?", "options": ["Ctrl + Alt + Y", "Ctrl + Y", "Alt + Y", "Ctrl + E"], "answer": "Ctrl + Alt + Y" },
    { "question": "29. Import content into InPage?", "options": ["Ctrl + Y", "Ctrl + I", "Alt + Y", "Ctrl + Alt + Y"], "answer": "Ctrl + Y" },
    { "question": "30. Open document format settings?", "options": ["Ctrl + F11", "Alt + F11", "Ctrl + Alt + F11", "Ctrl + Shift + F11"], "answer": "Ctrl + F11" }
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

function goToTheory() {
    window.location.href = "theory.html";
}

// Timer Variables
let timerInterval;
let timeRemaining = 600; // 10 minutes in seconds

// Function to start the timer
// Start a 10-minute timer
function startTimer() {
    let timeRemaining = 600; // Set to 10 minutes (600 seconds)
    const timerInterval = setInterval(() => {
        timeRemaining--;
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;

        // Update the timer display
        document.getElementById('timer').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Check if time has run out
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            showResult(); // Automatically show result when time is up
        }
    }, 1000);
}

// Stop the timer
function stopTimer(timerInterval) {
    clearInterval(timerInterval);
}


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
        startTimer(); // Start the timer when the quiz begins
    } else {
        alert('Please enter your name!');
    }
});

// Show Result
function showResult() {
    stopTimer(); // Stop the timer when showing the result
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
    stopTimer(); // Ensure timer is stopped before restarting
    document.getElementById('timer').textContent = 'Time Remaining: 15:00'; // Reset timer display
});






// Function to capture and download the result screen as an image
function downloadResultAsImage() {
    const resultElement = document.getElementById('result-screen');

    // Use html2canvas to capture the result screen as an image
    html2canvas(resultElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${nameInput.value}_quiz_result.png`;
        link.click();
    });
}

// Show Result (Updated with Download Image Button)
function showResult() {
    stopTimer();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    const name = nameInput.value;
    resultText.textContent = `${name}, your score is ${score} out of ${questions.length}.`;

    // Add download result as image button
    const downloadImageButton = document.createElement('button');
    downloadImageButton.textContent = "Download Result";
    downloadImageButton.onclick = downloadResultAsImage;
    resultScreen.appendChild(downloadImageButton);
}

window.addEventListener('load', () => {
    const savedTimer = localStorage.getItem(timerKey);
    if (savedTimer !== null) {
        timer = parseInt(savedTimer, 10);
    }
    document.getElementById('timer').innerText = `${timer} seconds remaining`;
    interval = setInterval(updateTimer, 1000);
});

document.addEventListener('visibilitychange', reloadIfTabSwitched);
