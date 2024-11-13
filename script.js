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
    { question: "1. What is the shortcut key for 'Select All' in MS Word?", options: ["Ctrl + C", "Ctrl + A", "Ctrl + X", "Ctrl + V"], answer: "Ctrl + A" },
    { question: "2. What is the shortcut key for 'Bold' in MS Word?", options: ["Ctrl + U", "Ctrl + B", "Ctrl + I", "Ctrl + Z"], answer: "Ctrl + B" },
    { question: "3. Which shortcut is used to 'Open' a file?", options: ["Ctrl + F", "Ctrl + O", "Ctrl + N", "Ctrl + P"], answer: "Ctrl + O" },
    { question: "4. How do you create a 'New Document' in MS Word?", options: ["Ctrl + N", "Ctrl + D", "Ctrl + W", "Ctrl + F"], answer: "Ctrl + N" },
    { question: "5. Which shortcut key is used to 'Undo'?", options: ["Ctrl + U", "Ctrl + Y", "Ctrl + Z", "Ctrl + I"], answer: "Ctrl + Z" },
    { question: "6. How do you 'Underline' selected text in MS Word?", options: ["Ctrl + U", "Ctrl + I", "Ctrl + B", "Ctrl + L"], answer: "Ctrl + U" },
    { question: "7. To 'Print' a document, you use:", options: ["Ctrl + Q", "Ctrl + S", "Ctrl + P", "Ctrl + N"], answer: "Ctrl + P" },
    { question: "8. What is the shortcut for 'Find' in MS Word?", options: ["Ctrl + H", "Ctrl + F", "Ctrl + G", "Ctrl + Z"], answer: "Ctrl + F" },
    { question: "9. How do you 'Replace' text in MS Word?", options: ["Ctrl + R", "Ctrl + H", "Ctrl + P", "Ctrl + Z"], answer: "Ctrl + H" },
    { question: "10. What is the shortcut for 'Paste'?", options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + A"], answer: "Ctrl + V" },
    { question: "11. How do you 'Copy' text in MS Word?", options: ["Ctrl + C", "Ctrl + P", "Ctrl + V", "Ctrl + X"], answer: "Ctrl + C" },
    { question: "12. Which shortcut is used for 'Italic' text?", options: ["Ctrl + I", "Ctrl + L", "Ctrl + B", "Ctrl + E"], answer: "Ctrl + I" },
    { question: "13. How do you 'Center Align' text?", options: ["Ctrl + J", "Ctrl + C", "Ctrl + E", "Ctrl + R"], answer: "Ctrl + E" },
    { question: "14. To 'Right Align' text, you use:", options: ["Ctrl + J", "Ctrl + L", "Ctrl + R", "Ctrl + C"], answer: "Ctrl + R" },
    { question: "15. What is the shortcut to 'Increase Font Size'?", options: ["Ctrl + }", "Ctrl + T", "Ctrl + >", "Ctrl + {"], answer: "Ctrl + }" },
    { question: "16. You want to share a document with a group, but you don't want them to make any changes. Which option should you choose?", options: ["Save As", "Track Changes", "Restrict Editing", "Print Layout"], answer: "Restrict Editing" },
    { question: "17. You’re preparing a document with several sections and want to add a title at the top of each page. Which feature should you use?", options: ["Table of Contents", "Header", "Footer", "Bookmark"], answer: "Header" },
    { question: "18. What is the shortcut key to 'Open Thesaurus'?", options: ["Shift + F7", "Ctrl + F7", "Alt + T", "Ctrl + Alt + F"], answer: "Shift + F7" },
    { question: "19. Which shortcut opens the 'Save As' dialog?", options: ["F12", "Ctrl + S", "Alt + F4", "Shift + S"], answer: "F12" },
    { question: "20. How do you create a bullet list in MS Word?", options: ["Ctrl + Shift + L", "Ctrl + L", "Ctrl + B", "Ctrl + U"], answer: "Ctrl + Shift + L" },
    { question: "21. You need to send a document with confidential information to a colleague. How can you ensure that only people with a password can open it?", options: ["Save as PDF", "Use Track Changes", "Encrypt with Password", "Turn on Read Mode"], answer: "Encrypt with Password" },
    { question: "22. How do you insert a hyperlink in MS Word?", options: ["Ctrl + L", "Ctrl + K", "Ctrl + T", "Ctrl + E"], answer: "Ctrl + K" },
    { question: "23. Which command is used to 'Redo' an action?", options: ["Ctrl + Y", "Ctrl + X", "Ctrl + B", "Ctrl + Z"], answer: "Ctrl + Y" },
    { question: "24. What is the purpose of the 'Design' tab in MS Word?", options: ["Formatting text", "Adjusting layout", "Inserting tables", "Adding page styles"], answer: "Adding page styles" },
    { question: "25. What is the shortcut to 'Insert Footnote'?", options: ["Ctrl + Alt + F", "Ctrl + F", "Alt + Shift + F", "Ctrl + H"], answer: "Ctrl + Alt + F" },
    { question: "26. What does the shortcut 'Ctrl + Shift + +' do?", options: ["Makes text superscript", "Increases font size", "Creates a bullet list", "Saves the file"], answer: "Makes text superscript" },
    { question: "27. What is the shortcut for 'Close Document'?", options: ["Alt + F4", "Ctrl + W", "Ctrl + F4", "Ctrl + S"], answer: "Ctrl + W" },
    { question: "28. Ruler Ribbon is on which Tab?", options: ["Review", "view", "both a & b", "ruler"], answer: "view" },
    { question: "29. If a computer lost internet connection, which of the following would stop working?", options: ["Email", "MS Word", "Calculator", "This Pc"], answer: "Email" },
    { question: "30. When a file is deleted from a computer, where does it go initially?", options: ["To the Recycle Bin", "To the System Cache", "To a Temporary Folder", "To the Hard Drive"], answer: "To the Recycle Bin" }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let optionSelected = false;
let userAnswers = [];

// Start Quiz
startButton.addEventListener('click', () => {
    const name = nameInput.value;
    if (name) {
        startScreen.style.display = 'none';
        quizScreen.style.display = 'block';
        score = 0;
        currentQuestionIndex = 0;
        userAnswers = [];
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
    optionSelected = false;

    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.textContent = option;
        optionDiv.classList.add('option');
        optionDiv.addEventListener('click', () => selectOption(option, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    nextButton.style.display = 'none'; // Hide next button initially
}

// Select Option
function selectOption(selectedOption, optionDiv) {
    if (optionSelected) return; // Prevent further selections
    optionSelected = true;

    const question = questions[currentQuestionIndex];
    const correctAnswer = question.answer;

    if (selectedOption === correctAnswer) {
        score++;
        optionDiv.style.backgroundColor = 'green';
    } else {
        optionDiv.style.backgroundColor = 'red';
        [...optionsContainer.children].forEach(child => {
            if (child.textContent === correctAnswer) {
                child.style.backgroundColor = 'green';
            }
        });
    }

    userAnswers.push({ question: question.question, selectedOption, correctAnswer });
    nextButton.style.display = 'inline-block'; // Show next button after selection
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
    stopTimer();
    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    
    const name = nameInput.value;
    resultText.textContent = `${name}, your score is ${score} out of ${questions.length}.`;

    // Display Correct/Wrong answers for each question
    const answersDiv = document.createElement('div');
    
    // Style the results container
    answersDiv.style.marginTop = '20px';
    answersDiv.style.padding = '15px';
    answersDiv.style.backgroundColor = '#f8f9fa';
    answersDiv.style.borderRadius = '8px';
    answersDiv.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

    userAnswers.forEach(answer => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result-item');
        
        // Style individual result item
        resultDiv.style.padding = '10px';
        resultDiv.style.marginBottom = '15px';
        resultDiv.style.border = '1px solid #ddd';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.backgroundColor = '#fff';
        resultDiv.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        // Style question and answers
        resultDiv.innerHTML = `
            <strong style="font-size: 1.1rem; color: #2e3b4e;">${answer.question}</strong><br>
            Your answer: <span style="color:${answer.selectedOption === answer.correctAnswer ? 'green' : 'red'}; font-weight: bold;">${answer.selectedOption}</span><br>
            Correct answer: <span style="color:green; font-weight: bold;">${answer.correctAnswer}</span><br>
        `;

        answersDiv.appendChild(resultDiv);
    });

    resultScreen.appendChild(answersDiv);

    // Add download result as image button
    const downloadImageButton = document.createElement('button');
    downloadImageButton.textContent = "Download Result";
    downloadImageButton.style.marginTop = '20px';
    downloadImageButton.style.padding = '10px 20px';
    downloadImageButton.style.backgroundColor = '#007bff';
    downloadImageButton.style.color = '#fff';
    downloadImageButton.style.border = 'none';
    downloadImageButton.style.borderRadius = '5px';
    downloadImageButton.style.cursor = 'pointer';
    downloadImageButton.style.fontSize = '1rem';
    downloadImageButton.style.transition = 'background-color 0.3s ease';
    
    // Hover effect for the download button
    downloadImageButton.onmouseover = function() {
        downloadImageButton.style.backgroundColor = '#0056b3';
    };
    downloadImageButton.onmouseout = function() {
        downloadImageButton.style.backgroundColor = '#007bff';
    };

    downloadImageButton.onclick = downloadResultAsImage;
    resultScreen.appendChild(downloadImageButton);
}



// Timer
let timerInterval;
let timeRemaining;

function startTimer() {
    timeRemaining = 600; // Set to 10 minutes (600 seconds)
    timerInterval = setInterval(() => {
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

// Stop Timer
function stopTimer() {
    clearInterval(timerInterval);
}

// Download Result as Image
function downloadResultAsImage() {
    const resultElement = document.getElementById('result-screen');
    html2canvas(resultElement).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = `${nameInput.value}_quiz_result.png`;
        link.click();
    });
}

// Restart Quiz
restartButton.addEventListener('click', () => {
    resultScreen.style.display = 'none';
    startScreen.style.display = 'block';
});
