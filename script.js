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
    { question: "1. What is the file extension of MS Excel?", options: [".xlsx", ".xlsd", ".docx", ".pptx"], answer: ".xlsx" },
    { question: "2. What is the shortcut key to insert a new sheet in Excel?", options: ["Ctrl + T", "Shift + F10", "Ctrl + N", "Shift + F11"], answer: "Shift + F11" },
    { question: "3. What is the total number of rows in the latest version of Excel?", options: ["65536", "16384", "1000000", "1048576"], answer: "1048576" },
    { question: "4. What is the total number of columns in the latest version of Excel?", options: ["16384", "1048576", "256", "1024"], answer: "16384" },
    { question: "5. What is the shortcut key to go to the first row/column?", options: ["Ctrl + Up", "Ctrl + Home", "Ctrl + Left", "Ctrl + Down"], answer: "Ctrl + Up" },
    { question: "6. What key is used to edit a cell?", options: ["F2", "Ctrl + E", "Ctrl + Enter", "Alt + E"], answer: "F2" },
    { question: "7. What is the shortcut to enter the current date in Excel?", options: ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + ;", "Shift + ;"], answer: "Ctrl + ;" },
    { question: "8. What is the shortcut for selecting the entire row?", options: ["Ctrl + Space", "Alt + R", "Shift + Space", "Ctrl + A"], answer: "Shift + Space" },
    { question: "9. What is the shortcut for selecting the entire column?", options: ["Shift + C", "Ctrl + Space", "Ctrl + L", "Alt + C"], answer: "Ctrl + Space" },
    { question: "10. What is the shortcut for hiding a column?", options: ["Ctrl + Shift + )", "Ctrl + H", "Ctrl + 0", "Ctrl + )"], answer: "Ctrl + )" },
    { question: "11. What is the shortcut for showing hidden rows?", options: ["Ctrl + Shift + 9", "Alt + R", "Ctrl + (", "Ctrl + Shift + 0"], answer: "Ctrl + Shift + 9" },
    { question: "12. Which formula is used to calculate percentage in Excel?", options: ["=Sum(M/N*100)", "=M+N*100", "=M/N", "=Sum(M,N)*100"], answer: "=Sum(M/N*100)" },
    { question: "13. What function is used to remove extra spaces?", options: ["=Trim()", "=Clear()", "=DelSpace()", "=Remove()"], answer: "=Trim()" },
    { question: "14. What formula assigns a grade of 'A+' if a student scores above 80%?", options: ["=IF(P3>=80,\"A+\")", "=IF(P3>=80,\"A+\",\"B\")", "=IF(P3>80,\"A+\")", "=IF(P3>=80,\"A\")"], answer: "=IF(P3>=80,\"A+\")" },
    { question: "15. What function returns the middle part of a string?", options: ["=MID()", "=MIDPART()", "=LEFT()", "=RIGHT()"], answer: "=MID()" },
    { question: "16. Which function counts cells that meet a condition?", options: ["=MatchIf()", "=SumIf()", "=CountIf()", "=IfCount()"], answer: "=CountIf()" },
    { question: "17. What formula counts non-empty cells?", options: ["=Count()", "=CountA()", "=CountBlank()", "=CountAll()"], answer: "=CountA()" },
    { question: "18. What formula shows only the integer part of a number?", options: ["=Int()", "=Turnc()", "=Round()", "=Trunc()"], answer: "=Int()" },
    { question: "19. What function joins values from two cells with a dash?", options: ["=Concatenate(A2,\"-\",B2)", "=Join(A2,B2)", "=Merge()", "=Concat(A2-B2)"], answer: "=Concatenate(A2,\"-\",B2)" },
    { question: "20. What formula converts all letters in a string to uppercase?", options: ["=Upper()", "=Caps()", "=ToUpper()", "=UCase()"], answer: "=Upper()" },
    { question: "21. What is the shortcut for 'Find' in Excel?", options: ["Ctrl + S", "Ctrl + G", "Ctrl + H", "Ctrl + F"], answer: "Ctrl + F" },
    { question: "22. What is the shortcut for 'Replace' in Excel?", options: ["Ctrl + F", "Ctrl + V", "Ctrl + H", "Ctrl + G"], answer: "Ctrl + H" },
    { question: "23. What shortcut key is used to apply filter?", options: ["Ctrl + Shift + F", "Ctrl + Shift + L", "Alt + D + F + F", "Ctrl + Alt + F"], answer: "Ctrl + Shift + L" },
    { question: "24. What shortcut fills the right cell with data from the left?", options: ["Ctrl + F", "Ctrl + L", "Ctrl + D", "Ctrl + R"], answer: "Ctrl + R" },
    { question: "25. What is the shortcut to wrap text in Excel?", options: ["Alt + Enter", "Ctrl + W", "Ctrl + Enter", "Shift + Enter"], answer: "Alt + Enter" },
    { question: "26. Which function gives the most frequently occurring value?", options: ["=Mean()", "=Mod()", "=Mode()", "=Median()"], answer: "=Mode()" },
    { question: "27. What function is used to calculate power in Excel?", options: ["=Exponent()", "=Raise()", "=Power()", "=Pow()"], answer: "=Power()" },
    { question: "28. What function checks if two values are exactly the same?", options: ["=IsEqual()", "=Match()", "=Compare()", "=Exact()"], answer: "=Exact()" },
    { question: "29. What is the path to apply conditional formatting?", options: ["Home > Conditional Formatting", "Insert > Rules > Condition", "Data > Conditional Formatting", "Home > Format > Cell"], answer: "Home > Conditional Formatting" },
    { question: "30. What function is used to lookup a value in a table?", options: ["=HLOOKUP()", "=INDEX()", "=SEARCH()", "=VLOOKUP()"], answer: "=VLOOKUP()" }
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
